import "./styles.css";
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <React.Fragment>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    </React.Fragment>
  );
}
