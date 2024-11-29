import axios from 'axios';

class UserService {
  async getFavorites() {
    const res = await axios.get(`https://05a63f7766c02867.mokky.dev/favorites`);
    return res.data;
  }
  async addFavorites(id) {
    const res = await axios.post(`https://05a63f7766c02867.mokky.dev/favorites`, {
      item_id: id,
    });
    return res;
  }
  async deleteFavorite(id) {
    return await axios.delete(`https://05a63f7766c02867.mokky.dev/favorites/${id}`);
  }
}

export const { getFavorites, addFavorites, deleteFavorite } = new UserService();
