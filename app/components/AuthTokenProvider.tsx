'use client';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { useAuthStore } from '@/app/stores/useAuthStore';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthTokenProvider() {
  console.log('AuthTokenProvider rendered');
  const { refreshToken } = useAuthStore();
  const [value] = useLocalStorage('user', '');

  const router = useRouter();

  useEffect(() => {
    // console.log('useEffect in AuthToken runned');
    // get actual deviceName/deviceId later
    // for now, it's hard coded
    const deviceId = 'local host';

    // Check if user exists in localStorage
    if (!value?.state?.context) {
      // console.log('returning to /login as user not found in storage');
      return router.push('/login');
    }

    const refresh = async () => {
      try {
        await refreshToken(value.state.context.id, deviceId);
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 400) {
          console.error(err);
          return router.push('/login');
        }
      }
    };

    refresh();
  }, [value]);

  return null;
}
