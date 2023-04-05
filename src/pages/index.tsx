import { getCoins, getSearch } from '@fetchers/coins';
import { Table } from '@components/common/Table';
import { TableOptions } from '@components/common/TableOptions';
import { Coin, CoinDb, SearchResult } from '@interfaces/coins';
import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { urls } from '@fetchers/urls';
import { columns } from '@consts/table';
import { postCoinsDb, getCoinsDb, deleteCoinsDb } from '@fetchers/coinsDb';
import { useTest, useTest2 } from '@/hooks/useTest';

export const getServerSideProps = async () => {
  const coins = await getCoins();
  const coinsDb = await getCoinsDb();
  return {
    props: {
      fallback: {
        [urls.markets()]: coins,
        'http://localhost:3000/api/coins': coinsDb,
      },
    },
  };
};

export default function Home({
  fallback,
}: {
  fallback: Record<string, Coin[] | { coins: CoinDb[] }>;
}) {
  const [options, setOptions] = useState({
    numPerPage: 15,
    page: 1,
    searchByValue: '',
  });
  const [results, setResults] = useState<SearchResult>();
  const { data, error, isLoading } = useSWR(
    urls.markets(options.numPerPage, options.page),
    {
      fallback,
    }
  );
  const {
    data: dataWatchlist,
    error: errorWatchlist,
    isLoading: isLoadingWatchlist,
  } = useSWR('http://localhost:3000/api/coins', { fallback });
  const { mutate: mutateWatchlist } = useSWRConfig();

  const handleChange = async (searchValue: string) => {
    setResults(await getSearch(searchValue));
  };

  const changeNumPerPage = (value: number) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: value,
    }));
  };

  const changePage = (value: number) => {
    setOptions((prevValue) => ({
      ...prevValue,
      page: value,
    }));
  };

  const onWatchlist = async (id: string, name: string) => {
    const coin: CoinDb = {
      coinId: id,
      coinName: name,
    };

    if (!dataWatchlist.coins.includes(id)) {
      const coinsIds = [...dataWatchlist.coins, coin.coinId];
      const options = {
        optimisticData: coinsIds,
        rollbackOnError(error: any) {
          return error.name !== 'AbortError';
        },
      };
      await mutateWatchlist(
        'http://localhost:3000/api/coins',
        postCoinsDb(coin),
        options
      );
    } else {
      const coinsIds = dataWatchlist.coins.filter((e: string) => e !== id);
      const options = {
        optimisticData: coinsIds,
        rollbackOnError(error: any) {
          return error.name !== 'AbortError';
        },
      };
      await mutateWatchlist(
        'http://localhost:3000/api/coins',
        deleteCoinsDb(coin),
        options
      );
    }
  };

  if (isLoading || isLoadingWatchlist) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">Loading...</h1>
      </div>
    );
  }

  if (!data || !dataWatchlist) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          Is not possible to load
        </h1>
      </div>
    );
  }

  if (error || errorWatchlist) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          {JSON.stringify(error)}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-3/4 m-auto pb-10">
      <div className="pt-7 pb-10">
        <TableOptions
          onChangeInput={handleChange}
          results={results?.coins}
          options={options}
          onChangeSelect={changeNumPerPage}
          onChangePage={changePage}
        />
      </div>
      <Table
        columns={columns}
        data={data}
        dataWatchlist={dataWatchlist.coins}
        onWatchlist={onWatchlist}
      />
    </div>
  );
}
