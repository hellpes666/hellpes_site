"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface HeroCardProps {
  text: string;
  delay: number;
  className?: string;
}

export const HeroCard = memo<HeroCardProps>(
  ({ text, delay, className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        rotate: [-1, 1, -1],
        transition: { rotate: { repeat: Infinity, duration: 2 } },
      }}
      className={`
      relative
      rounded-2xl 
      bg-slate-800/50 
      backdrop-blur-sm
      p-6
      cursor-default
      shadow-lg
      hover:shadow-2xl
      transition-shadow
      duration-300
      before:absolute
      before:inset-0
      before:rounded-2xl
      before:bg-gradient-to-r
      before:from-purple-500/20
      before:to-cyan-500/20
      before:opacity-0
      hover:before:opacity-100
      before:transition-opacity
      before:duration-300
      overflow-hidden
      ${className}
    `}
    >
      <motion.div
        className="absolute -right-12 -top-12 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-12 -bottom-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.h2
        className="
        relative 
        text-2xl 
        md:text-4xl 
        font-bold 
        bg-gradient-to-r 
        from-white 
        via-purple-200 
        to-cyan-200 
        text-transparent 
        bg-clip-text
        select-none
      "
        whileHover={{
          backgroundPosition: ["0%", "100%"],
          transition: { duration: 1 },
        }}
      >
        {text}
      </motion.h2>
    </motion.div>
  )
);

HeroCard.displayName = "HeroCard";
