import { Statistic } from '@interfaces/coins';

interface ItemCoinMarketInfoProps {
  data: Statistic;
}

export const ItemCoinMarketInfo = ({ data }: ItemCoinMarketInfoProps) => {
  return (
    <div className="flex-row pr-5">
      <div className="flex justify-between">
        <span>{data.label}</span>
        <span>
          <b>{data.value}</b>
        </span>
      </div>
      <hr className="opacity-50 mt-2" />
    </div>
  );
};
