// apps/web/src/App.tsx

// imports
import { useState, useEffect } from "react";

import ApplicationCard from "./components/ApplicationCard";
import type { ApplicationResponse } from "@job-tracker/shared-types";

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
          notes={app.notes}
        />
      ))}
    </div>
  );
}

export default App;