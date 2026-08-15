// apps/web/src/utils/statusLabels.ts

import type { Status } from "@job-tracker/shared-types";

export const STATUS_LABELS: Record<Status, string> = {
    APPLIED: "Applied",
    INTERVIEWING: "Interviewing",
    OFFERED: "Offered",
    REJECTED: "Rejected",
    GHOSTED: "Ghosted",
}

export const STATUS_COLORS: Record<Status, string> = {
    APPLIED: "var(--status-applied)",
    INTERVIEWING: "var(--status-interviewing)",
    OFFERED: "var(--status-offered)",
    REJECTED: "var(--status-rejected)",
    GHOSTED: "var(--status-ghosted)",
};