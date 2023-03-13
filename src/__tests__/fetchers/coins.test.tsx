import { getCoins, getSearch } from '@fetchers/coins';
import { urls } from '@fetchers/urls';
import { coins, cryptoCurrencies } from '@mocks/coins';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';

describe('Coins', () => {
  afterEach(() => {
    fetchMock.reset();
  });

  it('get all coins', async () => {
    fetchMock.mock(urls.markets(), { status: 200, body: coins });

    const result = await getCoins();
    expect(result).toEqual(coins);
  });

  it('get coins by name/symbol', async () => {
    const value = 'bitcoin';
    fetchMock.mock(urls.search(value), { status: 200, body: cryptoCurrencies });

    const result = await getSearch(value);
    expect(result).toEqual(cryptoCurrencies);
  });

  it('get coins per page', async () => {
    const numPerPage = 3;
    const coinsData = coins.slice(0, 2);
    fetchMock.mock(urls.markets(numPerPage), {
      status: 200,
      body: coinsData,
    });

    const result = await getCoins(numPerPage);
    expect(result).toEqual(coinsData);
  });

  it('get paginated coins', async () => {
    const numPerPage = 2;
    const page = 2;
    const coinsData = coins.slice(2, 3);
    fetchMock.mock(urls.markets(numPerPage, page), {
      status: 200,
      body: coinsData,
    });

    const result = await getCoins(numPerPage, page);
    expect(result).toEqual(coinsData);
  });
});
