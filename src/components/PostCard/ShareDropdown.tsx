"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  FacebookIcon,
  LinkIcon,
  LinkedinIcon,
  ShareIcon,
  TwitterIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

interface ShareDropdownProps {
  slug: string;
  text: string;
}

const ShareDropdown = ({ slug, text }: ShareDropdownProps) => {
  const url = `http://ajesh.dev/posts/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const title = encodeURIComponent(text);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${encodedUrl}`;

  const { toast } = useToast();

  //www.linkedin.com/sharing/share-offsite/?mini=true&url=https%3A%2F%2Flink.medium.com%2FclMp12leiHb

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
    } else {
      document.execCommand("copy", true, url);
    }

    toast({
      title: "Link copied to clipboard",
      variant: "default",
    });
  };

  https: return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full w-[56px] h-[56px]">
          <ShareIcon strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Share</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleCopyLink}>
            <LinkIcon strokeWidth={1} className="mr-2" /> Copy Link
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <TwitterIcon strokeWidth={1} className="mr-2" /> Twitter
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <FacebookIcon strokeWidth={1} className="mr-2" /> Facebook
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={linkedinShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <LinkedinIcon strokeWidth={1} className="mr-2" /> LinkedIn
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareDropdown;
