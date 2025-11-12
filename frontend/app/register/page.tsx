"use client";

import { useState } from "react";
import { createUser } from "@/lib/services/usersApi";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await createUser(form);
      setMessage(`User "${newUser.username}" created successfully!`);
      setForm({ username: "", email: "", password: "" });
    } catch {
      setMessage("Error creating user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl shadow-lg text-white">
      <h1 className="text-2xl mb-4 font-bold">Register User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
          type="submit">
          Create User
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
