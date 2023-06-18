import { Route, Routes } from "react-router";
import "./App.css";

import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archive" element={<Archive />} />
            </Routes>
        </div>
    );
}

export default App;
