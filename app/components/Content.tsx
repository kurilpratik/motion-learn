"use client";
import React from "react";
import { motion } from "motion/react";

export const Content = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-neutral-900"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        className="group relative rounded-lg bg-black px-12 py-4 text-neutral-500 shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: [0, 10, 0], // steps - rotates and comes back
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Subscribe
        <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-1 w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};
