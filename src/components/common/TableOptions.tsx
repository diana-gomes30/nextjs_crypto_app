import { ChangeEvent } from 'react';
import { NumPerPageOption } from '@components/index/NumPerPageOption';
import { SearchArea } from '@components/index/SearchArea';
import { SearchCoin } from '@interfaces/coins';

interface TableOptionsProps {
  onChangeInput: (searchValue: string) => void;
  results?: SearchCoin[];
  options: { numPerPage: number };
  onChangeSelect: (value: number) => void;
}

export const TableOptions = ({
  onChangeInput,
  results,
  options,
  onChangeSelect,
}: TableOptionsProps) => (
  <div className="flex flex-row justify-between m-auto">
    <div className="flex w-3/4 items-start">
      <SearchArea onChangeInput={onChangeInput} results={results} />
    </div>
    <div className="flex w-1/4 justify-end items-center">
      <NumPerPageOption
        onClick={onChangeSelect}
        numPerPage={options.numPerPage}
      />
    </div>
  </div>
);
