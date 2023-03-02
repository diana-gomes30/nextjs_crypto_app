import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Coin } from '../../interfaces/coins';
import Image from 'next/image';

interface ItemTableProps {
  coin: Coin;
  isSelected: boolean;
}

export const ItemTable = ({ coin, isSelected }: ItemTableProps) => {
  const roundNumber = (number: number) => {
    return Math.round(number * 10) / 10;
  };

  const formatToMoney = (number: number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const getColor = (number: number) => {
    return roundNumber(number) < 0 ? 'text-red-500' : 'text-green-500';
  };

  return (
    <tr
      key={coin.id}
      className="border-b-2 border-solid border-light text-light align-middle hover: bg-first-dark-blue"
    >
      <td className="text-center p-2">
        <FontAwesomeIcon
          icon={faStar}
          className={
            'cursor-pointer ' + (isSelected ? 'text-yellow-500' : 'text-light')
          }
        />
      </td>
      <td className="text-left p-2">{coin.market_cap_rank}</td>
      <td className="flex items-center p-2">
        <Image
          className="w-5 h-5 mr-3"
          alt="Coin Icon"
          src={coin.image}
          width={100}
          height={100}
        />
        {coin.name}
      </td>
      <td className="text-right p-2 ">{formatToMoney(coin.current_price)}</td>
      <td
        className={
          'text-right p-2 ' +
          getColor(coin.price_change_percentage_1h_in_currency)
        }
      >
        {roundNumber(coin.price_change_percentage_1h_in_currency)}%
      </td>
      <td
        className={
          'text-right p-2 ' +
          getColor(coin.price_change_percentage_24h_in_currency)
        }
      >
        {roundNumber(coin.price_change_percentage_24h_in_currency)}%
      </td>
      <td
        className={
          'text-right p-2 ' +
          getColor(coin.price_change_percentage_7d_in_currency)
        }
      >
        {roundNumber(coin.price_change_percentage_7d_in_currency)}%
      </td>
      <td className="text-right p-2">{formatToMoney(coin.total_volume)}</td>
      <td className="text-right p-2">{formatToMoney(coin.market_cap)}</td>
    </tr>
  );
};
