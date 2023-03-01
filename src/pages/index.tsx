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

  const { data, error, isLoading, mutate } = useSWR(
    urls.markets(options.numPerPage),
    {
      fallback,
    }
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //setSearch(event.target.value);
  };

  const changeNumPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: +event.target.value,
    }));
  };

  const searchByValue = () => {
    setOptions((prevValue) => ({
      ...prevValue,
      valueToSearch: '',
    }));
  };

  const handleClick = () => {};

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
      <TableOptions
        onChangeInput={handleChange}
        onChangeSelect={changeNumPerPage}
        onSearchClick={searchByValue}
        options={options}
      />
      <Table coins={data} onWatchlist={handleClick} />
    </div>
  );
}
