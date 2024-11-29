import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/product.services';

export const useGetProducts = (itemId) =>
  useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    enabled: !itemId || !!itemId,
  });
