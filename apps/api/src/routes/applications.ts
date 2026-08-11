// apps/api/src/routes/applications.ts

// imports
import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "@job-tracker/database";
import type { CreateApplicationInput } from "@job-tracker/shared-types";

const router = Router();

router.post("/", async (req: Request<{}, {}, CreateApplicationInput>, res: Response) => {
    const application = await prisma.application.create({
        data: req.body,
    });
    res.status(201).json(application);
})

export default router;