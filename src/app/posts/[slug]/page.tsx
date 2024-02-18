import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Tag from "@/src/components/Tag";
import Image from "next/image";
import { cx } from "@/src/utils";
import RenderMDX from "@/src/components/PostCard/RenderMDX";
import TOC from "@/src/components/PostCard/TOC";
import postMetaDataHandler from "@/src/db";
import { IncrementType } from "@/src/models";
import PostPage from "./PostPage";

export const generateStaticParams = async () =>
  allPosts.map((post) => {
    const slug = post._raw.flattenedPath.split("/")[1];

    return { slug };
  });

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  );
  if (!post) throw new Error(`Post not found for slug: posts/${params.slug}`);
  return { title: post.title };
};

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="-mt-[100px]">
      <PostPage post={post} slug={params.slug} />
    </article>
  );
};

export default PostLayout;
