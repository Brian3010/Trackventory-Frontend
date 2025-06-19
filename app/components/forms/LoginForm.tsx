'use client';

import { loginSchema, LoginSchema } from '@/app/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

type LoginFormProps = {
  handleLogin: (formData: FormData) => Promise<void>;
  isLoading?: boolean;
  errorMessage: string | undefined;
  setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
};

export default function LoginForm({ handleLogin, isLoading, errorMessage, setErrorMessage }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit', // enables live validation
  });

  const onSubmit = (loginSchema: LoginSchema) => {
    const formData = new FormData();
    formData.append('email', loginSchema.email);
    formData.append('password', loginSchema.password);
    handleLogin(formData);
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(undefined);
    }
  }, [watch('email'), watch('password')]);

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 group" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`${
                  errors.email && `focus:outline-red-600 outline-red-600`
                } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                {...register('password')}
                className={`${
                  errors.password && `focus:outline-red-600 outline-red-600`
                } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
              />
              {errors.password && <ErrorMessage message={errors.password.message} />}
              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading && 'opacity-50 cursor-not-allowed hover:bg-indigo-600'
              } flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Sign in
            </button>
            <div className="text-sm my-1.5 flex justify-end">
              <a href="#" className="font-semibold text-indigo-600 text-right hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
        </form>

        <p className="mt-7 text-center text-sm/6 text-gray-500">
          Contact{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Admin
          </a>{' '}
          if you do not have an account
        </p>
      </div>
    </>
  );
}
