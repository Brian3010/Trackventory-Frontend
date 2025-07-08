import { Category } from '@/app/types/inventory';
import { useRouter } from 'next/navigation';
import React from 'react';

type CategoryItemsProps = {
  item: Category;
};

export default function CategoryItems({ item }: CategoryItemsProps) {
  const router = useRouter();

  return (
    <>
      <div
        className="p-4 rounded-lg shadow bg-[var(--card)] border border-gray-300 hover:shadow-md cursor-pointer"
        onClick={() => router.push('/inventory/count')}
      >
        <h2 className="text-lg font-semibold">{item.name}</h2>

        <div className="sm:flex justify-between">
          <p className="text-sm text-gray-600">
            <span className="font-bold">90</span> items
          </p>
          <p className="text-sm text-gray-500">Completed by Admin</p>
        </div>
        <p className="text-sm text-gray-600">Updated Last Week</p>
      </div>
    </>
  );
}
