// src/pages/Message.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Message() {
  const [message, setMessage] = useState("");
  const [anchor, setAnchor] = useState("");
  const [link, setLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setMessage(params.get("message") || "Nothing to see here");
    setAnchor(params.get("anchor") || "");
    setLink(params.get("link") || "");
  }, [location.search]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
        <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {message}
        </h2>
        {anchor && (
          <Link
            to={link}
            className="text-blue-500 hover:text-blue-400 text-center block mt-4"
          >
            {anchor}
          </Link>
        )}
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-400 text-center block mt-4"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
