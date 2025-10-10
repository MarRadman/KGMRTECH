import { Request, Response } from "express";
import { pool } from "../db/index";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, email FROM users ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
