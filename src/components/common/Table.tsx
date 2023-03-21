import { Column } from '@interfaces/table';
import { ItemTable } from '@components/common/ItemTable';

interface TableProps<T> {
  columns: Column[];
  data: T[];
}

export const Table = <T,>({ columns, data }: TableProps<T>) => {
  console.log(data);
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
                    ${column.align === 'left' ? 'text-left' : 'text-right'}`}
                >
                  {column.label}
                </th>
              ))}
          </tr>

          {data.map((e: T) => (
            <ItemTable key={Object.values(e as object)[0]} data={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
