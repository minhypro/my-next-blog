import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import useSWR from 'swr';
import fetcher from '../lib/api/swr/fetcher';
import clientPromise from '../lib/db/mongodb';

type HomeProps = {
  featuredBlogs: string;
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
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const blogs = await db.collection('blogs').find({}).limit(10).toArray();

  return {
    props: {
      featuredBlogs: JSON.stringify(blogs),
    },
  };
}
