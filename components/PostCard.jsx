import React from "react";
import NextLink from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-transparent pl-0 mb-16 sm:mb-20">
      <NextLink href={`/post/${post.slug}`}>
        <div className="cursor-pointer">
          <h1 className="text-left mb-4 sm:mb-6 text-xl sm:text-xl font-bold text-slate-900 dark:text-neutral-100">
              {post.title}
          </h1>
            <div className="text-left text-sm sm:text-lg leading-6 text-slate-900 dark:text-neutral-300 font-normal mb-5 sm:mb-4">
              <p>
                {post.excerpt}
              </p>
            </div>
            <div className="flex flex-start">
              <div className="group flex flext-start ">
                <span className="text-sm sm:text-lg font-medium underline text-neutral-700 dark:text-neutral-300 cursor-pointer hover:opacity-50">
                  Read the whole thing
                </span>                
              </div>
            </div>
        </div>
      </NextLink>
    </div>
  );
};

export default PostCard;