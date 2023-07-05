import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
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
    <button
      onClick={handleThemeChange}
      className="w-28 flex justify-center items-center"
    >
      <CgDarkMode />
    </button>
  );
};

export default ThemeSwitcher;
