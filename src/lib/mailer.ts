import nodemailer from "nodemailer";

type EmailField = {
  label: string;
  value: string | boolean | undefined;
};

type CounselingEmail = {
  subject: string;
  source: string;
  replyTo: string;
  fields: EmailField[];
};

const recipientEmail = process.env.CONTACT_TO_EMAIL || "dreamgateglobaleducation@gmail.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value: string | boolean | undefined) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value?.trim() || "Not provided";
}

export async function sendCounselingEmail({ subject, source, replyTo, fields }: CounselingEmail) {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || `"Dream Gate Global Education" <${process.env.SMTP_USER}>`;

  const textRows = fields.map((field) => `${field.label}: ${formatValue(field.value)}`).join("\n");
  const htmlRows = fields
    .map(
      (field) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:700;color:#0B1F4A;">${escapeHtml(field.label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#1A1A2E;">${escapeHtml(formatValue(field.value))}</td>
        </tr>
      `,
    )
    .join("");

  await transporter.sendMail({
    from,
    to: recipientEmail,
    replyTo,
    subject,
    text: `${source}\n\n${textRows}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;background:#F8F9FA;padding:24px;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background:#0B1F4A;color:#ffffff;padding:22px 24px;">
            <p style="margin:0 0 6px;color:#F5A623;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;">${escapeHtml(source)}</p>
            <h1 style="margin:0;font-size:24px;line-height:1.3;">Dream Gate Global Education</h1>
          </div>
          <div style="padding:24px;">
            <table style="border-collapse:collapse;width:100%;font-size:14px;">
              ${htmlRows}
            </table>
          </div>
        </div>
      </div>
    `,
  });
}
