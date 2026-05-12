"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[90] bg-navy"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        exit={{ y: "0%" }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </>
  );
}
