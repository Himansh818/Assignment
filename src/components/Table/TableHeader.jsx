import React from "react";

const TableHeader = ({ toggleSelectAll, allSelected, handleSort, sortConfig }) => {
  const columns = [
    { label: "Name", key: "name", sortable: true },
    { label: "Email", key: "email", sortable: false },
    { label: "Status", key: "status", sortable: false },
    { label: "Date", key: "date", sortable: true },
  ];

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return "⇅";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="p-3 text-left">
          <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
        </th>
        {columns.map((col) => (
          <th
            key={col.key}
            className="p-3 text-left cursor-pointer select-none"
            onClick={() => col.sortable && handleSort(col.key)}
          >
            {col.label} {col.sortable && renderSortIcon(col.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
