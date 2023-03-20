import { CoinInformation } from '@components/coin/CoinInformation';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { coinData } from '@mocks/coins';

describe('CoinInformation', () => {
  it('Test data', () => {
    render(<CoinInformation coin={coinData} />);

    expect(screen.getByText('Rank #1')).toBeInTheDocument();
    expect(screen.getByAltText('Coin Icon')).toHaveAttribute(
      'src',
      coinData.image.large
    );
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('$28,079.00')).toBeInTheDocument();
    expect(screen.getByText('1.4%')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('What is Bitcoin?')).toBeInTheDocument();
    expect(
      screen.queryByText('Bitcoin Price Statistics')
    ).not.toBeInTheDocument();
  });
});
