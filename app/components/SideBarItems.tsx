import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type SideBarItemsProps = {
  route: string[];
  icon: ReactNode[];
  itemName: string[];
  open: boolean;
};

export default function SideBarItems({ route, icon, itemName, open }: SideBarItemsProps) {
  return (
    <>
      {route.map((item, index) => (
        <Link href={item} key={index}>
          <li className={'flex items-center gap-2'}>
            <span>{icon[index]}</span>
            <span
              className={`text-sm transition-all duration-300 whitespace-nowrap ml-2 overflow-hidden ${
                open ? 'opacity-100 delay-50 w-auto' : 'opacity-0 delay-0 w-0 ml-0'
              }`}
            >
              {itemName[index]}
            </span>
          </li>
        </Link>
      ))}
    </>
  );
}
