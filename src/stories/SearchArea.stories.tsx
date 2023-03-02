import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchArea } from '../components/index/SearchArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Index/SearchArea',
  component: SearchArea,
} as ComponentMeta<typeof SearchArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchArea> = (args) => (
  <SearchArea {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 'bitcoin',
  cryptoCurrencies: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      image: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
    },
    {
      id: 'wrapped-bitcoin',
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      market_cap_rank: 22,
      image:
        'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png',
    },
    {
      id: 'bitcoin-cash',
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      market_cap_rank: 29,
      image:
        'https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png',
    },
    {
      id: 'bitcoin-cash-sv',
      name: 'Bitcoin SV',
      symbol: 'BSV',
      market_cap_rank: 66,
      image: 'https://assets.coingecko.com/coins/images/6799/thumb/BSV.png',
    },
    {
      id: 'bitcoin-gold',
      name: 'Bitcoin Gold',
      symbol: 'BTG',
      market_cap_rank: 143,
      image:
        'https://assets.coingecko.com/coins/images/1043/thumb/bitcoin-gold-logo.png',
    },
    {
      id: 'bitcoin-avalanche-bridged-btc-b',
      name: 'Bitcoin Avalanche Bridged (BTC.b)',
      symbol: 'BTC.B',
      market_cap_rank: 230,
      image: 'https://assets.coingecko.com/coins/images/26115/thumb/btcb.png',
    },
  ],
};
