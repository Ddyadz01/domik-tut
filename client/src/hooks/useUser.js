import { useQuery } from '@tanstack/react-query';
import { GetMe } from '../services/user.service';

export const useGetMe = () =>
  useQuery({
    queryKey: ['get me'],
    queryFn: GetMe,
    refetchOnWindowFocus: false,
    enabled: localStorage.getItem("token")
  });
