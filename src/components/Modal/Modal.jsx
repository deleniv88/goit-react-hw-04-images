import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL, imgTag } = this.props;
        return createPortal(
            <div className={css.overlay}
                onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {' '}
                    <img src={largeImageURL} alt={imgTag} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.defaultProps = {
    onClose: () => null,
    children: null,
};

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;