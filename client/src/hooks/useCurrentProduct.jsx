import { useSelector } from 'react-redux';

export const useCurrentProduct = (id) => {
  const { products } = useSelector((state) => state.items);
  return products && products.filter((product) => product._id == id)[0];
};
