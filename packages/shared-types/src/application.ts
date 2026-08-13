// packages/shared-types/src/application.ts

// imports
import type { ApplicationCreateInput, ApplicationModel } from "@job-tracker/database";
import type { Status } from "./status.js";

// exports
export type { ApplicationModel };

export type CreateApplicationInput = Omit<ApplicationCreateInput, "createdAt" | "updatedAt">;
export type UpdateApplicationInput = Partial<CreateApplicationInput>;

export type StatusCounts = {
    [key in Status]: number;
};

export type ApplicationResponse = Omit<ApplicationModel, "dateApplied" | "createdAt" | "updatedAt"> & {
    dateApplied: string;
    createdAt: string;
    updatedAt: string;
};