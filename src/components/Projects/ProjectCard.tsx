"use client";
import { useOpenGraphImage } from "@/src/hooks";
import { fadeInOnVisible, getTransition } from "@/src/utils/transition";
import { Project } from "contentlayer/generated";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TechIcon from "../ui/tech-icons";

interface ProjectCardInterface {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardInterface) => {
  const { image, title, description, npmUrl, codeUrl, liveUrl, tags } = project;

  const imageUrl = useOpenGraphImage(codeUrl);

  return (
    <motion.div
      className="border border-border bg-background my-6 rounded-lg relative min-h-[200px] w-full flex justify-end overflow-hidden"
      {...fadeInOnVisible(parseFloat(`0.${index}`))}
    >
      {(image || imageUrl) && (
        <div className="h-full w-[32%] absolute top-0 left-0 bottom-0">
          <Image
            src={image?.filePath.replace("../public", "") ?? imageUrl ?? ""}
            width={image?.width ?? 200}
            height={image?.height ?? 200}
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAwAB/9k="
            className="object-cover h-full w-full"
          />
        </div>
      )}
      <div className="w-[68%] p-6 h-full">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <div className="flex flex-wrap my-4">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="flex justify-center mx-2 my-2 items-center border border-border text-sm p-3 h-10 rounded-md font-bold hover:drop-shadow-md transition-all"
              >
                <TechIcon
                  tech={tag}
                  strokeWidth={1}
                  size={20}
                  className="mr-2"
                />
                {tag}
              </span>
            ))}
        </div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
