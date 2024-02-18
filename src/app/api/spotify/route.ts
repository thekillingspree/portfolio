import { getCurrentlyPlaying } from "@/src/utils/spotify";
import { NextRequest, NextResponse } from "next/server";

type CurrentlyPlaying = {
  name: string;
  artist: string;
  album: string;
  albumImage: string;
  progress: number;
  duration: number;
  url: string;
};

export type SpotifyApiResponse = {
  currentlyPlaying?: CurrentlyPlaying;
  isPlaying?: boolean;
  error?: string;
};

export const spotifyPlaying = async (
  req: NextRequest
): Promise<NextResponse<SpotifyApiResponse>> => {
  try {
    const track = await getCurrentlyPlaying();
    if (!track) {
      return NextResponse.json(
        { isPlaying: false },
        {
          status: 200,
        }
      );
    }

    const response: CurrentlyPlaying = {
      name: track.item.name,
      artist: track.item.artists.map((artist) => artist.name).join(", "),
      album: track.item.album.name,
      albumImage: track.item.album.images[0].url,
      progress: track.progress_ms,
      duration: track.item.duration_ms,
      url: track.item.external_urls?.spotify ?? "",
    };

    return NextResponse.json({
      currentlyPlaying: response,
      isPlaying: track.is_playing,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to get playing info", isPlaying: false },
      {
        status: 500,
      }
    );
  }
};

export { spotifyPlaying as GET, spotifyPlaying as POST };
