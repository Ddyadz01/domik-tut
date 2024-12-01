import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/product.services';

export const useGetProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });
