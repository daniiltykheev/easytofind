import React from "react";
import { getExperience } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Helmet } from 'react-helmet'
import Link from "next/link";

const Experience = ({ experience }) => {
    const content = experience.fullText.json;

  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-20 sm:mt-32 mb-8 px-4 sm:px-0">
       <Helmet>
        <title>Experience</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-transparent pl-0 pb-8 sm:pb-16">
            <h1 className="text-left mb-12 text-2xl sm:text-4xl font-bold text-slate-900 dark:text-neutral-200 cursor-default">
              About
            </h1>
            <div className="hidden sm:flex justify-between pr-24 py-3 border-b border-slate-900 dark:border-slate-200 font-bold text-lg">
              <Link href="/about" class="cursor-pointer hover:opacity-50">
                What is this?
              </Link>
              <Link href="/hiw" class="cursor-pointer hover:opacity-50">
                How I work
              </Link>
              <Link href="/favorites" class="cursor-pointer hover:opacity-50">
                Favorites
              </Link>
              <Link href="/experience" class="cursor-pointer hover:opacity-50 text-purple-700 dark:text-purple-400">
                Experience
              </Link>
            </div>
            <div className="group sm:hidden relative inline-block border-2 border-zinc-800 dark:border-neutral-200 px-2 py-1 min-w-full">
              <div className="flex justify-between">
                <span className="font-bold text-sm">Experience</span>
                <svg class="-mr-1 ml-2 h-5 w-5 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="hidden group-hover:block absolute outline outline-2 outline-zinc-800 dark:outline-neutral-200 left-0 bg-neutral-300 dark:bg-zinc-800 w-60 px-2 py-4 mt-1.5 min-w-full">
                <Link href="/about" class="block cursor-pointer hover:opacity-50 text-slate-800 dark:text-neutral-200 pb-4 text-sm">
                  What is this?
                </Link>
                <Link href="/hiw" class="block cursor-pointer hover:opacity-50 text-slate-800 dark:text-neutral-200  pb-4 text-sm">
                  How I work
                </Link>
                <Link href="/favorites" class="block cursor-pointer hover:opacity-50 text-slate-800 dark:text-neutral-200 pb-4 text-sm">
                  Favorites
                </Link>
                <Link href="/experience" class="block cursor-pointer hover:opacity-50 text-purple-700 dark:text-purple-400 pb-2 text-sm font-bold">
                  Experience
                </Link>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 text-sm sm:text-lg space-y-6 leading-6 sm:leading-8 text-slate-900 dark:text-neutral-200">
                <RichText
                    content={content}
                    renderers={{
                        a: ({ children, href }) => (
                          <a class="cursor-pointer text-purple-700 dark:text-purple-400 hover:opacity-50" href={href}>
                            {children}
                          </a>
                        ),
                      }}
                /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

export async function getStaticProps() {
  const experience = (await getExperience()) || [];

  return {
    props: { experience },
  };
}