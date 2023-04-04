import { Column } from '@interfaces/table';
import { ItemTable } from '@components/common/ItemTable';
import { Coin } from '@interfaces/coins';

interface TableProps {
  columns: Column[];
  data: Coin[];
  dataWatchlist: string[];
  onWatchlist: (id: string, name: string) => void;
}

export const Table = ({
  columns,
  data,
  dataWatchlist,
  onWatchlist,
}: TableProps) => {
  return (
    <div className="my-5 mx-0">
      <table className="table-auto w-full text-light text-lg border-collapse">
        <tbody>
          <tr className="border-b border-t border-solid border-light bg-first-dark-blue">
            {columns
              ?.sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((column: Column) => (
                <th
                  key={column.id}
                  className={`p-2 
                    ${
                      column.align === 'left'
                        ? 'text-left'
                        : column.align === 'right'
                        ? 'text-right'
                        : 'text-center'
                    }`}
                >
                  {column.label}
                </th>
              ))}
          </tr>

          {data.map((e: Coin) => (
            <ItemTable
              key={e.id}
              data={e}
              isSelected={dataWatchlist?.includes(e.id)}
              onWatchlist={onWatchlist}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
