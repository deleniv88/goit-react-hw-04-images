import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({onSearch}) => {
  
  return (
    <header className={css.searchbar}>
      <form
        className={css.searchForm}
        onSubmit={onSearch}
        // onSubmit={e => {
        //   e.preventDefault();
        //   onSearch(e.target.elements.imageName.value);
        //   e.target.reset();
        // }}
      >
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName" 
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar;