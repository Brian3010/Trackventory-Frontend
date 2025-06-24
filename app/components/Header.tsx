import React from 'react';

export default function Header() {
  return (
    <header className="border-gray-200 p-2 bg-red-200">
      <div className="flex flex-wrap justify-between items-center">
        <div className="px-2.5 text-lg min-h-9 flex justify-center items-center">Trackventory</div>

        <div className="px-2.5">User Account</div>
      </div>
    </header>
  );
}
