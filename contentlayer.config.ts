import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from "github-slugger";

export interface TOCHeading {
  level: string;
  text: string;
  slug: string;
}

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: false,
    },
    updatedAt: {
      type: "date",
    },
    tags: {
      type: "list",
      required: true,
      of: {
        type: "string",
      },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (post) => {
        const regex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const matches = Array.from(post.body.raw.matchAll(regex)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            if (!flag || !content) return null;

            return {
              level: `${
                flag?.length === 2 ? "two" : flag.length >= 3 ? "three" : "one"
              }`,
              text: content,
              slug: slugger.slug(content),
            };
          }
        );

        return matches.filter((i) => i !== null);
      },
    },
  },
}));

const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: "**/projects/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    liveUrl: {
      type: "string",
    },
    codeUrl: {
      type: "string",
    },
    npmUrl: {
      type: "string",
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
}));

const codeOptions = {
  theme: "one-dark-pro",
};

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Post, Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutoLinkHeadings,
      [rehypePrettyCode as any, codeOptions],
    ],
  },
});
