// import React from 'react';

export default function ErrorMessage({ message, className }: { message: string | undefined; className?: string }) {
  return (
    message && (
      <span className="mb-4 text-sm text-red-500" role="alert">
        {message}
      </span>
    )
  );
}
