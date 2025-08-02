import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-blue-900 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-[100]">
      <div className="text-xl font-bold">EdTech</div>

      <div className="flex items-center gap-4 relative">
        <NavLink to="/messages" className="relative">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </NavLink>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 cursor-pointer text-white"
          >
            <FaUserCircle size={24} />
            <span className="hidden sm:block font-medium">Rahul</span>
            <IoMdArrowDropdown className="text-gray-300" />
          </button>

          {dropdownOpen && (
            <div className="overflow-clip absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50 text-black">
              <ul className="flex flex-col">
                <NavLink to="/profile">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                </NavLink>
                <NavLink to="/settings">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                </NavLink>
                <NavLink to="/logout">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
