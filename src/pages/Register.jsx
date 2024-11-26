// 
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";

export default function Register() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const registerUrl = "https://isa-singh.azurewebsites.net/register";
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Registration failed");

      navigate("/login?registered=true");
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Form
      title="Create your account"
      onSubmit={handleSubmit}
      buttonText="Register"
    >
      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="email" className="text-gray-300 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-600 
            text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-transparent transition-all duration-200"
            placeholder="Choose a secure password"
          />
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
      <p className="mt-2 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-400">
          Sign in
        </Link>
      </p>
    </Form>
  );
}
