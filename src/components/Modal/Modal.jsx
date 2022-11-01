import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL, tags }) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return (() => {
            window.removeEventListener('keydown', handleKeyDown);
        })
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
        <div className={css.overlay}
            onClick={handleBackdropClick}>
            <div className={css.modal}>
                {' '}
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>,
        modalRoot,
    )
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}
