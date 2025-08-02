import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-blue-900 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-[100]">
      <div className="text-xl font-bold text-white">EdTech</div>

      <div className="flex items-center gap-4 relative">
        <button className="text-white">
          <FaBell size={20} />
        </button>

        <div
          className="flex items-center gap-1 cursor-pointer relative group text-white"
          onClick={() => setDropdownOpen((prev) => !prev)}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <FaUserCircle size={24} className="text-white" />
          <span className="hidden sm:block font-medium text-white">Rahul</span>
          <IoMdArrowDropdown className="text-gray-600" />

          {dropdownOpen && (
            <div className="absolute right-0 top-10 w-40 bg-white border rounded-lg shadow-md z-50 text-black">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
