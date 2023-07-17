"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";

import SmallAHLogo from "@/components/svgs/small_ah_logo.svg";
import LinkedInLogo from "@/components/svgs/LinkedIn.svg";
import InstagramLogo from "@/components/svgs/Instagram.svg";
import GitLogo from "@/components/svgs/Git.svg";

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

const socials = [
  {
    link: "https://www.linkedin.com/in/alfred-hutomo/",
    LogoComponent: LinkedInLogo,
  },
  {
    link: "https://www.instagram.com/alfredhutomo/",
    LogoComponent: InstagramLogo,
  },
  {
    link: "https://github.com/AlfredHutomo",
    LogoComponent: GitLogo,
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed-mobile-nav primary-bg flex flex-col sm:justify-between sm:w-[100px] py-5 sm:py-10">
      <div className="flex sm:flex-col items-center justify-evenly sm:gap-8 mb-5 primary">
        <m.div whileHover={{ scale: 1.1 }}>
          <Link href="/" aria-label="Home Button Logo">
            <SmallAHLogo />
          </Link>
        </m.div>
        {internalLinks
          .map(
            (link) =>
              !link.disabled && (
                <m.div key={link.text} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={link.path}
                    className={`${
                      link.disabled ? "link-btn-coming-soon" : "link-btn"
                    } ${pathname === link.path ? "underline" : ""}`}
                  >
                    {link.text}
                  </Link>
                </m.div>
              )
          )
          .filter(Boolean)}
        <m.a
          whileHover={{ scale: 1.1 }}
          href="mailto:alfredhutomo@gmail.com"
          className="link-btn"
        >
          EMAIL
        </m.a>
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-between sm:h-[130px] gap-[30px] sm:gap-0 primary">
        {socials.map(({ link, LogoComponent }) => (
          <m.a
            href={link}
            key={link}
            whileHover={{ scale: 1.1 }}
            aria-label={`Button to ${link}`}
          >
            <LogoComponent />
          </m.a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
