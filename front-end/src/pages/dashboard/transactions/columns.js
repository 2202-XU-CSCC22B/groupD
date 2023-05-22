import { TbArrowsDownUp } from "react-icons/tb";

export const columns = [
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Amount</p>
          <TbArrowsDownUp
            className=" cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "transactionType",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Type</p>
          <div>
            <select
              defaultValue={column.getFilterValue() ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="outline-none w-[16px] bg-inherit cursor-pointer"
            >
              <option hidden></option>
              <option value="">All</option>
              <option value="sales">Sales</option>
              <option value="cash out">Cash Out</option>
              <option value="Salary">Salary</option>
              <option value="maintenance">Maintenance</option>
              <option value="utilities">Utilities</option>
            </select>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Method</p>
          <div>
            <select
              defaultValue={column.getFilterValue() ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="outline-none w-[16px] bg-inherit cursor-pointer"
            >
              <option hidden></option>
              <option value="">All</option>
              <option value="GC">GCash</option>
              <option value="CASH">Cash</option>
            </select>
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div>{row.original.paymentMethod === "GC" ? "GCash" : "Cash"}</div>
      );
    },
  },

  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>First name</p>
          <TbArrowsDownUp
            className=" cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Last name</p>
          <TbArrowsDownUp
            className="cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="">
          {row.original.description === null ? "--" : row.original.description}
        </div>
      );
    },
  },
  {
    accessorKey: "memberID",
    header: "Member ID",
    cell: ({ row }) => {
      return (
        <div className="">
          {row.original.memberID === null ? "--" : row.original.memberID}
        </div>
      );
    },
  },
  {
    accessorKey: "staffID",
    header: "Staff ID",
    cell: ({ row }) => {
      return (
        <div className="">
          {row.original.staffID === null ? "--" : row.original.staffID}
        </div>
      );
    },
  },
];
