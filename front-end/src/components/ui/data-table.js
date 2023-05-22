import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

const DataTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="max-w-7xl space-y-4 ">
      {/* table */}
      <div className="overflow-x-auto">
        <table className=" table-auto w-full min-w-max border">
          <thead className=" ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className=" px-8 py-4 text-left font-medium text-gray-500"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody className="text-gray-900">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`hover:bg-gray-200 ${
                    index % 2 === 0 && "bg-gray-50"
                  }`}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={cell.id}
                      className="px-8 py-4 border-b border-t overflow-x-auto max-w-[192px]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-8 py-4 " colSpan={columns.length}>
                  No results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className=" flex sm:justify-between sm:items-center flex-col-reverse gap-4 sm:flex-row">
        <p className="font-medium text-gray-500">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        {/* controls */}
        <div className=" flex gap-2 sm:justify-end">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className=" border px-4 py-2 rounded border-gray-500 text-gray-900 cursor-pointer disabled:border-gray-300 disabled:text-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className=" border px-4 py-2 rounded border-gray-500 text-gray-900 cursor-pointer disabled:border-gray-300 disabled:text-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
