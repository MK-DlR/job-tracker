// apps/api/src/index.ts

// imports
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});