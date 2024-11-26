// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const authUrl = "https://isa-singh.azurewebsites.net/login";
      const response = await fetch(authUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error("Login failed");

      navigate("/");
    } catch (error) {
      setError("Invalid username or password.");
    }
  };

  return (
    <Form
      title="Sign in to your account"
      onSubmit={handleSubmit}
      buttonText="Sign in"
    >
      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="email" className="text-gray-300 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
            text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-gray-300 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
            text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-transparent transition-all duration-200"
            placeholder="Enter your password"
          />
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
      <div className="flex justify-between mt-4">
        <Link
          to="/register"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Create an account
        </Link>
        <Link
          to="/forgot"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Forgot your password?
        </Link>
      </div>
    </Form>
  );
}
