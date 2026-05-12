"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";

const navLinks = [
  ["Home", "/"],
  ["Universities", "/universities"],
  ["Kyrgyzstan", "/kyrgyzstan"],
  ["Uzbekistan", "/uzbekistan"],
  ["Team", "/team"],
  ["About", "/about"],
  ["Partnership", "/partnership"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(11,31,74,0.94)" : "rgba(11,31,74,0)",
        backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
      }}
      transition={{ duration: 0.25 }}
      className="fixed left-0 right-0 top-9 z-40 border-b border-white/10"
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="gold-focus rounded text-sm font-semibold text-white/85 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="https://wa.me/916203485456" variant="whatsapp" size="sm">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
          <ButtonLink href="/apply" size="sm">
            Free Counseling
          </ButtonLink>
        </div>
        <button
          className="gold-focus rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <div className="container-site grid gap-3 py-5">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <ButtonLink href="/apply" className="mt-2">
                Free Counseling
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
