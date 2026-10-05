import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/useLanguage.js";

const footerCopy = {
  es: {
    summary:
      "Ministerio de Jesucristo que reparte despensas a familias en situaciones vulnerables y acompaña con oración, esperanza y cuidado práctico.",
    location: "Calle Herreros 53 esq. con Pintores, Col. Loma Bonita, Tlaxcala",
    email: "MxTCMinistries@gmail.com",
  },
  en: {
    summary:
      "A ministry of Jesus Christ that delivers food pantry support to vulnerable families and accompanies them with prayer, hope, and practical care.",
    location: "Calle Herreros 53 corner with Pintores, Col. Loma Bonita, Tlaxcala",
    email: "MxTCMinistries@gmail.com",
  },
};

export default function Footer() {
  const { language, t } = useLanguage();
  const copy = footerCopy[language] ?? footerCopy.es;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/tcm-logo.jpeg"
              alt={t("brand")}
              className="h-14 w-20 rounded-md object-contain"
            />
            <p className="text-lg font-bold">{t("brand")}</p>
          </div>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            {copy.summary}
          </p>
        </div>
        <div className="grid gap-3 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {copy.location}
          </span>
          <span className="flex flex-wrap items-center gap-2">
            <Phone size={16} />
            <a className="font-semibold text-ministry-blue hover:text-ministry-blue-dark" href="tel:+522463307994">
              246 330 79 94
            </a>
            <span className="text-slate-300">|</span>
            <a className="font-semibold text-ministry-blue hover:text-ministry-blue-dark" href="tel:+522464150417">
              246 415 04 17
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} />
            <a className="font-semibold text-ministry-blue hover:text-ministry-blue-dark" href={`mailto:${copy.email}`}>
              {copy.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
