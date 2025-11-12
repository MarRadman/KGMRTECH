"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/lib/services/usersApi";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 text-white">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <ul className="space-y-2">
        {users.map((u) => (
          <li
            key={u.user_id}
            className="p-3 bg-gray-900 rounded border border-gray-700">
            <strong>{u.username}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
