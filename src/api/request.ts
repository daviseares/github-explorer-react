import { axios } from '~/modules';

const request = axios.create({
  baseURL: 'https://api.github.com/',
});

export default request;
