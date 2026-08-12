// apps/web/src/components/ApplicationCard.tsx

// imports
import type { Status } from "@job-tracker/shared-types";
import { STATUS_LABELS } from "../utils/statusLabels";

interface ApplicationCardProps {
    company: string;
    role: string;
    status: Status;
    dateApplied: string;
    jobPostingUrl: string;
    notes: string | null;
}

function ApplicationCard({ company, role, status, dateApplied, jobPostingUrl, notes }: ApplicationCardProps) {
    const formattedDate = new Date(dateApplied).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
    })

    return (
        <div className="application-card">
            <h1>{company}</h1>
            <h2>{role}</h2>
            <p>Status: {STATUS_LABELS[status]}</p>
            <p>Date Applied: {formattedDate}</p>
            <p>Job Posting URL: <a href={jobPostingUrl} target="_blank" rel="noopener noreferrer">Link</a></p>
            {notes && <p>Notes: {notes}</p>}
        </div>
    )
}

export default ApplicationCard;