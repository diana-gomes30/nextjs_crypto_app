import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CoinMarketInfo } from '@components/coin/CoinMarketInfo';
import { marketInfos } from '@mocks/coins';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Coin/CoinMarketInfo',
  component: CoinMarketInfo,
} as ComponentMeta<typeof CoinMarketInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CoinMarketInfo> = (args) => (
  <CoinMarketInfo {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  marketInfos: marketInfos,
};
