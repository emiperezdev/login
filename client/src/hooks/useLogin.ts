import { useMutation } from "@tanstack/react-query";
import LoginDto from "../entities/LoginDto";
import APIClient, { AxiosError } from "../services/api-client";
import { useNavigate } from "react-router-dom";
import useErrorResponse from "../stores/useErrorResponse";
import useAuth from "../stores/useAuth";
import useUserStore from "../stores/useUserStore";
import UserDto from "../entities/UserDto";

const apiClient = new APIClient<LoginDto>('/login');

const useLogin = () => {
  const navigate = useNavigate();
  const setError = useErrorResponse(s => s.setErrorResponse);
  const setAuth = useAuth(s => s.setAuth);
  const setUser = useUserStore(s => s.setUser);

  return useMutation({
    mutationFn: apiClient.post,

    onSuccess: (userData) => {
      navigate('/profile')
      setAuth(true);
      setUser(userData as UserDto);
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(err.response?.data)
        setAuth(false);
        setUser({} as UserDto);
      }
    }
  })
}

export default useLogin;