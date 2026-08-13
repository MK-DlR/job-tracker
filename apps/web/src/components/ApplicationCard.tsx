// apps/web/src/components/ApplicationCard.tsx

// imports
import type { Status } from "@job-tracker/shared-types";
import { STATUS_LABELS } from "../utils/statusLabels";

interface ApplicationCardProps {
    company: string;
    role: string;
    website: string | null;
    jobPostingUrl: string;
    applicationContact: string | null;
    connections: string | null;
    status: Status;
    dateApplied: string;
    easyApply: boolean;
    resumeVersion: string;
    coverLetter: string | null;
    jobDescription: string | null;
    notes: string | null;
}

// use application data for applications card display
function ApplicationCard({ 
    company, 
    role, 
    website, 
    jobPostingUrl, 
    applicationContact, 
    connections,
    status, 
    dateApplied, 
    easyApply,
    resumeVersion,
    coverLetter,
    jobDescription,
    notes 
    }: ApplicationCardProps) {
    const formattedDate = new Date(dateApplied).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
    })

    // applications card display
    return (
        <div className="application-card">
            <h1>{website ? <a href={website} target="_blank" rel="noopener noreferrer">{company}</a> : company}</h1>
            <h2><a href={jobPostingUrl} target="_blank" rel="noopener noreferrer">{role}</a></h2>
            {applicationContact && <p>Application Contact: {applicationContact}</p>}
            {connections && <p>Connections: {connections}</p>}
            <p>Status: {STATUS_LABELS[status]}</p>
            <p>Date Applied: {formattedDate}</p>
            <p>Easy Apply: {easyApply ? "Yes" : "No"}</p>
            <p><a href={resumeVersion} target="_blank" rel="noopener noreferrer">Resume</a></p>
            {coverLetter && <p><a href={coverLetter} target="_blank" rel="noopener noreferrer">Cover Letter</a></p>}
            {jobDescription && <p><a href={jobDescription} target="_blank" rel="noopener noreferrer">Job Description</a></p>}
            {notes && <p>Notes: {notes}</p>}
        </div>
    )
}

export default ApplicationCard;