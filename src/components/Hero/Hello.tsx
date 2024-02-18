"use client";
import { cx } from "@/src/utils";
import { getTransition } from "@/src/utils/transition";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";

const Hello = () => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const clearText = async (required: string) => {
    let count = required.length - 1;
    console.log("clearing");
    await new Promise((resolve) => {
      const clsInterval = setInterval(() => {
        setText(required.slice(0, count));
        if (count <= 0) {
          setDone(true);
          clearInterval(clsInterval);
          setTimeout(() => {
            setDone(false);
            resolve(true);
          }, 1000);
        }
        count--;
      }, 50);
    });
  };

  const writeText = async (required: string) => {
    let count = 0;
    await new Promise((resolve) => {
      const textInterval = setInterval(() => {
        setText(required.slice(0, count));
        if (count === required.length) {
          setDone(true);
          clearInterval(textInterval);
          setTimeout(async () => {
            setDone(false);
            resolve(true);
          }, 1000);
        }
        count++;
      }, 100);
    });
  };

  const startWriting = async () => {
    const texts = [
      `console.log('Hello');`,
      `print('Hello')`,
      `echo "Hello"`,
      `<p>Hello</p>`,
      `Console.WriteLine("Hello");`,
    ];
    let curr = 0;
    while (true) {
      await writeText(texts[curr]);
      await clearText(texts[curr]);
      curr = (curr + 1) % texts.length;
    }
  };

  useEffect(() => {
    startWriting();
  }, []);

  /* const Cursor = styled.div`
    height: 100%;
    width: 10px;
    font-size: 3rem;
    background-color: #f97057;
    animation: ${(props) => props.done && cursorBlink} 1s steps(1) infinite;
    @media only screen and (max-width: 800px) {
      width: 4px;
      font-size: 1rem;
    }
  `; */

  return (
    <motion.div
      className="flex items-center mb-2"
      {...getTransition({ delay: 0.1 })}
    >
      <h1 className="text-md font-bold sm:text-4xl font-courier text-foreground">
        {" "}
        {text}
      </h1>
      <div
        className={cx(
          "w-1 h-full text-md sm:w-2 sm:text-5xl bg-foreground",
          done && "animate-cursorBlink"
        )}
        // done={state.done}
      >
        &nbsp;
      </div>
    </motion.div>
  );
};

export default Hello;
