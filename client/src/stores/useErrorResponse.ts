import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ErrorResponseAction {
  error: string;
  setErrorResponse: (message: string) => void;
}

const useErrorResponse = create<ErrorResponseAction>((set) => ({
  error: "",
  setErrorResponse: (message) => 
    set(() => ({ error: message })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Error Response', useErrorResponse);
}

export default useErrorResponse;