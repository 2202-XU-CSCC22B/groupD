import React from "react";

const RecipientSelect = ({ selectedOption, handleOptionChange }) => {
  return (
    <ul className="grid w-fit grid-cols-2">
      <li>
        <input
          type="radio"
          id="staffID"
          value="staffs"
          checked={selectedOption === "staffs"}
          onChange={handleOptionChange}
          className="hidden peer"
          required
        />
        <label
          for="staffID"
          className="inline-flex items-center justify-between w-full px-3 py-2 text-gray-900 border cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-white hover:bg-gray-900"
        >
          <div className="block mx-auto">
            <div className="w-full text-sm">Staffs</div>
          </div>
        </label>
      </li>
      <li>
        <input
          type="radio"
          id="memberID"
          value="members"
          checked={selectedOption === "members"}
          onChange={handleOptionChange}
          className="hidden peer"
        />
        <label
          for="memberID"
          className="inline-flex items-center justify-between w-full px-3 py-2 text-gray-900 border cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-white hover:bg-gray-900"
        >
          <div className="block mx-auto">
            <div className="w-full text-sm">Members</div>
          </div>
        </label>
      </li>
    </ul>
  );
};

export default RecipientSelect;
