// apps/web/src/components/StatusDashboard.tsx

// imports
import { useState, useEffect } from "react";
import { API_URL } from "../config";
import type { StatusCounts } from "@job-tracker/shared-types";
import { STATUS_LABELS, STATUS_COLORS } from "../utils/statusLabels";

function StatusDashboard() {
    // state to hold the counts
    const [counts, setCounts] = useState<StatusCounts>({
        APPLIED: 0,
        INTERVIEWING: 0,
        OFFERED: 0,
        REJECTED: 0,
        GHOSTED: 0,
    });

    // useEffect to fetch from /applications/stats/counts
    useEffect(() => {
        fetch(`${API_URL}/applications/stats/counts`)
            .then((res) => res.json())
            .then((data: StatusCounts) => setCounts(data))
    }, []);

    // render the counts
    return (
        <div className="status-dashboard">
            {Object.entries(counts).map(([status, count]) => (
                <div key={status} className="status-stat" style={{ borderColor: STATUS_COLORS[status as keyof typeof STATUS_LABELS] }}>
                <span className="status-stat-count">{count}</span>
                <span className="status-stat-label" style={{ color: STATUS_COLORS[status as keyof typeof STATUS_LABELS] }}>
                    {STATUS_LABELS[status as keyof typeof STATUS_LABELS]}
                </span>
                </div>
            ))}
        </div>
    );
}

export default StatusDashboard;