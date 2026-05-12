"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function FloatingActions() {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
    >
      <ButtonLink href="/apply" size="sm" className="shadow-navy">
        Free Counseling
      </ButtonLink>
      <a
        href="https://wa.me/916203485456"
        className="gold-focus relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-navy shadow-navy"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border border-[#25D366] motion-safe:animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </motion.div>
  );
}
