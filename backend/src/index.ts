import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/users";
import createUserRoute from "./routes/users";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/createUser", createUserRoute);

app.get("/", (_, res) => res.send("API is running 🚀"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
