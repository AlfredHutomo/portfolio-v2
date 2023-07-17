"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const birthMonth = 7;
const birthYear = 1999;

const yearContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const yearDigit = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const monthDigit = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
      <m.p
        key={month}
        className="w-28 sm:w-fit"
        variants={monthDigit}
        initial="hidden"
        animate="show"
      >
        {month}
      </m.p>
      <ThemeSwitcher />
      <m.ul
        key={year}
        className="year-container"
        variants={yearContainer}
        initial="hidden"
        animate="show"
      >
        {String(year)
          .split("")
          .map((digit, index) => (
            <m.li key={`${year}_${index}`} variants={yearDigit}>
              {digit}
            </m.li>
          ))}
      </m.ul>
    </nav>
  );
};

export default ControlBar;
