import { useState, useEffect } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(null);

  //check default theme for browser
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  // add class dark at top
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        className="bg-green-100 dark:bg-white p-2 rounded-3xl "
        onClick={handleThemeSwitch}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;
