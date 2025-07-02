import axios from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

const axiosNet = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_API,
  withCredentials: true,
});

axiosNet.interceptors.request.use(config => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default axiosNet;
