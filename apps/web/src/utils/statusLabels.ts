// apps/web/src/utils/statusLabels.ts

import type { Status } from "@job-tracker/shared-types";

export const STATUS_LABELS: Record<Status, string> = {
    APPLIED: "Applied",
    INTERVIEWING: "Interviewing",
    OFFERED: "Offered",
    REJECTED: "Rejected",
    GHOSTED: "Ghosted",
}