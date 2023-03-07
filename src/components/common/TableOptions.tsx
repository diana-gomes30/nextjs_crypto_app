import { ChangeEvent } from 'react';
import { NumPerPageOption } from '@components/index/NumPerPageOption';
import { SearchArea } from '@components/index/SearchArea';
import { CryptoCurrency } from '@interfaces/coins';

interface TableOptionsProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: (value: boolean) => void;
  isSearchSelected: boolean;
  cryptoCurrencies: CryptoCurrency[];
  options: { numPerPage: number; searchByValue: string };
  onChangeSelect: (value: number) => void;
}

export const TableOptions = ({
  onChangeInput,
  onSearchClick,
  isSearchSelected,
  cryptoCurrencies,
  options,
  onChangeSelect,
}: TableOptionsProps) => (
  <div className="flex flex-row justify-between m-auto">
    <div className="flex w-3/4 items-start">
      <SearchArea
        onChangeInput={onChangeInput}
        onSelect={onSearchClick}
        value={options.searchByValue}
        isSelected={isSearchSelected}
        cryptoCurrencies={cryptoCurrencies}
      />
    </div>
    <div className="flex w-1/4 justify-end items-center">
      <NumPerPageOption
        onClick={onChangeSelect}
        numPerPage={options.numPerPage}
      />
    </div>
  </div>
);
