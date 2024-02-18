interface SpotifyResponse {
  item: {
    name: string;
    artists: { name: string }[];
    album: { name: string; images: { url: string }[] };
    duration_ms: number;
    external_urls: {
      spotify: string;
    };
  };
  is_playing: boolean;
  progress_ms: number;
}

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const getAccessToken = async () => {
  const secret = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${secret}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN ?? "",
    }),
  });

  const res = await response.json();

  return `Bearer ${res.access_token}`;
};

export const getCurrentlyPlaying = async () => {
  const token = await getAccessToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: token,
      },
    }
  );

  if (!response.ok || response.status === 204) return null;

  const data = await response.json();

  return data as SpotifyResponse;
};
