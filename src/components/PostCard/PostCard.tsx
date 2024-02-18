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

const PostCard = ({ post }: SmallCardProps) => {
  return (
    <div className="group flex flex-col items-center text-foreground h-full">
      <Link
        href={post.url}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <Image
          src={post.image?.filePath.replace("../public", "")!}
          placeholder="blur"
          blurDataURL={post.image?.blurhashDataUrl}
          alt={post.title}
          width={post.image?.width}
          height={post.image?.height}
          className={cx("w-full h-[200px] object-cover rounded-xl")}
        />
      </Link>
      <div className="w-full flex flex-col mt-4">
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
        <span className="capitalize text-foreground/50 font-semibold text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
