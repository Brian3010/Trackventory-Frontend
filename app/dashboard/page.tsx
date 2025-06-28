'use client';
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAuthStore } from '../stores/useAuthStore';

export default function Dashboard() {
  console.log('dashboard render');
  const { isAuthenticated, isLoading } = useAuthStore();
  if (isLoading) return null; // or return <Loading />

  return (
    isAuthenticated && (
      <div>
        <h2>Protected Dashboard</h2>
        <ul>
          <li>Todo:</li>
          <li>Inventory Summary Cards</li>
          <li>Low Stock Items Table</li>
          <li>Top 5 most used / sold items</li>
        </ul>
      </div>
    )
  );
}
