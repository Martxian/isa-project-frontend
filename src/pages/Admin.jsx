// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const queryText = JSON.stringify({
        query: "SELECT id, email, counter FROM users",
      });
      try {
        const response = await fetch("/query", {
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
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      fetchUsers();
    }, 1000);
    // fetchUsers();
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                {user[0]}
              </td>{" "}
              {/* ID */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {user[1]}
              </td>{" "}
              {/* Email */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {user[2]}
              </td>{" "}
              {/* API usage */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Users Table</h1>
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
