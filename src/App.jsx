import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DevicePage from "./pages/DevicePage";
import "./App.css"; // or "./main.css"
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6FAFF] to-[#ECF2F9] dark:from-[#636874] dark:to-[#33373d] p-6">
      <DarkModeToggle />
      <div className="max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device/:id" element={<DevicePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
