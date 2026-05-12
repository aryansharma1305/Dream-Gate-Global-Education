"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter student name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone"),
  city: z.string().min(2, "Enter city"),
  neet: z.string().min(1, "Enter NEET score/status"),
  pcb: z.string().min(1, "Enter 12th PCB percentage"),
  country: z.string().min(1, "Select country"),
  budget: z.string().min(1, "Select budget range"),
  whatsapp: z.boolean().optional(),
});

type ApplyValues = z.infer<typeof schema>;

const steps = ["Personal Info", "Academic Info", "Confirmation"];

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const form = useForm<ApplyValues>({
    resolver: zodResolver(schema),
    defaultValues: { whatsapp: true },
  });

  async function next() {
    const fields: (keyof ApplyValues)[][] = [
      ["name", "email", "phone", "city"],
      ["neet", "pcb", "country", "budget"],
      ["whatsapp"],
    ];
    const valid = await form.trigger(fields[step]);
    if (valid) setStep((value) => Math.min(value + 1, 2));
  }

  async function onSubmit(values: ApplyValues) {
    try {
      const response = await fetch("/api/counseling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "application", ...values }),
      });
      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to submit application.");
      }

      toast.success("Application submitted. We'll contact you within 24 hours.");
      setDone(true);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to submit application.");
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-gold/50 bg-white p-10 text-center shadow-gold">
        <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
        <h2 className="mt-5 font-heading text-3xl font-black text-navy">We&apos;ll contact you within 24 hours</h2>
        <p className="mt-3 text-charcoal/70">Your counseling request is in. Keep your NEET scorecard and passport details ready if available.</p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-charcoal/50">
          {steps.map((label, index) => (
            <span key={label} className={index <= step ? "text-navy" : ""}>{label}</span>
          ))}
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy/10">
          <motion.div className="h-full bg-gold" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4"
        >
          {step === 0 && (
            <>
              <Field label="Name" error={form.formState.errors.name?.message}><input {...form.register("name")} className="form-input" /></Field>
              <Field label="Email" error={form.formState.errors.email?.message}><input {...form.register("email")} className="form-input" /></Field>
              <Field label="Phone" error={form.formState.errors.phone?.message}><input {...form.register("phone")} className="form-input" /></Field>
              <Field label="City" error={form.formState.errors.city?.message}><input {...form.register("city")} className="form-input" /></Field>
            </>
          )}
          {step === 1 && (
            <>
              <Field label="NEET Score" error={form.formState.errors.neet?.message}><input {...form.register("neet")} className="form-input" /></Field>
              <Field label="12th PCB %" error={form.formState.errors.pcb?.message}><input {...form.register("pcb")} className="form-input" /></Field>
              <Field label="Preferred Country" error={form.formState.errors.country?.message}>
                <select {...form.register("country")} className="form-input">
                  <option value="">Select</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Need help deciding">Need help deciding</option>
                </select>
              </Field>
              <Field label="Budget Range" error={form.formState.errors.budget?.message}>
                <select {...form.register("budget")} className="form-input">
                  <option value="">Select</option>
                  <option value="Under 18 lakh">Under 18 lakh</option>
                  <option value="18-25 lakh">18-25 lakh</option>
                  <option value="25 lakh+">25 lakh+</option>
                </select>
              </Field>
            </>
          )}
          {step === 2 && (
            <div className="rounded-2xl bg-soft p-6">
              <h3 className="font-heading text-2xl font-black text-navy">Confirm counseling request</h3>
              <p className="mt-3 leading-7 text-charcoal/70">A counselor will review your NEET score, PCB percentage, preferred country, and budget range before calling.</p>
              <label className="mt-5 flex items-center gap-3 font-semibold text-navy">
                <input type="checkbox" {...form.register("whatsapp")} className="h-5 w-5 accent-gold" />
                Send updates on WhatsApp
              </label>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-between gap-3">
        <Button type="button" variant="ghost" onClick={() => setStep((value) => Math.max(value - 1, 0))} disabled={step === 0}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        {step < 2 ? (
          <Button type="button" onClick={next}>
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      {label}
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
