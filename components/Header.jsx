import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => setMounted(true), [])
  if(!mounted) return null 

  return (
    <nav className="w-full sticky top-0 bg-stone-300/70 dark:bg-zinc-800/70 backdrop-blur transition-colors duration-500 border-b border-b-slate-900/10 dark:border-b-slate-300/10 supports-backdrop-blur:bg-white/95 text-neutral-700 dark:text-neutral-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-0">
        <div className="flex flex-row justify-between items-center py-2 sm:py-2 sm:mx-0">
          <div className="flex flex-start">
            <Link href={"/"}>
              <span className="sm:block py-2 pr-4 link-animate text-sm sm:text-lg font-medium sm:font-medium hover:opacity-50 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="sm:hidden px-0 pl-4 sm:pr-4 py-2 link-animate text-sm sm:text-lg font-medium sm:font-medium hover:opacity-50 cursor-pointer">
                About
              </span>
            </Link>
          </div>
          <div className="flex flex-end">
            <Link href={"/about"}>
              <span className="hidden sm:block px-0 pl-4 sm:pr-4 py-2 link-animate text-sm sm:text-lg font-medium sm:font-medium hover:opacity-50 cursor-pointer">
                About
              </span>
            </Link>
            <Link href={"/experience"}>
              <span className="hidden sm:block px-4 py-2 link-animate text-lg font-medium hover:opacity-50 cursor-pointer">
                Experience
              </span>
            </Link>
            <Link href={"/contacts"}>
              <span className="hidden sm:block px-4 py-2 link-animate text-lg font-medium hover:opacity-50 cursor-pointer">
                Contact
              </span>
            </Link>
            <div className="flex sm:items-center pl-8 sm:pl-2">
              <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className='w-9 h-9 rounded-lg bg-neutral-100 dark:bg-zinc-600'>
                  {theme === 'light' ? <img src="/moon.svg" alt="moon" /> : <img src="/sun.svg"/>}
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
