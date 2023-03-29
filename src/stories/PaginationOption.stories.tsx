import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaginationOption } from '@components/index/PaginationOption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Index/PaginationOption',
  component: PaginationOption,
} as ComponentMeta<typeof PaginationOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaginationOption> = (args) => (
  <PaginationOption {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  coinsPerPage: 15,
  totalCryptoCoins: 300,
  page: 1,
};
