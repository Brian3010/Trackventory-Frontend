import CardItem from '@/app/components/inventory/count/components/CardItem';
import React from 'react';

export default function InventoryCount() {
  // TODO:
  // NOTE: Consider to impelement table instead
  return (
    <div>
      {/** Card */}
      <div className="grid grid-cols-1">
        <div className="flex flex-col sm:flex-row">
          <div className="flex sm:flex-1">
            <p>Item</p>
          </div>
          <div className="flex items-center gap-2 sm:flex-2 sm:justify-around">
            <p>Last Count</p>
            <p>New Count</p>
            <p>Case Unit</p>
            <p>Status</p>
          </div>
        </div>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
