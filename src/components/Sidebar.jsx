import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  FaHome,
  FaBook,
  FaFileAlt,
  FaChartLine,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/theme/themeSlice";
import { LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <FaHome />, route: "/dashboard" },
  { label: "My Courses", icon: <FaBook />, route: "/courses" },
  { label: "Resume Tool", icon: <FaFileAlt />, route: "/resume-tool" },
  { label: "Progress", icon: <FaChartLine />, route: "/progress" },
  { label: "Messages", icon: <FaEnvelope />, route: "/messages" },
  { label: "Settings", icon: <FaCog />, route: "/settings" },
  // { label: "Logout", icon: <FaSignOutAlt />, route: "/logout" },
];

const ToggleButton = ({ sidebarToggle }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <span className="text-xl">
        {sidebarToggle ? <FaToggleOn /> : <FaToggleOff />}
      </span>
      {sidebarToggle && (
        <span className="text-sm font-medium">Toggle Sidebar</span>
      )}
    </button>
  );
};

const SidebarDesktop = ({ sidebarToggle }) => (
  <div
    className={`hidden md:flex h-screen bg-blue-900 text-white flex-col transition-all duration-300 rounded-br-lg rounded-tr-lg ${
      sidebarToggle ? "w-45 pl-4" : "w-20 pl-2"
    } py-6`}
  >
    <div
      className={`text-center font-bold text-xl mb-10 transition-opacity duration-300 ${
        sidebarToggle ? "opacity-100" : "opacity-0"
      }`}
    >
      🎓 EdTech
    </div>

    <nav className="flex flex-col gap-2">
      <ToggleButton sidebarToggle={sidebarToggle} />
      {navItems.map((item, index) => (
        <NavLink
          to={item.route}
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 transition-colors rounded-tl-lg rounded-bl-lg ${
              isActive ? "bg-gray-100 text-blue-900" : "text-white bg-blue-900"
            }`
          }
        >
          <span className="text-lg">{item.icon}</span>
          {sidebarToggle && (
            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          )}
        </NavLink>
      ))}
      <div
        onClick={() => toast.success("Logged out successfully")}
        className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-tl-lg rounded-bl-lg `}
      >
        <span className="text-lg">
          <LogOut />
        </span>
        {sidebarToggle && (
          <span className="text-sm font-medium whitespace-nowrap">Logout</span>
        )}
      </div>
    </nav>
  </div>
);

const BottomNavMobile = () => (
  <div className="fixed bottom-0 left-0 w-full h-[4rem] bg-blue-900 text-white flex justify-around items-center py-2 px-1 md:hidden z-50 border-t border-blue-700 overflow-auto">
    {navItems.map((item, index) => (
      <NavLink
        to={item.route}
        key={index}
        className={({ isActive }) =>
          `flex flex-col items-center text-xs gap-1 mx-2 ${
            isActive ? "text-white" : "text-blue-300"
          }`
        }
      >
        <span className="text-xl">{item.icon}</span>
      </NavLink>
    ))}

    <div
      onClick={() => toast.success("Logged out successfully")}
      className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-tl-lg rounded-bl-lg `}
    >
      <span className="text-lg">
        <LogOut />
      </span>
    </div>
  </div>
);

const Sidebar = () => {
  const sidebarToggle = useSelector((state) => state.theme.sidebarToggle);

  return (
    <>
      <SidebarDesktop sidebarToggle={sidebarToggle} />
      <BottomNavMobile />
    </>
  );
};

export default Sidebar;
