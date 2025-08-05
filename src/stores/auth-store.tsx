import { create } from 'zustand';
import { getLocalStorage } from '../utils/local-storage';
import { config } from '../config/config';

export interface AuthType {
  email: string;
  role: 'admin' | 'user';
}

interface IAuth {
  auth: AuthType | undefined;
  setAuth: (authData: AuthType | undefined) => void;
}

export const useAuthStore = create<IAuth>((set) => {
  const localStorageAuth = getLocalStorage(config.authKey);

  return {
    auth: localStorageAuth ? JSON.parse(localStorageAuth) : undefined,
    setAuth: (authData) => {
      set({ auth: authData });
    },
  };
});
