import { Column } from '@/interfaces/table';
import { Coin } from '../../interfaces/coins';
import { ItemTable } from './ItemTable';

interface TableProps {
  columns: Column[];
  data: Coin[];
}

export const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="flex justify-center items-center my-5 mx-0">
      <table className="text-light text-lg border-collapse">
        <tbody>
          <tr className="border-b border-t border-solid border-light bg-first-dark-blue">
            {columns
              ?.sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((column: Column) => (
                <th
                  key={column.id}
                  className={
                    'p-2 ' +
                    (column.type === 'string'
                      ? 'text-left'
                      : column.type === 'number'
                      ? 'text-right'
                      : '')
                  }
                >
                  {column.label}
                </th>
              ))}
          </tr>

          {data
            ?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
            .map((coin: Coin) => (
              <ItemTable key={coin.id} coin={coin} isSelected={false} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
