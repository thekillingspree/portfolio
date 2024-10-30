"use client";
import React from "react";
import Hello from "./Hello";
import AccentText from "../AccentText";
import { AnimatePresence, motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import SocialLinks from "../Footer/SocialLinks";
import { cx } from "@/src/utils";

const Hero = () => {
  return (
    <div className="h-[50vh] w-full flex flex-col justify-center rounded-sm px-4 md:px-10 mb-10 text-foreground">
      <AnimatePresence mode="wait">
        <Hello />
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold font-in"
          {...getTransition({ delay: 0.3 })}
        >
          I&apos;m <AccentText>Ajesh</AccentText>
        </motion.h1>
        <motion.p
          className="text-md md:text-xl mt-4"
          {...getTransition({ delay: 0.4 })}
        >
          Software Engineer @Microsoft Security
        </motion.p>
        <motion.div className="mt-4" {...getTransition({ delay: 0.5 })}>
          <SocialLinks />
        </motion.div>
        <motion.div
          className="flex items-center space-x-4 mt-6"
          {...getTransition({ delay: 0.6 })}
        >
          <Link
            className={cx(
              buttonVariants({ variant: "outline" }),
              "h-8 md:h-10 px-3 md:px-4"
            )}
            href="/about"
          >
            About Me
          </Link>
          <Link
            className={cx(
              buttonVariants({ variant: "outline" }),
              "h-8 md:h-10 px-3 md:px-4"
            )}
            href="/posts"
          >
            Posts
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
