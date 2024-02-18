import useSWR from "swr";
import { fetcher } from "@/src/utils";
import { DEFAULT_REACTIONS, Reactions } from "@/src/models";
import { SpotifyApiResponse } from "../app/api/spotify/route";

export const useReactions = (slug: string) => {
  const { data, error, isLoading } = useSWR<{ reactions: Reactions }>(
    `/api/reactions/${slug}`,
    fetcher,
    {
      refreshWhenHidden: true,
      revalidateOnReconnect: true,
    }
  );

  return {
    isLoading,
    error,
    reactions: data ? data.reactions : DEFAULT_REACTIONS,
  };
};

export const useSpotify = () => {
  const { data, error, isLoading } = useSWR<SpotifyApiResponse>(
    "/api/spotify",
    fetcher,
    {
      refreshInterval: 50000,
    }
  );

  return {
    isLoading,
    error,
    track: data,
  };
};
