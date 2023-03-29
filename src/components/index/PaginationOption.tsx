import { PaginationItem } from '@components/common/PaginationItem';
import React, { useEffect, useState } from 'react';

interface PaginationOptionProps {
  coinsPerPage: number;
  totalCryptoCoins?: number;
  page: number;
  onChangePage: (value: number) => void;
}

export const PaginationOption = ({
  coinsPerPage,
  totalCryptoCoins = 300,
  page = 1,
  onChangePage,
}: PaginationOptionProps) => {
  const [numberPage, setNumberPage] = useState(page);
  const pageNumbers: number[] = [];

  useEffect(() => {
    onChangePage(numberPage);
  }, [numberPage]);

  for (let i = 1; i <= Math.ceil(totalCryptoCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersBegin: number[] =
    pageNumbers.length > 11 ? pageNumbers.slice(0, 7) : [];
  const pageNumbersMiddle: number[] = Array.from(
    { length: 5 },
    (_, i) => numberPage - 2 + i
  );
  const pageNumbersEnd: number[] =
    pageNumbers.length > 11 ? pageNumbers.slice(pageNumbers.length - 8) : [];

  const handleClick = (value: number) => {
    setNumberPage(value);
  };

  const add1Pages = () => {
    const auxValue = numberPage + 1;
    if (auxValue > pageNumbers.length) {
      setNumberPage(pageNumbers.length);
    } else {
      setNumberPage(auxValue);
    }
  };

  const subtract1Pages = () => {
    const auxValue = numberPage - 1;
    if (auxValue < 1) {
      setNumberPage(1);
    } else {
      setNumberPage(auxValue);
    }
  };

  return (
    <div className="flex-row">
      <ul className="flex max-w-min border rounded-md border-light bg-light">
        <PaginationItem
          numberPage={numberPage}
          value={'«'}
          handleClick={subtract1Pages}
        />
        {pageNumbers && pageNumbers.length > 11 ? (
          numberPage > 5 &&
          numberPage <= pageNumbers[pageNumbers.length - 6] ? (
            <>
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[0]}
                handleClick={() => handleClick(pageNumbers[0])}
              />
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[1]}
                handleClick={() => handleClick(pageNumbers[1])}
              />
              <PaginationItem numberPage={numberPage} value={'...'} />
              {pageNumbersMiddle.map((number) => (
                <PaginationItem
                  key={number}
                  numberPage={numberPage}
                  value={number}
                  handleClick={() => handleClick(number)}
                />
              ))}
              <PaginationItem numberPage={numberPage} value={'...'} />
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[pageNumbers.length - 2]}
                handleClick={() =>
                  handleClick(pageNumbers[pageNumbers.length - 2])
                }
              />
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[pageNumbers.length - 1]}
                handleClick={() =>
                  handleClick(pageNumbers[pageNumbers.length - 1])
                }
              />
            </>
          ) : numberPage <= 5 ? (
            <>
              {pageNumbersBegin.map((number) => (
                <PaginationItem
                  key={number}
                  numberPage={numberPage}
                  value={number}
                  handleClick={() => handleClick(number)}
                />
              ))}
              <PaginationItem numberPage={numberPage} value={'...'} />
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[pageNumbers.length - 2]}
                handleClick={() =>
                  handleClick(pageNumbers[pageNumbers.length - 2])
                }
              />
              <PaginationItem
                numberPage={numberPage}
                value={pageNumbers[pageNumbers.length - 1]}
                handleClick={() =>
                  handleClick(pageNumbers[pageNumbers.length - 1])
                }
              />
            </>
          ) : (
            numberPage > pageNumbers[pageNumbers.length - 6] && (
              <>
                <PaginationItem
                  numberPage={numberPage}
                  value={pageNumbers[0]}
                  handleClick={() => handleClick(pageNumbers[0])}
                />
                <PaginationItem
                  numberPage={numberPage}
                  value={pageNumbers[1]}
                  handleClick={() => handleClick(pageNumbers[1])}
                />
                <PaginationItem numberPage={numberPage} value={'...'} />
                {pageNumbersEnd.map((number) => (
                  <PaginationItem
                    key={number}
                    numberPage={numberPage}
                    value={number}
                    handleClick={() => handleClick(number)}
                  />
                ))}
              </>
            )
          )
        ) : (
          pageNumbers &&
          pageNumbers.length <= 11 &&
          pageNumbers.map((number) => (
            <PaginationItem
              key={number}
              numberPage={numberPage}
              value={number}
              handleClick={() => handleClick(number)}
            />
          ))
        )}
        <PaginationItem
          numberPage={numberPage}
          value={'»'}
          handleClick={add1Pages}
        />
      </ul>
    </div>
  );
};
