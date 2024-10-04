"use client";
import { useSpotify } from "@/src/hooks";
import { cn } from "@/src/utils";
import { fadeInOnVisible, getTransition } from "@/src/utils/transition";
import { AnimatePresence, motion } from "framer-motion";
import { Music4 } from "lucide-react";
import Image from "next/image";
import React from "react";
import spotify from "@/public/Spotify_icon.svg";
import { PinContainer } from "../ui/3d-pin";

const defaultThumbnail =
  "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037";

const SpotifyCard = () => {
  const { track, error, isLoading } = useSpotify();
  const link = track?.isPlaying
    ? track?.currentlyPlaying?.url
    : "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=fa8fc1cad8434e88";

  const title = track?.isPlaying ? "Click to Play on Spotify" : "Lo-fi beats";
  return (
    <PinContainer title={title} href={link}>
      <motion.div
        className="w-96 h-40 grid grid-cols-8 space-x-4 border border-solid border-border rounded-md p-2 cursor-pointer hover:bg-accent/50"
        onClick={() => window.open(link, "_blank", "noopener noreferrer")}
        {...fadeInOnVisible()}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            className="rounded-md col-span-3 h-full overflow-x-hidden flex-1"
            {...fadeInOnVisible(0.1)}
          >
            <Image
              src={
                track?.isPlaying
                  ? track.currentlyPlaying?.albumImage ?? defaultThumbnail
                  : defaultThumbnail
              }
              alt="Album Art"
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />

            {/* {!track?.isPlaying && (
            <motion.div className="w-full h-full rounded-md bg-accent flex justify-center items-center">
              <Music4 size={56} />
            </motion.div>
          )} */}
          </motion.span>
          <div className="col-span-5 flex flex-col justify-center overflow-hidden">
            {track?.isPlaying && (
              <motion.p {...fadeInOnVisible(0.1)}>
                <span className="text-xs text-gray-600">Now Playing</span>
              </motion.p>
            )}
            {
              <motion.div
                className="flex justify-between items-center"
                {...fadeInOnVisible(0.2)}
              >
                <p className="flex-1 text-lg font-bold font-mr text-gray-800 w-[180px] truncate hover:animate-marquee hover:w-auto hover:overflow-visible">
                  {track?.isPlaying
                    ? track.currentlyPlaying?.name
                    : "Not playing"}
                </p>
                <div>
                  <Image src={spotify} width={20} height={20} alt="spotify" />
                </div>
              </motion.div>
            }
            <motion.p
              className={cn(
                "text-xs text-gray-600 w-[160px] truncate",
                !track?.isPlaying && "font-bold text-clip"
              )}
              {...fadeInOnVisible(0.3)}
            >
              {!track?.isPlaying
                ? "Click to check out some lo-fi beats!"
                : track.currentlyPlaying?.artist ?? ""}
            </motion.p>
          </div>
        </AnimatePresence>
      </motion.div>
    </PinContainer>
  );
};

export default SpotifyCard;
