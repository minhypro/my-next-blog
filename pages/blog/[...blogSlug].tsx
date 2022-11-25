import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import BlogDetails from '../../components/Blog/BlogDetails';
import { getAllBlogs, getSpecificBlog } from '../../ultils/getBlogHandlers';
import NotFound from '../404';
import { BlogTypes } from '../../ultils/globalTypes';
import { GetStaticProps } from 'next/types';

type Props = {
  blog: BlogTypes;
};

function Blog({ blog }: Props) {
  if (!blog) return <p>Loading...</p>

  return (
    <Layout>
      <BlogDetails {...blog} />
    </Layout>
  );
}

type Params = {
  params: {
    blogSlug: string[];
  }
}

export async function getStaticProps(context: Params) {
  const { params } = context;
  const blogSlugList = params.blogSlug
  const blogSlugLength = blogSlugList.length;
  const blogSlug = blogSlugList[blogSlugLength - 1];
  const blog = await getSpecificBlog(blogSlug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: blog
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs()
  const blogSlugList = blogs.map((blog: BlogTypes ) => blog.slug)
  const pathWithParams = blogSlugList.map((slug: string) => ({params: {blogSlug: [slug]}}))

  return {
    paths: pathWithParams,
    fallback: true,
  };
}

export default Blog;
