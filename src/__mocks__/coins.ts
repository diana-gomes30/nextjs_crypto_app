import { Coin, SearchCoin } from '@interfaces/coins';

export const coins: Coin[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 22507,
    market_cap: 434286492645,
    market_cap_rank: 1,
    total_volume: 20390513674,
    price_change_percentage_1h_in_currency: -0.06501890809141164,
    price_change_percentage_24h_in_currency: 0.1613977449185747,
    price_change_percentage_7d_in_currency: -4.391734799711345,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 1575.59,
    market_cap: 189642215984,
    market_cap_rank: 2,
    total_volume: 6682864126,
    price_change_percentage_1h_in_currency: 0.009794615925576565,
    price_change_percentage_24h_in_currency: 0.4457896947482526,
    price_change_percentage_7d_in_currency: -3.9615362614006293,
  },
  {
    id: 'tether',
    name: 'Tether',
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
    current_price: 1,
    market_cap: 71514325714,
    market_cap_rank: 3,
    total_volume: 26461610934,
    price_change_percentage_1h_in_currency: -0.053599742002823414,
    price_change_percentage_24h_in_currency: -0.13531573437520195,
    price_change_percentage_7d_in_currency: 0.02353736814107274,
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    image:
      'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    current_price: 288.19,
    market_cap: 45511389532,
    market_cap_rank: 4,
    total_volume: 360583662,
    price_change_percentage_1h_in_currency: -0.03023147087611916,
    price_change_percentage_24h_in_currency: -0.9103545034212575,
    price_change_percentage_7d_in_currency: -6.606801581196124,
  },
  {
    id: 'usd-coin',
    name: 'USD Coin',
    image:
      'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    current_price: 1,
    market_cap: 43750551121,
    market_cap_rank: 5,
    total_volume: 2762581526,
    price_change_percentage_1h_in_currency: 0.010642846118461786,
    price_change_percentage_24h_in_currency: -0.08682129470877437,
    price_change_percentage_7d_in_currency: -0.0517275831684956,
  },
];

export const cryptoCurrencies: SearchCoin[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    api_symbol: 'bitcoin',
    symbol: 'BTC',
    market_cap_rank: 1,
    thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
    large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  },
  {
    id: 'wrapped-bitcoin',
    name: 'Wrapped Bitcoin',
    api_symbol: 'wrapped-bitcoin',
    symbol: 'WBTC',
    market_cap_rank: 20,
    thumb:
      'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png',
    large:
      'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png',
  },
  {
    id: 'bitcoin-cash',
    name: 'Bitcoin Cash',
    api_symbol: 'bitcoin-cash',
    symbol: 'BCH',
    market_cap_rank: 29,
    thumb:
      'https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png',
    large:
      'https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png',
  },
  {
    id: 'bitcoin-cash-sv',
    name: 'Bitcoin SV',
    api_symbol: 'bitcoin-cash-sv',
    symbol: 'BSV',
    market_cap_rank: 69,
    thumb: 'https://assets.coingecko.com/coins/images/6799/thumb/BSV.png',
    large: 'https://assets.coingecko.com/coins/images/6799/large/BSV.png',
  },
  {
    id: 'bitcoin-gold',
    name: 'Bitcoin Gold',
    api_symbol: 'bitcoin-gold',
    symbol: 'BTG',
    market_cap_rank: 150,
    thumb:
      'https://assets.coingecko.com/coins/images/1043/thumb/bitcoin-gold-logo.png',
    large:
      'https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png',
  },
  {
    id: 'bitcoin-avalanche-bridged-btc-b',
    name: 'Bitcoin Avalanche Bridged (BTC.b)',
    api_symbol: 'bitcoin-avalanche-bridged-btc-b',
    symbol: 'BTC.B',
    market_cap_rank: 205,
    thumb: 'https://assets.coingecko.com/coins/images/26115/thumb/btcb.png',
    large: 'https://assets.coingecko.com/coins/images/26115/large/btcb.png',
  },
];
