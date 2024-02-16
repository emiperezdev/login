import { create } from "zustand";
import UserDto from "../entities/UserDto";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface UserStoreAction {
  user: UserDto;
  setUser: (userData: UserDto) => void;
}

const useUserStore = create<UserStoreAction>((set) => ({
  user: {} as UserDto,
  setUser: (userData) => set(() => ({ user: userData })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('User', useUserStore);
}

export default useUserStore;