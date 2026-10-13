import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  HeartPulse,
  MapPinned,
  Maximize2,
  Sparkles,
  Target,
  ChevronDown,
  Star,
  Heart,
  Clock,
  Gift,
  Users,
  X,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage.js";

const hospitalPhotos = [
  ...Array.from({ length: 21 }, (_, index) => ({
    key: `hospitalNew${String(index + 1).padStart(2, "0")}`,
    src: `${import.meta.env.BASE_URL}assets/hospital-infantil/hospital-nuevo-${String(index + 1).padStart(2, "0")}.jpeg`,
  })),
  ...["img_2675", "img_2659", "img_2596", "img_2668"].map((name) => ({
    key: name,
    src: `${import.meta.env.BASE_URL}assets/hospital-infantil/${name}.jpeg`,
  })),
];

const cartolandiaFirstVisitPhotos = Array.from({ length: 21 }, (_, index) => ({
  src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-primera-${String(index + 1).padStart(2, "0")}.jpeg`,
  label: `Primera visita a Cartolandia, foto ${index + 1}`,
}));
const cartolandiaFirstVisitPhotosEn = cartolandiaFirstVisitPhotos.map((photo, index) => ({
  ...photo,
  label: `First Cartolandia visit, photo ${index + 1}`,
}));

const otherMissions = [
  {
    id: "cartolandia",
    title: "Cartolandia",
    titleEn: "Cartolandia",
    icon: MapPinned,
    description: "Dos visitas que marcaron el inicio del servicio en Cartolandia: la primera en 2023 y la segunda en febrero de 2025.",
    descriptionEn: "Two visits that marked the beginning of service in Cartolandia: the first in 2023 and the second in February 2025.",
    stats: [
      { value: "150+", label: "Familias", labelEn: "Families" },
      { value: "2", label: "Visitas", labelEn: "Visits" },
      { value: "500kg", label: "Entregados", labelEn: "Delivered" },
    ],
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-slate-900 via-emerald-950 to-teal-950",
    orbColor: "bg-emerald-500/20",
    accentColor: "emerald",
    badgeColor: "text-emerald-400",
    statColor: "from-emerald-400 to-teal-400",
    placeholder: "[Insertar información de Cartolandia]",
    placeholderEn: "[Insert Cartolandia information]",
    firstVisitTitle: "Primera visita · 2023",
    firstVisitTitleEn: "First visit · 2023",
    secondVisitTitle: "Segunda visita · febrero de 2025",
    secondVisitTitleEn: "Second visit · February 2025",
    photos: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-01.jpeg`, label: "Condiciones de vivienda en Cartolandia" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-02.jpeg`, label: "Entrega comunitaria junto al vehículo del ministerio" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-03.jpeg`, label: "Entrega de alimento a familias" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-04.jpeg`, label: "Oración y acompañamiento durante la visita" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-05.jpeg`, label: "Familias recibiendo apoyo y seguimiento" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-06.jpeg`, label: "Despensas entregadas desde la ruta de visita" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-07.jpeg`, label: "Acompañamiento cercano a beneficiarios" },
    ],
    photosEn: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-01.jpeg`, label: "Housing conditions in Cartolandia" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-02.jpeg`, label: "Community delivery beside the ministry vehicle" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-03.jpeg`, label: "Food delivery to families" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-04.jpeg`, label: "Prayer and accompaniment during the visit" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-05.jpeg`, label: "Families receiving support and follow-up" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-06.jpeg`, label: "Pantries delivered during the visit route" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/cartolandia-07.jpeg`, label: "Close accompaniment for beneficiaries" },
    ],
  },
  {
    id: "dia-caridad",
    title: "Día de Caridad",
    titleEn: "Charity Day",
    icon: HandHeart,
    description: "Apoyo realizado en 2023 junto con Fundación Cáritas en la iglesia de San José, preparando y entregando despensas para familias de la comunidad.",
    descriptionEn: "Support carried out in 2023 together with Fundación Cáritas at San José Church, preparing and delivering food pantries for families in the community.",
    stats: [
      { value: "2023", label: "Año de apoyo", labelEn: "Support year" },
      { value: "Cáritas", label: "Aliado", labelEn: "Partner" },
      { value: "San José", label: "Sede", labelEn: "Host church" },
    ],
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "from-slate-900 via-rose-950 to-pink-950",
    orbColor: "bg-rose-500/20",
    accentColor: "rose",
    badgeColor: "text-rose-400",
    statColor: "from-rose-400 to-pink-400",
    placeholder: "[Insertar información del Día de Caridad]",
    placeholderEn: "[Insert Charity Day information]",
    photos: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-01.jpeg`, label: "Despensas preparadas para el apoyo con Fundación Cáritas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-02.jpeg`, label: "Preparación de alimentos para familias" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-03.jpeg`, label: "Entrega de despensa en la iglesia de San José" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-04.jpeg`, label: "Apoyo compartido durante el Día de Caridad 2023" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-05.jpeg`, label: "Servicio con Fundación Cáritas y la iglesia de San José" },
    ],
    photosEn: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-01.jpeg`, label: "Pantries prepared for the support with Fundación Cáritas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-02.jpeg`, label: "Food preparation for families" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-03.jpeg`, label: "Pantry delivery at San José Church" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-04.jpeg`, label: "Support shared during Charity Day 2023" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-05.jpeg`, label: "Service with Fundación Cáritas and San José Church" },
    ],
  },
  {
    id: "espanita",
    title: "Asilo de San Judas",
    titleEn: "Asilo de San Judas",
    icon: Target,
    description: "Espacio para información de la misión en el Asilo de San Judas, necesidades y próximos pasos.",
    descriptionEn: "Space for Asilo de San Judas mission information, needs, and next steps.",
    stats: [
      { value: "80+", label: "Familias", labelEn: "Families" },
      { value: "1", label: "Misiones", labelEn: "Missions" },
      { value: "75kg", label: "Repartidos", labelEn: "Distributed" },
    ],
    gradient: "from-violet-400 to-purple-500",
    bgGradient: "from-slate-900 via-violet-950 to-purple-950",
    orbColor: "bg-violet-500/20",
    accentColor: "violet",
    badgeColor: "text-violet-400",
    statColor: "from-violet-400 to-purple-400",
    placeholder: "[Insertar información de Asilo de San Judas]",
    placeholderEn: "[Insert Asilo de San Judas information]",
    photos: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-01.jpeg`, label: "Preparación de alimentos y apoyos" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-02.jpeg`, label: "Entrega cercana a beneficiarios" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-03.jpeg`, label: "Equipo de servicio en Españita" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-04.jpeg`, label: "Acompañamiento y apoyo comunitario" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-05.jpeg`, label: "Acompañamiento a una residente del Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-06.jpeg`, label: "Entrega de apoyo a residentes del Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-07.jpeg`, label: "Convivencia y entrega de apoyo a residentes" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-08.jpeg`, label: "Espacio exterior del Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-09.jpeg`, label: "Despensas preparadas para el Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-10.jpeg`, label: "Preparación de alimentos en el Asilo de San Judas" },
    ],
    photosEn: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-01.jpeg`, label: "Food and support preparation" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-02.jpeg`, label: "Personal delivery to beneficiaries" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-03.jpeg`, label: "Service team in Españita" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-04.jpeg`, label: "Community accompaniment and support" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-05.jpeg`, label: "Spending time with a resident at Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-06.jpeg`, label: "Support delivered to residents at Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-07.jpeg`, label: "Fellowship and support for residents" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-08.jpeg`, label: "Outdoor area at Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-09.jpeg`, label: "Food pantries prepared for Asilo de San Judas" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/espanita-10.jpeg`, label: "Food preparation at Asilo de San Judas" },
    ],
  },
];

