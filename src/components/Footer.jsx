import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const footerCopy = {
  es: {
    summary:
      "Ministerio de Jesucristo que reparte despensas a familias en situaciones vulnerables y acompaña con oración, esperanza y cuidado práctico.",
    location: "Calle Herreros 53 esq. con Pintores, Col. Loma Bonita, Tlaxcala, México C.P 90090",
    email: "MxTCMinistries@gmail.com",
  },
  en: {
    summary:
      "A ministry of Jesus Christ that delivers food pantry support to vulnerable families and accompanies them with prayer, hope, and practical care.",
    location: "Calle Herreros 53 corner with Pintores, Col. Loma Bonita, Tlaxcala, México C.P 90090",
    email: "MxTCMinistries@gmail.com",
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
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-ministry-teal/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center font-display text-2xl italic leading-snug text-white/90 sm:text-3xl">
          {verse}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/donaciones#donaciones" className="btn-primary">
            <Heart size={16} className="fill-white" />
            {t("common.donateNow")}
          </Link>
          <Link to="/voluntarios" className="btn-ghost-light">
            {language === "en" ? "Become a volunteer" : "Quiero ser voluntario"}
          </Link>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr]">
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
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              {copy.summary}
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white/75">
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
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {t("brand")} México
        </p>
      </div>
    </footer>
  );
}
