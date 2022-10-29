import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, handleSelectedImage }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
        onClick={() => handleSelectedImage(largeImageURL, tags)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    handleSelectedImage: PropTypes.func.isRequired
};

export default ImageGalleryItem;