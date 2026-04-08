"use server";

import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";

const BUSINESS_EMAIL = "G.Molinnus@rogers.com";
const CSV_PATH = path.join(process.cwd(), "submissions.csv");

interface SubmissionData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
  location?: string;
}

async function appendToCsv(data: SubmissionData) {
  const timestamp = new Date().toISOString();
  const header =
    "Timestamp,Name,Email,Phone,Service,Message,Company,Location\n";

  // Escape CSV values
  const escape = (v: string) =>
    `"${(v || "").replace(/"/g, '""')}"`;

  const row = [
    escape(timestamp),
    escape(data.name),
    escape(data.email),
    escape(data.phone),
    escape(data.service),
    escape(data.message),
    escape(data.company || ""),
    escape(data.location || ""),
  ].join(",") + "\n";

  try {
    await fs.access(CSV_PATH);
    await fs.appendFile(CSV_PATH, row, "utf-8");
  } catch {
    // File doesn't exist yet — create with header
    await fs.writeFile(CSV_PATH, header + row, "utf-8");
  }
}

async function sendEmail(data: SubmissionData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping email send");
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Molinnus Website <onboarding@resend.dev>",
    to: BUSINESS_EMAIL,
    subject: `New Quote Request from ${data.name}`,
    html: `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${data.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${data.service || "Not specified"}</td></tr>
        ${data.company ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${data.company}</td></tr>` : ""}
        ${data.location ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Location</td><td style="padding:8px;border:1px solid #ddd">${data.location}</td></tr>` : ""}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Details</td><td style="padding:8px;border:1px solid #ddd">${data.message}</td></tr>
      </table>
      <p style="color:#666;font-size:12px;margin-top:16px">Submitted from molinnusplumbingandheating.com</p>
    `,
  });
}

export async function submitContactForm(formData: FormData) {
  const data: SubmissionData = {
    name: formData.get("name") as string || "",
    email: formData.get("email") as string || "",
    phone: formData.get("phone") as string || "",
    service: formData.get("service") as string || "",
    message: formData.get("message") as string || "",
    company: formData.get("company") as string || "",
    location: formData.get("location") as string || "",
  };

  // Server-side validation
  const errors: string[] = [];
  if (!data.name.trim()) errors.push("Name is required");
  if (!data.email.trim()) errors.push("Email is required");
  if (!data.phone.trim()) errors.push("Phone is required");
  if (!data.message.trim()) errors.push("Project details are required");

  if (errors.length > 0) {
    return { success: false, error: errors.join(", ") };
  }

  try {
    await appendToCsv(data);
    await sendEmail(data);
    return { success: true };
  } catch (err) {
    console.error("Form submission error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
