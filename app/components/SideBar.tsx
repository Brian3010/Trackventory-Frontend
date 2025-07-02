'use client';

import { LayoutDashboard, Menu, UsersRound, Warehouse } from 'lucide-react'; // optional icons
import React, { useState } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
import SideBarItems from './SideBarItems';

export default function SideBar() {
  // const [openSidebar, setOpenSideBar] = useState<boolean>(false);

  const { openSideBar, setOpenSideBar } = useGlobalStore();

  return (
    <aside
      className={`transition-all duration-300 ${openSideBar ? 'w-40' : 'w-14'} flex flex-col outline-1 bg-gray-300`}
    >
      <div className="p-4 flex justify-start">
        <button onClick={() => setOpenSideBar(!openSideBar)} className="cursor-pointer">
          <Menu
            className={`h-5 w-5 transform transition-transform duration-300 ease-in-out ${
              openSideBar ? 'rotate-90' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      <nav className="p-4 flex-1">
        <ul className="flex flex-col gap-6">
          <SideBarItems
            icon={[
              <LayoutDashboard className="h-5 w-5" />,
              <Warehouse className="h-5 w-5" />,
              <UsersRound className="h-5 w-5" />,
            ]}
            itemName={['Dashboard', 'Inventory', 'Users']}
            open={openSideBar}
            route={['/dashboard', 'inventory', 'manage-user']}
          />
        </ul>
      </nav>
    </aside>
  );
}
