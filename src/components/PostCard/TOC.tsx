import { TOCHeading } from "@/contentlayer.config";
import { Post } from "contentlayer/generated";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";

interface TOCProps {
  post: Post;
}

const TOC = ({ post }: TOCProps) => {
  return (
    <div className="sticky top-[100px]">
      <ScrollArea type="always">
        <details
          open
          className="border-[1px] border-solid text-foreground border-background
    rounded-lg p-4 max-h-[80vh]"
        >
          <summary className="text-md capitalize cursor-pointer font-semibold">
            Table of Contents
          </summary>
          <ul className="m-4 font-in text-sm">
            {post.toc.map((heading: TOCHeading) => {
              return (
                <li key={`#${heading.slug}`} className="py-1">
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="data-[level=two]:pl-0 data-[level=two]:pt-2
              data-[level=two]:border-t border-solid border-dark/40
              dark:border-light/40
              data-[level=three]:pl-6
              flex items-center justify-start
              "
                  >
                    {heading.level === "three" && (
                      <span className="w-1 h-1 rounded-full bg-background dark:bg-light mr-2">
                        &nbsp;
                      </span>
                    )}
                    <span className="hover:underline">{heading.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </ScrollArea>
    </div>
  );
};

export default TOC;
