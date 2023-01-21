import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.github.com/',
});

export default request;
