import { getCoins, getSearch } from '@fetchers/coins';
import { Table } from '@components/common/Table';
import { TableOptions } from '@components/common/TableOptions';
import { Coin, SearchResult } from '@interfaces/coins';
import { useEffect, useState } from 'react';
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
  const { data, error, isLoading, mutate } = useSWR(
    urls.markets(options.numPerPage),
    {
      fallback,
    }
  );

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
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
