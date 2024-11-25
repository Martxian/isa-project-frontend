// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sample user data to visualize
    // setTimeout(() => {
    //   setUsers([
    //     [1, 'user1@example.com', 10],
    //     [2, 'user2@example.com', 5],
    //     [3, 'user3@example.com', 15]
    //   ]);
    //   setIsLoading(false);
    // }, 2000); // Simulate 2 seconds loading time

    async function fetchUsers() {
      const queryText = JSON.stringify({
        query: "SELECT id, email, counter FROM users",
      });
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: queryText,
        });

        if (!response.ok) {
          throw new Error("Error fetching users");
        }

        const data = await response.json();
        setUsers(data.result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const displayUsersTable = (users) => {
    const headers = ["ID", "Email", "API usage"];

    return (
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {users.map((user, index) => (
            <tr key={index}>
              {/* ID */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                {user[0]}
              </td>

              {/* Email */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {user[1]}
              </td>

              {/* API usage */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {user[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Users Table</h1>
      {error && <ErrorMessage message={error} />}
      <div
        id="table-container"
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : users.length > 0 ? (
          displayUsersTable(users)
        ) : (
          <p className="text-gray-300">No users found.</p>
        )}
      </div>
    </main>
  );
}
