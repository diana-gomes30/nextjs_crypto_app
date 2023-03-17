import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PriceStatistics } from '@components/coin/PriceStatistics';
import { statistics } from '@mocks/coins';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'coin/PriceStatistics',
  component: PriceStatistics,
} as ComponentMeta<typeof PriceStatistics>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PriceStatistics> = (args) => (
  <PriceStatistics {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  coinName: 'Bitcoin',
  statistics: statistics,
};
