// apps/web/src/pages/EditApplicationPage.tsx

// imports
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../config";
import type { ApplicationResponse } from "@job-tracker/shared-types";
import ApplicationForm from "../components/ApplicationForm";

function EditApplicationPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [application, setApplication] = useState<ApplicationResponse | null>(null);

    // get specific application
    useEffect(() => {
        fetch(`${API_URL}/applications/${id}`)
        .then((res) => res.json())
        .then((data: ApplicationResponse) => setApplication(data))
    }, [id]);

    function handleSuccess() {
        navigate("/");
    }

    // conditionally render: loading state if application is null, otherwise the form
    if (!application) {
        return <p>Loading...</p>
    } 

    return (
        <div>
            <h1>Edit Application</h1>
            <ApplicationForm existingApplication={application} onSuccess={handleSuccess} />
        </div>
    );
}

export default EditApplicationPage;