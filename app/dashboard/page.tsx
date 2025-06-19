'use client';
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAuthStore } from '../stores/useAuthStore';

export default function page() {
  console.log('dashboard render');
  const { isAuthenticated, isLoading } = useAuthStore();
  if (isLoading) return null; // or return <Loading />

  return (
    isAuthenticated && (
      <div>
        <h2>Protected Dashboard</h2>
        <p>This content is only for authenticated users.</p>
      </div>
    )
  );
}
