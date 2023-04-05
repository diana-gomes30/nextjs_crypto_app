import { Table } from '@components/common/Table';
import { columns } from '@consts/table';
import { deleteCoinsDb, getCoinsWatchlist } from '@fetchers/coinsDb';
import { Coin, CoinDb } from '@interfaces/coins';
import { useState } from 'react';
import { useWatchlistSWR } from '@/hooks/useWatchlistSWR';

export const getServerSideProps = async () => {
  const coins = await getCoinsWatchlist();
  return {
    props: {
      fallback: {
        'http://localhost:3000/api/coins/markets': coins,
      },
    },
  };
};

export default function Watchlist({
  fallback,
}: {
  fallback: Record<string, Coin[] | { coins: string[] }>;
}) {
  const { data, error, isLoading, mutateWatchlist } = useWatchlistSWR({
    fallback,
  });
  const [dataCoinsIds, setDataCoinsIds] = useState(data.map((e: Coin) => e.id));

  const onRemoveWatchlist = async (id: string, name: string) => {
    const coin: CoinDb = {
      coinId: id,
      coinName: name,
    };

    const coinsIds = dataCoinsIds.filter((e: string) => e !== id);
    setDataCoinsIds(coinsIds);
    const options = {
      optimisticData: coinsIds,
      rollbackOnError(error: any) {
        return error.name !== 'AbortError';
      },
    };
    await mutateWatchlist(
      'http://localhost:3000/api/coins/markets',
      deleteCoinsDb(coin),
      options
    );
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
    <div className="w-3/4 m-auto pb-10">
      <h1 className="text-light text-center py-10 text-2xl">WatchList</h1>
      <Table
        columns={columns}
        data={data}
        dataWatchlist={dataCoinsIds}
        onWatchlist={onRemoveWatchlist}
      />
    </div>
  );
}
