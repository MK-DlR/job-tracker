// packages/database/src/index.ts

// imports
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

// exports
export { Status, FollowUpState } from "./generated/prisma/enums.js";
export { PrismaClient, Prisma } from "./generated/prisma/client.js";
export type { ApplicationModel, ApplicationCreateInput } from "./generated/prisma/models/Application.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });