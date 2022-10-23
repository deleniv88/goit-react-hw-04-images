// import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = (props) => {
    return (
        <div >
            {props.images.map(({ id, largeImageURL }) => {
                return (
                    <div key={id}  style={{ marginBottom: '2rem' }}>
                        <ul className={css.ImageGallery}>
                            <li className={css.ImageGalleryItem}>
                            <img src={largeImageURL} alt="" width="300px" className={css.ImageGalleryItemImage}></img>
                            </li>
                            
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

ImageGallery.propTypes = {
    id: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}

export default ImageGallery;