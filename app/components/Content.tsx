"use client";
import React from "react";
import { motion } from "motion/react";

export const Content = () => {
  return (
    <div
      className="[transform-3d] flex h-screen w-full items-center justify-center bg-neutral-900 [perspective::1000px]"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        className="group relative rounded-lg bg-black px-12 py-4 text-neutral-500 shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        // style={{
        //   translateZ: 100,
        // }}
      >
        <span className="transition-colors duration-300 group-hover:text-cyan-500">
          Subscribe
        </span>

        <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-1 w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};
