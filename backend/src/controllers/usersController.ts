import { Request, Response } from "express";
import { pool } from "@/db";
import bcrypt from "bcrypt";

/**
 * Get all users
 */
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all users...");
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error: any) {
    console.error("Database error:", error.message);
    res.status(500).json({ error: "Database error" });
  }
};

/**
 * Create new user
 */
export const createUser = async (req: Request, res: Response) => {
  console.log("Trying to Create user");

  const { username, email, password, address, phone_number, country, token } =
    req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, email, password_hash, address, phone_number, country, token, created_at, deleted_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), false)
       RETURNING user_id, username, email, address, phone_number, country`,
      [username, email, password_hash, address, phone_number, country, token]
    );
    res.status(201).json(result.rows[0]);
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Error creating user" });
  }
};
