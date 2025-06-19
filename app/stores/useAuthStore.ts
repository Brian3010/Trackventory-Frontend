import { AxiosError } from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosNet from '../utils/axiosNet';

interface User {
  email: string;
  id: string;
  username: string;
}

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  login: (username: string, password: string, deviceId: string) => Promise<void>;
  logout: (deviceName: string, userId: string) => Promise<void>;
  refreshToken: (userId: string, deviceId: string) => Promise<void>;
  // setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      accessToken: null,
      isLoading: false,

      login: async (email, password, deviceId) => {
        try {
          set({ isLoading: true });
          const res = await axiosNet.post('/api/auth/login', { email, password, deviceId });
          // console.log(` login: ~ res:`, res);

          set({
            isAuthenticated: true,
            user: res.data.user,
            accessToken: res.data.accessToken,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false, isAuthenticated: false, user: null, accessToken: null });
          throw error;
        }
      },

      logout: async (deviceName, userId) => {
        await axiosNet.post('/api/auth/logout', { deviceName, userId }, { withCredentials: true });

        set({
          isAuthenticated: false,
          user: null,
          accessToken: null,
        });
      },

      refreshToken: async (userId, deviceId) => {
        console.log(' refreshToken: ~ userId, deviceId:', userId, deviceId);
        try {
          set({ isLoading: true });

          const res = await axiosNet.post('/api/auth/refresh-token', { userId, deviceId }, { withCredentials: true });
          set({
            user: res.data.user,
            isAuthenticated: true,
            accessToken: res.data.accessToken,
            isLoading: false,
          });
        } catch (error) {
          console.error(error);
          set({ isLoading: false, isAuthenticated: false, user: null, accessToken: null });
          throw error;
        }
      },
    }),

    {
      name: 'user',
      partialize: state => ({ context: state.user }),
    }
  )
);

// export const useAuthStore = create<AuthStore>(set => ({
//   user: null,
//   isAuthenticated: false,
//   accessToken: null,
//   isLoading: false,

//   login: async (email, password, deviceId) => {
//     set({ isLoading: true });
//     const res = await axiosNet.post('/api/auth/login', { email, password, deviceId });
//     console.log(` login: ~ res:`, res);

//     set({
//       isAuthenticated: true,
//       user: res.data.user,
//       accessToken: res.data.accessToken,
//       isLoading: false,
//     });
//   },

//   logout: async (deviceName, userId) => {
//     await axiosNet.post(`/api/auth/logout`, { deviceName, userId }, { withCredentials: true });

//     set({
//       isAuthenticated: false,
//       user: null,
//       accessToken: null,
//     });
//   },

// }));
