import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function FeaturedPhotoGallery({
  photos,
  getLabel,
  badge,
  onImageClick,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  const visiblePhotos = useMemo(() => {
    if (!photos.length) return [];

    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeIndex + offset + photos.length) % photos.length;
      return { index, offset, photo: photos[index] };
    });
  }, [activeIndex, photos]);

  function previous() {
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  }

  function next() {
    setActiveIndex((index) => (index + 1) % photos.length);
  }

  if (!photos.length) return null;

  const activePhoto = photos[activeIndex];
  const activeLabel = getLabel(activePhoto);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 px-4 py-10 shadow-2xl shadow-slate-200/70 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(19,174,203,0.16),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(255,212,0,0.2),transparent_28%)]" />
      <div className="absolute inset-0 opacity-40 pattern-grid" />

      {badge && (
        <div className="relative mx-auto mb-8 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-ministry-blue shadow-lg">
          <Sparkles size={15} className="text-ministry-gold" />
          {badge}
        </div>
      )}

      <div className="relative mx-auto h-[430px] max-w-6xl sm:h-[500px]">
        {visiblePhotos.map(({ photo, index, offset }) => {
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);

          return (
            <button
              key={`${photo.src}-${offset}`}
              type="button"
              className={[
                "absolute left-1/2 top-1/2 overflow-hidden rounded-3xl border bg-white p-2 text-left shadow-2xl transition-all duration-700 ease-out",
                "focus:outline-none focus:ring-4 focus:ring-ministry-gold/40",
                isActive
                  ? "z-30 h-[390px] w-[78%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 scale-100 border-white shadow-ministry-blue/20 sm:h-[460px]"
                  : "z-20 h-[315px] w-[52%] max-w-[340px] -translate-y-1/2 border-white/80 opacity-80 hover:opacity-100 sm:h-[380px]",
                offset === -2 ? "-translate-x-[118%] scale-75 opacity-45" : "",
                offset === -1 ? "-translate-x-[92%] scale-90" : "",
                offset === 1 ? "-translate-x-[8%] scale-90" : "",
                offset === 2 ? "translate-x-[18%] scale-75 opacity-45" : "",
                absOffset > 1 ? "hidden lg:block" : "",
                absOffset === 1 ? "hidden sm:block" : "",
              ].join(" ")}
              onClick={() => {
                if (isActive) {
                  onImageClick?.(index);
                  return;
                }
                setActiveIndex(index);
              }}
              aria-label={getLabel(photo)}
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-slate-900 to-ministry-blue">
                <img
                  src={photo.src}
                  alt={getLabel(photo)}
                  className={[
                    "h-full w-full transition duration-700",
                    isActive
                      ? "object-contain p-2 featured-photo-pulse"
                      : "object-cover scale-105",
                  ].join(" ")}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80" />
                {isActive && (
                  <>
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-ministry-blue shadow-lg">
                      {String(activeIndex + 1).padStart(2, "0")} / {photos.length}
                    </span>
                    <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-ministry-blue shadow-lg">
                      <Maximize2 size={19} />
                    </span>
                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="max-w-md text-lg font-black leading-6 drop-shadow">
                        {activeLabel}
                      </p>
                    </figcaption>
                  </>
                )}
              </div>
            </button>
          );
        })}

        <button
          type="button"
          className="absolute left-2 top-1/2 z-40 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:scale-105 hover:bg-ministry-blue sm:left-6"
          onClick={previous}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          type="button"
          className="absolute right-2 top-1/2 z-40 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:scale-105 hover:bg-ministry-blue sm:right-6"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="relative mx-auto mt-8 flex w-fit max-w-full items-center gap-2 overflow-x-auto rounded-full bg-white px-4 py-3 shadow-xl shadow-slate-200/70">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={[
              "h-3 shrink-0 rounded-full transition-all",
              index === activeIndex
                ? "w-10 bg-ministry-teal"
                : "w-3 bg-slate-200 hover:bg-ministry-gold",
            ].join(" ")}
            onClick={() => setActiveIndex(index)}
            aria-label={getLabel(photo)}
          />
        ))}
      </div>
    </div>
  );
}
