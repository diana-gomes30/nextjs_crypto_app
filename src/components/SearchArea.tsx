import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

interface SearchAreaProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSearchClick: () => void;
}

export const SearchArea = ({
  onChangeInput,
  value,
  onSearchClick,
}: SearchAreaProps) => (
  <div className="flex justify-[left] w-[50%] mt-5 mx-0 mb-0">
    <input
      className="text-first-dark-blue bg-light border-none p-[10px] text-[15px]"
      type="text"
      placeholder="Search..."
      onChange={onChangeInput}
      value={value}
    />
    <button onClick={onSearchClick}>
      <i className="text-first-dark-blue bg-light p-[10px] text-[15px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </button>
  </div>
);
