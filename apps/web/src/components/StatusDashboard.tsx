// apps/web/src/components/StatusDashboard.tsx

// imports
import { useState, useEffect } from "react";

import type { StatusCounts } from "@job-tracker/shared-types";
import { STATUS_LABELS } from "../utils/statusLabels";

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
        fetch("http://localhost:3000/applications/stats/counts")
            .then((res) => res.json())
            .then((data: StatusCounts) => setCounts(data))
    }, []);

    // render the counts
    return(
        <div>
            {Object.entries(counts).map(([status, count]) => (
                <p key={status}>
                    {STATUS_LABELS[status as keyof typeof STATUS_LABELS]}: {count}
                </p>
            ))}
        </div>
    )
}

export default StatusDashboard;