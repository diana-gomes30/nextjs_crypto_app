import { CoinDb } from '@interfaces/coins';
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const url = process.env.MONGODB_URI;

export const deleteCoinsDb = async (coinId: string) => {
  const client = new MongoClient(url ?? '');
  await client.connect();

  await client.db().collection<CoinDb>('coins').deleteOne({ coinId: coinId });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) {
      return;
    }
    await deleteCoinsDb(id as string);
    res.status(204).end();
  }
}
