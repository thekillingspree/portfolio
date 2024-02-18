import { Post } from "contentlayer/generated";
import Image from "next/image";
import React from "react";
import Tag from "../Tag";
import Link from "next/link";
import { cx } from "@/src/utils";

interface LargeCardProps {
  post: Post;
  containerClassName?: string;
  isHero?: boolean;
}

const PostCardLarge = ({
  post,
  containerClassName,
  isHero = false,
}: LargeCardProps) => {
  return (
    <article
      className={cx(
        "flex flex-col items-start justify-end relative",
        isHero ? "h-full" : "w-full",
        containerClassName
      )}
    >
      <div
        className={cx(
          `absolute top-0 left-0 right-0 bottom-0 w-full h-full 
        bg-gradient-to-b from-transparent from-0% to-dark/90 z-0`,
          isHero ? "rounded-3xl" : "rounded-xl"
        )}
      />
      <Image
        src={post.image?.filePath.replace("../public", "")!}
        placeholder="blur"
        blurDataURL={post.image?.blurhashDataUrl}
        alt={post.title}
        fill={isHero}
        width={!isHero ? post.image?.width : undefined}
        height={!isHero ? post.image?.height : undefined}
        priority
        className={cx(
          "w-full h-full object-center object-cover -z-10",
          isHero ? "rounded-3xl" : "rounded-xl absolute top-0 left-0"
        )}
      />
      <div
        className={cx(
          "text-light capitalize",
          isHero
            ? "w-3/4 p-16 flex flex-col items-start justify-center z-0"
            : "w-full p-10 z-20"
        )}
      >
        <Tag
          link={`/posts/categories/${post.tags[0]}`}
          tagName={post.tags[0]}
          className={cx(!isHero && "px-6 text-sm py-2 border-1")}
        />
        <Link href={post.url} className="mt-6">
          <h1
            className={cx(
              "font-bold capitalize",
              isHero ? "text-2xl" : "text-xl mt-6"
            )}
          >
            <span className="bg-gradient-to-r from-accentYellow to-accentYellow bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-all ease duration-100">
              {post.title}
            </span>
          </h1>
        </Link>
        {isHero && (
          <p className="inline-block mt-4 font-in">{post.description}</p>
        )}
      </div>
    </article>
  );
};

export default PostCardLarge;
