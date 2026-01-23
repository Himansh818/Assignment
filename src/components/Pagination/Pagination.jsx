import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
