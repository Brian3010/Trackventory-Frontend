'use client';

import { FormatRoute } from '@/app/utils/Helpers';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
  className: string;
};

export default function MainContainer({ children, className }: MainContainerProps) {
  const pathname = usePathname();

  return (
    <div className={className}>
      <h1 className="font-semibold text-lg mb-2.5">{FormatRoute(pathname)}</h1>
      {children}
    </div>
  );
}
