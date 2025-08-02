import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaFileAlt,
  FaChartLine,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/theme/themeSlice";

const navItems = [
  { label: "Dashboard", icon: <FaHome />, route: "/dashboard" },
  { label: "My Courses", icon: <FaBook />, route: "/courses" },
  { label: "Resume Tool", icon: <FaFileAlt />, route: "/resume-tool" },
  { label: "Progress", icon: <FaChartLine />, route: "/progress" },
  { label: "Messages", icon: <FaEnvelope />, route: "/messages" },
  { label: "Settings", icon: <FaCog />, route: "/settings" },
  { label: "Logout", icon: <FaSignOutAlt />, route: "/logout" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((state) => state.theme.sidebarToggle);

  return (
    <div
      className={`h-screen bg-blue-900 text-white flex flex-col p-4 transition-all duration-300 ${
        sidebarToggle ? "w-64" : "w-20"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-8 text-center transition-opacity duration-300 ${
          sidebarToggle ? "opacity-100" : "opacity-0"
        }`}
      >
        🎓 EdTech
      </h2>

      <nav className="flex flex-col gap-4">
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {sidebarToggle ? "Toggle Sidebar" : "≡"}
        </div>

        {navItems.map((item, index) => (
          <NavLink
            to={item.route}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition ${
                isActive ? "bg-blue-700" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {sidebarToggle && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
