import { Post } from "contentlayer/generated";
import React from "react";
import PostCardLarge from "../PostCard/PostCardLarge";
import PostCardSmall from "../PostCard/PostCardSmall";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className="w-full mt-10 flex flex-col items-center justify-center">
      <h2 className="inline-block w-full font-bold capitalize text-4xl">
        Featured Posts
      </h2>

      <div className="grid grid-rows-2 grid-cols-2 gap-6 mt-8 md:mt-16 md:max-h-[350px]">
        <PostCardLarge
          post={posts[5]}
          containerClassName="col-span-2 row-span-1 relative md:col-span-1 md:row-span-2"
        />
        <article className="col-span-1 row-span-1 relative">
          <PostCardSmall post={posts[1]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <PostCardSmall post={posts[4]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
