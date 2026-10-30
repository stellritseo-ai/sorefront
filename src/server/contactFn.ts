import { createServerFn } from "@tanstack/react-start";
import { sendEmailNotification, type ContactSubmission } from "./mailer";

export const submitContactLead = createServerFn({ method: "POST" })
  .validator((data: ContactSubmission) => data)
  .handler(async ({ data }) => {
    try {
      const result = await sendEmailNotification(data);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error("[Email Submission Error]", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error while sending email",
      };
    }
  });
