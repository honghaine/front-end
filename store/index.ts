import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AuthSlice, authSlice } from './auth-slice';
import { MeSlice, meSlice } from './me-slice';

export const sliceResetFns = new Set<() => void>();
export const resetAllSlices = () => {
  if(sliceResetFns){
    sliceResetFns.forEach((resetFn) => {
      resetFn();
    });
  }
};

export const useBoundStore = create<AuthSlice & MeSlice>()(
  devtools(
    (...props) => ({
      ...authSlice(...props),
      ...meSlice(...props),
    }),
    { name: 'MyStore', anonymousActionType: 'action' }
  )
);
