import { getCoins } from '@/fetchers/coins';
import { Table } from '@/components/common/Table';
import { TableOptions } from '@/components/common/TableOptions';
import { Coin } from '@/interfaces/coins';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import { urls } from '@/fetchers/urls';
import { Column } from '@/interfaces/table';

export const getServerSideProps = async () => {
  const coins = await getCoins();
  return {
    props: {
      fallback: {
        [urls.markets()]: coins,
      },
    },
  };
};

export default function Home({
  fallback,
}: {
  fallback: Record<string, Coin[]>;
}) {
  const [options, setOptions] = useState({ numPerPage: 15, searchByValue: '' });
  const [isSearchSelected, setIsSearchSelected] = useState(false);

  const { data, error, isLoading, mutate } = useSWR(
    urls.markets(options.numPerPage),
    {
      fallback,
    }
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions((prevValue) => ({
      ...prevValue,
      searchByValue: event.target.value,
    }));
  };

  const onSearchClick = (value: boolean) => {
    console.log('Value: ' + value);
    setIsSearchSelected(value);
    console.log('Final Value: ' + isSearchSelected);
  };

  const changeNumPerPage = (value: number) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>{JSON.stringify(error)}</div>;
  }

  console.log(data);

  let columns: Column[] = [
    {
      id: 'column01',
      label: '',
      type: '',
    },
    {
      id: 'column02',
      label: '#',
      type: 'string',
    },
    {
      id: 'column03',
      label: 'Coin',
      type: 'string',
    },
    {
      id: 'column04',
      label: 'Price',
      type: 'number',
    },
    {
      id: 'column05',
      label: '1h',
      type: 'number',
    },
    {
      id: 'column06',
      label: '24h',
      type: 'number',
    },
    {
      id: 'column07',
      label: '7d',
      type: 'number',
    },
    {
      id: 'column08',
      label: '24h Volume',
      type: 'number',
    },
    {
      id: 'column09',
      label: 'Mkt Cap',
      type: 'number',
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="pt-7 pb-10">
        <TableOptions
          onChangeInput={handleChange}
          onSearchClick={onSearchClick}
          isSearchSelected={isSearchSelected}
          cryptoCurrencies={[]}
          options={options}
          onChangeSelect={changeNumPerPage}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
