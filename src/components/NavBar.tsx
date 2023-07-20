"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";

import SmallAHLogo from "@/components/svgs/small_ah_logo.svg";

import { socials } from "@/constants";
import LinkAnimation from "@/animation/LinkAnimation";
import { internalLinks } from "@/constants";

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
                <LinkAnimation key={link.text}>
                  <Link
                    href={link.path}
                    className={`${
                      link.disabled ? "link-btn-coming-soon" : "link-btn"
                    } ${pathname === link.path ? "underline" : ""}`}
                  >
                    {link.text}
                  </Link>
                </LinkAnimation>
              )
          )
          .filter(Boolean)}
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-between sm:h-[130px] gap-[30px] sm:gap-0 primary">
        {socials.map(({ link, LogoComponent }) => (
          <LinkAnimation key={link}>
            <a href={link} aria-label={`Button to ${link}`}>
              <LogoComponent />
            </a>
          </LinkAnimation>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
