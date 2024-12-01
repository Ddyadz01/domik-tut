import axios from 'axios';
import axiosNew from '../axios/axios';

class UserService {
  async addFavorites(id) {
    const res = await axios.post(`https://05a63f7766c02867.mokky.dev/favorites`, {
      item_id: id,
    });
    return res;
  }
  async deleteFavorite(id) {
    return await axios.delete(`https://05a63f7766c02867.mokky.dev/favorites/${id}`);
  }
  async SignUp(data) {
    return await axiosNew.post(`/api/register`, {
      ...data,
    });
  }

  async SignIn(data) {
    return await axiosNew.post(`/api/login`, {
      ...data,
    });
  }
}

export const { addFavorites, deleteFavorite, SignUp, SignIn } = new UserService();
