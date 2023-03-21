import { Statistic } from '@interfaces/coins';

interface ItemCoinMarketInfoProps {
  data: Statistic;
}

export const ItemCoinMarketInfo = ({ data }: ItemCoinMarketInfoProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center border-b border-b-light">
      <span>{data.label}</span>
      <span className="text-end">
        <b>{data.value}</b>
      </span>
    </div>
  );
};
