import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
// Globals CSS
import "./globals.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
