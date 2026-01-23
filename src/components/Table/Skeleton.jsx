import React from "react";

const Skeleton = () => {
  return (
    <div className="w-screen h-screen p-8 bg-gray-500 flex flex-col animate-pulse">
      {/* Table header skeleton */}
      <div className="flex space-x-4 mb-6">
        <div className="h-15 bg-gray-300 rounded w-1/4"></div>
        <div className="h-15 bg-gray-300 rounded w-1/4"></div>
        <div className="h-15 bg-gray-300 rounded w-1/4"></div>
        <div className="h-15 bg-gray-300 rounded w-1/4"></div>
      </div>

      {/* Table rows skeleton */}
      <div className="flex-1 overflow-y-auto">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
