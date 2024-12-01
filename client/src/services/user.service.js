import axios from '../axios/axios';

class UserService {
  async favoriteToggle(id) {
    return await axios.put(`/favorite/toggle/${id}`).then((res) => res.data);
  }

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

export const { favoriteToggle, SignUp, SignIn, GetMe } = new UserService();
