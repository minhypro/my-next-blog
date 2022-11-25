import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import BlogDetails from '../../components/Blog/BlogDetails';
import { getSpecificBlog } from '../../ultils/getBlogHandlers';
import NotFound from '../404';
import { BlogTypes } from '../../ultils/globalTypes';

type Props = {
  blog: BlogTypes;
};

function Blog({ blog }: Props) {
  // const router = useRouter();
  // const blogSlugList = router.query.blogSlug as string;

  if (!blog) {
    return <p>Loading...</p>;
  }

  // const blogSlugLength = blogSlugList.length;
  // const blogSlug = blogSlugList[blogSlugLength - 1];
  // const blog = getSpecificBlog(blogSlug);

  return (
    <Layout>
      <BlogDetails {...blog} />
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const blogSlugList = params.blogSlug
  const blogSlugLength = blogSlugList.length;
  const blogSlug = blogSlugList[blogSlugLength - 1];
  const blog = getSpecificBlog(blogSlug);

  return {
    props: {
      blog: blog
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogSlug: ['hi'] } },// See the "paths" section below
      // { params: { blogSlug: ['hello'] } }, // See the "paths" section below
      // { params: { blogSlug: ['xinchao'] } }, // See the "paths" section below
    ],
    fallback: 'blocking' // See the "fallback" section below
  };
}

export default Blog;
