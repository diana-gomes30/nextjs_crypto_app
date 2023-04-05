import { getCoinsDb } from '../index';
import { urls } from '@fetchers/urls';
import { Coin, CoinData } from '@interfaces/coins';
import { NextApiRequest, NextApiResponse } from 'next';

export const getCoinsWatchlist = async () => {
  try {
    const coinsIds: string[] = await getCoinsDb();
    const coinsData = await Promise.all(
      coinsIds.map(async (e) => {
        const urlToCoinData = urls.coinData(e);

        console.log(urlToCoinData);

        const response = await fetch(urlToCoinData);
        const data: CoinData = await response.json();
        console.log(data);
        let coin: Coin = {
          id: data.id,
          market_cap_rank: data.market_data.market_cap_rank,
          image: data.image.large,
          name: data.name,
          current_price: data.market_data.current_price.usd,
          price_change_percentage_1h_in_currency:
            data.market_data.price_change_percentage_1h_in_currency.usd,
          price_change_percentage_24h_in_currency:
            data.market_data.price_change_percentage_24h_in_currency.usd,
          price_change_percentage_7d_in_currency:
            data.market_data.price_change_percentage_7d_in_currency.usd,
          total_volume: data.market_data.total_volume.usd,
          market_cap: data.market_data.market_cap.usd,
        };
        return coin;
      })
    );

    return coinsData;
  } catch (e) {
    return [];
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const data = await getCoinsWatchlist();
    res.status(200).json(data);
  }
};

export default handler;
