'use client';

import { AlignJustify, LayoutDashboard, Menu, UsersRound, X } from 'lucide-react'; // optional icons
import React, { useState } from 'react';

export default function SideBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside className={`transition-all duration-300 ${open ? 'w-36' : 'w-14'} flex flex-col`}>
      <div className="p-4 flex justify-start">
        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          <Menu
            className={`h-5 w-5 transform transition-transform duration-300 ease-in-out ${
              open ? 'rotate-90' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      <nav className="p-4 flex-1">
        <ul className="flex flex-col gap-10">
          <li className={`flex items-center gap-2 cursor-pointer group`}>
            <ul className="flex gap-2">
              <li>
                <LayoutDashboard className="h-5 w-5" />
              </li>
              {open && <li className="text-sm ">Dashboard</li>}
            </ul>
          </li>
          <li className={`flex items-center gap-2 cursor-pointer group`}>
            <ul className="flex gap-2">
              <li>
                <UsersRound className="h-5 w-5" />
              </li>
              {open && <li className="text-sm ">Users</li>}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
