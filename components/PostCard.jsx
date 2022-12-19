import React from "react";
import NextLink from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-transparent pl-0 mb-16 sm:mb-20">
      <h1 className="text-left mb-4 sm:mb-8 cursor-pointer text-xl sm:text-xl font-bold text-neutral-700 dark:text-neutral-100 link link-underline">
        <NextLink href={`/post/${post.slug}`}>{post.title}</NextLink>
      </h1>
      <div className="block flex flex-start items-left justify-start mb-2 w-full"></div>
      <p className="text-left text-sm sm:text-lg leading-7 text-slate-900 dark:text-neutral-300 font-normal mb-5 sm:mb-4">
        {post.excerpt}
      </p>
      <div className="flex flex-start">
        <a className="group flex flext-start " href={`/post/${post.slug}`}>
          <span className="text-sm sm:text-lg font-medium underline text-neutral-700 dark:text-neutral-300 cursor-pointer hover:opacity-50">
            Read the whole thing
          </span>
          <div>
            {/* <img
              className="hidden sm:block ml-2 sm:mt-2.5 sm:mt-[5px] group-hover:translate-x-3 duration-300 group-hover:opacity-50"
              src="/arrow-right-circle.svg"
              alt=""
            /> */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default PostCard;
