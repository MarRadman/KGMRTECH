const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function createUser(data: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}
