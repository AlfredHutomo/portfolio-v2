"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";

import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-full flex justify-center items-center">
        <CgDarkMode />
      </button>
    );
  }

  const handleThemeChange = () => {
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleThemeChange}
      className="w-full flex justify-center items-center"
    >
      <CgDarkMode />
    </motion.button>
  );
};

export default ThemeSwitcher;
