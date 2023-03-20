import { ItemTable } from '@components/common/ItemTable';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { coins } from '@mocks/coins';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('ItemTable', () => {
  it('Test data', () => {
    const coin = coins[0];

    render(
      <table>
        <tbody>
          <ItemTable data={coin} />
        </tbody>
      </table>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByAltText('Coin Icon')).toHaveAttribute('src', coin.image);
    expect(screen.getByText('$22,507.00')).toBeInTheDocument();
    expect(screen.getByText('-0.1%')).toBeInTheDocument();
    expect(screen.getByText('0.2%')).toBeInTheDocument();
    expect(screen.getByText('-4.4%')).toBeInTheDocument();
    expect(screen.getByText('$20,390,513,674.00')).toBeInTheDocument();
    expect(screen.getByText('$434,286,492,645.00')).toBeInTheDocument();
  });
});
