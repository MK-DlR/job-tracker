// apps/web/src/App.tsx

// imports
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewApplicationPage from "./pages/NewApplicationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewApplicationPage />} />
    </Routes>
  );
}

export default App;