import React from 'react';

export default function CardItem() {
  return (
    <>
      <div className="p-3 border border-gray-300 rounded">
        <div className="flex flex-col sm:flex-row">
          {/* Item and Image Details */}
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

          {/* To be counted section */}
          <div className="flex items-center gap-2 sm:flex-2 sm:justify-around">
            <div>
              <p className="mb-1 text-sm text-gray-700">Last Count</p>
              <input
                type="text"
                className="w-full px-2 py-1 placeholder-black bg-gray-200 border rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
                name="lastcount"
                id="lastcount"
                placeholder="45"
                disabled
              />
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-700">New Count</p>
              <input
                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
                type="text"
                name="newcount"
                id="newcount"
                placeholder=""
              />
            </div>
            <span className="ml-2 text-sm text-gray-600">Each</span>
            <span>Counted</span>
          </div>
        </div>
      </div>
    </>
  );
}
