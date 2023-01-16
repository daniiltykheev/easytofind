import React, { useContext } from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl">
      <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mb-8 px-4 sm:px-0 text-neutral-700 dark:text-neutral-200">
        <hr className="border-purple-700 dark:border-purple-400 mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-16 gap-12 mb-28">
          <ol className="grid grid-cols-1">
            <li>
              {" "}
              <a href="https://t.me/daniiltykheev">Telegram</a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/danieltykheev/">
                Instagram
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/daniiltykheev">Github</a>{" "}
            </li>
           
          </ol>
          <ol className="grid grid-cols-1">
          <li>
              {" "}
              <a href={"/contacts"}>Contact</a>{" "}
            </li>
            <li>
              {" "}
              <a href={"/"}>Blog</a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://hygraph.com/">Hygraph</a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
