// packages/database/prisma/seed.ts

// imports
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.application.deleteMany();

    await prisma.application.createMany({
        data: [
        {
            company: "Acme Robotics",
            role: "Junior Frontend Developer",
            website: "https://acme-robotics.example.com",
            jobPostingUrl: "https://acme-robotics.example.com/careers/123",
            status: "INTERVIEWING",
            dateApplied: new Date("2026-08-01"),
            easyApply: false,
            resumeVersion: "https://example.com/resume/frontend-focused",
            coverLetter: "https://example.com/cover-letters/acme",
            followUp3Day: "DONE",
            followUp1Week: "NOT_APPLICABLE",
            followUp2Week: "NOT_APPLICABLE",
            notes: "Recruiter call went well, waiting on tech interview scheduling.",
        },
        {
            company: "Globex Corp",
            role: "Full Stack Engineer",
            jobPostingUrl: "https://globex.example.com/jobs/456",
            status: "APPLIED",
            dateApplied: new Date("2026-08-10"),
            easyApply: true,
            resumeVersion: "https://example.com/resume/generic",
            followUp3Day: "DONE",
            followUp1Week: "PENDING",
            followUp2Week: "NOT_APPLICABLE",
        },
        {
            company: "Initrode Systems",
            role: "Backend Developer",
            website: "https://initrode.example.com",
            jobPostingUrl: "https://initrode.example.com/jobs/789",
            status: "OFFERED",
            dateApplied: new Date("2026-07-15"),
            easyApply: false,
            resumeVersion: "https://example.com/resume/backend-focused",
            followUp3Day: "PENDING",
            followUp1Week: "NOT_APPLICABLE",
            followUp2Week: "NOT_APPLICABLE",
            notes: "Received offer, negotiating start date.",
        },
        {
            company: "Umbrella Applications",
            role: "QA Engineer",
            jobPostingUrl: "https://umbrella.example.com/careers/321",
            status: "REJECTED",
            dateApplied: new Date("2026-06-20"),
            easyApply: true,
            resumeVersion: "https://example.com/resume/generic",
            followUp3Day: "DONE",
            followUp1Week: "DONE",
            followUp2Week: "DONE",
            notes: "Rejected after final round.",
        },
        {
            company: "Stark Web Solutions",
            role: "Junior Developer",
            jobPostingUrl: "https://stark-web.example.com/jobs/654",
            status: "GHOSTED",
            dateApplied: new Date("2026-07-01"),
            easyApply: false,
            resumeVersion: "https://example.com/resume/generic",
            followUp3Day: "PENDING",
            followUp1Week: "NOT_APPLICABLE",
            followUp2Week: "NOT_APPLICABLE",
            notes: "No response since applying.",
        },
        ],
    });

    console.log("Seed data created.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
});