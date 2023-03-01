import { Coin } from '../../interfaces/coins';
import { ItemTable } from './ItemTable';

interface TableProps {
  coins: Coin[];
  onWatchlist: (id: string) => void;
}

[
  {
    id: 'column1',
    label: 'Coin',
  },
  {
    id: 'column2',
    name: 'Price',
  },
];

[
  {
    column1: 'Bitcoin',
    column2: 20000000000000000000,
  },
  {
    column1: 'Ethereum',
    column2: 10000000000000000000,
  },
];

export const Table = ({ coins }: TableProps) => {
  return (
    <div className="table-coins">
      <table>
        <tbody>
          <tr className="header-table">
            <th></th>
            <th className="l-align">#</th>
            <th className="l-align">Coin</th>
            <th className="r-align">Price</th>
            <th className="r-align">1h</th>
            <th className="r-align">24h</th>
            <th className="r-align">7d</th>
            <th className="r-align">24h Volume</th>
            <th className="r-align">Mkt Cap</th>
          </tr>

          {coins
            ?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
            .map((coin: Coin) => (
              <ItemTable key={coin.id} coin={coin} isSelected={false} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
