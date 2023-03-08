import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchArea } from '@components/index/SearchArea';
import { cryptoCurrencies } from '@mocks/coins';

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
  cryptoCurrencies: cryptoCurrencies,
};
