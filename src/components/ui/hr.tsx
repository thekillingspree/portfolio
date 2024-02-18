import { cn } from "@/src/utils";
import React from "react";

const Hr = ({ className = "" }) => {
  return (
    <hr
      className={cn(
        "border-t-2 border-foreground/10 mt-8 w-[95%] mx-8",
        className
      )}
    />
  );
};

export default Hr;
