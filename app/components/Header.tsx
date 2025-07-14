import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="p-2 outline-1">
      <div className="flex flex-wrap items-center justify-between">
        <Link href={'/dashboard'}>
          <div className="px-2.5 text-lg min-h-9 flex justify-center items-center">Trackventory</div>
        </Link>

        <Link href={'/user-profile'}>
          <div className="px-2.5">User Account</div>
        </Link>
      </div>
    </header>
  );
}
