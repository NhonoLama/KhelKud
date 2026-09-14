import express from "express";
import { checkConnection } from "./config/database.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { notFoundHandler } from "./middleware/not-found.middleware.js";
import sportsRouter from "./routes/sports.js";

const app = express();

app.use(express.json());
app.use("/api/sports", sportsRouter);

app.get("/health/database", async (_req, res) => {
  try {
    await checkConnection();

    res.json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(503).json({
      status: "error",
      database: "disconnected",
    });
  }
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "khelkud-api",
  });
});

app.use(notFoundHandler);

app.use(errorHandler);

export default app;