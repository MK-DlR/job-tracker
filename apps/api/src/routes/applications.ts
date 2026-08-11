// apps/api/src/routes/applications.ts

// imports
import { Router } from "express";
import type { Request, Response } from "express";
import { prisma, Prisma } from "@job-tracker/database";
import type { CreateApplicationInput, UpdateApplicationInput } from "@job-tracker/shared-types";

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
router.get("/:id", async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const application = await prisma.application.findUnique({
        where: { id: Number(req.params.id) },
    });

    if (!application) {
        res.status(404).json({ error: "Application not found" });
        return;
    } 

    res.json(application);
});

// update specific application
router.put("/:id", async (req: Request<{id: string}, {}, UpdateApplicationInput>, res: Response): Promise<void> => {
    try {
        const application = await prisma.application.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(application);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            res.status(404).json({ error: "Application not found" });
            return;
        }
        throw error; 
    }
});

// delete specific application
router.delete("/:id", async (req: Request<{id: string}>, res: Response): Promise<void> => {
    try {
        await prisma.application.delete({
            where: { id: Number(req.params.id) },
        });
        res.status(204).send();
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            res.status(404).json({ error: "Application not found" });
            return;
        }
        throw error; 
    }
});

export default router;