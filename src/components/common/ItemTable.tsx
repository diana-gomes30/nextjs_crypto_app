import { Coin } from '@interfaces/coins';
import Image from 'next/image';
import { formatToMoney, getColor, roundNumber } from '@/utils';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ItemTableProps<T> {
  data: Coin;
  isSelected: boolean;
  onWatchlist: (coinId: string, coinName: string) => void;
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

export const ItemTable = <T,>({
  data,
  isSelected,
  onWatchlist,
}: ItemTableProps<T>) => {
  const router = useRouter();
  const coin = data as Coin;

  return (
    <tr
      key={coin.id}
      className="border-b-2 border-solid border-light text-light align-middle bg-first-dark-blue hover:bg-third-dark-blue"
    >
      <td>
        <FontAwesomeIcon
          onClick={() => onWatchlist(coin.id, coin.name)}
          icon={faStar}
          className="cursor-pointer favorite-icon"
          style={{ color: isSelected ? 'yellow' : '' }}
        />
      </td>
      <Text>{coin.market_cap_rank}</Text>
      <td
        className="cursor-pointer flex items-center p-2 hover:underline"
        onClick={() => router.push(`/coin/${coin.id}`)}
      >
        <Image
          className="w-5 h-5 mr-3"
          unoptimized
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
