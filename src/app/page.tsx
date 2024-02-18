import Image from "next/image";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { allPosts } from "contentlayer/generated";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { sortPosts } from "../utils";
import RecentPosts from "../components/Home/RecentPosts";
import Hero from "../components/Hero/Hero";

const sortedPosts = sortPosts(allPosts);

export default function Home() {
  return (
    <>
      <div className="w-full mt-32 h-[75vh]">
        <Hero />
      </div>
      <HomeCoverSection posts={allPosts} />
      <FeaturedPosts posts={allPosts} />
      <RecentPosts posts={allPosts.slice(0, 6)} />
    </>
  );
}
