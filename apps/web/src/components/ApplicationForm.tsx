// apps/web/src/components/ApplicationForm.tsx

// imports
import React, { useState } from "react";
import { API_URL } from "../config";
import type { CreateApplicationInput, Status } from "@job-tracker/shared-types";

// props interface
interface ApplicationFormProps {
    onSuccess: () => void;
}

function ApplicationForm({ onSuccess }: ApplicationFormProps) {
    const [formData, setFormData] = useState<CreateApplicationInput>({
        company: "",
        role: "",
        website: null,
        jobPostingUrl: "",
        applicationContact: null,
        connections: null,
        status: "APPLIED",
        dateApplied: new Date().toISOString(),
        easyApply: false,
        resumeVersion: "",
        coverLetter: null,
        jobDescription: null,
        followUp3Day: false,
        followUp1Week: false,
        followUp2Week: false,
        notes: null,
    });

    // submit handler
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        await fetch(`${API_URL}/applications`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        onSuccess();
    }

    return <form onSubmit={handleSubmit}>
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />

                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />

                <label htmlFor="website">Website:</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website || ""}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />

                <label htmlFor="jobPostingUrl">Job Listing:</label>
                <input
                    type="text"
                    id="jobPostingUrl"
                    name="jobPostingUrl"
                    value={formData.jobPostingUrl}
                    onChange={(e) => setFormData({ ...formData, jobPostingUrl: e.target.value })}
                />

                <label htmlFor="applicationContact">Contact:</label>
                <input
                    type="text"
                    id="applicationContact"
                    name="applicationContact"
                    value={formData.applicationContact || ""}
                    onChange={(e) => setFormData({ ...formData, applicationContact: e.target.value })}
                />

                <label htmlFor="connections">Connections:</label>
                <input
                    type="text"
                    id="connections"
                    name="connections"
                    value={formData.connections || ""}
                    onChange={(e) => setFormData({ ...formData, connections: e.target.value })}
                />

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}
                >
                    <option value="APPLIED">Applied</option>
                    <option value="INTERVIEWING">Interviewing</option>
                    <option value="OFFERED">Offered</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="GHOSTED">Ghosted</option>
                </select>

                <label htmlFor="dateApplied">Date Applied:</label>
                <input
                    type="date"
                    id="dateApplied"
                    name="dateApplied"
                    value={new Date(formData.dateApplied ?? new Date()).toISOString().slice(0, 10)}
                    onChange={(e) => setFormData({ ...formData, dateApplied: new Date(e.target.value).toISOString() })}
                />

                <label htmlFor="easyApply">Easy Apply?</label>
                <input 
                    type="checkbox" 
                    id="easyApply"
                    checked={formData.easyApply}
                    onChange={(e) => setFormData({ ...formData, easyApply: e.target.checked })}
                />

                <label htmlFor="resumeVersion">Resume Version:</label>
                <input
                    type="text"
                    id="resumeVersion"
                    name="resumeVersion"
                    value={formData.resumeVersion}
                    onChange={(e) => setFormData({ ...formData, resumeVersion: e.target.value })}
                />

                <label htmlFor="coverLetter">Cover Letter:</label>
                <input
                    type="text"
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter || ""}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />

                <label htmlFor="jobDescription">Job Description:</label>
                <input
                    type="text"
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription || ""}
                    onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                />

                <label htmlFor="notes">Notes:</label>
                <input
                    type="text"
                    id="notes"
                    name="notes"
                    value={formData.notes || ""}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
            <button type="submit">Add Application</button>
        </form>
}

export default ApplicationForm;