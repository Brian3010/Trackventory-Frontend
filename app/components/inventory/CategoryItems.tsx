import { Category } from '@/app/types/category';
import { History, ShoppingBagIcon, SquarePen } from 'lucide-react';
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
        <div className="flex">
          <div className="flex flex-1 gap-4">
            <div
              className="[&>svg]:w-6 [&>svg]:h-6 aspect-square p-2 "
              dangerouslySetInnerHTML={{ __html: item.iconMarkUpHTML }}
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.totalItems} items</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button>
              <SquarePen className="w-5 h-5" />
            </button>
            <button>
              <History className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-500 ">
          Last Updated:{' '}
          {new Date(item.lastUpdated).toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: true, // ensures AM/PM
          })}
        </p>
      </div>
    </>
  );
}
