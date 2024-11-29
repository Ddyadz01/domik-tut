import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../services/user.service';

export const useFavorites = () => {
  return useQuery({
    queryKey: ['user', 'favorites'],
    queryFn: () => getFavorites(),
    // refetchInterval: 3600,
    refetchOnWindowFocus: false,
  });
};
