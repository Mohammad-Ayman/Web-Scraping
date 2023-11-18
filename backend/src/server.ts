import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToMongo, clearDatabase } from "./db/connection.js";
import apiRoutes from "./routes/apiRoutes.js";
import fetchRoute from "./routes/fetchRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/api", apiRoutes);
app.use("/fetch", fetchRoute);
const server = app.listen(port, async () => {
  console.log(`App running on http://localhost:${port}`);
  await connectToMongo();
  // await clearDatabase();
});

export default server;
