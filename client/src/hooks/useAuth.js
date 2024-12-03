import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { login } from "../store/Slices/UserSlice";
import { GetMe, SignIn, SignUp } from "../services/user.service";

export const useAuth = () => {
  const dispatch = useDispatch();

  const LoginMutation = useMutation({
    mutationFn: SignIn,
    onSuccess: (data) => {
      dispatch(login(data));
    },
  });

  const RegisterMutation = useMutation({
    mutationFn: SignUp,
    onSuccess: (data) => {
      dispatch(login(data));
    },
  });

  const useGetMe = () =>
    useQuery({
      queryKey: ["get me"],
      queryFn: GetMe,
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("token"),
    });

  return {
    RegisterMutation,
    LoginMutation,
    useGetMe,
  };
};
