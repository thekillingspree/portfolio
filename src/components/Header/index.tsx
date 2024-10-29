"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import { AnimatePresence, motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";
import { useTheme } from "next-themes";
import { IconMenu } from "@tabler/icons-react";
import Hamburger from "./Hamburger";
import { cx } from "@/src/utils";
import MobileThemeToggle from "./MobileThemeToggle";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [dialogActive, setDialogActive] = useState(false);
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <motion.header
      style={{
        transition: "border-radius 0s 0s, height 0.1s ease-in-out",
      }}
      className={cx(
        "container fixed transition-all",
        "bg-light/60 dark:bg-[#1f376f57] border border-foreground/10 z-[100] backdrop-blur-md ",
        dialogActive
          ? "h-screen top-0 pt-6 px-[5%] backdrop-blur-lg"
          : "h-[64px] top-6 z-550 rounded-full items-center justify-between w-[90%] backdrop-blur-md flex"
      )}
      {...getTransition()}
    >
      <nav
        className={cx(
          "w-full py-3 px-3",
          "font-medium capitalize flex items-center",
          "justify-between"
        )}
      >
        <Logo />
        <span className="hidden md:flex items-center space-x-4 mx-4 font-semibold">
          <Link href="/posts">Posts</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resources">Nuggets</Link>
          <Link href="/about">About</Link>
        </span>
        <span className="md:hidden flex mr-3">
          <Hamburger
            isActive={dialogActive}
            onClick={() => setDialogActive((prev) => !prev)}
          />
        </span>
      </nav>
      <AnimatePresence mode="wait">
        {dialogActive && (
          <div className="flex flex-col h-full items-center mt-10 space-y-10 text-3xl font-bold">
            <motion.div {...getTransition({ delay: 0.2, disableExit: true })}>
              <Link href="/posts">Posts</Link>
            </motion.div>
            <motion.div {...getTransition({ delay: 0.4, disableExit: true })}>
              <Link href="/projects">Projects</Link>
            </motion.div>
            <motion.div {...getTransition({ delay: 0.6, disableExit: true })}>
              <Link href="/resources">Nuggets</Link>
            </motion.div>
            <motion.div {...getTransition({ delay: 0.8, disableExit: true })}>
              <Link href="/about">About</Link>
            </motion.div>
            <motion.div {...getTransition({ delay: 1, disableExit: true })}>
              <MobileThemeToggle />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div
        className="hidden md:flex h-full w-[64px]
      rounded-full font-medium capitalize items-center justify-center"
      >
        <button
          onClick={handleTheme}
          className="flex h-full w-full justify-center items-center"
        >
          <SunIcon className="h-[24px] w-[24px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[24px] w-[24px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      </div>
      {/* <div
        className="h-full w-[64px] border border-solid border-dark 
      rounded-full font-medium capitalize flex items-center ml-6
      bg-light/60 backdrop-blur-sm justify-center"
      >
        <button>
          <SunIcon />
        </button>
      </div> */}
      {/* <div>
        <a
          className="inline-block w-6 h-6 mr-4"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-100" />
        </a>
        <a
          className="inline-block w-6 h-6 mr-4"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-100" />
        </a>
        <a
          className="inline-block w-6 h-6 mr-4"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-100" />
        </a>
      </div> */}
    </motion.header>
  );
};

export default Header;
