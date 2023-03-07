import { Coin } from '@interfaces/coins';
import { urls } from '@fetchers/urls';

interface Data {
  coins: {
    id: string;
  }[];
}

const getCoins = async (numPerPage: number = 15, page: number = 1) => {
  console.log({ numPerPage, page });
  const url = urls.markets(numPerPage, page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getSearch = async (valueToSearch: string) => {
  const urlToSearchId = urls.search(valueToSearch);
  const response = await fetch(urlToSearchId);
  const data: Data = await response.json();

  const coinsId = data.coins.map((e) => e.id);
  const coinsData: Coin[] = await Promise.all(
    coinsId.map(async (e: string) => {
      const url = urls.coins(e);
      const response = await fetch(url);
      const data = await response.json();

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
};

export { getCoins, getSearch };
