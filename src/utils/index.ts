import { Post, Project } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cx = (...classNames: (string | boolean | undefined)[]) =>
  classNames.filter(Boolean).join(" ");

export const sortPosts = (posts: Post[]) => {
  return posts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const sortProjects = (projects: Project[]) => {
  return projects
    .slice()
    .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
