import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar/SearchBar';
import fetchImages from 'api';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import css from './App.module.css'


export class App extends Component {
  state = {
    imageName: '',
    images: [],
    status: 'idle',
    page: 1,
    error: null,
    largeImageURL: '',
    tags: '',
  };

  // handleFormSubmit = imageName => {
  //   this.setState({ imageName, page: 1, images: [] });
  // };


  handleFormSubmit = e => {
    e.preventDefault();
    const formInput = e.target.elements.imageName.value;
    if (formInput !== this.state.imageName) {
      this.setState({
        page: 1,
        imageName: formInput,
        images: []
      })
    }
    e.target.reset();
  }

  handleLoadMore = () => {
    this.setState(p => ({ page: p.page + 1 }));
  };

  async componentDidUpdate(_, prevState) {
    const { imageName, page } = this.state;

    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const images = await fetchImages(imageName, page);
        this.setState({ status: 'resolved' });

        if (imageName.trim() === '') {
          return toast.error(`You didn't type anything`);
        }

        this.setState({
          images: [...this.state.images, ...images],
        });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
        return toast.error('uuupppss feels like we have some problems');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSelectedImage = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, largeImageURL, tags, status } = this.state;
    const title = 'There is no images! Want to load some pictures? Please type at SearchBar...';
    return (
      <div className={css.app}>
        <SearchBar onSearch={this.handleFormSubmit}/>
        {images.length < 1 && (
          <h2 className={css.title}>
            {title}
          </h2>
        )}

        <ImageGallery
          images={images}
          handleSelectedImage={this.handleSelectedImage}
        />
        {status === 'pending' && <Loader />}

        {images.length !== 0 && (
          <ButtonLoadMore onClick={this.handleLoadMore} />
        )}

        <Toaster />
        {largeImageURL && (
          <Modal
            onClose={this.closeModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </div>
    );
  }
}

export default App;