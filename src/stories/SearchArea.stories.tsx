import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchArea } from '@components/index/SearchArea';
import { cryptoCurrencies } from '@mocks/coins';
import { SearchCoin } from '@interfaces/coins';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Index/SearchArea',
  component: SearchArea,
} as ComponentMeta<typeof SearchArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchArea> = (args) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<SearchCoin[]>([]);

  useEffect(
    () =>
      setResults(
        cryptoCurrencies.filter(
          ({ name, symbol }) =>
            name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            symbol.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      ),
    [value]
  );

  return (
    <SearchArea onChangeInput={(value) => setValue(value)} results={results} />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  results: [],
};