const hospitalPageCopy = {
  es: {
    mission: "Misión",
    upcomingDates: "Próximas fechas",
    viewGallery: "Ver galería",
    viewFullGallery: "Ver galería completa",
    viewPhotos: "Explorar fotos",
    photosCount: "fotos",
    tapToEnlarge: "Toca una foto para ampliar",
    close: "Cerrar",
  },
  en: {
    mission: "Mission",
    upcomingDates: "Upcoming dates",
    viewGallery: "View gallery",
    viewFullGallery: "View full gallery",
    viewPhotos: "Explore photos",
    photosCount: "photos",
    tapToEnlarge: "Tap a photo to enlarge",
    close: "Close",
  },
};

const hospitalTimelineCopy = {
  es: {
    calendarIntro: "El ministerio programa una visita mensual al hospital, coordinada con el personal del hospital y el equipo de voluntarios para llevar ánimo, oración, actividades y apoyo práctico.",
    timelineEyebrow: "Fechas importantes",
    timelineTitle: "Momentos que han llevado alegría y apoyo al Hospital Infantil",
    timelineText: "Estos hitos documentan entregas, eventos y actividades que fortalecen el acompañamiento a niños con hemodiálisis, diálisis y sus familias.",
    completedEvents: "acciones realizadas",
    impactLabel: "Apoyo directo",
    monthlyVisit: "Visita mensual",
  },
  en: {
    calendarIntro: "The ministry plans one hospital visit each month, coordinated with the hospital and the volunteer team to bring encouragement, prayer, activities, and practical support.",
    timelineEyebrow: "Important dates",
    timelineTitle: "Moments that brought joy and support to the Children's Hospital",
    timelineText: "These milestones document deliveries, events, and activities that strengthen support for children receiving hemodialysis, dialysis, and their families.",
    completedEvents: "completed actions",
    impactLabel: "Direct support",
    monthlyVisit: "Monthly visit",
  },
};

