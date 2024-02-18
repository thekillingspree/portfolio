"use client";
import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";

interface RenderMDXProps {
  post: Post;
}

const mdxComponents = {
  Image,
};

const RenderMDX = ({ post }: RenderMDXProps) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div
      className="post-body font-in prose prose-lg max-w-max
    prose-blockquote:bg-accentDark/20
    prose-blockquote:not-italic
    prose-blockquote:border-accentDark
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-li:marker:text-accentDark
    prose-headings:scroll-m-[100px]

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMDX;
