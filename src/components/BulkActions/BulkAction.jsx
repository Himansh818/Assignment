import React from "react";

const BulkActions = ({ selectedRows, handleDelete }) => {
  if (selectedRows.length === 0) return null;
  return (
    <div className="mb-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete {selectedRows.length} Selected
      </button>
    </div>
  );
};

export default BulkActions;
