import { ChevronDown } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-amber-200"
      aria-label="Volver arriba"
    >
      <ChevronDown size={24} className="rotate-180" />
    </button>
  );
}
