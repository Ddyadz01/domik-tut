import axios from '../axios/axios';

class UserService {
  async favoriteToggle(id) {
    return await axios
      .post('/favorite/toggle', {
        product_id: id,
      })
      .then((res) => res.data);
  }
  // async deleteFavorite(id) {
  //   return await axios.delete(`https://05a63f7766c02867.mokky.dev/favorites/${id}`);
  // }
  async SignUp(data) {
    return await axios.post(`/register`, {
      ...data,
    });
  }

  async SignIn(data) {
    return await axios.post(`/login`, {
      ...data,
    });
  }

  async GetMe() {
    return await axios.get(`/me`);
  }
}

export const { favoriteToggle, deleteFavorite, SignUp, SignIn, GetMe } = new UserService();
