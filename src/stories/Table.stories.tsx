import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components/common/Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  columns: [
    {
      id: 'column01',
      label: '',
      type: '',
    },
    {
      id: 'column02',
      label: '#',
      type: 'string',
    },
    {
      id: 'column03',
      label: 'Coin',
      type: 'string',
    },
    {
      id: 'column04',
      label: 'Price',
      type: 'number',
    },
    {
      id: 'column05',
      label: '1h',
      type: 'number',
    },
    {
      id: 'column06',
      label: '24h',
      type: 'number',
    },
    {
      id: 'column07',
      label: '7d',
      type: 'number',
    },
    {
      id: 'column08',
      label: '24h Volume',
      type: 'number',
    },
    {
      id: 'column09',
      label: 'Mkt Cap',
      type: 'number',
    },
  ],
  data: [
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
  ],
};
