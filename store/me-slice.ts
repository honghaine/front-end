import { StateCreator } from 'zustand';


import { sliceResetFns } from '.';

export interface IMe {
  firstName:string
  lastName:string
}
export interface MeSlice {
  me: Partial<IMe> | null;
  setMe: (payload: Partial<IMe>) => void;
}

const initialMeState = { me: null };

export const meSlice: StateCreator<MeSlice, [], []> = (set) => {
  sliceResetFns.add(() => set(initialMeState));

  return {
    ...initialMeState,
    setMe: (payload) => set(() => ({ me: payload })),
  };
};
