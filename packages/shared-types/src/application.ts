// packages/shared-types/src/application.ts

// imports
import type { ApplicationCreateInput } from "@job-tracker/database";

export type CreateApplicationInput = Omit<ApplicationCreateInput, "createdAt" | "updatedAt">;