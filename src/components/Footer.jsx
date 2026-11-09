import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const footerCopy = {
  es: {
    summary:
      "Ministerio de Jesucristo que reparte despensas a familias en situaciones vulnerables y acompaña con oración, esperanza y cuidado práctico.",
    location: "Calle Herreros 53 esq. con Pintores, Col. Loma Bonita, Tlaxcala, México C.P 90090",
    email: "MxTCMinistries@gmail.com",
    explore: "Explorar el ministerio",
    links: [
      { label: "Servicio Domiciliar", to: "/servicio-domiciliar" },
      { label: "Misiones y Hospital Infantil", to: "/misiones" },
      { label: "Voluntariado", to: "/voluntarios" },
      { label: "Donaciones", to: "/donaciones" },
      { label: "Reportes e Infografías", to: "/reportes" },
    ],
  },
  en: {
    summary:
      "A ministry of Jesus Christ that delivers food pantry support to vulnerable families and accompanies them with prayer, hope, and practical care.",
    location: "Calle Herreros 53 corner with Pintores, Col. Loma Bonita, Tlaxcala, México C.P 90090",
    email: "MxTCMinistries@gmail.com",
    explore: "Explore the ministry",
    links: [
      { label: "Home Care", to: "/servicio-domiciliar" },
      { label: "Missions & Children's Hospital", to: "/misiones" },
      { label: "Volunteers", to: "/voluntarios" },
      { label: "Donations", to: "/donaciones" },
      { label: "Reports & Infographics", to: "/reportes" },
    ],
  },
};

export default function Footer() {
  const { language, t } = useLanguage();
  const copy = footerCopy[language] ?? footerCopy.es;
  const verse =
    language === "en"
      ? "\u201cWhatever you did for one of the least of these brothers and sisters of mine, you did for me.\u201d \u2014 Matthew 25:40"
      : "\u201cEn cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.\u201d \u2014 Mateo 25:40";

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-ministry-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center font-display text-2xl italic leading-snug text-white/95 sm:text-3xl">
          {verse}
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="overflow-hidden rounded-xl bg-white p-1">
                <img
                  src={`${import.meta.env.BASE_URL}assets/tcm-logo.jpeg`}
                  alt={t("brand")}
                  className="h-14 w-auto object-contain"
                />
              </span>
              <p className="font-display text-xl font-semibold">{t("brand")}</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              {copy.summary}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-light">
              {copy.explore}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {copy.links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/75 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid content-start gap-4 text-sm text-white/75">
            <span className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-ember-light" /> {copy.location}
            </span>
            <span className="flex flex-wrap items-center gap-2">
              <Phone size={18} className="shrink-0 text-ember-light" />
              <a className="font-semibold text-white hover:text-ember-light" href="tel:+522463307994">
                246 330 79 94
              </a>
              <span className="text-white/30">|</span>
              <a className="font-semibold text-white hover:text-ember-light" href="tel:+522464150417">
                246 415 04 17
              </a>
            </span>
            <span className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-ember-light" />
              <a className="break-all font-semibold text-white hover:text-ember-light" href={`mailto:${copy.email}`}>
                {copy.email}
              </a>
            </span>
            <div className="pt-1">
              <a
                href={`https://wa.me/522463307994?text=${encodeURIComponent(
                  language === "en"
                    ? "Hello! I would like to contact Trumpet Call Ministries."
                    : "¡Hola! Me gustaría ponerme en contacto con Trumpet Call Ministries."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle size={16} className="fill-white/20" />
                {language === "en" ? "Chat on WhatsApp" : "Escribir por WhatsApp"}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {t("brand")} México
        </p>
      </div>
    </footer>
  );
}
