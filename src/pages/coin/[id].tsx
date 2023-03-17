import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import { getCoinData } from '@fetchers/coins';
import { CoinData } from '@interfaces/coins';
import { urls } from '@fetchers/urls';
import { PriceStatistics } from '@components/coin/PriceStatistics';
import { getCoinPriceStatistics } from '@/utils';
import { CoinInformation } from '@components/coin/CoinInformation';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const data = await getCoinData(id);
  return {
    props: {
      id,
      fallback: {
        [urls.coinData(id)]: data,
      },
    },
  };
};

export default function Coin({
  fallback,
  id,
}: {
  fallback: Record<string, CoinData>;
  id: string;
}) {
  const { data, error, isLoading } = useSWR(urls.coinData(id), {
    fallback,
  });
  const statistics = getCoinPriceStatistics(data);

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          Is not possible to load
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen w-full justify-center items-center">
        <h1 className="text-xl font-bold text-light">
          {JSON.stringify(error)}
        </h1>
      </div>
    );
  }

  console.log(statistics);
  return (
    <div className="flex mx-16 py-10">
      <div className="w-3/5 mr-10">
        <CoinInformation coin={data} />
      </div>
      <div className="w-2/5 ml-10">
        <PriceStatistics coinName={data.name} statistics={statistics} />
      </div>
    </div>
  );
}
