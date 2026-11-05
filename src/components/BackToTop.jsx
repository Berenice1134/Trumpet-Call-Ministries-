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
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 text-white shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-ember"
      aria-label="Volver arriba"
    >
      <ChevronDown size={24} className="rotate-180" />
    </button>
  );
}
