import { Column } from '@/interfaces/table';
import { ItemTable } from './ItemTable';

interface TableProps<T> {
  columns: Column[];
  data: T[];
}

export const Table = <T,>({ columns, data }: TableProps<T>) => {
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
                  className={
                    'p-2 ' +
                    (typeof column === 'string'
                      ? 'text-left'
                      : typeof column === 'number'
                      ? 'text-right'
                      : '')
                  }
                >
                  <>
                    {console.log(typeof column)}
                    {column.label}
                  </>
                </th>
              ))}
          </tr>

          {data
            /*?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))*/
            .map((e: T) => (
              <ItemTable
                key={Object.values(e as object)[0]}
                data={e}
                isSelected={false}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
