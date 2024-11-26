// src/pages/Forgot.jsx
import { useState } from "react";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("Password reset email sent successfully");
  };

  return (
    <Form
      title="Forgot Password"
      onSubmit={handleSubmit}
      buttonText="Send Reset Email"
    >
      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="email" className="text-gray-300 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
            text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-transparent transition-all duration-200"
            placeholder="email@provider.com"
          />
        </div>
      </div>
      {message && (
        <div className="mt-4 bg-green-900/30 border border-green-500/50 rounded-lg p-4">
          <p className="text-green-400 text-sm text-center">{message}</p>
        </div>
      )}
      {error && <ErrorMessage message={error} />}
    </Form>
  );
}
