import { CoinData, Statistic } from '@interfaces/coins';
import { statistics } from '@mocks/coins';

export const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

export const roundNumber = (number: number) => {
  return Math.round(number * 10) / 10;
};

export const formatToMoney = (number: number) => {
  return number
    ? number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    : '';
};

export const formatToMoneyWithoutDecimals = (number: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(number);
};

export const getColor = (number: number) => {
  return roundNumber(number) < 0 ? 'text-red-500' : 'text-green-500';
};

export const getDateFormatted = (date: Date) => {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getCoinPriceStatistics = (coin: CoinData): Statistic[] => {
  const dateNow = Date.now();
  const priceStatistics: Statistic[] =
    coin && coin.market_data
      ? [
          {
            id: 'price',
            label: 'Price',
            value: coin.market_data.current_price
              ? formatToMoney(coin.market_data.current_price.usd)
              : '$0.00',
          },
          {
            id: '24h-low-24h-high',
            label: '24h Low / 24h High',
            value: `${
              coin.market_data.low_24h
                ? formatToMoney(coin.market_data.low_24h.usd)
                : '$0.00'
            } / ${
              coin.market_data.high_24h
                ? formatToMoney(coin.market_data.high_24h.usd)
                : '$0.00'
            }`,
          },
          {
            id: '7d-low-7d-high',
            label: '7d Low / 7d High',
            value: `${
              coin.market_data.low_24h
                ? formatToMoney(coin.market_data.low_24h.usd)
                : '$0.00'
            } / ${
              coin.market_data.high_24h
                ? formatToMoney(coin.market_data.high_24h.usd)
                : '$0.00'
            }`,
          },
          {
            id: 'trading-volume',
            label: 'Trading Volume',
            value: coin.market_data.total_volume
              ? formatToMoneyWithoutDecimals(coin.market_data.total_volume.usd)
              : '$0.00',
          },
          {
            id: 'market-cap-rank',
            label: 'Market Cap Rank',
            value: `#${
              coin.market_data.market_cap_rank
                ? coin.market_data.market_cap_rank
                : ''
            }`,
          },
          {
            id: 'market-cap',
            label: 'Market Cap',
            value: coin.market_data.market_cap
              ? formatToMoneyWithoutDecimals(coin.market_data.market_cap.usd)
              : '$0.00',
          },
          {
            id: 'market-cap-dominance',
            label: 'Market Cap Dominance',
            value: `0.0%`,
          },
          {
            id: 'volume/market-cap',
            label: 'Volume / Market Cap',
            value:
              coin.market_data.total_volume && coin.market_data.market_cap
                ? formatToMoney(
                    coin.market_data.total_volume.usd /
                      coin.market_data.market_cap.usd
                  )
                : '$0.00',
          },
          {
            id: 'all-time-high',
            label: 'All-Time High',
            value: coin.market_data.ath
              ? formatToMoney(coin.market_data.ath.usd)
              : '$0.00',
            value2: coin.market_data.ath_change_percentage
              ? `${roundNumber(
                  coin.market_data.ath_change_percentage.usd
                ).toLocaleString()}%`
              : '0.00%',
            colorValue2: getColor(
              coin.market_data.ath_change_percentage
                ? coin.market_data.ath_change_percentage.usd
                : 0
            ),
            date: new Date(
              coin.market_data.ath_date
                ? coin.market_data.ath_date.usd
                : dateNow
            ),
          },
          {
            id: 'all-time-low',
            label: 'All-Time Low',
            value: coin.market_data.atl
              ? formatToMoney(coin.market_data.atl.usd)
              : '$0.00',
            value2: coin.market_data.atl_change_percentage
              ? `${roundNumber(
                  coin.market_data.atl_change_percentage.usd
                ).toLocaleString()}%`
              : '0.0%',
            colorValue2: getColor(
              coin.market_data.atl_change_percentage
                ? coin.market_data.atl_change_percentage.usd
                : 0
            ),
            date: new Date(
              coin.market_data.atl_date
                ? coin.market_data.atl_date.usd
                : dateNow
            ),
          },
        ]
      : [];

  return priceStatistics;
};

export const getCoinMarketInfos = (coin: CoinData): Statistic[] => {
  const markeInfo: Statistic[] =
    coin && coin.market_data
      ? [
          {
            id: 'market-cap',
            label: 'Market Cap',
            value: `${
              coin.market_data.market_cap
                ? formatToMoneyWithoutDecimals(coin.market_data.market_cap.usd)
                : '$0.00'
            }`,
          },
          {
            id: '24h-trading-vol',
            label: '24 Hour Trading Vol',
            value: `${
              coin.market_data.total_volume
                ? formatToMoneyWithoutDecimals(
                    coin.market_data.total_volume.usd
                  )
                : '$0.00'
            }`,
          },
          {
            id: 'fully-diluted-valuation',
            label: 'Fully Diluted Valuation',
            value: `${
              coin.market_data.fully_diluted_valuation
                ? formatToMoneyWithoutDecimals(
                    coin.market_data.fully_diluted_valuation.usd
                  )
                : '$0.00'
            }`,
          },
          {
            id: 'circulation-supply',
            label: 'Circulating Supply',
            value: coin.market_data.circulating_supply
              ? coin.market_data.circulating_supply.toLocaleString()
              : 0,
          },
          {
            id: 'total-supply',
            label: 'Total Supply',
            value: coin.market_data.total_supply
              ? coin.market_data.total_supply.toLocaleString()
              : 0,
          },
          {
            id: 'max-supply',
            label: 'Max Supply',
            value: coin.market_data.max_supply
              ? coin.market_data.max_supply.toLocaleString()
              : 0,
          },
        ]
      : [];

  return markeInfo;
};
