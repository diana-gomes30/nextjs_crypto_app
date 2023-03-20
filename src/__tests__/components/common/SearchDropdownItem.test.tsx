import { SearchDropdownItem } from '@components/common/SearchDropdownItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cryptoCurrencies } from '@mocks/coins';
import { SearchCoin } from '@interfaces/coins';

describe('SearchDropdownItem', () => {
  const coin: SearchCoin = cryptoCurrencies[0];

  it('Test data', () => {
    render(<SearchDropdownItem cryptoCurrency={coin} />);

    expect(screen.getByAltText('Coin Icon')).toHaveAttribute('src', coin.thumb);
    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
  });
});
