import React from "react";
import css from '../SearchBar/SearchBar.module.css'
import PropTypes from 'prop-types'


const SearchBar = ({onSubmit}) => {

        return(
            <header className={css.SearchBar}>
                <form className={css.SearchForm} onSubmit={onSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchValue"
                    />
                </form>
            </header>
        )
    
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SearchBar;