import { ChangeEvent } from 'react';

interface NumPerPageOptionProps {
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  numPerPage: number;
}

export const NumPerPageOption = ({
  onChangeSelect,
  numPerPage,
}: NumPerPageOptionProps) => {
  return (
    <div className="flex justify-center w-[75%] m-auto">
      <select
        className="bg-light text-primary-dark-blue"
        onChange={onChangeSelect}
        name="num-per-page"
        id="num-per-page"
        value={numPerPage}
      >
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
      </select>
    </div>
  );
};
