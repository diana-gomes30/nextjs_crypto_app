import { ItemPriceStatistics } from '@components/coin/ItemPriceStatistics';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { statistics } from '@mocks/coins';
import { getDateFormatted } from '@/utils';

describe('ItemPriceStatistics', () => {
  it('Test data', () => {
    const statistic = statistics[0];

    render(
      <table>
        <tbody>
          <ItemPriceStatistics statistic={statistic} />
        </tbody>
      </table>
    );

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('$26,674.00')).toBeInTheDocument();
  });

  it('Test data', () => {
    const statistic = statistics[8];

    render(
      <table>
        <tbody>
          <ItemPriceStatistics statistic={statistic} />
        </tbody>
      </table>
    );

    const date = getDateFormatted(
      statistic.date ? statistic.date : new Date('2021-11-10T14:24:11.849Z')
    );

    expect(screen.getByText('All-Time High')).toBeInTheDocument();
    expect(screen.getByText('$69,045.00')).toBeInTheDocument();
    expect(screen.getByText('-61.2%')).toBeInTheDocument();
    expect(screen.getByText('-61.2%')).toHaveClass('text-red-500');
    expect(screen.getByText('-61.2%')).not.toHaveClass('text-green-500');
    expect(screen.getByText(date)).toBeInTheDocument();
  });
});
