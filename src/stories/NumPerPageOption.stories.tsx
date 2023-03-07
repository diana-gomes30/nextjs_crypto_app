import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NumPerPageOption } from '@components/index/NumPerPageOption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Index/NumPerPageOption',
  component: NumPerPageOption,
} as ComponentMeta<typeof NumPerPageOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumPerPageOption> = (args) => (
  <NumPerPageOption {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  numPerPage: 15,
};
