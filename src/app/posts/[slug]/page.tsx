import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Tag from "@/src/components/Tag";
import Image from "next/image";
import { cx } from "@/src/utils";
import RenderMDX from "@/src/components/PostCard/RenderMDX";
import TOC from "@/src/components/PostCard/TOC";
import postMetaDataHandler from "@/src/db";
import { IncrementType } from "@/src/models";
import { motion } from "framer-motion";
import { getTransition } from "@/src/utils/transition";
import PostTitle from "@/src/components/PostCard/PostTitle";
import Hr from "@/src/components/ui/hr";
import ViewCounter from "@/src/components/PostCard/ViewCounter";
import { DotIcon, EyeIcon, ShareIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import ShareDropdown from "@/src/components/PostCard/ShareDropdown";

interface PostPageProps {
  slug: string;
  post: Post;
}

const PostPage = ({ post, slug }: PostPageProps) => {
  return (
    <>
      <PostTitle post={post} slug={slug} />

      <div className="container mx-auto">
        <div className="w-full max-h-[500px] rounded-lg overflow-hidden">
          <Image
            src={post.image?.filePath.replace("../public", "")!}
            placeholder="blur"
            blurDataURL={post.image?.blurhashDataUrl}
            alt={post.title}
            width={post.image?.width}
            height={post.image?.height}
            className="aspect-3 w-full h-full object-center object-cover"
          />
        </div>
        <div className="grid grid-cols-11 gap-16 mt-8 px-10">
          <div className="col-span-3">
            <TOC post={post} />
          </div>
          <div className="col-span-8">
            <Hr className="mx-0 w-full my-4" />
            <div className="flex justify-between items-center">
              <div className="flex-1 flex space-x-2">
                <span className="flex space-x-2">
                  <EyeIcon />
                  <ViewCounter slug={slug} />
                </span>
                <DotIcon />
                <Link href={`/posts/categories/${post.tags[0]}`}>
                  #{post.tags[0]}
                </Link>
              </div>
              <div className="flex">
                <ShareDropdown text={post.title} slug={slug} />
              </div>
            </div>
            <Hr className="mx-0 w-full my-4" />
            <RenderMDX post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
