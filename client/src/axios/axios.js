import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  //xhttps://domik-tut.onrender.com/api
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
