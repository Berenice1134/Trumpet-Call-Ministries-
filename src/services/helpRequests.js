/* global crypto, fetch, localStorage */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/rest\/v1\/?$/, "");
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const HELP_REQUEST_WEBHOOK_URL = import.meta.env.VITE_HELP_REQUEST_WEBHOOK_URL;

function buildHelpRequestPayload(values) {
  return {
    full_name: values.fullName.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
    source: "website_help_request_form",
    language: values.language,
    status: "new",
    created_at: new Date().toISOString(),
  };
}

async function saveToSupabase(payload) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return { saved: false, reason: "supabase_not_configured" };
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/help_requests`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Could not save request");
  }

  return { saved: true, record: null };
}

async function notifyWebhook(payload) {
  if (!HELP_REQUEST_WEBHOOK_URL) {
    return { notified: false, reason: "webhook_not_configured" };
  }

  const response = await fetch(HELP_REQUEST_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Could not send notification");
  }

  return { notified: true };
}

function saveLocalFallback(payload) {
  const current = JSON.parse(localStorage.getItem("tcm_help_requests") ?? "[]");
  const localRecord = { id: crypto.randomUUID(), ...payload };
  localStorage.setItem("tcm_help_requests", JSON.stringify([localRecord, ...current]));
  return localRecord;
}

export async function submitHelpRequest(values) {
  const payload = buildHelpRequestPayload(values);
  const databaseResult = await saveToSupabase(payload);

  if (!databaseResult.saved) {
    saveLocalFallback(payload);
  }

  let notificationResult = { notified: false };
  try {
    notificationResult = await notifyWebhook({
      ...payload,
      database_id: databaseResult.record?.id ?? null,
    });
  } catch (error) {
    console.warn("Help request notification failed:", error);
  }

  return {
    savedToDatabase: databaseResult.saved,
    notificationSent: notificationResult.notified,
  };
}
