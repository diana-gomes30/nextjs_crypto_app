import { getCoins } from '@fetchers/coins';
import { Table } from '@components/common/Table';
import { TableOptions } from '@components/common/TableOptions';
import { Coin } from '@interfaces/coins';
import { useState } from 'react';
import useSWR from 'swr';
import { urls } from '@fetchers/urls';
import { columns } from '@/__mocks__/coins';

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

  const handleChange = (searchValue: string) => {
    console.log(searchValue);
    setOptions((prevValue) => ({
      ...prevValue,
      searchByValue: searchValue,
    }));
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
    <div className="w-3/4 m-auto">
      <div className="pt-7 pb-10">
        <TableOptions
          onChangeInput={handleChange}
          results={[]}
          options={options}
          onChangeSelect={changeNumPerPage}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
