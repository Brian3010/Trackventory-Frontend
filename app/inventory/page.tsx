'use client';

import React from 'react';
import { useCategoriesQuery } from '../hooks/inventory/useCategoriesQuery';
import NotFound from '../not-found';

export default function Inventory() {
  const { data, isLoading, error } = useCategoriesQuery();
  // if (error) return console.error(error);

  if (error) {
    console.error(`error requesting categories: ${error}`);
    return NotFound();
  }

  if (isLoading) return <div>Loading...</div>;

  return <div className="">{/* {data} */}</div>;
}
