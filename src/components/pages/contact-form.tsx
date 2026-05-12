"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  neet: z.string().min(1, "Enter NEET score or status"),
  country: z.string().min(1, "Choose a country"),
  message: z.string().min(8, "Add a short message"),
});

type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/counseling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...values }),
      });
      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      toast.success("Message received. A Dream Gate counselor will contact you shortly.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
      <Field label="Name" error={errors.name?.message}><input {...register("name")} className="form-input" /></Field>
      <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className="form-input" /></Field>
      <Field label="Email" error={errors.email?.message}><input {...register("email")} className="form-input" /></Field>
      <Field label="NEET Score" error={errors.neet?.message}><input {...register("neet")} className="form-input" /></Field>
      <Field label="Preferred Country" error={errors.country?.message}>
        <select {...register("country")} className="form-input">
          <option value="">Select</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Need guidance">Need guidance</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}><textarea {...register("message")} className="form-input min-h-28" /></Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Counseling Request"}
      </Button>
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
