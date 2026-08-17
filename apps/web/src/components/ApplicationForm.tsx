// apps/web/src/components/ApplicationForm.tsx

// imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import type { ApplicationResponse, CreateApplicationInput, Status, FollowUpState } from "@job-tracker/shared-types";

// props interface
interface ApplicationFormProps {
    onSuccess: () => void;
    existingApplication?: ApplicationResponse;
}

function ApplicationForm({ onSuccess , existingApplication }: ApplicationFormProps) {
    const [formData, setFormData] = useState<CreateApplicationInput>(
        existingApplication ?? {
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
            followUp3Day: "PENDING",
            followUp1Week: "PENDING",
            followUp2Week: "PENDING",
            notes: null,
        }
    );

    // submit handler
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (existingApplication) {
            await fetch(`${API_URL}/applications/${existingApplication.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
        } else {
            await fetch(`${API_URL}/applications`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
        }

        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field-full">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
            </div>
        
            <div className="field-full">
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
            </div>
        
            <div className="field-full">
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" name="website" value={formData.website || ""}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
            </div>
        
            <div className="field-full">
                <label htmlFor="jobPostingUrl">Job Listing:</label>
                <input type="text" id="jobPostingUrl" name="jobPostingUrl" value={formData.jobPostingUrl}
                onChange={(e) => setFormData({ ...formData, jobPostingUrl: e.target.value })} />
            </div>
        
            <div>
                <label htmlFor="applicationContact">Contact:</label>
                <input type="text" id="applicationContact" name="applicationContact" value={formData.applicationContact || ""}
                onChange={(e) => setFormData({ ...formData, applicationContact: e.target.value })} />
            </div>
        
            <div>
                <label htmlFor="connections">Connections:</label>
                <input type="text" id="connections" name="connections" value={formData.connections || ""}
                onChange={(e) => setFormData({ ...formData, connections: e.target.value })} />
            </div>
        
            <div>
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}>
                <option value="APPLIED">Applied</option>
                <option value="INTERVIEWING">Interviewing</option>
                <option value="OFFERED">Offered</option>
                <option value="REJECTED">Rejected</option>
                <option value="GHOSTED">Ghosted</option>
                </select>
            </div>
        
            <div>
                <label htmlFor="dateApplied">Date Applied:</label>
                <input type="date" id="dateApplied" name="dateApplied"
                value={new Date(formData.dateApplied ?? new Date()).toISOString().slice(0, 10)}
                onChange={(e) => setFormData({ ...formData, dateApplied: new Date(e.target.value).toISOString() })} />
            </div>
        
            <div>
                <label htmlFor="easyApply">Easy Apply?</label>
                <input type="checkbox" id="easyApply" checked={formData.easyApply}
                onChange={(e) => setFormData({ ...formData, easyApply: e.target.checked })} />
            </div>
        
            <div>
                <label htmlFor="resumeVersion">Resume Version:</label>
                <input type="text" id="resumeVersion" name="resumeVersion" value={formData.resumeVersion}
                onChange={(e) => setFormData({ ...formData, resumeVersion: e.target.value })} />
            </div>
        
            <div className="field-full">
                <label htmlFor="coverLetter">Cover Letter:</label>
                <input type="text" id="coverLetter" name="coverLetter" value={formData.coverLetter || ""}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} />
            </div>
        
            <div className="field-full">
                <label htmlFor="jobDescription">Job Description:</label>
                <input type="text" id="jobDescription" name="jobDescription" value={formData.jobDescription || ""}
                onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })} />
            </div>

            {existingApplication && (
                <div>
                    <label htmlFor="followUp3Day">3 Day Follow Up:</label>
                    <select id="followUp3Day" name="followUp3Day" value={formData.followUp3Day}
                    onChange={(e) => setFormData({ ...formData, followUp3Day: e.target.value as FollowUpState })}>
                    <option value="PENDING">Pending</option>
                    <option value="DONE">Done</option>
                    <option value="NOT_APPLICABLE">Not Applicable</option>
                    </select>
                </div>
            )}

            {existingApplication && (
                <div>
                    <label htmlFor="followUp1Week">1 Week Follow Up:</label>
                    <select id="followUp1Week" name="followUp1Week" value={formData.followUp1Week}
                    onChange={(e) => setFormData({ ...formData, followUp1Week: e.target.value as FollowUpState })}>
                    <option value="PENDING">Pending</option>
                    <option value="DONE">Done</option>
                    <option value="NOT_APPLICABLE">Not Applicable</option>
                    </select>
                </div>
            )}

            {existingApplication && (
                <div>
                    <label htmlFor="followUp2Week">2 Week Follow Up:</label>
                    <select id="followUp2Week" name="followUp2Week" value={formData.followUp2Week}
                    onChange={(e) => setFormData({ ...formData, followUp2Week: e.target.value as FollowUpState })}>
                    <option value="PENDING">Pending</option>
                    <option value="DONE">Done</option>
                    <option value="NOT_APPLICABLE">Not Applicable</option>
                    </select>
                </div>
            )}
        
            <div className="field-full">
                <label htmlFor="notes">Notes:</label>
                <input type="text" id="notes" name="notes" value={formData.notes || ""}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
            </div>
        
            <div className="form-actions">
                <button type="submit">{existingApplication ? "Update Application" : "Add Application"}</button>
                <Link to="/" className="cancel-link">Cancel</Link>
            </div>
        </form>
    );
}

export default ApplicationForm;