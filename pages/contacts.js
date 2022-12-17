import React from "react";

const Contacts = () => {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-12 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-transparent pl-0 pb-12 mb-16">
            <h1 className="text-left mb-8 text-4xl font-bold text-slate-900 cursor-default">
              Let's talk
            </h1>
            <div className="mt-16 text-lg space-y-6 leading-9">
              <span>
                {" "}
                Use my email or telegram to contact me:
                <br></br>
                <a
                  href="mailto:daniiltykheev@gmail.com"
                  className="font-bold text-violet-800 link link-underline"
                >
                  daniiltykheev@gmail.com
                </a>
                <br></br>
                <a
                  href="https://t.me/daniiltykheev"
                  className="font-bold text-violet-800 link link-underline"
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
