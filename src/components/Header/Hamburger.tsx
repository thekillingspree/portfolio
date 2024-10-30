import React from "react";
import { motion } from "framer-motion";

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

const Hamburger = ({ isActive, onClick }: HamburgerProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="w-6 h-0.5 bg-black dark:bg-white mb-1"
        animate={
          isActive
            ? { rotate: 45, y: 8, translateX: 4, translateY: -4 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-black dark:bg-white mb-1"
        animate={isActive ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-black dark:bg-white"
        animate={
          isActive
            ? { rotate: -45, y: -8, translateX: 4, translateY: 0 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Hamburger;
