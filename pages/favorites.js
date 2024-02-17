import React from "react";
import { getFavorites } from "../services";
import { Helmet } from "react-helmet";
import Link from "next/link";

const Favorites = ({ books }) => {
  console.log(books);

  return (
    <div className="container mx-auto mb-8 mt-20 max-w-screen-sm px-4 sm:mt-32 sm:max-w-3xl sm:px-0">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="lg:grid-cols-16 grid grid-cols-1 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="bg-transparent pb-8 pl-0 sm:pb-16">
            <h1 className="mb-12 cursor-default text-left text-2xl font-bold text-slate-900 sm:text-4xl dark:text-neutral-200">
              About
            </h1>
            <div className="hidden justify-start border-b border-slate-900 py-3 text-lg font-bold sm:flex dark:border-slate-200">
              <Link
                href="/about"
                className="cursor-pointer pr-16 hover:opacity-50"
              >
                What is this?
              </Link>
              {/* <Link href="/hiw" className="cursor-pointer hover:opacity-50">
                How I work
              </Link> */}
              <Link
                href="/favorites"
                className="cursor-pointer pr-16 text-purple-700 hover:opacity-50 dark:text-purple-400"
              >
                Favorites
              </Link>
              <Link
                href="/experience"
                className="cursor-pointer pr-16 hover:opacity-50"
              >
                Experience
              </Link>
            </div>
            <div className="group relative inline-block min-w-full border-2 border-zinc-800 px-2 py-1 sm:hidden dark:border-neutral-200">
              <div className="flex justify-between">
                <span className="text-sm font-bold">What is this?</span>
                <svg
                  className="-mr-1 ml-2 h-5 w-5 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute left-0 mt-1.5 hidden w-60 min-w-full bg-neutral-300 px-2 py-4 outline outline-2 outline-zinc-800 group-hover:block dark:bg-zinc-800 dark:outline-neutral-200">
                <Link
                  href="/about"
                  className="block cursor-pointer pb-4 text-sm text-slate-800 hover:opacity-50 dark:text-neutral-200"
                >
                  What is this?
                </Link>
                <Link
                  href="/favorites"
                  className="block cursor-pointer pb-4 text-sm font-bold text-purple-700 hover:opacity-50 dark:text-purple-400"
                >
                  Favorites
                </Link>
                <Link
                  href="/experience"
                  className="block cursor-pointer pb-2 text-sm text-slate-800 hover:opacity-50 dark:text-neutral-200"
                >
                  Experience
                </Link>
              </div>
            </div>
            <div className="mt-8 space-y-6 text-sm leading-6 text-slate-900 sm:mt-10 sm:text-lg sm:leading-8 dark:text-neutral-200">
              <h2 className="pt-2 text-lg font-bold text-slate-900 sm:pt-4 sm:text-xl dark:text-neutral-200">
                Books
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {books.map((book) => (
                  <div key={book.title} className="flex flex-col items-center">
                    <img
                      src={book.cover?.url}
                      alt={`Cover of the book ${book.title}`}
                      className="h-auto w-full"
                    />
                    <a
                      className="mt-2 cursor-pointer hover:opacity-50"
                      href={book.link}
                    >
                      {book.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

export async function getStaticProps() {
  const books = (await getFavorites()) || [];

  return {
    props: { books },
  };
}
