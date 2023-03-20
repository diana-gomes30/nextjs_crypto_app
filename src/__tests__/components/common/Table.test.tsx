import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Table } from '@components/common/Table';
import { columns } from '@consts/table';
import { coins } from '@mocks/coins';

jest.mock('next/router', () => require('next-router-mock'));

describe('Table', () => {
  it('show table header', () => {
    render(<Table columns={columns} data={coins} />);

    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Coin')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('1h')).toBeInTheDocument();
    expect(screen.getByText('24h')).toBeInTheDocument();
    expect(screen.getByText('7d')).toBeInTheDocument();
    expect(screen.getByText('24h Volume')).toBeInTheDocument();
    expect(screen.getByText('Mkt Cap')).toBeInTheDocument();
  });

  it('show all rows', () => {
    render(<Table columns={columns} data={coins} />);

    expect(screen.getAllByRole('row')).toHaveLength(6);
  });
});
