import React from "react";
import Link from "next/link";
import { MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="container relative">
      <RxHamburgerMenu className="absolute top-[1rem] left-[1rem] md:left-0 text-[1.5rem] text-black md:hidden" />
      <nav className="flex justify-center py-[1.2rem] text-[15px]">
        <ul className="hidden md:flex items-center gap-[2rem] opacity-70">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="">
            <li>Dashboard</li>
          </Link>
          <Link href="/methodology">
            <li>Methodology</li>
          </Link>
          <Link href="">
            <li>Contribute</li>
          </Link>
        </ul>
      </nav>
      <MdOutlineLightMode className="absolute top-[1rem] right-[1rem] md:right-0 text-[1.5rem] text-black" />
    </div>
  );
};

export default Header;
