import { SearchDropdownItem } from '@components/common/SearchDropdownItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { coin, cryptoCurrencies } from '@mocks/coins';
import { SearchCoin } from '@interfaces/coins';

describe('SearchDropdownItem', () => {
  const coin: SearchCoin = cryptoCurrencies[0];

  test('Test data', () => {
    render(<SearchDropdownItem cryptoCurrency={coin} />);

    //screen.debug();
    expect(screen.getByAltText('Coin Icon')).toHaveAttribute('src', coin.thumb);
    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
  });
});
