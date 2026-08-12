// apps/web/src/App.tsx

// imports
import ApplicationCard from "./components/ApplicationCard";

function App() {
  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationCard 
        company="Acme"
        role="Backend Developer"
        status="APPLIED"
        dateApplied="2026-08-11T16:41:50.127Z"
        jobPostingUrl="https://example.com/job/123"
        notes={null}
      />
    </div>
  );
}

export default App;