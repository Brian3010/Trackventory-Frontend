'use client';

import { FormatRoute } from '@/app/utils/Helpers';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
import QueryProviders from './QueryProviders';

type MainContainerProps = {
  children: ReactNode;
  className: string;
};

export default function MainContainer({ children, className }: MainContainerProps) {
  const pathname = usePathname();
  const { setOpenSideBar } = useGlobalStore();

  useEffect(() => {
    if (pathname) setOpenSideBar(false);
  }, [pathname]);

  return (
    <div className={className}>
      <h1 className="font-semibold text-lg mb-2.5">{FormatRoute(pathname)}</h1>
      <QueryProviders>{children}</QueryProviders>
    </div>
  );
}
