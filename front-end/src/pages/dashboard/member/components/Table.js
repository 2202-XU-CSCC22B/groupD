import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import TableHead from "./ui/TableHead";
import TableData from "./ui/TableData";

const Table = ({ visibleData, data }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // table styling in global css
  return (
    <>
      <table className="my-table table-auto text-gray-900 p-6">
        <thead>
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Membership Status</TableHead>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <TableData>{item.id}</TableData>
                <TableData>{item.firstName}</TableData>
                <TableData>{item.lastName}</TableData>
                <TableData className=" flex items-center justify-center">
                  <span
                    className={`border rounded text-xs uppercase px-2 py-1 ${
                      item.membershipStatus === "ACTIVE"
                        ? "bg-emerald-100 text-emerald-700"
                        : " bg-rose-100 text-rose-700"
                    }`}
                  >
                    {item.membershipStatus}
                  </span>
                </TableData>
                <TableData className=" border-none">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(!isOpen);
                    }}
                    className=" underline text-sm text-blue-600"
                  >
                    View details
                  </button>
                </TableData>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selectedItem && (
        <Dialog
          open={true}
          onClose={() => setSelectedItem(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded border bg-white"></Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Table;
