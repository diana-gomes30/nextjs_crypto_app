import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableOptions } from '@components/common/TableOptions';
import { cryptoCurrencies } from '@mocks/coins';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TableOptions',
  component: TableOptions,
} as ComponentMeta<typeof TableOptions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableOptions> = (args) => (
  <TableOptions {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: {
    numPerPage: 15,
  },
};
