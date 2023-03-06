import { getCoins } from '@/fetchers/coins';
import { Table } from '@/components/common/Table';
import { TableOptions } from '@/components/common/TableOptions';
import { Coin } from '@/interfaces/coins';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import { urls } from '@/fetchers/urls';

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

  return (
    <div>
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
      <div className="w-3/4 m-auto">
        <Table coins={data} />
      </div>
    </div>
  );
}
