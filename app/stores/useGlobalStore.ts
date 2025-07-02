import { set } from 'zod/v4-mini';
import { create } from 'zustand';

interface GlobalStore {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>(set => ({
  openSideBar: false,
  setOpenSideBar: open => {
    set({ openSideBar: open });
  },
}));
