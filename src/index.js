import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { HabitsProvider } from "./contexts/HabitsContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HabitsProvider>
                <App />
            </HabitsProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
