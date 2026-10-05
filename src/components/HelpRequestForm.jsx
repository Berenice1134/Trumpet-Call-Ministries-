import { useState } from "react";
import { useLanguage } from "../context/useLanguage.js";
import { submitHelpRequest } from "../services/helpRequests.js";

const initialValues = {
  fullName: "",
  phone: "",
  message: "",
};

export default function HelpRequestForm() {
  const { language, t } = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const copy = {
    success:
      language === "en"
        ? "Request received. The team will review it and contact you soon."
        : "Solicitud recibida. El equipo la revisara y se pondra en contacto pronto.",
    localSuccess:
      language === "en"
        ? "Request saved locally. Configure the database to receive it automatically."
        : "Solicitud guardada localmente. Configura la base de datos para recibirla automaticamente.",
    error:
      language === "en"
        ? "We could not send the request. Please try again."
        : "No pudimos enviar la solicitud. Intentalo nuevamente.",
    sending: language === "en" ? "Sending..." : "Enviando...",
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const result = await submitHelpRequest({ ...values, language });
      setValues(initialValues);
      setStatus("success");
      setFeedback(result.savedToDatabase ? copy.success : copy.localSuccess);
    } catch (error) {
      console.error("Help request failed:", error);
      setStatus("error");
      setFeedback(copy.error);
    }
  };

  return (
    <form className="card grid gap-4 p-6" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {t("common.fullName")}
        <input
          name="fullName"
          value={values.fullName}
          onChange={updateField}
          required
          autoComplete="name"
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-ministry-teal focus:ring-2 focus:ring-ministry-teal/20"
          placeholder="[Insertar nombre]"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {t("common.phone")}
        <input
          name="phone"
          value={values.phone}
          onChange={updateField}
          required
          inputMode="tel"
          autoComplete="tel"
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-ministry-teal focus:ring-2 focus:ring-ministry-teal/20"
          placeholder="[Insertar teléfono]"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {t("common.message")}
        <textarea
          name="message"
          value={values.message}
          onChange={updateField}
          required
          className="min-h-32 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-ministry-teal focus:ring-2 focus:ring-ministry-teal/20"
          placeholder="[Describir necesidad]"
        />
      </label>
      {feedback ? (
        <p
          className={`rounded-lg px-4 py-3 text-sm font-semibold ${
            status === "error"
              ? "bg-red-50 text-red-700"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {feedback}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-ministry-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-ministry-teal disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? copy.sending : t("common.submit")}
      </button>
    </form>
  );
}
