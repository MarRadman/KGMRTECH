import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

console.log(`Getting the DB data: ${process.env.DATABASE_URL}`);

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
