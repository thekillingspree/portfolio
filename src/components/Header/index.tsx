"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import { motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <motion.header
      className="flex max-w-[1366px] w-full items-center h-[64px] justify-between fixed top-6 left-0 right-0 z-50 px-10"
      {...getTransition()}
    >
      <nav
        className="flex-1 h-full w-full py-3 px-3
      rounded-full font-medium capitalize flex items-center
      bg-light/60 dark:bg-[#1f376f57] border border-foreground/10 z-50 backdrop-blur-md justify-between"
      >
        <Logo />
        <span className="flex items-center space-x-4 mx-4 font-semibold">
          <Link href="/posts">Posts</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
        </span>
      </nav>
      <div
        className="h-full w-[64px]
      rounded-full font-medium capitalize flex items-center ml-6
      bg-light/60 dark:bg-[#1f376f57] border border-foreground/10 backdrop-blur-md justify-center"
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
