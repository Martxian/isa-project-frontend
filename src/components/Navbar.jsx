// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("email");
    window.location.reload();
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-700"
      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-200";
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Quetzal
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className={getLinkClass("/dashboard")}>
                  Dashboard
                </Link>
                <Link to="/detect" className={getLinkClass("/detect")}>
                  Detect
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={getLinkClass("/login")}>
                  Login
                </Link>
                <Link to="/register" className={getLinkClass("/register")}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
