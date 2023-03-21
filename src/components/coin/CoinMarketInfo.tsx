import { Statistic } from '@interfaces/coins';
import { ItemCoinMarketInfo } from './ItemCoinMarketInfo';

interface CoinMarketInfoProps {
  marketInfos: Statistic[];
}

export const CoinMarketInfo = ({ marketInfos }: CoinMarketInfoProps) => {
  return (
    <div className="bg-secundary-dark-blue text-light grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3 grid-flow-col gap-5">
      {marketInfos &&
        marketInfos.map((e) => <ItemCoinMarketInfo key={e.id} data={e} />)}
    </div>
  );
};
