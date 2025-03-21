import React from "react";
import { Page } from "./features/Page/Page";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Society } from "./features/Page/Society";
import { Home } from "./features/Page/Home";

function App() {
    return (
        <div className="App pt-2">
            <h1>Game Recommendation System</h1>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="" element={<Home />} />
                        <Route exact path="/student" element={<Page />} />
                        <Route exact path="/society" element={<Society />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
