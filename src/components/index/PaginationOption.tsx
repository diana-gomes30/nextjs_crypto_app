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
  totalCryptoCoins = 200,
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
    pageNumbers.length > 11 ? [1, 2, 3, 4, 5, 6, 7, 8] : [];
  const pageNumbersEnd: number[] =
    pageNumbers.length > 11
      ? [
          pageNumbers[pageNumbers.length - 8],
          pageNumbers[pageNumbers.length - 7],
          pageNumbers[pageNumbers.length - 6],
          pageNumbers[pageNumbers.length - 5],
          pageNumbers[pageNumbers.length - 4],
          pageNumbers[pageNumbers.length - 3],
          pageNumbers[pageNumbers.length - 2],
          pageNumbers[pageNumbers.length - 1],
        ]
      : [];

  const handleClick = (value: number) => {
    setNumberPage(value);
  };

  const add10Pages = () => {
    const auxValue = numberPage + 10;
    if (auxValue > pageNumbers.length) {
      setNumberPage(pageNumbers.length);
    } else {
      setNumberPage(auxValue);
    }
  };

  const subtract10Pages = () => {
    const auxValue = numberPage - 10;
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
          handleClick={() => subtract10Pages()}
        />
        {pageNumbers && pageNumbers.length > 11 ? (
          numberPage >= 5 &&
          numberPage <= pageNumbers[pageNumbers.length - 5] ? (
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
              <PaginationItem
                numberPage={numberPage}
                value={numberPage - 2}
                handleClick={() => handleClick(numberPage - 2)}
              />
              <PaginationItem
                numberPage={numberPage}
                value={numberPage - 1}
                handleClick={() => handleClick(numberPage - 1)}
              />
              <PaginationItem
                numberPage={numberPage}
                value={numberPage}
                handleClick={() => handleClick(numberPage)}
              />
              <PaginationItem
                numberPage={numberPage}
                value={numberPage + 1}
                handleClick={() => handleClick(numberPage + 1)}
              />
              <PaginationItem
                numberPage={numberPage}
                value={numberPage + 2}
                handleClick={() => handleClick(numberPage + 2)}
              />
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
          ) : numberPage < 5 ? (
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
            numberPage > pageNumbers[pageNumbers.length - 5] && (
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
          handleClick={() => add10Pages()}
        />
      </ul>
    </div>
  );
};
