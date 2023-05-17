import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const Table = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <table className=" table-auto text-gray-900">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Membership Status</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.membershipStatus}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(!isOpen);
                    }}
                    className=""
                  >
                    ...
                  </button>
                </td>
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
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white"></Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Table;
