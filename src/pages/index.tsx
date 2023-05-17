import { getCoins, getSearch } from '@fetchers/coins';
import { Table } from '@components/common/Table';
import { TableOptions } from '@components/common/TableOptions';
import { Coin, CoinDb } from '@interfaces/coins';
import { useReducer } from 'react';
import { urls } from '@fetchers/urls';
import { columns } from '@consts/table';
import { postCoinsDb, getCoinsDb, deleteCoinsDb } from '@fetchers/coinsDb';
import { useIndexSWR } from '@/hooks/useIndexSWR';
import { IndexActionKind, reducer } from '@/reducers/reducerIndex';

export const getServerSideProps = async () => {
  const coins = await getCoins();
  const coinsDb = await getCoinsDb();
  return {
    props: {
      fallback: {
        [urls.markets()]: coins,
        '/api/coins': coinsDb,
      },
    },
  };
};

const initialState = {
  numPerPage: 15,
  page: 1,
  searchByValue: '',
  results: { coins: [] },
};

export default function Home({
  fallback,
}: {
  fallback: Record<string, Coin[] | { coins: CoinDb[] }>;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    data,
    error,
    isLoading,
    dataWatchlist,
    errorWatchlist,
    isLoadingWatchlist,
    mutateWatchlist,
  } = useIndexSWR({ options: state, fallback });

  const handleChange = async (searchValue: string) => {
    const value = await getSearch(searchValue);
    if (value) dispatch({ type: IndexActionKind.RESULTS, payload: value });
  };

  const changeNumPerPage = (value: number) => {
    dispatch({ type: IndexActionKind.NUM_PER_PAGE, payload: value });
  };

  const changePage = (value: number) => {
    dispatch({ type: IndexActionKind.PAGE, payload: value });
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
      await mutateWatchlist(`/api/coins`, postCoinsDb(coin), options);
    } else {
      const coinsIds = dataWatchlist.coins.filter((e: string) => e !== id);
      const options = {
        optimisticData: coinsIds,
        rollbackOnError(error: any) {
          return error.name !== 'AbortError';
        },
      };
      await mutateWatchlist(`/api/coins`, deleteCoinsDb(coin), options);
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
          results={state.results?.coins}
          options={state}
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
