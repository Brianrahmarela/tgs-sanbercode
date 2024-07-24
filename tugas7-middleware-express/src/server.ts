import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

import express from "express";
import router from "./routes/route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
