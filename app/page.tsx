'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from './stores/useAuthStore';

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading) {
      router.push(user ? '/dashboard' : '/login');
    }
  }, [isLoading, user]);

  return null;

  // return <div className="text-2xl ">Homepage</div>;
}
