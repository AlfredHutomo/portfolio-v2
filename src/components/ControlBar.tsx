"use client";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useState } from "react";

const birthMonth = 7;
const birthYear = 1999;

const ControlBar = () => {
  const pathname = usePathname();
  const [month, setMonth] = useState(birthMonth);
  const [year, setYear] = useState(birthYear);

  useEffect(() => {
    if (pathname !== "/") {
      const date = new Date();
      const currentMonth = date.getMonth() + 1;
      const currentYear = date.getFullYear();
      setMonth(currentMonth);
      setYear(currentYear);
    } else {
      setMonth(birthMonth);
      setYear(birthYear);
    }
  }, [pathname]);

  return (
    <nav className="flex p-7 justify-between sm:flex-col sm:w-[100px] sm:px-0 sm:py-[40px] sm:items-center col-span-1 text-jeans dark:text-water text-xl z-50">
      <p className="w-28 sm:w-fit">{month}</p>
      <ThemeSwitcher />
      <div className="flex flex-row sm:flex-col justify-between items-center w-28 sm:w-fit sm:h-[130px]">
        {String(year)
          .split("")
          .map((digit, index) => (
            <p key={index}>{digit}</p>
          ))}
      </div>
    </nav>
  );
};

export default ControlBar;
