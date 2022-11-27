import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import useSWR from 'swr';
import fetcher from '../lib/api/swr/fetcher';
import connectMongo from '../lib/db/mongodb'
import Blog from '../lib/db/models/blogModel';

type HomeProps = {
  featuredBlogs: any;
}

export default function HomePage({featuredBlogs}: HomeProps) {
  const blogList = JSON.parse(featuredBlogs)

  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
        {blogList.map((blog : any) => (
          <div key={blog.slug}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  await connectMongo()
  const blogs = await Blog.find({}).select('-_id')

  return {
    props: {
      featuredBlogs: JSON.stringify(blogs)
    },
  };
}
