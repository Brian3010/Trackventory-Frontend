'use client';

import React from 'react';
import CategoryItems from '../components/inventory/CategoryItems';
import { useCategoriesQuery } from '../hooks/inventory/useCategoriesQuery';
import NotFound from '../not-found';

export default function Inventory() {
  const { data, isLoading, error } = useCategoriesQuery();
  // if (error) return console.error(error);

  if (error) {
    console.error(`error requesting categories: ${error}`);
    return NotFound();
  }
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Cannot retrieve data</div>;
  //TODO: think of way to display categories (might use grid??)
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((item, idx) => (
          <CategoryItems item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
