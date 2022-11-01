import { Component } from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  state = {
    imageName: '',
  }

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.elements.imageName.value)
    this.resert();
  };

  resert = () => {
    this.setState({
      imageName: '',
    })
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form
          className={css.searchForm}
          onSubmit={this.handelSubmit}
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
            value={this.state.imageName}
            onChange={this.handelChange}
          />
        </form>
      </header>
    );
  }
};

SearchBar.propTypes = {
  imageName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}


// const SearchBar = ({onSearch}) => {

//   return (
//     <header className={css.searchbar}>
//       <form
//         className={css.searchForm}
//         // onSubmit={onSearch}
//         onSubmit={e => {
//           e.preventDefault();
//           onSearch(e.target.elements.imageName.value);
//           e.target.reset();
//         }}
//       >
//         <button type="submit" className={css.searchFormButton}>
//           <span className={css.searchFormButtonLabel}>Search</span>
//         </button>

//         <input
//           className={css.searchFormInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           name="imageName" 
//         />
//       </form>
//     </header>
//   );
// };

// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired
// }

export default SearchBar;