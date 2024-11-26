// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
          404 - Page Not Found
        </h1>
        <p className="text-center text-gray-300">The page you are looking for does not exist.</p>
        <div className="flex justify-center">
          <img src="/notfound.gif" alt="Drone GIF" className="w-64 h-auto" />
        </div>
        <div className="text-center mt-4">
          <Link to="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
