import express from "express";
import { AppDataSource } from "./database";

const app = express();
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
  res.send("Hello, Express + TypeORM!");
});

// Connect to the database
AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:", 3000);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
