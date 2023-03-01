const baseUrl = `https://api.coingecko.com/api/v3/`;

export const urls = {
  markets: (numPerPage: number = 15, page: number = 1) =>
    `${baseUrl}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numPerPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
  search: (valueToSearch: string) => `${baseUrl}search?query=${valueToSearch}`,
  coins: (e: string) =>
    `${baseUrl}coins/${e}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
};
