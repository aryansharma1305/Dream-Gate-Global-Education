"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { teamMembers } from "@/lib/data";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SmartImage } from "@/components/ui/smart-image";

export function TeamCards({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof teamMembers)[number] | null>(null);

  return (
    <>
      <div className={compact ? "grid gap-5 md:grid-cols-4" : "grid gap-6 md:grid-cols-2"}>
        {teamMembers.map((member) => (
          <motion.button
            layoutId={`team-card-${member.id}`}
            key={member.id}
            onClick={() => setActive(member)}
            whileHover={{ y: -6 }}
            className="gold-focus group overflow-hidden rounded-2xl border border-navy/10 bg-white text-left shadow-navy transition hover:border-gold/70"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              <SmartImage
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-contain object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-navy">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-gold">{member.title}</p>
                </div>
                <BriefcaseBusiness className="h-5 w-5 text-navy/50" />
              </div>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{member.bio}</p>
              {"tags" in member && Array.isArray(member.tags) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <Dialog open={Boolean(active)} onOpenChange={() => setActive(null)}>
            <DialogContent className="overflow-hidden p-0">
              <motion.div layoutId={`team-card-${active.id}`} className="grid bg-white md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[520px] bg-white">
                  <SmartImage src={active.image} alt={active.name} fill sizes="50vw" className="object-contain object-top" />
                </div>
                <div className="p-7">
                  <DialogTitle className="font-heading text-3xl font-extrabold text-navy">{active.name}</DialogTitle>
                  <p className="mt-2 font-semibold text-gold">{active.title}</p>
                  <DialogDescription className="mt-5 text-base leading-8 text-charcoal/75">
                    {active.longBio}
                  </DialogDescription>
                  {"tags" in active && Array.isArray(active.tags) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {active.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                    <BriefcaseBusiness className="h-4 w-4" />
                    Contact through office
                  </Link>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
