"use client";
import { Post } from "@/.contentlayer/generated";
import { getTransition } from "@/src/utils/transition";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Calendar, DotIcon } from "lucide-react";
import { format, parseISO } from "date-fns";

interface PostTitleProps {
  post: Post;
  slug: string;
}

const PostTitle = ({ post, slug }: PostTitleProps) => {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem(slug);
    if (!hasVisited) {
      fetch(`/api/reactions/${slug}?incType=views`, { method: "POST" });
      sessionStorage.setItem(slug, "true");
      return;
    }
  }, [post, slug]);

  return (
    <div className="container mt-[120px] relative h-[260px] rounded-lg mb-10 z-10">
      <div className="w-full h-full flex flex-col items-start justify-end px-8">
        <motion.h1
          className="inline-block mt-6 font-bold capitalize text-foreground text-5xl leading-normal relative w-5/6"
          {...getTransition()}
        >
          {post.title}
        </motion.h1>
        <div className="py-2 z-10">
          <motion.div className="flex" {...getTransition()}>
            <Calendar />
            <time className="ml-2">
              {format(parseISO(post.publishedAt), "LLLL d, yyy")}
            </time>
            <DotIcon />
            <span>{post.readingTime.text}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostTitle;
