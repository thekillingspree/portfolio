"use client";
import React, { useEffect, useState } from "react";
import { Reactions } from "@/src/models";
import { useReactions } from "@/src/hooks";
import { DotIcon, MoreHorizontal } from "lucide-react";

interface ViewCounterProps {
  slug: string;
  showCount?: boolean;
}

const ViewCounter = ({ slug, showCount = true }: ViewCounterProps) => {
  const { reactions, isLoading, error } = useReactions(slug);
  if (isLoading)
    return (
      <div className="flex">
        <MoreHorizontal className="animate-pulse" />
      </div>
    );
  if (!reactions || error) return <div>0 Views</div>;
  return <div>{reactions.views} views</div>;
};

export default ViewCounter;
