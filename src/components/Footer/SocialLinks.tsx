import { cn } from "@/src/utils";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn("flex space-x-3", className)}>
      <Link
        href="https://github.com/thekillingspree"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold flex space-x-2 hover:underline"
      >
        <IconBrandGithub strokeWidth={1} />
      </Link>
      <Link
        href="https://linkedin.com/in/ajeshds"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold flex space-x-2 hover:underline"
      >
        <IconBrandLinkedin strokeWidth={1} />
      </Link>
      <Link
        href="https://twitter.com/thekillingspre3"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold flex space-x-2 hover:underline"
      >
        <IconBrandX strokeWidth={1} />
      </Link>
      <Link
        href="https://instagram.com/ajeshhds"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold flex space-x-2 hover:underline"
      >
        <IconBrandInstagram strokeWidth={1} />
      </Link>
      <Link
        href="mailto:contact@ajesh.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold flex space-x-2 hover:underline"
      >
        <MailIcon strokeWidth={1} />
      </Link>
    </div>
  );
};

export default SocialLinks;
