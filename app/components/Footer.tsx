import { LayoutDashboard, UsersRound, Warehouse } from 'lucide-react';
import React from 'react';
import SideBarItems from './SideBarItems';

export default function Footer() {
  return (
    <footer className="p-5 bg-gray-200 block sm:hidden">
      <ul className="flex gap-6 justify-around">
        <SideBarItems
          icon={[
            <LayoutDashboard className="w-5 h-5" />,
            <Warehouse className="w-5 h-5" />,
            <UsersRound className="w-5 h-5" />,
          ]}
          itemName={['Dashboard', 'Inventory', 'Users']}
          // open={openSideBar}
          route={['/dashboard', '/inventory', '/manage-user']}
        />
      </ul>
    </footer>
  );
}
