import { TbArrowsDownUp } from "react-icons/tb";
var otherColumnIsSorting = false;
export const columns = [

  {
    accessorKey: "id",
    header: ({ column }) => {
        if(!column.getIsSorted() && otherColumnIsSorting === false){
            column.toggleSorting("desc");
        }
      return (
        <div className="flex items-center gap-1">
          <p>ID</p>
          <TbArrowsDownUp
            className="cursor-pointer"
            onClick={() =>{
                otherColumnIsSorting = !otherColumnIsSorting;
                column.toggleSorting(column.getIsSorted() === "asc")
            } }
          />
        </div>
      );
    },
    cell: ({ row }) => `${row.original.id}`,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-1">
          <p>Date</p>
          <TbArrowsDownUp
            className="cursor-pointer"
            onClick={() => {
                otherColumnIsSorting = !otherColumnIsSorting;
                column.toggleSorting(column.getIsSorted() === "asc")
            }}
          />
        </div>
      );
    },
    cell: ({ row }) => `${row.original.date}`,
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Amount</p>
          <TbArrowsDownUp
            className=" cursor-pointer"
            onClick={() => {
                otherColumnIsSorting = !otherColumnIsSorting;
                column.toggleSorting(column.getIsSorted() === "asc")}}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <p>₱</p>
          <span
            className={`font-semibold px-2 py-1 rounded text-xs ${
              row.original.transactionType === "Sales"
                ? " bg-emerald-100 text-emerald-700"
                : " bg-rose-100 text-rose-700"
            }`}
          >
            {row.original.value}
          </span>
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Name</p>
          <TbArrowsDownUp
            className=" cursor-pointer"
            onClick={() => {
                otherColumnIsSorting = !otherColumnIsSorting;
                column.toggleSorting(column.getIsSorted() === "asc")}}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "entity",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-1">
          <p>Entity</p>
          <TbArrowsDownUp
            className=" cursor-pointer"
            onClick={() => {
                otherColumnIsSorting = !otherColumnIsSorting;
                column.toggleSorting(column.getIsSorted() === "asc")}}
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
];
