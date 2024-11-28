import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/product.services';

export const useGetproducts = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: getProducts,
  });
