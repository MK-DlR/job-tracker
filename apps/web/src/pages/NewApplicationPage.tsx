// apps/web/src/pages/NewApplicationPage.tsx

// imports
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";

function NewApplicationPage() {
    const navigate = useNavigate();

    function handleSuccess() {
        navigate("/");
    }

    return (
        <div>
            <h1>Add New Application</h1>
            <ApplicationForm onSuccess={handleSuccess} />
        </div>
    );
}

export default NewApplicationPage;