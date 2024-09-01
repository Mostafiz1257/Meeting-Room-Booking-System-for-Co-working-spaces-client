import { NavLink } from "react-router-dom";
import { FiX, FiHome, FiPlusSquare, FiList, FiClock, FiUsers, FiBookOpen } from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 bg-gray-200 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 bg-white text-[#003580] flex flex-col sm:relative sm:translate-x-0 z-50`}
      >
        <div className="p-3 bg-[#003580] text-3xl font-poppins font-bold text-white">
          <h2 className="text-2xl font-semibold">Admin</h2>
        </div>
        <nav className="flex-grow p-4 bg-gray-300">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <hr className="border-gray-400" />
            <li>
              <NavLink
                to="dashboard/admin/create-room"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiPlusSquare className="mr-2" />
                Create Room
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard/admin/all-rooms"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiList className="mr-2" />
                All Rooms
              </NavLink>
            </li>
            <hr className="border-gray-400" />
            <li>
              <NavLink
                to="dashboard/admin/create-slot"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiPlusSquare className="mr-2" />
                Create Slot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard/admin/all-slots"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiClock className="mr-2" />
                All Slots
              </NavLink>
            </li>
            <hr className="border-gray-400" />
            <li>
              <NavLink
                to="dashboard/admin/all-bookings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiBookOpen className="mr-2" />
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard/admin/all-users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded hover:bg-[#003580] hover:text-white ${
                    isActive ? "bg-[#003580] text-white" : ""
                  }`
                }
              >
                <FiUsers className="mr-2" />
                All Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="absolute top-4 right-4 text-white sm:hidden"
          onClick={toggleSidebar}
        >
          <FiX size={24} />
        </button>
      </div>
    </>
  );
};
