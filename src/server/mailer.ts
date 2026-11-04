import nodemailer from "nodemailer";

export interface ContactSubmission {
  formSource: string; // e.g., "Homepage Form", "Contact Page", "Free Estimate", "About Page", "Reviews Page"
  name: string;
  email?: string;
  phone: string;
  businessName?: string;
  serviceNeeded?: string;
  timeline?: string;
  propertyAddress?: string;
  isEmergency?: boolean;
  message?: string;
}

function loadLocalEnvIfPresent() {
  if (typeof process === "undefined" || !process.cwd) return;
  if (process.env.SMTP_PASS) return;
  try {
    const fs = require("node:fs");
    const path = require("node:path");
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx !== -1) {
          const k = trimmed.slice(0, eqIdx).trim();
          const v = trimmed.slice(eqIdx + 1).trim();
          if (!process.env[k]) {
            process.env[k] = v;
          }
        }
      }
    }
  } catch {
    // Ignore in read-only / browser environments
  }
}

function getEnvValue(key: string, env?: unknown): string | undefined {
  if (env && typeof env === "object" && key in env) {
    const val = (env as Record<string, unknown>)[key];
    if (typeof val === "string" && val.length > 0) return val;
  }
  loadLocalEnvIfPresent();
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  return undefined;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(env?: unknown) {
  if (transporter) return transporter;

  const host = getEnvValue("SMTP_HOST", env) || "smtppro.zoho.com";
  const port = parseInt(getEnvValue("SMTP_PORT", env) || "465", 10);
  const secure = getEnvValue("SMTP_SECURE", env) !== "false";
  const user = getEnvValue("SMTP_USER", env) || "eva@stellrit.com";
  const pass = getEnvValue("SMTP_PASS", env);

  if (!pass) {
    console.warn("[Mailer Warning] SMTP_PASS is not set in environment or .env file.");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass: pass || "",
    },
  });

  return transporter;
}

export async function sendEmailNotification(submission: ContactSubmission, env?: unknown) {
  const mailer = getTransporter(env);
  const recipient = getEnvValue("CONTACT_RECIPIENT_EMAIL", env) || "eva@stellrit.com";
  const sender = getEnvValue("CONTACT_FROM_EMAIL", env) || "eva@stellrit.com";

  const subject = `[${submission.formSource}] New Commercial Inquiry - ${submission.businessName || submission.name}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: #0f172a; color: #ffffff; padding: 24px 28px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #94a3b8; }
          .badge { display: inline-block; background: #dc2626; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
          .content { padding: 28px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .grid td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .grid td.label { width: 35%; font-weight: 600; color: #64748b; background-color: #f8fafc; }
          .grid td.value { width: 65%; color: #0f172a; font-weight: 500; }
          .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 16px; }
          .message-box h3 { margin: 0 0 8px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #64748b; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 16px 28px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${submission.isEmergency ? '<div class="badge">URGENT 24/7 EMERGENCY</div>' : '<div class="badge" style="background:#0284c7;">NEW LEAD</div>'}
            <h1>Commercial Glass Inquiry Received</h1>
            <p>Submitted via ${submission.formSource} on glassdoordallas.com</p>
          </div>
          <div class="content">
            <table class="grid">
              <tr>
                <td class="label">Contact Name</td>
                <td class="value">${submission.name}</td>
              </tr>
              ${submission.businessName ? `<tr><td class="label">Business / Property</td><td class="value">${submission.businessName}</td></tr>` : ""}
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${submission.phone}" style="color:#0284c7;text-decoration:none;font-weight:700;">${submission.phone}</a></td>
              </tr>
              ${submission.email ? `<tr><td class="label">Email Address</td><td class="value"><a href="mailto:${submission.email}" style="color:#0284c7;text-decoration:none;">${submission.email}</a></td></tr>` : ""}
              ${submission.serviceNeeded ? `<tr><td class="label">Service Requested</td><td class="value">${submission.serviceNeeded}</td></tr>` : ""}
              ${submission.timeline ? `<tr><td class="label">Timeline</td><td class="value">${submission.timeline}</td></tr>` : ""}
              ${submission.propertyAddress ? `<tr><td class="label">Property Address</td><td class="value">${submission.propertyAddress}</td></tr>` : ""}
              <tr>
                <td class="label">Emergency Status</td>
                <td class="value" style="${submission.isEmergency ? "color:#dc2626;font-weight:700;" : ""}">${submission.isEmergency ? "YES - 24/7 Priority Emergency" : "Standard Commercial Request"}</td>
              </tr>
            </table>

            <div class="message-box">
              <h3>Project Details / Notes</h3>
              <p>${submission.message || "No additional notes provided."}</p>
            </div>
          </div>
          <div class="footer">
            Delivered directly from Store Fronts Of Dallas Lead Engine to ${recipient}
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
[${submission.formSource}] New Commercial Inquiry

Contact Name: ${submission.name}
Business: ${submission.businessName || "N/A"}
Phone: ${submission.phone}
Email: ${submission.email || "N/A"}
Service: ${submission.serviceNeeded || "N/A"}
Timeline: ${submission.timeline || "N/A"}
Property Address: ${submission.propertyAddress || "N/A"}
Emergency: ${submission.isEmergency ? "YES" : "No"}

Project Details:
${submission.message || "None"}
  `.trim();

  const info = await mailer.sendMail({
    from: `"Store Fronts Of Dallas" <${sender}>`,
    to: recipient,
    replyTo: submission.email || sender,
    subject,
    text: textContent,
    html: htmlContent,
  });

  return { success: true, messageId: info.messageId };
}
