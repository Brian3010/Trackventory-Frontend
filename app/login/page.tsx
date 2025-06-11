'use client';

import axios from 'axios';
import { stat } from 'fs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ErrorMessage from '../components/forms/ErrorMessage';
import LoginForm from '../components/forms/LoginForm';
import { useAuthStore } from '../stores/useAuthStore';

export default function page() {
  // const router = useRouter();
  const { login } = useAuthStore(state => state);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleLogin = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log({ email, password });
    setLoading(true);
    // Device name
    // const deviceName = navigator.userAgent;
    const deviceName = 'local host';
    try {
      await login(email, password, deviceName);
    } catch (err: any) {
      if (err.status === 401) {
        setErrorMessage(err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center  px-6 py-12 lg:px-8">
        <LoginForm
          handleLogin={handleLogin}
          isLoading={loading}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </>
  );
}

// {loading && (
//   <div className="mb-4 flex justify-center">
//     <span className="text-indigo-600 font-semibold">Loading...</span>
//     {/* Replace with a spinner if you have one */}
//   </div>
// )}
