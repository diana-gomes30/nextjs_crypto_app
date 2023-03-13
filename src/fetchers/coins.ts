import { urls } from '@fetchers/urls';
import { SearchResult } from '@interfaces/coins';

const getCoins = async (numPerPage: number = 15, page: number = 1) => {
  const url = urls.markets(numPerPage, page);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getSearch = async (valueToSearch: string) => {
  if (!valueToSearch) return;

  const urlToSearchId = urls.search(valueToSearch);
  const response = await fetch(urlToSearchId);
  const data: SearchResult = await response.json();
  return data;
};

export { getCoins, getSearch };
