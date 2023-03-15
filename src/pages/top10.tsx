import useSWR from 'swr';

import { getCoins } from '@fetchers/coins';
import { urls } from '@fetchers/urls';
import { Coin, Options } from '@interfaces/coins';
import { Table } from '@components/common/Table';
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

export default function Top10({
  fallback,
}: {
  fallback: Record<string, Coin[]>;
}) {
  const options: Options = {
    page: 1,
    numPerPage: 10,
  };
  const { data, error, isLoading } = useSWR(urls.markets(options.numPerPage), {
    fallback,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="w-3/4 m-auto">
      <div className="pt-7 pb-10">
        <h1 className="text-center text-xl font-bold text-light">Top 10</h1>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
