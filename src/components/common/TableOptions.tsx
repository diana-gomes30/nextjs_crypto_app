import { ChangeEvent } from 'react';
import { NumPerPageOption } from '@components/index/NumPerPageOption';
import { SearchArea } from '@components/index/SearchArea';
import { SearchCoin } from '@interfaces/coins';
import { PaginationOption } from '@components/index/PaginationOption';

interface TableOptionsProps {
  onChangeInput: (searchValue: string) => void;
  results?: SearchCoin[];
  options: { numPerPage: number; page: number };
  onChangeSelect: (value: number) => void;
  onChangePage: (value: number) => void;
}

export const TableOptions = ({
  onChangeInput,
  results,
  options,
  onChangeSelect,
  onChangePage,
}: TableOptionsProps) => (
  <div className="flex flex-row">
    <div className="w-2/4 justify-start">
      <SearchArea onChangeInput={onChangeInput} results={results} />
    </div>
    <div className="flex w-2/4 justify-end items-center">
      <div className="pr-3">
        <PaginationOption
          coinsPerPage={options.numPerPage}
          page={options.page}
          onChangePage={onChangePage}
        />
      </div>
      <NumPerPageOption
        onClick={onChangeSelect}
        numPerPage={options.numPerPage}
      />
    </div>
  </div>
);
