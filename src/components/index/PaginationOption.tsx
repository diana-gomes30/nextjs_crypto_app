import { PaginationItem } from '@components/common/PaginationItem';
import React, { useEffect, useState } from 'react';

interface PaginationOptionProps {
  coinsPerPage: number;
  totalCryptoCoins?: number;
  page: number;
  onChangePage: (value: number) => void;
}

interface ItemProps {
  pageNumbers: number[];
  numberPage: number;
  handleClick: (value: number) => void;
}

interface TempProps extends ItemProps {
  pageNumbersTemp: number[];
}

const LessEqual11 = ({ pageNumbers, numberPage, handleClick }: ItemProps) => (
  <>
    {pageNumbers.map((number) => (
      <PaginationItem
        key={number}
        numberPage={numberPage}
        value={number}
        handleClick={() => handleClick(number)}
      />
    ))}
  </>
);

const Middle = ({
  pageNumbers,
  numberPage,
  handleClick,
  pageNumbersTemp,
}: TempProps) => (
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
    {pageNumbersTemp.map((number) => (
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
      handleClick={() => handleClick(pageNumbers[pageNumbers.length - 2])}
    />
    <PaginationItem
      numberPage={numberPage}
      value={pageNumbers[pageNumbers.length - 1]}
      handleClick={() => handleClick(pageNumbers[pageNumbers.length - 1])}
    />
  </>
);

const Begin = ({
  pageNumbers,
  numberPage,
  handleClick,
  pageNumbersTemp,
}: TempProps) => (
  <>
    {pageNumbersTemp.map((number) => (
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
      handleClick={() => handleClick(pageNumbers[pageNumbers.length - 2])}
    />
    <PaginationItem
      numberPage={numberPage}
      value={pageNumbers[pageNumbers.length - 1]}
      handleClick={() => handleClick(pageNumbers[pageNumbers.length - 1])}
    />
  </>
);

const End = ({
  pageNumbers,
  numberPage,
  handleClick,
  pageNumbersTemp,
}: TempProps) => (
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
    {pageNumbersTemp.map((number) => (
      <PaginationItem
        key={number}
        numberPage={numberPage}
        value={number}
        handleClick={() => handleClick(number)}
      />
    ))}
  </>
);

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
    pageNumbers.length > 11 ? pageNumbers.slice(0, 8) : [];
  const pageNumbersMiddle: number[] = Array.from(
    { length: 5 },
    (_, i) => numberPage - 2 + i
  );
  const pageNumbersEnd: number[] =
    pageNumbers.length > 11 ? pageNumbers.slice(pageNumbers.length - 8) : [];

  const handleClick = (value: number) => {
    setNumberPage(value);
  };

  const lessEqual11 =
    pageNumbers && pageNumbers.length <= 11 ? (
      <LessEqual11
        pageNumbers={pageNumbers}
        numberPage={numberPage}
        handleClick={handleClick}
      />
    ) : null;

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
        {lessEqual11 ? (
          lessEqual11
        ) : numberPage > 5 &&
          numberPage <= pageNumbers[pageNumbers.length - 6] ? (
          <Middle
            pageNumbers={pageNumbers}
            pageNumbersTemp={pageNumbersMiddle}
            numberPage={numberPage}
            handleClick={handleClick}
          />
        ) : numberPage <= 5 ? (
          <Begin
            pageNumbers={pageNumbers}
            pageNumbersTemp={pageNumbersBegin}
            numberPage={numberPage}
            handleClick={handleClick}
          />
        ) : (
          numberPage > pageNumbers[pageNumbers.length - 6] && (
            <End
              pageNumbers={pageNumbers}
              pageNumbersTemp={pageNumbersEnd}
              numberPage={numberPage}
              handleClick={handleClick}
            />
          )
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
