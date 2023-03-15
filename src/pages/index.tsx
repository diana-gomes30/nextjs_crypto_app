import { getCoins, getSearch } from '@fetchers/coins';
import { Table } from '@components/common/Table';
import { TableOptions } from '@components/common/TableOptions';
import { Coin, SearchResult } from '@interfaces/coins';
import { useState } from 'react';
import useSWR from 'swr';
import { urls } from '@fetchers/urls';
import { columns } from '@consts/table';

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
  const [results, setResults] = useState<SearchResult>();
  const { data, error, isLoading } = useSWR(urls.markets(options.numPerPage), {
    fallback,
  });

  const handleChange = async (searchValue: string) => {
    setResults(await getSearch(searchValue));
  };

  const changeNumPerPage = (value: number) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          Is not possible to load
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          {JSON.stringify(error)}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-3/4 m-auto">
      <div className="pt-7 pb-10">
        <TableOptions
          onChangeInput={handleChange}
          results={results?.coins}
          options={options}
          onChangeSelect={changeNumPerPage}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
