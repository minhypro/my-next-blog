import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../lib/db/models/userModel';
import connectMongo from '../../lib/db/mongodb';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).send('Please fill all required fields');
      }

      await connectMongo();
      const user = await User.findOne({ username });
      if (user) {
        const checkPassword = password === user.password;
        if (checkPassword) {
          res.status(200).json({
            username: user.username,
            isAdmin: user.isAdmin,
          });
        }
      } else {
        return res.status(401).send('Wrong username or password');
      }
      break;
    default:
      return res.status(400).send('Bad request');
  }
}
