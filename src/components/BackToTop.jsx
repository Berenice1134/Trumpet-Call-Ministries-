import { ChevronDown, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/useLanguage.js";

const WHATSAPP_NUMBER = "522463307994";

export default function BackToTop() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isEnglish
      ? "Hello! I would like to get more information about Trumpet Call Ministries."
      : "¡Hola! Me gustaría recibir más información sobre Trumpet Call Ministries."
  )}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d]"
        aria-label={isEnglish ? "Contact via WhatsApp" : "Contactar por WhatsApp"}
      >
        <MessageCircle size={22} className="fill-white/20 shrink-0" />
        <span className="hidden text-xs font-bold tracking-wide sm:inline">
          WhatsApp
        </span>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 text-white shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-ember"
        aria-label={isEnglish ? "Back to top" : "Volver arriba"}
      >
        <ChevronDown size={24} className="rotate-180" />
      </button>
    </div>
  );
}
