"use client";
import { useSpotify } from "@/src/hooks";
import { cn } from "@/src/utils";
import { fadeInOnVisible, getTransition } from "@/src/utils/transition";
import { AnimatePresence, motion } from "framer-motion";
import { Music4 } from "lucide-react";
import Image from "next/image";
import React from "react";
import spotify from "@/public/Spotify_icon.svg";

const SpotifyCard = () => {
  const { track, error, isLoading } = useSpotify();

  if (isLoading) return null;
  if (error || !track) return null;

  const { isPlaying, currentlyPlaying, error: spotifyError } = track;

  if (!currentlyPlaying) return null;

  const { duration, progress } = currentlyPlaying;
  const progressPercentage = Math.floor((progress / duration) * 100);

  return (
    <motion.div
      className="w-96 h-40 grid grid-cols-8 space-x-4 border border-solid border-foreground/10 rounded-md p-2 cursor-pointer hover:bg-accent/50"
      onClick={() =>
        window.open(
          track.currentlyPlaying?.url,
          "_blank",
          "noopener noreferrer"
        )
      }
      {...fadeInOnVisible()}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          className="rounded-md col-span-3 h-full overflow-x-hidden flex-1"
          {...fadeInOnVisible(0.1)}
        >
          {isPlaying && (
            <Image
              src={currentlyPlaying?.albumImage ?? ""}
              alt="Album Art"
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
          )}
          {!isPlaying && (
            <motion.div className="w-full h-full rounded-md bg-accent flex justify-center items-center">
              <Music4 size={56} />
            </motion.div>
          )}
        </motion.span>
        <div className="col-span-5 flex flex-col justify-center overflow-hidden">
          {isPlaying && (
            <motion.p {...fadeInOnVisible(0.1)}>
              <span className="text-xs text-gray-600">Now Playing</span>
            </motion.p>
          )}
          {isPlaying && (
            <motion.div
              className="flex justify-between items-center"
              {...fadeInOnVisible(0.2)}
            >
              <p className="flex-1 text-lg font-bold font-mr text-gray-800 w-[180px] truncate hover:animate-marquee hover:w-auto hover:overflow-visible">
                {currentlyPlaying?.name ?? ""}
              </p>
              <div>
                <Image src={spotify} width={20} height={20} alt="spotify" />
              </div>
            </motion.div>
          )}
          <motion.p
            className={cn(
              "text-xs text-gray-600 w-[160px] truncate",
              !isPlaying && "font-bold"
            )}
            {...fadeInOnVisible(0.3)}
          >
            {!isPlaying
              ? "Not playing at the moment"
              : currentlyPlaying?.artist ?? ""}
          </motion.p>
          {/* {isPlaying && (
            <motion.div className="relative">
              <motion.div className="absolute rounded-full w-full h-[5px] mt-2 bg-accentDark/20"></motion.div>
              <motion.div
                className="absolute rounded-full h-[5px] mt-2 bg-green-500 animate-progress"
                style={{
                  width: `${progressPercentage}%`,
                  animationDuration: `${duration - progress}ms`,
                }}
              ></motion.div>
            </motion.div>
          )} */}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SpotifyCard;
