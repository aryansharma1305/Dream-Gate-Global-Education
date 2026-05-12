import { NextResponse } from "next/server";
import { z } from "zod";
import { sendCounselingEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  neet: z.string().min(1),
  country: z.string().min(1),
  message: z.string().min(8),
});

const applicationSchema = z.object({
  type: z.literal("application"),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  city: z.string().min(2),
  neet: z.string().min(1),
  pcb: z.string().min(1),
  country: z.string().min(1),
  budget: z.string().min(1),
  whatsapp: z.boolean().optional(),
});

const counselingSchema = z.discriminatedUnion("type", [contactSchema, applicationSchema]);

export async function POST(request: Request) {
  try {
    const payload = counselingSchema.parse(await request.json());

    if (payload.type === "contact") {
      await sendCounselingEmail({
        source: "Website contact form",
        subject: `New counseling request from ${payload.name}`,
        replyTo: payload.email,
        fields: [
          { label: "Name", value: payload.name },
          { label: "Phone", value: payload.phone },
          { label: "Email", value: payload.email },
          { label: "NEET Score / Status", value: payload.neet },
          { label: "Preferred Country", value: payload.country },
          { label: "Message", value: payload.message },
        ],
      });
    } else {
      await sendCounselingEmail({
        source: "Website application form",
        subject: `New MBBS application from ${payload.name}`,
        replyTo: payload.email,
        fields: [
          { label: "Name", value: payload.name },
          { label: "Email", value: payload.email },
          { label: "Phone", value: payload.phone },
          { label: "City", value: payload.city },
          { label: "NEET Score / Status", value: payload.neet },
          { label: "12th PCB Percentage", value: payload.pcb },
          { label: "Preferred Country", value: payload.country },
          { label: "Budget Range", value: payload.budget },
          { label: "WhatsApp Updates", value: payload.whatsapp },
        ],
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: "Please check the form details." }, { status: 400 });
    }

    console.error("Counseling email failed", error);
    return NextResponse.json(
      { ok: false, message: "Email service is not configured yet. Please call or WhatsApp us directly." },
      { status: 500 },
    );
  }
}
