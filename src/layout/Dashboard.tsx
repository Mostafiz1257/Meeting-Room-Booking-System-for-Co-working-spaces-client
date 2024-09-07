import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 ">
      <button
        className="p-2 text-white bg-[#003580] sm:hidden"
        onClick={toggleSidebar}
      >
        <FiMenu size={24} />
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow  bg-white overflow-auto">
        <div className="bg-[#003580] shadow-md fixed w-full ">
          <div className="flex-shrink-0 flex p-3 items-center ">
            <Link to="/" className="text-2xl font-poppins font-bold text-white">
              Meeting Hub
            </Link>
          </div>
        </div>
        <div className="mt-[60px]">

        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
