import axios from '../axios/axios';

class ProductServices {
  getProducts() {
    return axios.get(`/products`).then((res) => res.data);
  }
}

export const { getProducts } = new ProductServices();
