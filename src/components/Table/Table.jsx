import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Skeleton from "./Skeleton";
import Pagination from "../Pagination/Pagination";
import BulkActions from "../BulkActions/BulkAction";
import { mockData } from "../../utils/mockData";

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      const savedData = JSON.parse(localStorage.getItem("tableData")) || mockData;
      setData(savedData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Sorting function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  // Row selection
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === currentPageData.length) setSelectedRows([]);
    else setSelectedRows(currentPageData.map((row) => row.id));
  };

  // Bulk delete
  const handleDelete = () => {
    const newData = data.filter((row) => !selectedRows.includes(row.id));
    setData(newData);
    setSelectedRows([]);
    localStorage.setItem("tableData", JSON.stringify(newData));
  };

  // Pagination
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentPageData = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  if (loading) return <Skeleton />;

  return (
    <div className="p-4 w-full">
      <BulkActions selectedRows={selectedRows} handleDelete={handleDelete} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <TableHeader
            toggleSelectAll={toggleSelectAll}
            allSelected={selectedRows.length === currentPageData.length}
            handleSort={handleSort}
            sortConfig={sortConfig}
          />
          <tbody>
            {currentPageData.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                toggleRow={toggleRow}
                selected={selectedRows.includes(row.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
