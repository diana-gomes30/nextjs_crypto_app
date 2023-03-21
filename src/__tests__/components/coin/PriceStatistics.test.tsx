import { PriceStatistics } from '@components/coin/PriceStatistics';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { statistics } from '@mocks/coins';

describe('PriceStatistics', () => {
  it('Test data', () => {
    render(<PriceStatistics coinName={'Bitcoin'} statistics={statistics} />);

    expect(screen.getAllByRole('row')).toHaveLength(10);

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('24h Low / 24h High')).toBeInTheDocument();
    expect(screen.getByText('7d Low / 7d High')).toBeInTheDocument();
    expect(screen.getByText('Trading Volume')).toBeInTheDocument();
    expect(screen.getByText('Market Cap Rank')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('Market Cap Dominance')).toBeInTheDocument();
    expect(screen.getByText('Volume / Market Cap')).toBeInTheDocument();
    expect(screen.getByText('All-Time High')).toBeInTheDocument();
    expect(screen.getByText('All-Time Low')).toBeInTheDocument();

    expect(screen.getByText('$26,674.00')).toBeInTheDocument();
    expect(
      screen.getAllByText('$24,802.00 / $27,085.00')[0]
    ).toBeInTheDocument();
    expect(screen.getByText('$57,009,919,159.00')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText('$517,011,186,274.00')).toBeInTheDocument();
    expect(screen.getByText('0.0%')).toBeInTheDocument();
    expect(screen.getByText('$0.11')).toBeInTheDocument();
    expect(screen.getByText('$69,045.00')).toBeInTheDocument();
    expect(screen.getByText('-61.2%')).toBeInTheDocument();
    expect(screen.getByText('Nov 10, 2021')).toBeInTheDocument();
  });
});
