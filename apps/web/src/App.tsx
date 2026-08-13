// apps/web/src/App.tsx

// imports
import { useState, useEffect } from "react";

import type { ApplicationResponse } from "@job-tracker/shared-types";
import ApplicationCard from "./components/ApplicationCard";
import StatusDashboard from "./components/StatusDashboard";

function App() {
  const [applications, setApplications] = useState<ApplicationResponse[]>([]);

  // fetch applications
  useEffect(() => {
    fetch("http://localhost:3000/applications")
      .then((res) => res.json())
      .then((data: ApplicationResponse[]) => setApplications(data))
  }, []);

  // return applications in card form
  return (
    <div>
      <h1>Job Application Tracker</h1>
      <StatusDashboard />
      {applications.map((app) => (
        <ApplicationCard 
          key={app.id}
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
      ))}
    </div>
  );
}

export default App;