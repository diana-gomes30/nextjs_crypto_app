import React from 'react';
import { Statistic } from '@interfaces/coins';
import { ItemPriceStatistics } from './ItemPriceStatistics';

interface StatisticProps {
  coinName: string;
  statistics: Statistic[];
}

export const PriceStatistics = ({ coinName, statistics }: StatisticProps) => {
  return (
    <div className="bg-first-dark-blue w-full rounded-lg pb-10 px-5  min-w-min">
      <h1 className="text-light text-2xl font-bold py-3">
        {coinName} Price Statistics
      </h1>
      <table className="w-full text-light">
        <tbody>
          {statistics &&
            statistics.map((statistic) => (
              <ItemPriceStatistics key={statistic.id} statistic={statistic} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
