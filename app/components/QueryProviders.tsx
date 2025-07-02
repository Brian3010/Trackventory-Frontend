import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function QueryProviders({ children }: { children: React.ReactNode }) {
  console.log('Query Providers rendered');
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
