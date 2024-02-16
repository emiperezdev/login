import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface LoginStateAction {
  isAuth: boolean;
  setAuth: (state: boolean) => void;
}

const useAuth = create<LoginStateAction>((set) => ({
  isAuth: false,
  setAuth: (state) => set(() => ({ isAuth: state })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Auth", useAuth);
}

export default useAuth;
