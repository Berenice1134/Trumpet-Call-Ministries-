import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function AutoImageCarousel({
  photos,
  getLabel = (photo) => photo.alt ?? photo.label ?? "",
  language = "es",
  className = "",
  heightClassName = "h-[360px] sm:h-[440px]",
  imageFit = "cover",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPhoto = photos[activeIndex];
  const previousLabel = language === "en" ? "Previous photo" : "Foto anterior";
  const nextLabel = language === "en" ? "Next photo" : "Siguiente foto";

  useEffect(() => {
    setActiveIndex(0);
  }, [photos]);

  useEffect(() => {
    if (photos.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [photos.length]);

  if (!currentPhoto) return null;

  const goTo = (index) => setActiveIndex((index + photos.length) % photos.length);

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl ${className}`}>
      <div className={`group relative ${heightClassName}`}>
        <img
          key={currentPhoto.src}
          src={currentPhoto.src}
          alt={getLabel(currentPhoto)}
          className={`gallery-photo-enter h-full w-full ${imageFit === "contain" ? "object-contain p-3" : "object-cover"}`}
          loading={activeIndex === 0 ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
        {getLabel(currentPhoto) && (
          <p className="pointer-events-none absolute bottom-7 left-6 right-6 text-lg font-bold text-white drop-shadow sm:text-xl">
            {getLabel(currentPhoto)}
          </p>
        )}
        {photos.length > 1 && (
          <>
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label={previousLabel} className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75">
              <ChevronLeft size={24} />
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label={nextLabel} className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75">
              <ChevronRight size={24} />
            </button>
            <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-sm font-bold text-white backdrop-blur">
              {activeIndex + 1} / {photos.length}
            </span>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {photos.map((photo, index) => (
                <button key={photo.key ?? photo.src} type="button" onClick={() => goTo(index)} aria-label={`${language === "en" ? "View photo" : "Ver foto"} ${index + 1}`} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-amber-400" : "w-2.5 bg-white/65 hover:bg-white"}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
