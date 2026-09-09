import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "khelkud-api",
  });
});

app.listen(PORT, () => {
  console.log(`KhelKud API running on http://localhost:${PORT}`);
});