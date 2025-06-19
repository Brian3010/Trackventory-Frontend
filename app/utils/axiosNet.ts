import axios from 'axios';

const axiosNet = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_API,
  withCredentials: true,
});

export default axiosNet;
