// apps/api/src/index.ts

// imports
import "dotenv/config";
import express from "express";
import cors from "cors";
import applicationsRouter from "./routes/applications.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// middleware
app.use(express.json()); 
app.use(cors({ origin: "http://localhost:5173" }));

// routes
app.use("/applications", applicationsRouter);
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

