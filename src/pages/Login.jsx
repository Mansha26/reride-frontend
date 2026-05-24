import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8e2d9]">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-full max-w-md p-8 rounded-2xl shadow-md"
      >
        
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Employee Login
        </h2>

        <div className="relative mb-4">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="relative mb-6">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;