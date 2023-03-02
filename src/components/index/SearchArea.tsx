import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState } from 'react';
import { CryptoCurrency } from '@/interfaces/coins';
import { SearchDropdownItem } from '../common/SearchDropdownItem';

interface SearchAreaProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  value: string;
  isSelected: boolean;
  cryptoCurrencies: CryptoCurrency[];
}

export const SearchArea = ({
  onChangeInput,
  onSearchClick,
  value,
  isSelected,
  cryptoCurrencies,
}: SearchAreaProps) => {
  return (
    <div className="relative mx-auto px-6">
      <div className="flex justify-center p-4 px-3 py-10">
        <div className="w-full max-w-md">
          <div className="bg-light shadow-md rounded-lg ">
            <div onClick={() => {}} className="px-2">
              {isSelected && (
                <div className="block text-first-dark-blue text-lg font-semibold py-2 px-2">
                  Cryptocurrencies
                </div>
              )}
              <div
                className={`flex items-center bg-light text-first-dark-blue rounded-lg ${
                  isSelected &&
                  'border-third-dark-blue opacity-50 border-solid border-2'
                }`}
              >
                <i className="p-2 bg-light text-first-dark-blue text-sm rounded-lg">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
                <input
                  className="w-full rounded-md bg-light text-first-dark-blue focus:outline-none py-2 px-2"
                  id="search"
                  type="text"
                  value={isSelected ? value : ''}
                  placeholder="Search coins"
                />
                {isSelected && (
                  <i
                    onClick={() => {}}
                    className="p-2 bg-light text-first-dark-blue text-sm rounded-lg"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </i>
                )}
              </div>
            </div>
            {isSelected && (
              <div className="py-3 px-2 text-sm">
                {cryptoCurrencies
                  ?.sort((a, b) =>
                    a.market_cap_rank > b.market_cap_rank ? 1 : -1
                  )
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
      </div>
    </div>
  );
};
