import { Link } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const user = useAppSelector(currentUser);
  const userRole = user?.role;

  return (
    <nav className="bg-[#003580] shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold font-poppins text-white hover:text-gray-300 transition duration-300"
            >
              <span className="text-4xl">Q</span>uickSlot
            </Link>
          </div>

          
          <div className="hidden sm:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/meeting-rooms"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Meeting Rooms
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contract-us"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact Us
            </Link>

     
            {!userRole && (
              <Link
                to="/login"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Login/Register
              </Link>
            )}
          </div>

         
          <div className="flex items-center space-x-4">
            <UserDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
