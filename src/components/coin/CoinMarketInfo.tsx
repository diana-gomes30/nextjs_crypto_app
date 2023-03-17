import { Statistic } from '@interfaces/coins';
import { ItemCoinMarketInfo } from './ItemCoinMarketInfo';

interface CoinMarketInfoProps {
  marketInfos: Statistic[];
}

export const CoinMarketInfo = ({ marketInfos }: CoinMarketInfoProps) => {
  return (
    <div className="text-light grid grid-rows-3 grid-flow-col gap-2">
      {marketInfos &&
        marketInfos.map((e) => <ItemCoinMarketInfo key={e.id} data={e} />)}
      {/*<div className="flex-row pr-5">
        <div className="flex justify-between">
          <span>Teste 1</span>
          <span>
            <b>Value 1</b>
          </span>
        </div>
        <hr className="opacity-50 mt-2" />
      </div>
      <div className="flex-row pr-5">
        <div className="flex justify-between">
          <span>Teste 1</span>
          <span>
            <b>Value 1</b>
          </span>
        </div>
        <hr className="opacity-50 mt-2" />
      </div>
      <div className="flex-row pr-5">
        <div className="flex justify-between">
          <span>Teste 1</span>
          <span>
            <b>Value 1</b>
          </span>
        </div>
        <hr className="opacity-50 mt-2" />
      </div>
      <div className="flex-row pr-5">
        <div className="flex justify-between">
          <span>Teste 1</span>
          <span>
            <b>Value 1</b>
          </span>
        </div>
        <hr className="opacity-50 mt-2" />
      </div>
      <div className="flex-row pr-5">
        <div className="flex justify-between">
          <span>Teste 1</span>
          <span>
            <b>Value 1</b>
          </span>
        </div>
        <hr className="opacity-50 mt-2" />
      </div>*/}
    </div>
  );
};
