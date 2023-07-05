"use client";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-col sm:justify-between sm:w-[100px] py-[40px]">
      <div className="flex sm:flex-col items-center justify-evenly sm:gap-8 mb-5">
        <Link href="/">
          <Image
            src="/assets/small_ah_logo.svg"
            alt="AH Logo Small"
            width={68}
            height={50}
          />
        </Link>
        <Link href="/about" className="link-btn">
          ABOUT
        </Link>
        <Link href="/work" className="link-btn">
          WORK
        </Link>
        <a className="link-btn">EMAIL</a>
      </div>
      <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-between sm:h-[130px] gap-[30px] sm:gap-0">
        <Link href="/projects">
          <Image
            src="/assets/linkedIn.svg"
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
