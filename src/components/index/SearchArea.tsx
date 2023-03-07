import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';
import { CryptoCurrency } from '@/interfaces/coins';
import { SearchDropdownItem } from '../common/SearchDropdownItem';

interface SearchAreaProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (value: boolean) => void;
  value: string;
  isSelected: boolean;
  cryptoCurrencies: CryptoCurrency[];
}

export const SearchArea = ({
  onChangeInput,
  onSelect,
  value,
  isSelected,
  cryptoCurrencies,
}: SearchAreaProps) => {
  const isSelectedStyle = isSelected
    ? 'border-third-dark-blue opacity-50 border-solid border-2 justify-between'
    : '';

  return (
    <div className="absolute w-1/4 min-w-min max-w-max">
      <div className="bg-light shadow-md rounded-lg ">
        <div className="px-2">
          {isSelected && (
            <div className="text-first-dark-blue text-lg font-semibold py-2 px-2">
              Cryptocurrencies
            </div>
          )}
          <div
            className={`flex items-center max-w-full bg-light text-first-dark-blue rounded-lg ${isSelectedStyle}`}
          >
            <div onClick={() => onSelect(true)} className="">
              <i className="p-2 bg-light text-first-dark-blue text-sm rounded-lg">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input
                className="w-full max-w-max rounded-md bg-light text-first-dark-blue focus:outline-none py-2 px-2"
                id="search"
                type="text"
                autoComplete="off"
                onChange={(event) => onChangeInput(event)}
                value={isSelected ? value : ''}
                placeholder="Search coins"
              />
            </div>
            {isSelected && (
              <div
                onClick={() => onSelect(false)}
                className="justify-end items-center"
              >
                <i className="p-2 bg-light text-first-dark-blue text-sm rounded-lg">
                  <FontAwesomeIcon icon={faXmark} />
                </i>
              </div>
            )}
          </div>
        </div>
        {isSelected && (
          <div className="py-3 px-2 text-sm">
            {cryptoCurrencies
              ?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
              .map((cryptoCurrency: CryptoCurrency) => (
                <SearchDropdownItem
                  key={cryptoCurrency.id}
                  cryptoCurrency={cryptoCurrency}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
