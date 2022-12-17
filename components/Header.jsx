import React, { useContext } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="mx-auto max-w-3xl">
      <div className="flex flex-row sm:items-center sm:justify-between sm:py-24 sm:mx-0 ">
        <div className="flex flex-start">
        <Link href={"/"}>
            <span className="py-2 link-animate text-l sm:text-lg font-medium sm:font-medium hover:opacity-50 text-neutral-700 cursor-pointer">
              Blog
            </span>
          </Link>
        </div>
        <div className="flex flex-end">
          <Link href={"/about"}>
            <span className="px-0 pl-8 sm:pr-8 py-2 link-animate text-l sm:text-lg font-medium sm:font-medium hover:opacity-50 text-neutral-700 cursor-pointer">
              About
            </span>
          </Link>
          <a href={"/experience"}>
            <span className="hidden sm:block px-8 py-2 link-animate text-lg font-medium hover:opacity-50 text-neutral-700 cursor-pointer">
              Experience
            </span>
          </a>
          <a href={"/contacts"}>
            <span className="hidden sm:block pl-6 py-2 link-animate text-lg font-medium hover:opacity-50 text-neutral-700 cursor-pointer">
              Contact
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
