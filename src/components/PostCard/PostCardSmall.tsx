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
    <div className="grid grid-cols-12 gap-4 items-center text-foreground h-full">
      <Link
        href={post.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={post.image?.filePath.replace("../public", "")!}
          placeholder="blur"
          blurDataURL={post.image?.blurhashDataUrl}
          alt={post.title}
          width={post.image?.width}
          height={post.image?.height}
          className={cx(
            "aspect-square w-full h-full object-center object-cover rounded-xl"
          )}
        />
      </Link>
      <div className="col-span-8 w-full flex flex-col">
        <span className="uppercase text-accentYellow font-semibold text-sm">
          {post.tags[0]}
        </span>
        <Link href={post.url} className="inline-block my-1">
          <h1 className={cx("font-semibold capitalize text-lg")}>
            <span className="bg-gradient-to-r from-accentYellow/50 to-accentYellow/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-all ease duration-100">
              {post.title}
            </span>
          </h1>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PostCardSmall;
