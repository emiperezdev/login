import { useMutation } from "@tanstack/react-query";
import UserDto from "../entities/UserDto";
import APIClient, { AxiosError } from "../services/api-client";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";
import useAuth from "../stores/useAuth";
import useErrorResponse from "../stores/useErrorResponse";

const apiClient = new APIClient<UserDto>("/user");

const useAddUser = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);
  const setAuth = useAuth((s) => s.setAuth);
  const setError = useErrorResponse((s) => s.setErrorResponse);

  return useMutation({
    mutationFn: apiClient.post,

    onSuccess: (userData) => {
      navigate("/profile");
      setAuth(true);
      setUser(userData);
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(err.response?.data);
        setAuth(false);
        setUser({} as UserDto);
      }
    },
  });
};

export default useAddUser;
