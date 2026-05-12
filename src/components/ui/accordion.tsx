"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          "gold-focus flex w-full items-center justify-between gap-4 border-b border-navy/10 py-4 text-left font-heading text-lg font-bold text-navy transition hover:text-gold",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn("overflow-hidden py-4 text-sm leading-7 text-charcoal/75", className)}
      {...props}
    />
  );
}
