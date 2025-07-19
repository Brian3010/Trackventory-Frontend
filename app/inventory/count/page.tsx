import CardItem from '@/app/components/inventory/count/components/CardItem';
import React from 'react';

export default function InventoryCount() {
  // NOTE: Consider to impelement table instead
  // TODO: make multiple row to see if it good
  // TODO: Make sure of repsonsiveness
  return (
    <div>
      {/* * Card */}
      <div className="grid grid-cols-1">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
