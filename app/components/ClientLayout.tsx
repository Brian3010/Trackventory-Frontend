'use client';

import React from 'react';

const isDev = process.env.NODE_ENV === 'development';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return isDev ? <>{children}</> : <React.StrictMode>{children}</React.StrictMode>;
}
