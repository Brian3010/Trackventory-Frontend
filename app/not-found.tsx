import React from 'react';

export default function NotFound() {
  return (
    <section className="flex items-center h-screen bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-5xl text-primary-600">404</h1>
          <p className="mb-4 text-xl font-bold tracking-tight md:text-2xl">Page Not Found</p>
          <a
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
