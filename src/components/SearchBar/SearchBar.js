import css from './SearchBar.module.css';

const SearchBar = ({ onSearch}) => {
  return (
    <header className={css.searchbar}>
      <form
        className={css.searchForm}
        // onSubmit={e => {
        //   e.preventDefault();
        //   onSearch(e.target.elements.imageName.value);
        //   e.target.reset();
        // }}
        onSubmit={onSearch}
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

export default SearchBar;