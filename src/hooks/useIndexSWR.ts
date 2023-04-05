import useSWR, { useSWRConfig } from 'swr';
import { Options } from '@interfaces/coins';
import { urls } from '@fetchers/urls';

export const useIndexSWR = ({
  options,
  fallback,
}: {
  options: Options;
  fallback: Record<string, any>;
}) => {
  const { data, error, isLoading } = useSWR(
    urls.markets(options.numPerPage, options.page),
    {
      fallback,
    }
  );
  const {
    data: dataWatchlist,
    error: errorWatchlist,
    isLoading: isLoadingWatchlist,
  } = useSWR('http://localhost:3000/api/coins', { fallback });
  const { mutate: mutateWatchlist } = useSWRConfig();

  return {
    data,
    error,
    isLoading,
    dataWatchlist,
    errorWatchlist,
    isLoadingWatchlist,
    mutateWatchlist,
  };
};
