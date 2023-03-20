import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CoinInformation } from '@components/coin/CoinInformation';
import { coinData } from '@mocks/coins';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Coin/CoinInformation',
  component: CoinInformation,
} as ComponentMeta<typeof CoinInformation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CoinInformation> = (args) => (
  <CoinInformation {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  coin: coinData,
};
