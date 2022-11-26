import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import useSWR from 'swr';
import fetcher from '../api/swr/fetcher'

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const {data, error} = useSWR('/todos/9', fetcher);

  console.log(data)
  console.log(error)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
        <h2>{data.title}</h2>
        <p>{data.completed}</p>
      </div>
    </Layout>
  );
}
