import { ChangeEvent } from 'react';
import { NumPerPageOption } from '../index/NumPerPageOption';
import { SearchArea } from '../index/SearchArea';

interface TableOptionsProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  options: { numPerPage: number; searchByValue: string };
  onChangeSelect: (value: number) => void;
  onSearchClick: () => void;
}

export const TableOptions = ({
  onChangeInput,
  options,
  onChangeSelect,
  onSearchClick,
}: TableOptionsProps) => (
  <div className="flex justify-center w-[75%] m-auto">
    <SearchArea
      onChangeInput={onChangeInput}
      value={options.searchByValue}
      onSearchClick={onSearchClick}
    />
    <NumPerPageOption
      onClick={onChangeSelect}
      numPerPage={options.numPerPage}
    />
  </div>
);
