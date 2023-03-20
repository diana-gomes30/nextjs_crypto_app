import { CoinMarketInfo } from '@components/coin/CoinMarketInfo';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { marketInfos } from '@mocks/coins';

describe('CoinMarketInfo', () => {
  it('Test data', () => {
    render(<CoinMarketInfo marketInfos={marketInfos} />);

    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('24 Hour Trading Vol')).toBeInTheDocument();
    expect(screen.getByText('Fully Diluted Valuation')).toBeInTheDocument();
    expect(screen.getByText('Circulating Supply')).toBeInTheDocument();
    expect(screen.getByText('Total Supply')).toBeInTheDocument();
    expect(screen.getByText('Max Supply')).toBeInTheDocument();

    expect(screen.getByText('$540,600,288,125')).toBeInTheDocument();
    expect(screen.getByText('$59,621,110,621')).toBeInTheDocument();
    expect(screen.getByText('$587,517,992,198')).toBeInTheDocument();
    expect(screen.getByText('19,322,993')).toBeInTheDocument();
    expect(screen.getAllByText('21,000,000')).toHaveLength(2);
  });
});
