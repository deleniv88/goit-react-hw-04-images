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
  }

  handelSubmit= imageName => {
    this.setState({ imageName, page: 1, images: [] });
  }

  handleLoadMore = () => {
    this.setState(p => ({ page: p.page + 1 }));
  }

  async componentDidUpdate(_, prevState) {
    const { imageName, page } = this.state;

    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const images = await fetchImages(imageName, page);
               
        this.setState({
          status: 'resolved',
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
  }

  handleSelectedImage = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
  }

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  }

  render() {
    const { images, largeImageURL, tags, status } = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.handelSubmit}/>
        {images.length < 1 && (
          <h2 className={css.title}>
            There is no images! Want to load some pictures? Please type at SearchBar...
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
    )
  }
}

export default App;