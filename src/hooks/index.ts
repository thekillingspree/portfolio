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

import { useCallback, useEffect, useState } from "react";

interface MetaData {
  image: string;
}

export const useOpenGraphImage = (url?: string): string | null => {
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  const fetchMetaData = useCallback(async () => {
    try {
      const response = await fetch(`/api/openGraph?url=${url}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { image } = await response.json();
      setMetaData({ image });
    } catch (error) {
      //console.error("Error:", error);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchMetaData();
    }
  }, [url, fetchMetaData]);

  if (!url) {
    return null;
  }

  return metaData?.image || null;
};
