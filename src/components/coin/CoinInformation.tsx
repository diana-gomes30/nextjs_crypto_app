import {
  formatToMoney,
  getCoinMarketInfos,
  getColor,
  roundNumber,
} from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CoinData } from '@interfaces/coins';
import Image from 'next/image';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CoinMarketInfo } from './CoinMarketInfo';

interface CoinInformationProps {
  coin: CoinData;
}

export const CoinInformation = ({ coin }: CoinInformationProps) => {
  const marketInfos = getCoinMarketInfos(coin);

  return (
    <div className=" text-light bg-secundary-dark-blue">
      <small className="bg-first-dark-blue rounded-md p-1">
        <b>Rank #{coin.market_cap_rank}</b>
      </small>
      <div className="flex align-middle mt-3">
        <Image
          className="w-7 h-7 mr-2"
          unoptimized
          alt="Coin Icon"
          src={coin.image.large}
          width={250}
          height={250}
        />
        <h1 className="text-xl">
          <b>{coin.name}</b> <small>{coin.symbol.toLocaleUpperCase()}</small>
        </h1>
      </div>
      <h1 className="text-2xl">
        <b>{formatToMoney(coin.market_data.current_price.usd)} </b>
        <small
          className={getColor(coin.market_data.price_change_percentage_24h)}
        >
          <i>
            {roundNumber(coin.market_data.price_change_percentage_24h) >= 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </i>
          {roundNumber(coin.market_data.price_change_percentage_24h)}%
        </small>
      </h1>
      <div className="flex-auto mt-10">
        <CoinMarketInfo marketInfos={marketInfos} />
      </div>
      {coin.description && coin.description.en && (
        <div className="mt-10">
          <h1 className="mb-3">
            <b>What is {coin.name}?</b>
          </h1>
          <div
            className="justify-start [&>a]:text-orange-500 [&>a]:underline"
            dangerouslySetInnerHTML={{
              __html: coin.description && coin.description.en,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
