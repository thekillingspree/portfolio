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

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <PostCardLarge
          post={posts[5]}
          containerClassName="col-span-1 row-span-2 relative"
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
