import { SearchArea } from '@components/index/SearchArea';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cryptoCurrencies } from '@mocks/coins';

const setup = () => {
  const { rerender } = render(
    <SearchArea
      onChangeInput={(searchValue: string) => searchValue}
      results={cryptoCurrencies}
    />
  );
  const input = screen.getByTestId('search-input');
  return {
    input,
    rerender,
  };
};

describe('SearchArea', () => {
  it(`display's data`, () => {
    const { input } = setup();

    expect(input).toHaveProperty('placeholder', 'Search');
    expect(input).not.toHaveProperty('placeholder', 'Search coin name');

    fireEvent.click(input, { target: { placeholder: 'Search coin name' } });

    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('Wrapped Bitcoin (WBTC)')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin Cash (BCH)')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin SV (BSV)')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin Gold (BTG)')).toBeInTheDocument();
    expect(
      screen.getByText('Bitcoin Avalanche Bridged (BTC.b) (BTC.B)')
    ).toBeInTheDocument();
  });

  it('changes input value', () => {
    const { input } = setup();
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'ethereum' } });
    expect(input.getAttribute('value')).toBe('ethereum');
  });

  it('changes props component', () => {
    const { input, rerender } = setup();
    let value = 'bsv';
    const coins = cryptoCurrencies.filter(
      ({ name, symbol }) =>
        name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        symbol.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    rerender(
      <SearchArea
        onChangeInput={(searchValue: string) => value}
        results={coins}
      />
    );

    expect(screen.queryByText('Bitcoin SV (BSV)')).not.toBeInTheDocument();

    fireEvent.click(input);
    expect(screen.getByText('Bitcoin SV (BSV)')).toBeInTheDocument();
    expect(screen.queryByText('Bitcoin (BTC)')).not.toBeInTheDocument();
  });
});
