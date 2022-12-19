import React, { useContext } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full sticky top-0 bg-stone-300/70 dark:bg-zinc-800/70 backdrop-blur transition-colors duration-500 border-b border-b-slate-900/10 dark:border-b-slate-300/10 supports-backdrop-blur:bg-white/95 text-neutral-700 dark:text-neutral-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-0">
        <div className="flex flex-row sm:items-center sm:justify-between pt-4 sm:py-2 sm:mx-0">
          <div className="flex flex-start">
          <Link href={"/"}>
              <span className="py-2 pr-4 link-animate text-sm sm:text-lg font-medium sm:font-medium hover:opacity-50 cursor-pointer">
                Blog
              </span>
            </Link>
          </div>
          <div className="flex flex-end">
            <Link href={"/about"}>
              <span className="px-0 pl-4 sm:pr-8 py-2 link-animate text-sm sm:text-lg font-medium sm:font-medium hover:opacity-50 cursor-pointer">
                About
              </span>
            </Link>
            <Link href={"/experience"}>
              <span className="hidden sm:block px-8 py-2 link-animate text-lg font-medium hover:opacity-50 cursor-pointer">
                Experience
              </span>
            </Link>
            <Link href={"/contacts"}>
              <span className="hidden sm:block pl-6 py-2 link-animate text-lg font-medium hover:opacity-50 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
