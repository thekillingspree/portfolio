"use client";

import React from "react";
import { allPosts, Post } from "contentlayer/generated";
import { sortPosts } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";
import PostCardLarge from "../PostCard/PostCardLarge";
import Hello from "../Hero/Hello";
import { motion } from "framer-motion";
import { fadeInOnVisible } from "@/src/utils/transition";

interface HomeCoverSectionProps {
  posts: Post[];
}

const HomeCoverSection = ({ posts }: HomeCoverSectionProps) => {
  const coverPost = posts[2];

  return (
    <motion.div className="w-full h-full inline-block" {...fadeInOnVisible()}>
      <PostCardLarge post={coverPost} isHero />
    </motion.div>
  );
};

export default HomeCoverSection;
