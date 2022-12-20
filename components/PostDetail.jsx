import React from "react";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  const content = post.content.json;

  return (
    <div>
      <div className="bg-transparent pl-0 sm:mb-16">
        <h1 className="text-left text-xl sm:text-3xl mb-8 font-bold text-slate-900 dark:text-neutral-200 cursor-default leading-8">
          {post.title}
        </h1>
        <div className="flex flex-start sm:mt-16">
          <div className="sm:mt-1 w-4 sm:w-14 cursor-default">
            <span className="text-xl sm:text-2xl text-purple-700 dark:text-purple-400 font-bold">
              tl;<br></br>dr
            </span>
          </div>
          <div className="ml-8 sm:ml-8 text-sm sm:text-lg space-y-6 leading-7 sm:leading-8 dark:text-neutral-300">
            {post.excerpt}
          </div>
        </div>
        <div className="flex flex-start mt-8 sm:mt-6">
          <div className="text-m sm:text-lg font-bold text-slate-900 dark:text-neutral-300">
            <span className="align-middle">
              {post.location}
            </span>
          </div>
          <div className="ml-8 text-m sm:text-lg font-bold text-slate-900 dark:text-neutral-300">
            <span className="align-middle">
              {moment(post.createdAt).format("YYYY")}
            </span>
          </div>
        </div>
        <div className="mt-8 sm:mt-16 text-sm sm:text-lg space-y-6 leading-7 sm:leading-8 dark:text-neutral-200">
          <RichText
            content={content}
            renderers={{
              a: ({ children, href }) => (
                <a class="cursor-pointer text-purple-700 dark:text-purple-400 hover:opacity-50" href={href}>
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    paddingLeft: '20px',
                    borderLeft: '4px solid #7e22ce dark:text-purple-400',
                  }}
                >
                  {children}
                </blockquote>
              ),
              h1: ({ children }) => <h1 className={`text-xl sm:text-2xl mb-6 font-bold text-slate-900 dark:text-neutral-200`}>{children}</h1>,
              h2: ({ children }) => <h2 className={`text-l sm:text-xl mb-4 font-bold text-slate-900 dark:text-neutral-200`}>{children}</h2>,
              h3: ({ children }) => <h3 className={`text-m sm:text-l mb-2 font-bold text-slate-900 dark:text-neutral-200`}>{children}</h3>,
              ol: ({ children }) => (
                <ol
                  className="pl-6 sm:pl-10 pb-1 list-decimal"
                >
                  {children}
                </ol>),
              ul: ({ children }) => (
                <ul
                  className="pl-2 sm:pl-10 sm:pb-1 list-square list-outside"
                >
                  {children}
                </ul>),
              li: ({ children }) => (
                <li
                  className="pl-1 sm:pl-3 m-2 leading-6 sm:leading-8"
                >
                  {children}
                </li>),
              code: ({ children }) => (
                <code
                  className="bg-zinc-100 dark:bg-zinc-700 rounded box-decoration-clone py-1 px-2"
                >
                  {children}
                </code>),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
