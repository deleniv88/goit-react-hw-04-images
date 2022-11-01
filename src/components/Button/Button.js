import PropTypes from 'prop-types';
import css from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => {
    return (
        <button type="button" className={css.button} onClick={onClick}>
            Load more pictures
        </button>
    )
}

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ButtonLoadMore;