import { BrowserRouter, Route, Routes } from "react-router-dom";
// Page Components
import HomePage from "@/pages/Home";
import "./assets/styles/globals.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
