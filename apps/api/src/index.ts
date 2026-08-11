// apps/api/src/index.ts

// imports
import "dotenv/config";
import express from "express";
import { prisma } from "@job-tracker/database";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

