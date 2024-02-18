"use client";
import React from "react";
import AccentText from "@/src/components/AccentText";
import Link from "next/link";
import { buttonVariants } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";

const notfound = () => {
  return (
    <div className="h-[calc(100vh-100px)] w-full flex justify-center items-center flex-col space-y-6">
      <motion.h1 className="text-[12rem] font-bold" {...getTransition()}>
        <AccentText>404</AccentText>
      </motion.h1>
      <motion.p {...getTransition({ delay: 0.2 })}>
        Uh oh! The page you are looking for is not found.
      </motion.p>
      <motion.div {...getTransition({ delay: 0.3 })}>
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Home
        </Link>
      </motion.div>
    </div>
  );
};

export default notfound;