const hospitalMilestones = [
  {
    dateEs: "Enero 2026",
    dateEn: "January 2026",
    titleEs: "Inicio de la misión al Hospital Infantil",
    titleEn: "Beginning of the Children's Hospital mission",
    textEs: "El ministerio recibió una nueva llamada para acompañar a niños vulnerables y sus familias en el área de nefrología del Hospital Infantil de Tlaxcala.",
    textEn: "The ministry received a new calling to accompany vulnerable children and their families in the nephrology area of the Children's Hospital of Tlaxcala.",
    icon: Star,
    gradient: "from-amber-300 to-yellow-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    dateEs: "27 de febrero",
    dateEn: "February 27",
    titleEs: "Primera visita a niños de nefrología",
    titleEn: "First visit with nephrology children",
    textEs: "El ministerio sirvió por primera vez a niños con insuficiencia renal, compartió el plan de salvación con sus familias y entregó kits de aseo personal con una reflexión bíblica.",
    textEn: "The ministry served children with kidney failure for the first time, shared the plan of salvation with their families, and delivered hygiene kits with a Bible reflection.",
    icon: Gift,
    gradient: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
  },
  {
    dateEs: "13 de marzo",
    dateEn: "March 13",
    titleEs: "Participación en la kermés del hospital",
    titleEn: "Participation in the hospital kermes",
    textEs: "El ministerio asistió a la kermés organizada en el hospital, acompañando a las familias y sumándose a la actividad comunitaria.",
    textEn: "The ministry attended the kermes organized at the hospital, accompanying families and joining the community activity.",
    icon: HandHeart,
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    dateEs: "22 de marzo",
    dateEn: "March 22",
    titleEs: "Kermés de Trumpet Call Ministries",
    titleEn: "Trumpet Call Ministries kermes",
    textEs: "Trumpet Call Ministries realizó una kermés para recaudar apoyo y destinarlo a los niños del Hospital Infantil de Tlaxcala.",
    textEn: "Trumpet Call Ministries held a kermes to raise support for the children at the Children's Hospital of Tlaxcala.",
    icon: Sparkles,
    gradient: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    dateEs: "30 de abril",
    dateEn: "April 30",
    titleEs: "Evento por el Día del Niño",
    titleEn: "Children's Day event",
    textEs: "El ministerio realizó un pequeño evento por el Día del Niño, creando un espacio de alegría, juego y ánimo para los pacientes.",
    textEn: "The ministry held a small Children's Day event, creating a space of joy, play, and encouragement for the patients.",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
  {
    dateEs: "29 de mayo",
    dateEn: "May 29",
    titleEs: "Pijamas especiales, chanclas y cintas para catéter",
    titleEn: "Special pajamas, sandals, and catheter bands",
    textEs: "Se repartieron pijamas especiales que cubren el cuerpo sin necesidad de quitar toda la ropa, permitiendo descubrir solo la zona del catéter; también se entregaron chanclas y cintas para sostener el catéter.",
    textEn: "Special pajamas were distributed to cover the body without needing to remove all clothing, allowing only the catheter area to be uncovered; sandals and bands to hold the catheter were also delivered.",
    icon: HeartPulse,
    gradient: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    dateEs: "2027",
    dateEn: "2027",
    titleEs: "Meta: alcanzar a más de 100 familias",
    titleEn: "Goal: reach more than 100 families",
    textEs: "Con nuevos donadores y voluntarios, el ministerio desea alcanzar a más de 100 familias y continuar compartiendo el amor de Cristo con quienes más lo necesitan.",
    textEn: "With new donors and volunteers, the ministry hopes to reach more than 100 families and continue sharing Christ's love with those who need it most.",
    icon: Target,
    gradient: "from-indigo-400 to-violet-500",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
  },
];

const hospitalStoryByLanguage = {
  es: {
    eyebrow: "Un acto de amor que transforma",
    title: "Acompañando a niños que luchan cada semana por su salud",
    paragraphs: [
      "El Hospital Infantil de Tlaxcala abrió una puerta para que Trumpet Call Ministries México acompañara a niños vulnerables y a sus familias en el área de nefrología. Muchos de ellos reciben diálisis o hemodiálisis, y cada tratamiento representa una carga económica y emocional muy fuerte para el hogar.",
      "El ministerio busca servir con sensibilidad: entregar articulos de higiene, ropa adaptada para sus tratamientos, calzado y actividades con fundamento en la fe. Más que llevar cosas, el objetivo es llevar amor, esperanza, ánimo y oración en un proceso que muchas familias enfrentan con cansancio y necesidad.",
      "El equipo permanece en comunicacion con el personal del hospital para entender mejor como servir a esta comunidad y preparar apoyos mensuales que respondan a necesidades reales y aprobadas.",
    ],
  },
  en: {
    eyebrow: "An act of love that transforms",
    title: "Accompanying children who fight for their health every week",
    paragraphs: [
      "The Children's Hospital of Tlaxcala opened a door for Trumpet Call Ministries Mexico to accompany vulnerable children and their families in the nephrology area. Many of them receive dialysis or hemodialysis, and each treatment brings a heavy financial and emotional burden to the home.",
      "The ministry seeks to serve with sensitivity: delivering hygiene items, adapted clothing for treatments, footwear, and faith-based activities. More than bringing supplies, the goal is to bring love, hope, encouragement, and prayer during a process many families face with exhaustion and need.",
      "The team remains in communication with hospital staff to better understand how to serve this community and prepare monthly support that responds to real, approved needs.",
    ],
  },
};

/* ============================================================
   PhotoLightbox — modal con React Portal
   ============================================================ */
function PhotoLightbox({ photos, index, onIndexChange, onClose, closeLabel = "Cerrar" }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, photos.length, onClose, onIndexChange]);

  const photo = photos[index];
  if (!photo) return null;

  const goPrev = () => onIndexChange((index - 1 + photos.length) % photos.length);
  const goNext = () => onIndexChange((index + 1) % photos.length);

  const modal = (
    <div
      className="fixed inset-0 flex flex-col bg-slate-950/95 backdrop-blur-md"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 shadow-2xl ring-2 ring-white/50 transition hover:scale-105 hover:bg-rose-500 hover:text-white sm:right-6 sm:top-6 sm:h-14 sm:w-14"
        aria-label="Cerrar galería"
      >
        <X size={24} strokeWidth={3} />
      </button>

      <span className="absolute left-4 top-4 z-50 rounded-full border border-white/20 bg-slate-950/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur sm:left-6 sm:top-6">
        {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
      </span>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-16 sm:px-20 sm:py-20"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>

        <figure
          className="relative flex h-full w-full max-w-5xl items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.label}
            className="max-h-full max-w-full rounded-xl object-contain shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
          />
        </figure>
      </div>

      <div
        className="relative z-20 border-t border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-3 text-center text-sm font-black text-white sm:text-base">
          {photo.label}
        </p>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={p.src + i}
              type="button"
              onClick={() => onIndexChange(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-16 ${
                i === index
                  ? "border-rose-400 shadow-lg shadow-rose-500/30"
                  : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <img src={p.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

/* ============================================================
   MosaicTile — celda del mosaico (estilo premium)
   ============================================================ */
function MosaicTile({
  photo,
  onClick,
  className = "",
  showLabel = false,
  showOverlay = false,
  overlayCount = 0,
  photosCountLabel = "fotos",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] ring-1 ring-white/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_35px_90px_-25px_rgba(244,63,94,0.55)] hover:ring-white/20 ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.label}
        loading="lazy"
        className="h-full w-full object-cover transition duration-[1400ms] ease-out will-change-transform group-hover:scale-[1.14]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full" />
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10 transition group-hover:ring-white/30" />

      {showLabel && (
        <>
          <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
            <Maximize2 size={15} />
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
            <p className="translate-y-2 text-sm font-black text-white drop-shadow-lg transition-transform duration-500 group-hover:translate-y-0 sm:text-base">
              {photo.label}
            </p>
          </div>
        </>
      )}

      {!showLabel && !showOverlay && (
        <div className="absolute inset-0 bg-slate-950/25 transition duration-500 group-hover:bg-slate-950/5" />
      )}

      {showOverlay && (
        <>
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] transition duration-500 group-hover:bg-slate-950/45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/25">
              <Camera size={16} />
              <span className="text-sm font-black tracking-wide">
                +{overlayCount} {photosCountLabel}
              </span>
            </span>
          </div>
        </>
      )}
    </button>
  );
}

/* ============================================================
   MissionMosaic — mosaico bento adaptable (5 o 4 fotos)
   ============================================================ */
function MissionMosaic({ photos, onOpen, photosCountLabel = "fotos" }) {
  const displayed = photos.slice(0, 5);
  const remaining = photos.length - displayed.length;

  if (displayed.length >= 5) {
    return (
      <div className="grid h-[460px] grid-cols-3 grid-rows-3 gap-3 sm:h-[560px] sm:gap-4 lg:h-[620px]">
        <MosaicTile
          photo={displayed[0]}
          onClick={() => onOpen(0)}
          className="col-span-2 row-span-2"
          showLabel
        />
        <MosaicTile
          photo={displayed[1]}
          onClick={() => onOpen(1)}
          className="col-span-1 row-span-1"
        />
        <MosaicTile
          photo={displayed[2]}
          onClick={() => onOpen(2)}
          className="col-span-1 row-span-1"
        />
        <MosaicTile
          photo={displayed[3]}
          onClick={() => onOpen(3)}
          className="col-span-1 row-span-1"
        />
        <MosaicTile
          photo={displayed[4]}
          onClick={() => onOpen(4)}
          className="col-span-2 row-span-1"
          showOverlay={remaining > 0}
          overlayCount={remaining}
          photosCountLabel={photosCountLabel}
        />
      </div>
    );
  }

  if (displayed.length === 4) {
    return (
      <div className="grid h-[460px] grid-cols-3 grid-rows-3 gap-3 sm:h-[560px] sm:gap-4 lg:h-[620px]">
        <MosaicTile
          photo={displayed[0]}
          onClick={() => onOpen(0)}
          className="col-span-2 row-span-2"
          showLabel
        />
        <MosaicTile
          photo={displayed[1]}
          onClick={() => onOpen(1)}
          className="col-span-1 row-span-1"
        />
        <MosaicTile
          photo={displayed[2]}
          onClick={() => onOpen(2)}
          className="col-span-1 row-span-1"
        />
        <MosaicTile
          photo={displayed[3]}
          onClick={() => onOpen(3)}
          className="col-span-3 row-span-1"
          showOverlay={remaining > 0}
          overlayCount={remaining}
          photosCountLabel={photosCountLabel}
        />
      </div>
    );
  }

  return (
    <div className="grid h-[460px] grid-cols-2 grid-rows-2 gap-3 sm:h-[560px] sm:gap-4 lg:h-[620px]">
      {displayed.map((photo, i) => (
        <MosaicTile
          key={photo.src + i}
          photo={photo}
          onClick={() => onOpen(i)}
          className="col-span-1 row-span-1"
          showLabel={i === 0}
        />
      ))}
    </div>
  );
}

/* ============================================================
   CartolandiaVisitBlock — una visita de Cartolandia
   con timeline vertical + layout bento:
   [  HERO (2x2) ] [ side 1 ]
   [  HERO (2x2) ] [ side 2 ]
   [ grid de miniaturas debajo ]
   ============================================================ */
function CartolandiaVisitBlock({
  year,
  label,
  title,
  description,
  photos,
  onOpen,
  accent = "emerald",
  isLast = false,
  photosCountLabel = "fotos",
}) {
  const themeMap = {
    emerald: {
      dot: "from-emerald-400 to-teal-600 shadow-emerald-500/50 ring-emerald-400/30",
      label: "text-emerald-300",
      line: "from-emerald-400/60 via-emerald-400/20",
      badge: "text-emerald-100 bg-emerald-500/15 border-emerald-400/30",
    },
    teal: {
      dot: "from-teal-400 to-cyan-600 shadow-teal-500/50 ring-teal-400/30",
      label: "text-teal-300",
      line: "from-teal-400/60 via-teal-400/20",
      badge: "text-teal-100 bg-teal-500/15 border-teal-400/30",
    },
  };
  const theme = themeMap[accent] ?? themeMap.emerald;

  const safePhotos = photos || [];
  if (safePhotos.length === 0) return null;

  const [hero, ...rest] = safePhotos;
  const sides = rest.slice(0, 2);
  const gridPhotos = rest.slice(2);
  const gridStartIndex = 3;

  return (
    <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
      {/* Columna del timeline */}
      <div className="relative hidden flex-col items-center sm:flex">
        <span
          className={`relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${theme.dot} text-white shadow-xl ring-4 ring-white/5`}
        >
          <span className="text-[10px] font-black uppercase tracking-widest opacity-90">
            {year}
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/20" />
        </span>
        {!isLast && (
          <span
            className={`mt-3 w-px flex-1 bg-gradient-to-b ${theme.line} to-transparent`}
          />
        )}
      </div>

      {/* Contenido de la visita */}
      <div className="space-y-5">
        {/* Encabezado */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3 sm:hidden">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${theme.badge}`}
              >
                {year}
              </span>
            </div>
            <p className={`text-xs font-black uppercase tracking-[0.24em] ${theme.label}`}>
              {label}
            </p>
            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            {description && (
              <p className="max-w-2xl pt-1 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            )}
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-white/80 backdrop-blur">
            {safePhotos.length} {photosCountLabel}
          </span>
        </div>

        {/* Hero + 2 laterales */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 sm:min-h-[380px] lg:min-h-[440px]">
          <button
            type="button"
            onClick={() => onOpen(0)}
            className="group relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/40 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.95)] ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:ring-white/20 sm:aspect-auto"
          >
            <img
              src={hero.src}
              alt={hero.label}
              loading="lazy"
              className="h-full w-full object-cover transition duration-[1400ms] ease-out will-change-transform group-hover:scale-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[1300ms] ease-out group-hover:translate-x-full" />
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/10 transition group-hover:ring-white/25" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left sm:p-5">
              <p className="max-w-[80%] text-sm font-black leading-snug text-white drop-shadow-lg sm:text-base">
                {hero.label}
              </p>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:bg-white/25">
                <Maximize2 size={15} />
              </span>
            </div>
          </button>

          {sides.map((photo, i) => (
            <button
              key={photo.src + i}
              type="button"
              onClick={() => onOpen(i + 1)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900/40 shadow-lg shadow-slate-950/40 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:ring-white/20 sm:aspect-auto"
            >
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] ease-out will-change-transform group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[1000ms] ease-out group-hover:translate-x-full" />
              <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-left text-xs font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {photo.label}
              </p>
            </button>
          ))}
        </div>

        {/* Grid de miniaturas restantes */}
        {gridPhotos.length > 0 && (
          <div
            className={`grid gap-3 ${
              gridPhotos.length <= 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            }`}
          >
            {gridPhotos.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                onClick={() => onOpen(gridStartIndex + i)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 shadow-lg shadow-slate-950/40 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:ring-white/20"
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1000ms] ease-out will-change-transform group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/0" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[1000ms] ease-out group-hover:translate-x-full" />
                <span className="absolute left-2 top-2 rounded-full border border-white/20 bg-slate-950/70 px-2 py-0.5 text-[10px] font-black tracking-wider text-white backdrop-blur-md transition group-hover:border-white/40 group-hover:bg-white/25">
                  {String(gridStartIndex + i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   HospitalVisit — página
   ============================================================ */
export default function HospitalVisit() {
  const { dictionary, language, t } = useLanguage();
  const copy = hospitalPageCopy[language] ?? hospitalPageCopy.es;
  const timelineCopy = hospitalTimelineCopy[language] ?? hospitalTimelineCopy.es;
  const hospitalStory = hospitalStoryByLanguage[language] ?? hospitalStoryByLanguage.es;

  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (photos, index = 0) => setLightbox({ photos, index });

  const hospitalPhotosDisplay = hospitalPhotos.map((p) => ({
    src: p.src,
    label: t(`hospital.photoLabels.${p.key}`),
  }));

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section
        id="hospital-infantil-tlaxcala"
        className="relative min-h-screen flex items-center scroll-mt-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950"
      >
        <div className="absolute inset-0">
          <img
              src={hospitalPhotos[0].src}
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-rose-950/80 to-pink-950/90" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        <div className="section-shell relative w-full py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="motion-rise space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-400" />
                  </span>
                  <HeartPulse size={14} className="text-rose-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                  {t("hospital.carouselLabel")}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-rose-100 bg-clip-text text-transparent">
                  {t("hospital.title")}
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                {t("hospital.text")}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {dictionary.hospital.stats.map((item, index) => {
                  const icons = [Heart, Users, Gift];
                  const colors = [
                    "from-rose-400 to-pink-500",
                    "from-blue-400 to-indigo-500",
                    "from-amber-400 to-orange-500",
                  ];
                  const IconComponent = icons[index] || Heart;

                  return (
                    <div
                      key={item.value}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity" />
                      <div className="relative space-y-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg`}>
                          <IconComponent size={18} className="text-white" />
                        </div>
                        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                          {item.value}
                        </p>
                        <p className="text-xs font-semibold leading-5 text-white/60">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => openLightbox(hospitalPhotosDisplay, 0)}
                className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <Camera size={18} className="text-rose-300" />
                {copy.viewFullGallery}
                <span className="ml-1 rounded-full bg-rose-500/25 px-2.5 py-0.5 text-[11px] font-black tracking-widest text-rose-200">
                  {hospitalPhotosDisplay.length} {copy.photosCount}
                </span>
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="motion-float">
              <MissionMosaic
                photos={hospitalPhotosDisplay}
                onOpen={(idx) => openLightbox(hospitalPhotosDisplay, idx)}
                photosCountLabel={copy.photosCount}
              />
              <div className="mt-4 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                <span>{copy.tapToEnlarge}</span>
                <span>
                  {String(1).padStart(2, "0")} — {String(hospitalPhotosDisplay.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ========== STORY SECTION ========== */}
      <section className="section-shell bg-gradient-to-b from-white via-rose-50/40 to-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-4 shadow-2xl">
            <img
              src={hospitalPhotos[1].src}
              alt={t("hospital.photoLabels.hospitalNew02")}
              className="h-full max-h-[520px] w-full rounded-[1.5rem] object-contain"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-rose-200">
                HIT
              </p>
              <p className="mt-1 text-lg font-black">
                {language === "en" ? "Monthly accompaniment with hope" : "Acompañamiento mensual con esperanza"}
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-rose-700">
              <HeartPulse size={15} />
              {hospitalStory.eyebrow}
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl">
              {hospitalStory.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              {hospitalStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== INFO SECTION ========== */}
      <section className="section-shell bg-gradient-to-b from-slate-50 to-white">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-200">
                <CalendarDays size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("hospital.calendar")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {timelineCopy.calendarIntro}
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <Clock size={16} />
                {timelineCopy.monthlyVisit}
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-200">
                <HeartPulse size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("hospital.needs")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("hospital.needsText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPORTANT HOSPITAL DATES SECTION ========== */}
      <section id="fechas-hospital" className="section-shell scroll-mt-28 overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-rose-950 to-indigo-950 p-6 text-white shadow-2xl shadow-rose-950/30 sm:p-8 lg:p-10">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.05]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-rose-200 backdrop-blur">
                  <CalendarDays size={15} />
                  {timelineCopy.timelineEyebrow}
                </span>
                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  {timelineCopy.timelineTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/72">
                  {timelineCopy.timelineText}
                </p>
                <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-2xl font-black text-white shadow-lg shadow-rose-950/30">
                    {hospitalMilestones.length}
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      {timelineCopy.impactLabel}
                    </span>
                    <span className="block text-lg font-black text-white">
                      {timelineCopy.completedEvents}
                    </span>
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-rose-300/0 via-white/30 to-cyan-300/0 sm:block" />
                <div className="grid gap-5">
                  {hospitalMilestones.map((item, index) => {
                    const Icon = item.icon;
                    const date = language === "en" ? item.dateEn : item.dateEs;
                    const title = language === "en" ? item.titleEn : item.titleEs;
                    const text = language === "en" ? item.textEn : item.textEs;

                    return (
                      <article
                        key={item.dateEn}
                        className="group relative rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.12] sm:pl-16"
                      >
                        <div className={`sm:absolute sm:left-0 sm:top-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ring-4 ring-slate-950/70 transition duration-500 group-hover:scale-110`}>
                          <Icon size={22} />
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className={`rounded-full ${item.bg} px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${item.text}`}>
                              {date}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                              #{String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="mt-3 text-xl font-black text-white">
                            {title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/70">
                            {text}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER MISSIONS SECTION ========== */}
      {otherMissions.map((mission, missionIndex) => {
        const photos = (language === "en" ? mission.photosEn : mission.photos) || [];
        const isReversed = missionIndex % 2 === 1;
        const firstVisitPhotos =
          language === "en" ? cartolandiaFirstVisitPhotosEn : cartolandiaFirstVisitPhotos;

        return (
          <section
            key={mission.id}
            id={mission.id}
            className={`relative min-h-screen flex items-center scroll-mt-28 overflow-hidden bg-gradient-to-br ${mission.bgGradient}`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-transparent to-slate-900/90" />
              <div className={`absolute top-1/4 -left-20 w-96 h-96 ${mission.orbColor} rounded-full blur-3xl animate-pulse`} />
              <div className={`absolute bottom-1/4 -right-20 w-96 h-96 ${mission.orbColor} rounded-full blur-3xl animate-pulse animation-delay-2000`} />
              <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </div>

            <div className="section-shell relative w-full py-20">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                <div className={`motion-rise space-y-8 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className={`relative inline-flex rounded-full h-3 w-3 bg-${mission.accentColor}-400`} />
                      </span>
                      <Sparkles size={14} className={mission.badgeColor} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${mission.badgeColor}`}>
                      {copy.mission}
                    </span>
                  </div>

                  <h2 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                    <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
                      {language === "en" ? mission.titleEn : mission.title}
                    </span>
                  </h2>

                  <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                    {language === "en" ? mission.descriptionEn : mission.description}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {mission.stats.map((stat, index) => {
                      const statIcons = [Users, CalendarDays, Gift];
                      const StatIcon = statIcons[index] || Star;

                      return (
                        <div
                          key={stat.label}
                          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity" />
                          <div className="relative space-y-2">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-lg`}>
                              <StatIcon size={18} className="text-white" />
                            </div>
                            <p className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${mission.statColor}`}>
                              {stat.value}
                            </p>
                            <p className="text-xs font-semibold leading-5 text-white/60">
                              {language === "en" ? stat.labelEn : stat.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {photos.length > 0 && mission.id !== "cartolandia" && (
                    <button
                      type="button"
                      onClick={() => openLightbox(photos, 0)}
                      className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                    >
                      <Camera size={18} />
                      {copy.viewGallery}
                      <span className="ml-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-black tracking-widest text-white/80">
                        {photos.length} {copy.photosCount}
                      </span>
                      <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                  )}
                </div>

                <div className={`motion-float ${mission.id === "cartolandia" ? "lg:col-span-2" : ""} ${isReversed ? "lg:order-1" : ""}`}>
                  {mission.id === "cartolandia" ? (
                    <div className="space-y-14">
                      {/* Primera visita */}
                      <CartolandiaVisitBlock
                        year="2023"
                        label={language === "en" ? "First visit" : "Primera visita"}
                        title={language === "en" ? "Where it all began" : "Donde todo comenzó"}
                        description={
                          language === "en"
                            ? "The first approach to Cartolandia, where the ministry shared food, prayer, and hope with the families of the community."
                            : "El primer acercamiento a Cartolandia, donde el ministerio compartió alimento, oración y esperanza con las familias de la comunidad."
                        }
                        photos={firstVisitPhotos}
                        onOpen={(idx) => openLightbox(firstVisitPhotos, idx)}
                        accent="emerald"
                        photosCountLabel={copy.photosCount}
                      />

                      {/* Conector entre visitas */}
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-white/45 backdrop-blur">
                          <Sparkles size={12} />
                          {language === "en" ? "Two years later" : "Dos años después"}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      </div>

                      {/* Segunda visita */}
                      <CartolandiaVisitBlock
                        year="2025"
                        label={language === "en" ? "Second visit · February" : "Segunda visita · Febrero"}
                        title={language === "en" ? "The return" : "El regreso"}
                        description={
                          language === "en"
                            ? "The ministry returned to Cartolandia in February 2025, continuing the work with new families and renewed hope."
                            : "El ministerio regresó a Cartolandia en febrero de 2025, continuando la labor con nuevas familias y esperanza renovada."
                        }
                        photos={photos}
                        onOpen={(idx) => openLightbox(photos, idx)}
                        accent="teal"
                        isLast
                        photosCountLabel={copy.photosCount}
                      />
                    </div>
                  ) : photos.length > 0 ? (
                    <>
                      <MissionMosaic
                        photos={photos}
                        onOpen={(idx) => openLightbox(photos, idx)}
                        photosCountLabel={copy.photosCount}
                      />
                      <div className="mt-4 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                        <span>{copy.tapToEnlarge}</span>
                        <span>
                          {String(1).padStart(2, "0")} — {String(photos.length).padStart(2, "0")}
                        </span>
                      </div>
                    </>
                  ) : (
                    <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl hover:border-white/20 transition-all duration-500 min-h-[400px] flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-lg`}>
                          <mission.icon size={36} className="text-white" />
                        </div>
                        <p className="text-white/50 font-medium">
                          {language === "en" ? mission.placeholderEn : mission.placeholder}
                        </p>
                        <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-white/20 to-white/40" />
                      </div>
                    </figure>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
              </div>
            </div>
          </section>
        );
      })}

      {/* ========== LIGHTBOX GLOBAL ========== */}
      {lightbox && (
        <PhotoLightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onIndexChange={(i) => setLightbox((prev) => (prev ? { ...prev, index: i } : prev))}
          onClose={() => setLightbox(null)}
          closeLabel={copy.close}
        />
      )}
    </>
  );
}