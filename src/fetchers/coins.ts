import { urls } from '@fetchers/urls';
import { CoinData, SearchResult } from '@interfaces/coins';

const getCoins = async (numPerPage: number = 15, page: number = 1) => {
  const url = urls.markets(numPerPage, page);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const getSearch = async (valueToSearch: string) => {
  if (!valueToSearch) return;

  const urlToSearchId = urls.search(valueToSearch);

  const response = await fetch(urlToSearchId);
  const data: SearchResult = await response.json();
  return data;
};

const getCoinData = async (coinId: string) => {
  const urlToCoinData = urls.coinData(coinId);

  const response = await fetch(urlToCoinData);
  const data: CoinData = await response.json();
  return data;
};

export { getCoins, getSearch, getCoinData };
