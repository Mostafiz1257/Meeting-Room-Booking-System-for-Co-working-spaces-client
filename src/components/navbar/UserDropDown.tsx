import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { currentUser, logout } from "../../redux/features/auth/authSlice";
import { FiLogOut, FiLogIn, FiUser, FiGrid } from "react-icons/fi";

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(currentUser);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", closeDropdown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeDropdown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className="relative sm:ml-6" ref={dropdownRef}>
      <div className="flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
        >
          <img
            className="h-8 w-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-[120px] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            {user ? (
              <>
                {user.role === "user" && (
                  <Link
                    to="/my-bookings"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiUser className="mr-2" />
                    My Bookings
                  </Link>
                )}
                {user?.role === "admin" && (
                  <Link
                    to="/dashboard/dashboard/admin/all-rooms"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiGrid className="mr-2" />
                    Dashboard
                  </Link>
                )}
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeDropdown}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FiLogIn className="mr-2" />
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropDown;
