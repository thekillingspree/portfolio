"use client";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React, { useEffect } from "react";
import ViewCounter from "./ViewCounter";
import { Calendar, DotIcon, EyeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";

interface PostDetailsProps {
  post: Post;
  slug: string;
}
export const dynamic = "force-dynamic";

const PostDetails = ({ post, slug }: PostDetailsProps) => {
  // const { reactions } = await postMetadata.getReactions(slug);
  // console.log(reactions);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem(slug);
    if (!hasVisited) {
      fetch(`/api/reactions/${slug}?incType=views`, { method: "POST" });
      sessionStorage.setItem(slug, "true");
      return;
    }
  }, [post, slug]);

  return (
    <div className="py-2 z-10">
      <motion.div className="flex" {...getTransition()}>
        <Calendar />
        <time className="ml-2">
          {format(parseISO(post.publishedAt), "LLLL d, yyy")}
        </time>
        <DotIcon />
        <span>{post.readingTime.text}</span>
      </motion.div>
      {/* <span>
        <ViewCounter slug={slug} />
      </span> */}

      {/* <Link href={`/posts/categories/${post.tags[0]}`}>#{post.tags[0]}</Link> */}
    </div>
  );
};

export default PostDetails;
