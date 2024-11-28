import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const API = 'https://05a63f7766c02867.mokky.dev';

class ProductServices {
  getProducts() {
    return axios.get(`${API}/products`).then((res) => res.data);
  }
}

export const { getProducts } = new ProductServices();
