import React from 'react';

export default function CardItem() {
  return (
    <>
      <div className="p-3 mb-2 border border-gray-300 rounded-md">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between">
          {/* Item and Image Details */}
          <div className="flex  gap-3 flex-1 justify-between text-sm sm:text-base">
            <div className="self-center">
              <p>WB Ethiopia 250g CORE</p>
              <p className="text-xs text-gray-700">SKU: 102316</p>
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg sm:w-24 sm:h-24 aspect-square">
              <img
                src="https://assets.woolworths.com.au/images/1005/363085.jpg?impolicy=wowsmkqiema&w=600&h=600"
                alt="Image"
                className="object-contain w-full h-full"
              />
            </div>

            {/* <span className="text-end px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">Counted</span> */}
          </div>

          {/* To be counted section */}
          <div className="flex items-center gap-2 justify-between flex-1">
            <div className="flex-1 min-w-0">
              <p className="mb-1 text-xs text-gray-700 text-nowrap">
                {/* Last Count: <span className="ml-1 font-medium text-gray-900 ">24</span> */}
                Last Count
              </p>
              <input
                type="text"
                className="w-full p-2 text-sm placeholder-black bg-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-200"
                name="lastcount"
                id="lastcount"
                placeholder="45"
                disabled
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="mb-1 text-xs text-gray-700">New Count</p>
                <input
                  className="w-full p-2 text-sm border border-gray-300 rounded "
                  type="text"
                  name="newcount"
                  id="newcount"
                  // placeholder="New Count"
                />
              </div>
            </div>
            <span className="text-sm font-medium self-end">Each</span>
          </div>
        </div>
      </div>
    </>
  );
}
