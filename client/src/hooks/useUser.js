import { useQuery } from '@tanstack/react-query';
import { GetMe } from '../services/user.service';
import {useSelector} from "react-redux"

const {user} = useSelector(state => state.user)
export const useGetMe = () =>
  useQuery({
    queryKey: ['get me'],
    queryFn: GetMe,
    refetchOnWindowFocus: false,
    enabled: !!user?.token
  });
