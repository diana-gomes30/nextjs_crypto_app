import useSWR, { useSWRConfig } from 'swr';

export const useWatchlistSWR = ({
  fallback,
}: {
  fallback: Record<string, any>;
}) => {
  const { data, error, isLoading } = useSWR(`/api/coins/markets`, {
    fallback,
  });
  const { mutate: mutateWatchlist } = useSWRConfig();

  return { data, error, isLoading, mutateWatchlist };
};
