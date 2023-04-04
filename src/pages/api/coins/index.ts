import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import { CoinDb } from '@interfaces/coins';

interface Return {
  coins: string[];
}

const url = process.env.MONGODB_URI;

export const getCoinsDb = async () => {
  const client = new MongoClient(url ?? '');
  await client.connect();

  const data = await client.db().collection<CoinDb>('coins').find().toArray();
  const coinsIds = data.map((e: CoinDb) => e.coinId);

  return coinsIds;
};

export const postCoinDb = async (coin: CoinDb): Promise<ObjectId> => {
  const client = new MongoClient(url ?? '');
  await client.connect();

  const response = await client.db().collection('coins').insertOne(coin);

  return response.insertedId;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Return | ObjectId>
) => {
  if (req.method === 'GET') {
    const data = await getCoinsDb();
    res.status(200).json({ coins: data });
  } else if (req.method === 'POST') {
    const insertedId = await postCoinDb(JSON.parse(req.body));
    res.status(201).json(insertedId);
  }
};

export default handler;
