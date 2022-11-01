import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar/SearchBar';
import fetchImages from 'api';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import css from './App.module.css'


export default function App() {

  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');


  const handelSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
    if (!imageName) return;

    async function getImage() {
      try {
        setStatus('pending');
        const images = await fetchImages(imageName, page);

        setStatus('resolved');
        setImages(prevImage => [...prevImage, ...images])

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setStatus('rejected')
        return toast.error('uuupppss feels like we have some problems');
      }
    }
    getImage();
  }, [imageName, page]);

  const handleSelectedImage = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags)
  }

  const closeModal = () => {
    setLargeImageURL('')
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handelSubmit} />
      {images.length < 1 && (
        <h2 className={css.title}>
          There is no images! Want to load some pictures? Please type at SearchBar...
        </h2>
      )}

      <ImageGallery
        images={images}
        handleSelectedImage={handleSelectedImage}
      />
      {status === 'pending' && <Loader />}

      {images.length !== 0 && (
        <ButtonLoadMore onClick={handleLoadMore} />
      )}

      <Toaster />
      {largeImageURL && (
        <Modal
          onClose={closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </div>
  )
}
