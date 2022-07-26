import React from "react";
import { useRouter } from "next/router";
import { Helmet } from 'react-helmet'

import { getPosts, getPostDetails } from "../../services";
import { PostDetail, Loader } from "../../components";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto max-w-lg sm:max-w-3xl mt-20 sm:mt-32 mb-8 px-4 sm:px-0">
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-16 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
