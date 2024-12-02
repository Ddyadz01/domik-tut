import axios from "../axios/axios";
import Notification from "../utils/Notification";

class UserService {
  async favoriteToggle(id) {
    return await axios
      .put(`/favorite/toggle/${id}`)
      .then((res) => {
        Notification(res.data?.message, "success");
        return res.data;
      })
      .catch(({ response }) => Notification(response?.data?.message, "error"));
  }

  async SignUp(data) {
    return await axios
      .post(`/register`, {
        ...data,
      })
      .then((res) => {
        Notification(res?.data?.message, "success");
        return res.data;
      })
      .catch(({ response }) => Notification(response?.data?.message, "error"));
  }

  async SignIn(data) {
    return await axios
      .post(`/login`, {
        ...data,
      })
      .then((res) => {
        Notification(res?.data?.message, "success");
        return res.data;
      })
      .catch(({ response }) => Notification(response?.data?.message, "error"));
  }

  async GetMe() {
    return await axios.get(`/me`);
  }
}

export const { favoriteToggle, SignUp, SignIn, GetMe } = new UserService();
