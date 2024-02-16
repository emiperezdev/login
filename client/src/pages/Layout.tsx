import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import APIClient from "../services/api-client";
import UserDto from "../entities/UserDto";
import useUserStore from "../stores/useUserStore";
import useAuth from "../stores/useAuth";

function Layout() {
  const cookies = Cookies.get();
  const apiClient = new APIClient<UserDto>("/verify");
  
  const setUser = useUserStore((s) => s.setUser);
  const setAuth = useAuth((s) => s.setAuth);

  useEffect(() => {
    const verify = async () => {
      if (cookies.token) {
        try {
          const userData = await apiClient.get();
          if (!userData) return setAuth(false);

          setAuth(true);
          setUser(userData);
        } catch (e) {
          setAuth(false);
          setUser({} as UserDto);
        }
      }
    };

    verify();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
