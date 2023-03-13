import { TableOptions } from '@components/common/TableOptions';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Options } from '@interfaces/coins';

describe('TableOptions', () => {
  const options: Options = {
    page: 1,
    numPerPage: 15,
  };

  test('Test data from search area', () => {
    render(
      <TableOptions
        onChangeInput={(searchValue: string) => searchValue}
        results={[]}
        options={options}
        onChangeSelect={(value: number) => value}
      />
    );

    const input = screen.getByTestId('search-input');
    expect(input).toHaveProperty('placeholder', 'Search');
    expect(screen.queryByText('Cryptocurrencies')).not.toBeInTheDocument();

    fireEvent.click(input);
    expect(input).toHaveProperty('placeholder', 'Search coin name');
    expect(screen.getByText('Cryptocurrencies')).toBeInTheDocument();
  });

  test('Test data from num per page option', async () => {
    render(
      <TableOptions
        onChangeInput={(searchValue: string) => searchValue}
        results={[]}
        options={options}
        onChangeSelect={(value: number) => value}
      />
    );

    const input = screen.getByTestId('num-per-page-button');
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.queryByText('30')).not.toBeInTheDocument();
    expect(screen.queryByText('50')).not.toBeInTheDocument();
    expect(screen.queryByText('100')).not.toBeInTheDocument();
    expect(screen.queryByText('150')).not.toBeInTheDocument();

    await act(async () => fireEvent.click(input));

    //screen.debug();
    expect(screen.getAllByText('15')).toHaveLength(2);
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });
});
