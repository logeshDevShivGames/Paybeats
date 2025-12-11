import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-md 
                 bg-white dark:bg-gray-800 border border-gray-300 
                 dark:border-gray-700 hover:scale-105 transition">
      {darkMode ? (
        <Sun className="text-yellow-400" size={22} />
      ) : (
        <Moon className="text-gray-800" size={22} />
      )}
    </button>
  );
};

export default DarkModeToggle;
