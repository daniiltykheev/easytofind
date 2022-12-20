import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-20 sm:mt-32 px-4 sm:px-0">
      <Head>
        <title>Easy to find - Daniil Tykheev</title>
        <meta name="description" content="This is Daniil Tykheev" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12 mb-14 sm:mb-20">
        <div className="lg:col-span-8 col-span-1">
          <div className="flex justify-start mb-4 sm:mb-8">
            <h1 className="text-slate-900 dark:text-neutral-100 font-bold text-2xl sm:text-4xl">
              Welcome to my blog!
            </h1>
          </div>
          <div>
            <p className="text-slate-900 dark:text-neutral-200 font-normal text-base sm:text-xl leading-7 sm:leading-12">
              Hey, I'm Daniil. I write about product management, user research and whatever I find
              interesting or useful. Say hey back on{" "}
              <a
                className="text-purple-700 dark:text-purple-400 link link-underline"
                href="https://t.me/daniiltykheev"
              >
                Telegram
              </a>{" "}
              or{" "}
              <a
                className="text-purple-700 dark:text-purple-400 link link-underline"
                href="https://www.linkedin.com/in/daniil-tykheev-2a156ba7/"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-3">
        <div className="flex flex-start">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={post.title} />
            ))}
            {/* 
            I'm not fully sure about this link. On the one hand, it seems like overdoing and overloading the website. On the other hand, it's a nice little feature. Will leave it here for a bit (20/12/22)
            <div>
              <a href="https://t.me/iameasytofind" target="_blank" className="flex justify-center mb-10 text-slate-900 dark:text-neutral-200 text-xs sm:text-sm hover:opacity-50">
                  Read earlier posts on Telegram <img src="/external-link.svg" className="px-0 mx-0 ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5 dark:invert"></img>
              </a>
           </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
