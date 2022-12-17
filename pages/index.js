import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-3xl mt-12">
      <Head>
        <title>I am easy to find</title>
        <meta name="description" content="Daniil's blog" />
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
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12 mb-14 sm:mb-24">
        <div className="lg:col-span-8 col-span-1">
          <div className="flex justify-start mb-4 sm:mb-8">
            <p className="text-slate-900 font-bold text-2xl sm:text-4xl">
              Welcome to my blog!
            </p>
          </div>
          <div>
            <p className="text-slate-900 font-normal text-base sm:text-lg leading-7 sm:leading-12">
              Hey, I'm Daniil. I write about product management, user research and whatever I find
              interesting or useful. Could be anything from a small rant about
              soft skills to a proper book review. Say hey back on{" "}
              <a
                className="text-purple-700 link link-underline"
                href="https://t.me/danieltykheev"
              >
                Telegram
              </a>{" "}
              or{" "}
              <a
                className="text-purple-700 link link-underline"
                href="https://www.linkedin.com/in/daniil-tykheev-2a156ba7/"
              >
                LinkedIn
              </a>
              .
            </p>
            <hr className="block hidden mt-8 sm:mt-12 bg-purple-800" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-3">
        <div className="flex flex-start">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={post.title} />
            ))}
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
