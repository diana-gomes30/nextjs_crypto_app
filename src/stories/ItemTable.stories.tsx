import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemTable } from '@components/common/ItemTable';
import { coins } from '@mocks/coins';

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
  data: coins[0],
};
