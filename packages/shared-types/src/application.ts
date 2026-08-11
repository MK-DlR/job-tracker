// packages/shared-types/src/application.ts

// imports
import type { ApplicationCreateInput } from "@job-tracker/database";
import type { Status } from "./status.js";

export type CreateApplicationInput = Omit<ApplicationCreateInput, "createdAt" | "updatedAt">;
export type UpdateApplicationInput = Partial<CreateApplicationInput>;

export type StatusCounts = {
    [key in Status]: number;
};