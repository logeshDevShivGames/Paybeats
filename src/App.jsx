import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DevicePage from "./pages/DevicePage";
import "./App.css"; // or "./main.css"
import DarkModeToggle from "./components/DarkModeToggle";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6FAFF] to-[#ECF2F9] dark:from-[#0E1117] dark:to-[#121826] p-6">
      <SplashScreen />
      <DarkModeToggle />
      <div className="max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device" element={<DevicePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
