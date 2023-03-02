import { CryptoCurrency } from '@/interfaces/coins';
import Image from 'next/image';

interface SearchDropdownItemProps {
  cryptoCurrency: CryptoCurrency;
}

export const SearchDropdownItem = ({
  cryptoCurrency,
}: SearchDropdownItemProps) => {
  return (
    <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
      <Image
        className="w-5 h-5 mr-3"
        alt="Coin Icon"
        src={cryptoCurrency.image}
        width={50}
        height={50}
      />
      <div className="flex-grow font-medium px-2">
        {cryptoCurrency.name} ({cryptoCurrency.symbol})
      </div>
      <div className="text-sm font-normal text-gray-500 tracking-wide">
        #{cryptoCurrency.market_cap_rank}
      </div>
    </div>
  );
};