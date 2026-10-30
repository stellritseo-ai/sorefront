export interface LeadData {
  formSource: string;
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

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      throw new Error(json.error || `Server returned status ${res.status}`);
    }

    const result = await res.json();
    return { success: result.success !== false };
  } catch (err) {
    console.error("[Lead Delivery Error]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error delivering form",
    };
  }
}
