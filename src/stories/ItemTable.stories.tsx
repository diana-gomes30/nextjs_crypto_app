import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemTable } from '../components/common/ItemTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/ItemTable',
  component: ItemTable,
} as ComponentMeta<typeof ItemTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ItemTable> = (args) => (
  <ItemTable {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  coin: {
    id: 'bitcoin',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 23502,
    market_cap: 453782751644,
    market_cap_rank: 1,
    total_volume: 32491845719,
    price_change_percentage_1h_in_currency: -0.3174657318357591,
    price_change_percentage_24h_in_currency: 1.476411654150104,
    price_change_percentage_7d_in_currency: -3.7506416069209227,
  },
  isSelected: false,
};

/*export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
