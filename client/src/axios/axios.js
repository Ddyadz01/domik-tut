import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://domik-tut.onrender.com/api ',
  //http://localhost:4000/api
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
