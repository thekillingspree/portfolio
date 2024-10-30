import { cx } from "@/src/utils";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import React from "react";

interface SmallCardProps {
  post: Post;
  containerClassName?: string;
}

const PostCardSmall = ({ post }: SmallCardProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-4 text-foreground h-full">
      <Link href={post.url} className="rounded-xl overflow-hidden md:h-full">
        <Image
          src={post.image?.filePath.replace("../public", "")!}
          placeholder="blur"
          blurDataURL={post.image?.blurhashDataUrl}
          alt={post.title}
          width={post.image?.width}
          height={post.image?.width}
          className={cx(
            "md:h-full md:w-[100px] object-center object-cover rounded-xl"
          )}
        />
      </Link>
      <div className="flex flex-col flex-1 mt-4 md:mt-0">
        <span className="uppercase text-accentYellow font-semibold md:text-sm text-xs">
          {post.tags[0]}
        </span>
        <Link href={post.url} className="inline-block my-1">
          <h1 className={cx("font-semibold capitalize text-sm md:text-lg")}>
            <span className="text-ellipsis line-clamp-2 bg-gradient-to-r from-accentYellow/50 to-accentYellow/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-all ease duration-100">
              {post.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 dark:text-light/50 font-semibold text-xs md:text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PostCardSmall;
