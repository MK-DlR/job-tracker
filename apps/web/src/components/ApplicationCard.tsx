// apps/web/src/components/ApplicationCard.tsx

// imports
import type { Status } from "@job-tracker/shared-types";
import { STATUS_LABELS, STATUS_COLORS } from "../utils/statusLabels";
import { followUp, followUpLabel } from "../utils/followUp";

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
    followUp3Day: boolean;
    followUp1Week: boolean;
    followUp2Week: boolean;
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
    followUp3Day,
    followUp1Week,
    followUp2Week,
    notes 
    }: ApplicationCardProps) {
        // format date as MM/DD/YY
        const formattedDate = new Date(dateApplied).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
            timeZone: "UTC",
        })

        // check for follow up due dates
        const followUpStatus = followUp(dateApplied);

        // applications card display
        return (
            <div className="application-card">
                <div className="card-header">
                    <div>
                    <h2>{website ? <a href={website} target="_blank" rel="noopener noreferrer">{company}</a> : company}</h2>
                    <a className="role-link" href={jobPostingUrl} target="_blank" rel="noopener noreferrer">{role}</a>
                    </div>
                    <span className="status-pill" style={{ color: STATUS_COLORS[status] }}>
                    {STATUS_LABELS[status]}
                    </span>
                </div>

                <div className="meta-row">
                    <span><b>Applied:</b> {formattedDate}</span>
                    {applicationContact && <span><b>Contact:</b> {applicationContact}</span>}
                    {connections && <span><b>Connections:</b> {connections}</span>}
                    <span><b>Easy Apply:</b> {easyApply ? "Yes" : "No"}</span>
                </div>

                <div className="actions-row">
                    <a href={resumeVersion} target="_blank" rel="noopener noreferrer">Resume →</a>
                    {coverLetter && <a href={coverLetter} target="_blank" rel="noopener noreferrer">Cover Letter →</a>}
                    {jobDescription && <a href={jobDescription} target="_blank" rel="noopener noreferrer">Job Description →</a>}
                </div>

                <div className="follow-up-section">
                <span><span className="follow-up-label">3 Days:</span> {followUpLabel(followUp3Day, followUpStatus.threeDay.due)}</span>
                <span><span className="follow-up-label">1 Week:</span> {followUpLabel(followUp1Week, followUpStatus.oneWeek.due)}</span>
                <span><span className="follow-up-label">2 Weeks:</span> {followUpLabel(followUp2Week, followUpStatus.twoWeek.due)}</span>
                </div>

                {notes && <p className="notes">Notes: {notes}</p>}
            </div>
        );
}

export default ApplicationCard;