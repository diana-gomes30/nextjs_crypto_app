import { getCoins } from '@fetchers/coins';
import { urls } from '@fetchers/urls';
import { Coin, CoinDb, Options } from '@interfaces/coins';
import { Table } from '@components/common/Table';
import { columns } from '@consts/table';
import { deleteCoinsDb, postCoinsDb } from '@fetchers/coinsDb';
import { useIndexSWR } from '@/hooks/useIndexSWR';

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

export default function Top10({
  fallback,
}: {
  fallback: Record<string, Coin[]>;
}) {
  const initialOptions: Options = {
    page: 1,
    numPerPage: 10,
  };
  const {
    data,
    error,
    isLoading,
    dataWatchlist,
    errorWatchlist,
    isLoadingWatchlist,
    mutateWatchlist,
  } = useIndexSWR({ options: initialOptions, fallback });

  const onWatchlist = async (id: string, name: string) => {
    const coin: CoinDb = {
      coinId: id,
      coinName: name,
    };
    console.log(id);
    if (dataWatchlist.coins && !dataWatchlist.coins.includes(id)) {
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
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          Is not possible to load
        </h1>
        <h3 className="text-xl font-bold text-light">
          You have exceeded the Rate Limit to Coingecko API
        </h3>
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
    <div className="w-3/4 m-auto">
      <div className="pt-7 pb-10">
        <h1 className="text-center text-xl font-bold text-light">Top 10</h1>
      </div>
      <Table
        columns={columns}
        data={data}
        dataWatchlist={data}
        onWatchlist={onWatchlist}
      />
    </div>
  );
}
