import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-by-react.firebaseio.com/'
});

export default instance;