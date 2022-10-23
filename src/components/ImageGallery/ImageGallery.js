// import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import css from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = (props) => {
    console.log(props.images.map((im) => im.largeImageURL));
    console.log(props);
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



export default ImageGallery;