// apps/api/src/routes/applications.ts

// imports
import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "@job-tracker/database";
import type { CreateApplicationInput } from "@job-tracker/shared-types";

const router = Router();

// create application
router.post("/", async (req: Request<{}, {}, CreateApplicationInput>, res: Response) => {
    const application = await prisma.application.create({
        data: req.body,
    });
    res.status(201).json(application);
});

// get applications
router.get("/", async (req: Request, res: Response) => {
    const applications = await prisma.application.findMany();
    res.json(applications);
});

// get specific application
router.get("/:id", async (req: Request<{id: string}>, res: Response) => {
    const application = await prisma.application.findUnique({
        where: { id: Number(req.params.id) },
    });

    if (!application) {
        return res.status(404).json({ error: "Application not found" });
    } 

    res.json(application);
});

export default router;