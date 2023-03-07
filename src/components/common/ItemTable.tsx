import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Coin } from '@interfaces/coins';
import Image from 'next/image';
import { formatToMoney, getColor, roundNumber } from '@/utils';
import { ReactNode } from 'react';

interface ItemTableProps<T> {
  data: T;
  isSelected: boolean;
}

interface ComponentProps {
  children: ReactNode;
}

const Text = ({ children }: ComponentProps) => (
  <td className="text-left p-2">{children}</td>
);
const Price = ({ children }: ComponentProps) => (
  <td className="text-right p-2 ">{formatToMoney(children as number)}</td>
);
const Percentage = ({ children }: ComponentProps) => (
  <td className={`text-right p-2 ${getColor(children as number)}`}>
    {roundNumber(children as number)}%
  </td>
);

export const ItemTable = <T,>({ data, isSelected }: ItemTableProps<T>) => {
  const coin = data as Coin;

  return (
    <tr
      key={coin.id}
      className="border-b-2 border-solid border-light text-light align-middle bg-first-dark-blue hover:bg-third-dark-blue"
    >
      <td className="text-center p-2">
        <FontAwesomeIcon
          icon={faStar}
          className={
            'cursor-pointer ' + (isSelected ? 'text-yellow-500' : 'text-light')
          }
        />
      </td>
      <Text>{coin.market_cap_rank}</Text>
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
      <Price>{coin.current_price}</Price>
      <Percentage>{coin.price_change_percentage_1h_in_currency}</Percentage>
      <Percentage>{coin.price_change_percentage_24h_in_currency}</Percentage>
      <Percentage>{coin.price_change_percentage_7d_in_currency}</Percentage>
      <Price>{coin.total_volume}</Price>
      <Price>{coin.market_cap}</Price>
    </tr>
  );
};
