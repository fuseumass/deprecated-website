import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Topbar />
            <Header />
            <About />
            <Features />
        </div>
    );
}

export default App;
