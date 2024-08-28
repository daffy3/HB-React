import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/Home";
import DashboardPage from "@/pages/dashboard/Dashboard";
import "@/assets/styles/globals.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
