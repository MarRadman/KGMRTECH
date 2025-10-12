import { Request, Response } from "express";
import { pool } from "@/db";

/**
 * Get all users
 */
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("This happened");
    const result = await pool.query("SELECT * FROM users");
    console.log(result);
    res.json(result.rows);
  } catch (error: any) {
    console.error("Database error:", error.message);
    res.status(500).json({ error: "Database error" });
  }
};

/**
 * Create new users
 */
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users (username, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, username, email`,
      [username, email, password]
    );

    res.status(201).json(result.rows[0]);
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Error creating user" });
  }
};
