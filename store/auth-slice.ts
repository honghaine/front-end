import Cookies from 'js-cookie';
import { StateCreator } from 'zustand';

import { sliceResetFns } from '.';

export interface AuthSlice {
  auth: boolean;
  setAuth: (payload: boolean) => void;
}

const initialAuthState = { auth: false };

export const authSlice: StateCreator<AuthSlice, [], []> = (set) => {
  sliceResetFns.add(() => set(initialAuthState));

  return {
    auth: !!Cookies.get('accessToken'),
    setAuth: (payload: boolean) => set(() => ({ auth: payload })),
  };
};
