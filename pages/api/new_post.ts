// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/db/mongodb';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const blogs = await db.collection('blogs').find({}).limit(10).toArray();
    res.status(200).json(blogs);

  } else {
    res.status(400).json({ message: 'Bad request' });
  }
}
