import { urls } from '@fetchers/urls';
import { CoinData, SearchResult } from '@interfaces/coins';

const getCoins = async (numPerPage: number = 15, page: number = 1) => {
  const url = urls.markets(numPerPage, page);

  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return [];
  }
};

const getSearch = async (valueToSearch: string) => {
  if (!valueToSearch) return;

  const urlToSearchId = urls.search(valueToSearch);

  const response = await fetch(urlToSearchId);
  if (response.status === 200) {
    const data: SearchResult = await response.json();
    return data;
  } else {
    return null;
  }
};

const getCoinData = async (coinId: string) => {
  const urlToCoinData = urls.coinData(coinId);

  const response = await fetch(urlToCoinData);
  if (response.status === 200) {
    const data: CoinData = await response.json();
    return data;
  } else {
    return null;
  }
};

export { getCoins, getSearch, getCoinData };
