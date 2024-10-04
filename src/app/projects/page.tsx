import ProjectCard from "@/src/components/Projects/ProjectCard";
import { sortProjects } from "@/src/utils";
import { allProjects } from "contentlayer/generated";
import React from "react";

const page = () => {
  return (
    <div className="container h-full mt-10">
      <h1 className="font-bold text-2xl">Projects</h1>
      <p className="text-foreground/80 mb-8">
        I love creating stuff, so here goes few of them
      </p>
      {sortProjects(allProjects).map((project, i) => (
        <ProjectCard key={project._id} project={project} index={i} />
      ))}
    </div>
  );
};

export default page;
