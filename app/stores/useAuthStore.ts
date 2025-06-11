import axios from 'axios';
import { create } from 'zustand';

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
  // refreshAccessToken: (deviceId: string) => Promise<void>;
  // setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  isAuthenticated: false,
  accessToken: null,
  isLoading: false,

  login: async (email, password, deviceId) => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(4000);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_API}/api/auth/login`,
      { email, password, deviceId },
      { withCredentials: true }
    );

    set({
      isAuthenticated: true,
      user: res.data.user,
      accessToken: res.data.accessToken,
    });
  },

  logout: async (deviceName, userId) => {
    await axios.post(
      `${process.env.BACKEND_BASE_API}/api/auth/logout`,
      { deviceName, userId },
      { withCredentials: true }
    );

    set({
      isAuthenticated: false,
      user: null,
      accessToken: null,
    });
  },
}));
