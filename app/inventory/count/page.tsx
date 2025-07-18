import CardItem from '@/app/components/inventory/count/components/CardItem';
import React from 'react';

export default function InventoryCount() {
  // NOTE: Consider to impelement table instead
  // TODO: Fix Case unit and Status colum
  // TODO: Fix according to the UX Pilot design\
  // TODO: make multiple row to see if it good
  // TODO: Make sure of repsonsiveness
  return (
    <div>
      {/* * Card
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
      </div> */}
      <div className="overflow-hidden bg-white border rounded-lg border-neutral-300">
        <div>
          <table className="w-full table-auto ">
            <thead className="text-sm bg-neutral-100">
              <tr className="">
                <th className="px-4 py-4 text-left text-neutral-700">Item</th>
                <th className="px-4 py-4 text-left text-neutral-700">Last Count</th>
                <th className="px-4 py-4 text-left text-neutral-700">New Count</th>
                <th className="px-4 py-4 text-left text-neutral-700">Case Unit</th>
                <th className="px-4 py-4 text-left text-neutral-700">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <div className="flex sm:flex-1">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg sm:w-24 sm:h-24 aspect-square">
                      <img
                        src="https://assets.woolworths.com.au/images/1005/363085.jpg?impolicy=wowsmkqiema&w=600&h=600"
                        alt="Image"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="self-center">
                      <p>WB Ethiopia 250g CORE</p>
                      <p className="text-xs text-gray-700">SKU: 102316</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">24</td>
                <td className="px-6 py-4">
                  <div>
                    <input
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
                      type="text"
                      name="newcount"
                      id="newcount"
                      placeholder=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-green-600">Each</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">Counted</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
