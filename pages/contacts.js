import React from "react";
import { Helmet } from 'react-helmet'

const Contacts = () => {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-20 sm:mt-32 mb-8 px-4 sm:px-0">
       <Helmet>
        <title>Contact me</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-transparent pl-0 pb-8 sm:pb-16">
            <h1 className="text-left sm:mb-8 text-2xl sm:text-4xl font-bold text-slate-900 dark:text-neutral-200 cursor-default">
              Let's talk
            </h1>
            <div className="mt-8 sm:mt-10 text-sm sm:text-lg space-y-6 leading-6 sm:leading-8 dark:text-neutral-200">
              <span>
                {" "}
                Use my email or telegram to contact me:
                <br></br>
                <a
                  href="mailto:daniiltykheev@gmail.com"
                  className="font-bold text-purple-700 dark:text-purple-400 link link-underline"
                >
                  daniiltykheev@gmail.com
                </a>
                <br></br>
                <a
                  href="https://t.me/daniiltykheev"
                  className="font-bold text-purple-700 dark:text-purple-400 link link-underline"
                >
                  t.me/daniiltykheev
                </a>
                <br></br>
                <br></br>
                Do reach out if you want to talk product, have a drink, or
                watch a game of football together. Cheers.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
