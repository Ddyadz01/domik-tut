import axios from '../axios/axios';

class ProductServices {
  getProducts() {
    return axios.get(`/api/products`).then((res) => res.data);
  }
}

export const { getProducts } = new ProductServices();
