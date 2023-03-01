import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Coin } from '../../interfaces/coins';
import { ImageOptimizerCache } from 'next/dist/server/image-optimizer';
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
    return roundNumber(number) < 0 ? '#e15241' : '#4eaf0a';
  };

  return (
    <tr key={coin.id} className="data-table">
      <td>
        <FontAwesomeIcon
          icon={faStar}
          className="favorite-icon"
          style={{ color: isSelected ? 'yellow' : '' }}
        />
      </td>
      <td className="l-align">{coin.market_cap_rank}</td>
      <td className="name-image">
        <Image alt="Coin Icon" src={coin.image} width={100} height={100} />
        {coin.name}
      </td>
      <td className="r-align">{formatToMoney(coin.current_price)}</td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_1h_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_1h_in_currency)}%
      </td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_24h_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_24h_in_currency)}%
      </td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_7d_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_7d_in_currency)}%
      </td>
      <td className="r-align">{formatToMoney(coin.total_volume)}</td>
      <td className="r-align">{formatToMoney(coin.market_cap)}</td>
    </tr>
  );
};