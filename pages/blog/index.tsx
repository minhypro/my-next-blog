import React from 'react';
import Layout from '../../components/Layout';
import BlogPreview from '../../components/Blog/BlogPreview';
import { getAllBlogs } from '../../ultils/getBlogHandlers';
import { BlogTypes } from '../../types/globalTypes'

type Props = {
  blogs: BlogTypes[]
};

export default function BlogPost({blogs}: Props) {
  return (
    <Layout>
      <div>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} {...blog}/>
        ))}
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  const dummyPosts = await getAllBlogs();
  
  return {
    props: {
      blogs: dummyPosts
    }
  }
}
