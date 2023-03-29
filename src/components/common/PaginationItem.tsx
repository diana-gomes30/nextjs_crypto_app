interface PaginationItemProps {
  numberPage?: number;
  value: number | string;
  handleClick?: (value: number | string) => void;
}

export const PaginationItem = ({
  numberPage,
  value,
  handleClick,
}: PaginationItemProps) => {
  return (
    <li
      key={value}
      className={`flex bg-light text-first-dark-blue justify-center items-center border rounded-md border-light w-9 h-9 cursor-pointer hover:bg-third-dark-blue hover:text-light
                ${numberPage === value ? 'bg-third-dark-blue text-light' : ''}`}
      onClick={() => (handleClick ? handleClick(value) : null)}
    >
      {value}
    </li>
  );
};
