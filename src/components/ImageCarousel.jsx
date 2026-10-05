import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImageCarousel({ items, label }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const activeItem = items[activeIndex];

  function goToPrevious() {
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  }

  function goToNext() {
    setActiveIndex((index) => (index + 1) % items.length);
  }

  return (
    <section aria-label={label} className="card overflow-hidden">
      <div className="relative min-h-[360px] bg-ministry-blue text-white">
        <div
          className={[
            "absolute inset-0 bg-cover bg-center opacity-95 transition duration-700",
            activeItem.image ? "" : "pattern-grid",
          ].join(" ")}
          style={{
            backgroundImage: activeItem.image
              ? `linear-gradient(90deg, rgba(0, 95, 127, 0.82), rgba(0, 95, 127, 0.28)), url(${activeItem.image})`
              : "linear-gradient(135deg, #005F7F, #13AECB)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,212,0,0.28),transparent_26%)]" />
        <div className="relative grid min-h-[360px] content-end p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ministry-gold">
            {activeItem.kicker}
          </p>
          <h3 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
            {activeItem.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/86 sm:text-base">
            {activeItem.text}
          </p>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ministry-blue shadow-sm transition hover:bg-ministry-gold"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ministry-blue shadow-sm transition hover:bg-ministry-gold"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 bg-white px-4 py-4">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={item.title}
            className={[
              "h-2.5 rounded-full transition-all",
              index === activeIndex
                ? "w-10 bg-ministry-teal"
                : "w-2.5 bg-slate-300 hover:bg-ministry-blue",
            ].join(" ")}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
