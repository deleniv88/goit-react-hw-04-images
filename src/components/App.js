import { Component } from "react";
import Select from 'react-select';
import { fetchBreeds, fetchDogByBreed } from "api";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from './App.module.css'

const API_KEY = '30779521-b3fbf117fb3141dbf0970e7e2'
const url = `https://pixabay.com/api/?q=$cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`


class App extends Component {

  state = {
    images: []
  }

handelGetRequest = async (e) => {
  e.preventDefault()
  const searchItem = e.target.elements.searchValue.value
  const url = `https://pixabay.com/api/?q=${searchItem}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

  const request = await fetch(url)
  const response = await request.json()
  this.setState({images: response.hits})
  console.log(searchItem);
  console.log(this.state.images);
console.log(response);
}
 
  render() {

    return (
       <>
       <div className={css.App}>
        
       <SearchBar onSubmit={this.handelGetRequest}/>
       <ImageGallery images={this.state.images} />
       </div>

       </>
    );
  }
}

// class App extends Component {

//   state = {
//     images: [

//     ]
//   }
 
// handelGetRequest = async (e) => {
//   e.preventDefault()
//   const searchItem = e.target.elements.searchValue.value
//   const url = `https://pixabay.com/api/?q=${searchItem}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

//   const request = await fetch(url)
//   const response = await request.json()
//   this.setState({images: response.hits})
//   console.log(searchItem);
//   console.log(this.state.images);
// console.log(response);
// }
 
//   render() {

//     return (
//        <>
//        <div className={css.App}>
        
//        <SearchBar onSubmit={this.handelGetRequest}/>
//        <ImageGallery images={this.state.images} />
//        </div>

//        </>
//     );
//   }
// }

export default App;