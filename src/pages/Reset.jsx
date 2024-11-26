// src/pages/PasswordReset.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const getUrlParameter = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const authUrl = "https://isa-singh.azurewebsites.net/reset-password";
      const response = await fetch(authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) throw new Error("Failed to reset password");

      navigate(
        "/message?message=Password reset successfully&anchor=Go to login&link=/login"
      );
    } catch (error) {
      setError("Invalid password reset request.");
    }
  };

  return (
    <Form
      title="Reset Password"
      onSubmit={handleSubmit}
      buttonText="Reset Password"
    >
      <div className="space-y-4 rounded-md">
        <div>
          <label
            htmlFor="password"
            className="text-gray-300 text-sm font-medium"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
            text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-transparent transition-all duration-200"
            placeholder="Enter new password"
          />
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
    </Form>
  );
}
