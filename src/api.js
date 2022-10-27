import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (imageName, pageNumber) => {
  const API_KEY = '30779521-b3fbf117fb3141dbf0970e7e2'
  const { data } = await axios.get(
    `/?q=${imageName}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default fetchImages;