"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="container relative">
      <RxHamburgerMenu
        className="absolute top-[1rem] left-[1rem] md:left-0 text-[2rem] text-black md:hidden"
        onClick={handleClick}
      />
      <nav
        className={`flex md:justify-center py-[1.2rem] text-[15px] ${
          click ? "flex" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row mt-[2.5rem] md:mt-0 items-start md:items-center gap-[1rem] md:gap-[2rem] opacity-70">
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
      <div className="absolute top-[1rem] right-[1rem] md:right-0 cursor-pointer">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
