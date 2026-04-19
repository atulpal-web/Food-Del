import express from "express";

const app = express();

app.use(express.json());

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working 🚀" });
});

export default app;