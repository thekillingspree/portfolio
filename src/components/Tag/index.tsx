import { cx } from "@/src/utils";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

interface TagProps {
  link: string;
  tagName: string;
  className?: string;
}

const Tag = ({ tagName, link = "#", className = "", ...rest }: TagProps) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-accent rounded-full capitalize font-semibold border-solid border-light border-2 text-light hover:scale-105 transition-all ease duration-100",
        className
      )}
    >
      {tagName}
    </Link>
  );
};

export default Tag;
