"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const internalLinks = [
  {
    text: "ABOUT",
    path: "/about",
    disabled: false,
  },
  {
    text: "WORKS",
    path: "/works",
    disabled: false,
  },
  {
    text: "SNAPS",
    path: "/snaps",
    disabled: true,
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed-mobile-nav flex flex-col sm:justify-between sm:w-[100px] py-5 sm:py-10">
      <div className="flex sm:flex-col items-center justify-evenly sm:gap-8 mb-5">
        <Link href="/">
          <Image
            src="/assets/small_ah_logo.svg"
            alt="AH Logo Small"
            width={68}
            height={50}
          />
        </Link>
        {internalLinks.map((link) => (
          <motion.div key={link.text} whileHover={{ scale: 1.1 }}>
            <Link
              href={link.path}
              className={`${
                link.disabled ? "link-btn-coming-soon" : "link-btn"
              } ${pathname === link.path ? "underline" : ""}`}
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
        <a href="mailto:alfredhutomo@gmail.com" className="link-btn">
          EMAIL
        </a>
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-between sm:h-[130px] gap-[30px] sm:gap-0">
        <Link href="/projects">
          <Image
            src="/assets/LinkedIn.svg"
            alt="AH Logo Small"
            width={26}
            height={26}
            color=""
          />
        </Link>
        <Link href="/projects">
          <Image
            src="/assets/Instagram.svg"
            alt="AH Logo Small"
            width={26}
            height={26}
          />
        </Link>
        <Link href="/projects">
          <Image
            src="/assets/Git.svg"
            alt="AH Logo Small"
            width={26}
            height={26}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
