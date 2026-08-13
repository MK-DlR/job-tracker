// apps/web/src/App.tsx

// imports
import { useState, useEffect } from "react";

import ApplicationCard from "./components/ApplicationCard";
import type { ApplicationModel } from "@job-tracker/shared-types";

function App() {
  const [applications, setApplications] = useState<ApplicationModel[]>([]);
  // TEMP
  console.log(applications);

  useEffect(() => {
    fetch("http://localhost:3000/applications")
      .then((res) => res.json())
      .then((data: ApplicationModel[]) => setApplications(data))
  }, []);

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationCard 
        company="Acme"
        role="Backend Developer"
        website="https://example.com/websiteurl"
        jobPostingUrl="https://example.com/job/123"
        applicationContact="email@email.com"
        connections="Person Name"
        status="APPLIED"
        dateApplied="2026-08-11T16:41:50.127Z"
        easyApply={false}
        resumeVersion="https://example.com/resume"
        coverLetter="https://example.com/coverletter"
        jobDescription="https://example.com/screenshot"
        notes={null}
      />
    </div>
  );
}

export default App;