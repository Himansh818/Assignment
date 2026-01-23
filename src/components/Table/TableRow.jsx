import React from "react";

const TableRow = ({ row, toggleRow, selected }) => {
  return (
    <tr className={`${selected ? "bg-gray-100" : ""} hover:bg-gray-50`}>
      <td className="p-3">
        <input type="checkbox" checked={selected} onChange={() => toggleRow(row.id)} />
      </td>
      <td className="p-3">{row.name}</td>
      <td className="p-3">{row.email}</td>
      <td className="p-3">{row.status}</td>
      <td className="p-3">{row.date}</td>
    </tr>
  );
};

export default TableRow;
