import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import PostCard from "../PostCard/PostCard";
import { buttonVariants } from "../ui/button";

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section className="w-full mt-10 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link href="/posts" className={buttonVariants({ variant: "outline" })}>
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
        {posts.map((post, index) => (
          <article className="col-span-1 row-span-1 relative" key={post._id}>
            <PostCard post={post} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
