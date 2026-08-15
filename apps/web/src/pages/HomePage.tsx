// apps/web/src/pages/HomePage.tsx

// imports
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { API_URL } from "../config";
import type { ApplicationResponse, Status } from "@job-tracker/shared-types";
import ApplicationCard from "../components/ApplicationCard";
import StatusDashboard from "../components/StatusDashboard";
import { followUp } from "../utils/followUp";

function HomePage() {
    const location = useLocation();
    const [applications, setApplications] = useState<ApplicationResponse[]>([]);

    // states for filter
    const [statusFilter, setStatusFilter] = useState<Status | "ALL">("ALL");
    const [dueFollowUpOnly, setDueFollowUpOnly] = useState(false);
    const [sortBy, setSortBy] = useState<"dateApplied" | "status">("dateApplied");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    // filtered/sorted list
    const filteredApplications = applications
        .filter((app) => {
        // filter applications
        const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;

        // check if follow ups are due
        const status = followUp(app.dateApplied);
        const hasDueFollowUp = 
            (status.threeDay.due && !app.followUp3Day) ||
            (status.oneWeek.due && !app.followUp1Week) ||
            (status.twoWeek.due && !app.followUp2Week);
        const matchesFollowUp = !dueFollowUpOnly || hasDueFollowUp;

        return matchesStatus && matchesFollowUp;
    })
    .sort((a, b) => {
        let comparison: number;

        if (sortBy === "dateApplied") {
        comparison = new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime();
        } else {
        comparison = a.status.localeCompare(b.status)  // returns negative/zero/positive
        }

        // flip the result if sortDirection is "desc"
        if (sortDirection === "desc") {
        return comparison * -1;
        }
        return comparison;
    })

    // fetch applications
    function fetchApplications() {
        fetch(`${API_URL}/applications`)
            .then((res) => res.json())
            .then((data: ApplicationResponse[]) => setApplications(data));
    }

    useEffect(() => {
        fetchApplications();
    }, [location.key]);

    // handle deleting an application
    async function handleDelete(id: number) {
        let confirmed = window.confirm("Are you sure you want to delete this application?");

        if (!confirmed) {
            return;
        }

        await fetch(`${API_URL}/applications/${id}`, { method: "DELETE" });
        fetchApplications();
    }

    return (
        <div className="home-page">
            <span className="eyebrow">// Application Tracker</span>
            <h1>Job Tracker</h1>
            <Link to="/new" className="add-application-link">Add New Application</Link>
            {/* display status stats */}
            <StatusDashboard />

            {/* display filter/sort UI */}
            <div className="filter-sort-ui">
                <label htmlFor="status">Status:</label>
                <select 
                    name="status" 
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as Status | "ALL")}
                >
                <option value="ALL">All</option>
                <option value="APPLIED">Applied</option>
                <option value="INTERVIEWING">Interviewing</option>
                <option value="OFFERED">Offered</option>
                <option value="REJECTED">Rejected</option>
                <option value="GHOSTED">Ghosted</option>
                </select>

                <label htmlFor="dueFollowUpOnly">Follow Up Due</label>
                <input 
                    type="checkbox" 
                    id="dueFollowUpOnly"
                    checked={dueFollowUpOnly}
                    onChange={(e) => setDueFollowUpOnly(e.target.checked)}
                /> 

                <label htmlFor="sortBy">Sort By:</label>
                <select 
                    name="sortBy" 
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "dateApplied" | "status")}
                >
                <option value="dateApplied">Date Applied</option>
                <option value="status">Application Status</option>
                </select>

                <label htmlFor="sortDirection">Sort Direction:</label>
                <select 
                    name="sortDirection" 
                    id="sortDirection"
                    value={sortDirection}
                    onChange={(e) => setSortDirection(e.target.value as "asc" | "desc")}
                >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
            </div>

            {/* display applications in card form */}
            <div className="applications-list">
                {filteredApplications.map((app) => (
                    <div key={app.id} className="application-card-wrapper">
                        <ApplicationCard 
                            company={app.company}
                            role={app.role}
                            website={app.website}
                            jobPostingUrl={app.jobPostingUrl}
                            applicationContact={app.applicationContact}
                            connections={app.connections}
                            status={app.status}
                            dateApplied={app.dateApplied}
                            easyApply={app.easyApply}
                            resumeVersion={app.resumeVersion}
                            coverLetter={app.coverLetter}
                            jobDescription={app.jobDescription}
                            followUp3Day={app.followUp3Day}
                            followUp1Week={app.followUp1Week}
                            followUp2Week={app.followUp2Week}
                            notes={app.notes}
                        />
                        {/* edit and delete buttons */}
                        <div className="card-actions">
                            <Link to={`/edit/${app.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(app.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;