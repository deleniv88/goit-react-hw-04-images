import { useState } from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {

  const [imageName, setImageName] = useState('');

  const handelChange = e => setImageName(e.target.value);

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit(imageName);
    setImageName('');
  }

  return (
    <header className={css.searchbar}>
      <form
        className={css.searchForm}
        onSubmit={handelSubmit}
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
          value={imageName}
          onChange={handelChange}
        />
      </form>
    </header>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

