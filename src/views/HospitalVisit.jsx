import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gift,
  HandHeart,
  Heart,
  HeartPulse,
  MapPinned,
  Maximize2,
  Pause,
  Play,
  Sparkles,
  Star,
  Target,
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
    description:
      "Dos visitas que marcaron el inicio del servicio en Cartolandia: la primera en 2023 y la segunda en febrero de 2025.",
    descriptionEn:
      "Two visits that marked the beginning of service in Cartolandia: the first in 2023 and the second in February 2025.",
    stats: [
      { value: "150+", label: "Familias", labelEn: "Families" },
      { value: "2", label: "Visitas", labelEn: "Visits" },
      { value: "500kg", label: "Entregados", labelEn: "Delivered" },
    ],
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
    description:
      "Apoyo realizado en 2023 junto con Fundación Cáritas en la iglesia de San José, preparando y entregando despensas para familias de la comunidad.",
    descriptionEn:
      "Support carried out in 2023 together with Fundación Cáritas at San José Church, preparing and delivering food pantries for families in the community.",
    stats: [
      { value: "2023", label: "Año de apoyo", labelEn: "Support year" },
      { value: "Cáritas", label: "Aliado", labelEn: "Partner" },
      { value: "San José", label: "Sede", labelEn: "Host church" },
    ],
    placeholder: "[Insertar información del Día de Caridad]",
    placeholderEn: "[Insert Charity Day information]",
    photos: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-01.jpeg`, label: "Entrega de despensas durante el Día de Caridad" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-02.jpeg`, label: "Voluntarias entregando despensas a las familias" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-03.jpeg`, label: "Equipo del ministerio compartiendo apoyo alimentario" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-04.jpeg`, label: "Entrega de apoyo a una familia durante la misión" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-05.jpeg`, label: "Voluntarios sirviendo a las familias de la comunidad" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-06.jpeg`, label: "Una beneficiaria recibe una despensa" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-07.jpeg`, label: "Entrega de alimentos a las familias asistentes" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-08.jpeg`, label: "Acompañamiento y entrega de despensa durante el Día de Caridad" },
    ],
    photosEn: [
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-01.jpeg`, label: "Pantry delivery during Charity Day" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-02.jpeg`, label: "Volunteers delivering pantry packages to families" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-03.jpeg`, label: "Ministry team sharing food support" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-04.jpeg`, label: "Support delivered to a family during the mission" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-05.jpeg`, label: "Volunteers serving families in the community" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-06.jpeg`, label: "A beneficiary receiving a pantry package" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-07.jpeg`, label: "Food delivered to families attending the event" },
      { src: `${import.meta.env.BASE_URL}assets/misiones/dia-caridad-08.jpeg`, label: "Personal accompaniment and pantry delivery during Charity Day" },
    ],
  },
  {
    id: "espanita",
    title: "Asilo de San Judas",
    titleEn: "Asilo de San Judas",
    icon: Target,
    description:
      "Espacio para información de la misión en el Asilo de San Judas, necesidades y próximos pasos.",
    descriptionEn:
      "Space for Asilo de San Judas mission information, needs, and next steps.",
    stats: [
      { value: "80+", label: "Familias", labelEn: "Families" },
      { value: "1", label: "Misiones", labelEn: "Missions" },
      { value: "75kg", label: "Repartidos", labelEn: "Distributed" },
    ],
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
    readMore: "Leer historia completa",
    readLess: "Mostrar menos",
    allMilestones: "Ver todas las fechas en lista",
    missionsNavLabel: "Ir a misión",
    ctaEyebrow: "¿Cómo puedes ayudar?",
    ctaTitle: "Cada misión lleva alivio, alimento y esperanza a quien más lo necesita",
    ctaText:
      "Con tu donativo o tu servicio como voluntario, podemos seguir acompañando a niños en el Hospital Infantil y a familias vulnerables en comunidades de Tlaxcala.",
    volunteerCta: "Ser voluntario",
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
    readMore: "Read full story",
    readLess: "Show less",
    allMilestones: "View all dates as list",
    missionsNavLabel: "Jump to mission",
    ctaEyebrow: "How can you help?",
    ctaTitle: "Every mission brings relief, food, and hope to those who need it most",
    ctaText:
      "With your gift or volunteer service, we can continue accompanying children at the Children's Hospital and vulnerable families across Tlaxcala.",
    volunteerCta: "Volunteer with us",
  },
};

const hospitalTimelineCopy = {
  es: {
    calendarIntro:
      "El ministerio programa una visita mensual al hospital, coordinada con el personal del hospital y el equipo de voluntarios para llevar ánimo, oración, actividades y apoyo práctico.",
    timelineEyebrow: "Fechas importantes",
    timelineTitle: "Momentos que han llevado alegría y apoyo al Hospital Infantil",
    timelineText:
      "Estos hitos documentan entregas, eventos y actividades que fortalecen el acompañamiento a niños con hemodiálisis, diálisis y sus familias.",
    completedEvents: "acciones realizadas",
    impactLabel: "Apoyo directo",
    monthlyVisit: "Visita mensual",
  },
  en: {
    calendarIntro:
      "The ministry plans one hospital visit each month, coordinated with the hospital and the volunteer team to bring encouragement, prayer, activities, and practical support.",
    timelineEyebrow: "Important dates",
    timelineTitle: "Moments that brought joy and support to the Children's Hospital",
    timelineText:
      "These milestones document deliveries, events, and activities that strengthen support for children receiving hemodialysis, dialysis, and their families.",
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
    textEs:
      "El ministerio recibió una nueva llamada para acompañar a niños vulnerables y sus familias en el área de nefrología del Hospital Infantil de Tlaxcala.",
    textEn:
      "The ministry received a new calling to accompany vulnerable children and their families in the nephrology area of the Children's Hospital of Tlaxcala.",
    icon: Star,
    photoIndex: 0,
  },
  {
    dateEs: "27 de febrero",
    dateEn: "February 27",
    titleEs: "Primera visita a niños de nefrología",
    titleEn: "First visit with nephrology children",
    textEs:
      "El ministerio sirvió por primera vez a niños con insuficiencia renal, compartió el plan de salvación con sus familias y entregó kits de aseo personal con una reflexión bíblica.",
    textEn:
      "The ministry served children with kidney failure for the first time, shared the plan of salvation with their families, and delivered hygiene kits with a Bible reflection.",
    icon: Gift,
    photoIndex: 2,
  },
  {
    dateEs: "13 de marzo",
    dateEn: "March 13",
    titleEs: "Participación en la kermés del hospital",
    titleEn: "Participation in the hospital kermes",
    textEs:
      "El ministerio asistió a la kermés organizada en el hospital, acompañando a las familias y sumándose a la actividad comunitaria.",
    textEn:
      "The ministry attended the kermes organized at the hospital, accompanying families and joining the community activity.",
    icon: HandHeart,
    photoIndex: 8,
  },
  {
    dateEs: "22 de marzo",
    dateEn: "March 22",
    titleEs: "Kermés de Trumpet Call Ministries",
    titleEn: "Trumpet Call Ministries kermes",
    textEs:
      "Trumpet Call Ministries realizó una kermés para recaudar apoyo y destinarlo a los niños del Hospital Infantil de Tlaxcala.",
    textEn:
      "Trumpet Call Ministries held a kermes to raise support for the children at the Children's Hospital of Tlaxcala.",
    icon: Sparkles,
    photoIndex: 14,
  },
  {
    dateEs: "30 de abril",
    dateEn: "April 30",
    titleEs: "Evento por el Día del Niño",
    titleEn: "Children's Day event",
    textEs:
      "El ministerio realizó un pequeño evento por el Día del Niño, creando un espacio de alegría, juego y ánimo para los pacientes.",
    textEn:
      "The ministry held a small Children's Day event, creating a space of joy, play, and encouragement for the patients.",
    icon: Heart,
    photoIndex: 16,
  },
  {
    dateEs: "29 de mayo",
    dateEn: "May 29",
    titleEs: "Pijamas especiales, chanclas y cintas para catéter",
    titleEn: "Special pajamas, sandals, and catheter bands",
    textEs:
      "Se repartieron pijamas especiales que cubren el cuerpo sin necesidad de quitar toda la ropa, permitiendo descubrir solo la zona del catéter; también se entregaron chanclas y cintas para sostener el catéter.",
    textEn:
      "Special pajamas were distributed to cover the body without needing to remove all clothing, allowing only the catheter area to be uncovered; sandals and bands to hold the catheter were also delivered.",
    icon: HeartPulse,
    photoIndex: 4,
  },
  {
    dateEs: "2027",
    dateEn: "2027",
    titleEs: "Meta: alcanzar a más de 100 familias",
    titleEn: "Goal: reach more than 100 families",
    textEs:
      "Con nuevos donadores y voluntarios, el ministerio desea alcanzar a más de 100 familias y continuar compartiendo el amor de Cristo con quienes más lo necesitan.",
    textEn:
      "With new donors and volunteers, the ministry hopes to reach more than 100 families and continue sharing Christ's love with those who need it most.",
    icon: Target,
    photoIndex: 20,
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
      className="fixed inset-0 flex flex-col bg-ink/95 backdrop-blur-md"
      style={{ zIndex: 2147483647 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-2xl transition hover:scale-105 hover:bg-ember hover:text-white sm:right-6 sm:top-6"
        aria-label={closeLabel}
      >
        <X size={22} strokeWidth={2.5} />
      </button>

      <span className="absolute left-4 top-4 z-50 rounded-full border border-white/20 bg-ink/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur sm:left-6 sm:top-6">
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
          className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:left-6 sm:h-14 sm:w-14"
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
          className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:right-6 sm:h-14 sm:w-14"
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
            className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
          />
        </figure>
      </div>

      <div
        className="relative z-20 border-t border-white/10 bg-ink/90 px-4 py-3 backdrop-blur sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-3 text-center font-display text-sm font-medium text-white sm:text-base">
          {photo.label}
        </p>

        <div className="no-scrollbar flex justify-center gap-2 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={p.src + i}
              type="button"
              onClick={() => onIndexChange(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-16 sm:w-16 ${
                i === index
                  ? "border-ember shadow-lg"
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
   InteractiveGallery — galería fotográfica limpia y cálida
   ============================================================ */
function InteractiveGallery({
  photos,
  onOpen,
  photosCountLabel = "fotos",
  language = "es",
}) {
  const safePhotos = photos || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const isEnglish = language === "en";

  useEffect(() => {
    if (safePhotos.length <= 1 || isHovered || isPausedByUser) return undefined;
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safePhotos.length);
    }, 5200);
    return () => window.clearInterval(intervalId);
  }, [safePhotos.length, isHovered, isPausedByUser]);

  useEffect(() => {
    setActiveIndex(0);
  }, [safePhotos.length]);

  if (safePhotos.length === 0) return null;

  const activePhoto = safePhotos[activeIndex] || safePhotos[0];
  const visibleCount = Math.min(5, safePhotos.length);
  const thumbnailIndices = Array.from({ length: visibleCount }, (_, offset) =>
    (activeIndex + offset - Math.floor(visibleCount / 2) + safePhotos.length) % safePhotos.length
  );
  const progress = ((activeIndex + 1) / safePhotos.length) * 100;

  const goTo = (index) => setActiveIndex((index + safePhotos.length) % safePhotos.length);
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div
      className="group/gallery w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-ink shadow-photo sm:aspect-[16/11]">
        <img
          src={activePhoto.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
        />
        <button
          type="button"
          onClick={() => onOpen(activeIndex)}
          className="absolute inset-0 z-10 block h-full w-full cursor-zoom-in text-left"
          aria-label={
            isEnglish
              ? `Open photo ${activeIndex + 1} in full-screen gallery`
              : `Abrir foto ${activeIndex + 1} en la galería ampliada`
          }
        >
          <img
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.label || ""}
            loading="lazy"
            className="gallery-photo-enter h-full w-full object-contain p-2 sm:p-4"
          />
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-ink/90 to-transparent" />

        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-ink/75 px-3.5 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur-md">
          <Camera size={14} className="text-ember-light" />
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(safePhotos.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(activeIndex)}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/75 text-white backdrop-blur-md transition hover:scale-105 hover:bg-ember"
          aria-label={isEnglish ? "Enlarge photo" : "Ampliar fotografía"}
          title={isEnglish ? "Enlarge photo" : "Ampliar fotografía"}
        >
          <Maximize2 size={17} />
        </button>

        {safePhotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md transition hover:scale-105 hover:bg-ember hover:text-white sm:left-4 sm:h-11 sm:w-11"
              aria-label={isEnglish ? "Previous photo" : "Foto anterior"}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md transition hover:scale-105 hover:bg-ember hover:text-white sm:right-4 sm:h-11 sm:w-11"
              aria-label={isEnglish ? "Next photo" : "Foto siguiente"}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="font-display text-lg font-medium leading-snug text-white drop-shadow sm:text-2xl">
            {activePhoto.label || (isEnglish ? `Photo ${activeIndex + 1}` : `Foto ${activeIndex + 1}`)}
          </p>
          <p className="mt-1 text-xs font-medium text-white/75">
            {isEnglish ? "Click photo to view full screen" : "Haz clic en la foto para ampliar"}
          </p>
        </div>
      </div>

      {/* Controles y miniaturas */}
      <div className="mt-4 rounded-2xl border border-ink/5 bg-white p-4 shadow-soft">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {safePhotos.length} {photosCountLabel}
          </span>

          <div className="flex items-center gap-2">
            {safePhotos.length > 1 && (
              <button
                type="button"
                onClick={() => setIsPausedByUser((paused) => !paused)}
                className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink transition hover:bg-sand"
                aria-pressed={isPausedByUser}
              >
                {isPausedByUser ? <Play size={12} /> : <Pause size={12} />}
                <span>
                  {isPausedByUser
                    ? isEnglish
                      ? "Play"
                      : "Reanudar"
                    : isEnglish
                      ? "Pause"
                      : "Pausar"}
                </span>
              </button>
            )}
            <button
              type="button"
              onClick={() => onOpen(activeIndex)}
              className="inline-flex items-center gap-1.5 rounded-full bg-ember/10 px-3.5 py-1.5 text-xs font-bold text-ember transition hover:bg-ember hover:text-white"
            >
              <Maximize2 size={12} />
              <span>{isEnglish ? "Full gallery" : "Ver todas"}</span>
            </button>
          </div>
        </div>

        <div className="mb-3 h-1 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-ember transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {safePhotos.length > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            {thumbnailIndices.map((photoIndex, offset) => {
              const photo = safePhotos[photoIndex];
              const isActive = photoIndex === activeIndex;
              const hideOnSmallScreen = visibleCount === 5 && (offset === 0 || offset === 4);
              return (
                <button
                  key={`${photo.src}-${photoIndex}-${offset}`}
                  type="button"
                  onClick={() => goTo(photoIndex)}
                  className={`${
                    hideOnSmallScreen ? "hidden sm:block" : "block"
                  } relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    isActive
                      ? "scale-105 border-ember opacity-100 shadow-sm"
                      : "border-transparent opacity-55 hover:opacity-95"
                  }`}
                  aria-label={isEnglish ? `Go to photo ${photoIndex + 1}` : `Ir a la foto ${photoIndex + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <img src={photo.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   CartolandiaGallery — selector entre Primera (2023) y Segunda Visita (2025)
   ============================================================ */
function CartolandiaGallery({
  firstVisitPhotos,
  secondVisitPhotos,
  onOpenFirst,
  onOpenSecond,
  photosCountLabel = "fotos",
  language = "es",
}) {
  const [selectedVisit, setSelectedVisit] = useState("2023");
  const isEnglish = language === "en";
  const isFirstVisit = selectedVisit === "2023";
  const photos = isFirstVisit ? firstVisitPhotos : secondVisitPhotos;
  const visitLabel = isFirstVisit
    ? isEnglish
      ? "First visit · 2023"
      : "Primera visita · 2023"
    : isEnglish
      ? "Second visit · February 2025"
      : "Segunda visita · febrero de 2025";
  const visitDescription = isFirstVisit
    ? isEnglish
      ? "The first visit, sharing food, prayer, and hope with families in the community."
      : "El primer acercamiento, compartiendo alimento, oración y esperanza con las familias de la comunidad."
    : isEnglish
      ? "A return to continue the work and accompany more families."
      : "Una nueva visita para continuar la labor y acompañar a más familias.";

  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-soft">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember">{visitLabel}</p>
          <p className="mt-1 text-sm text-slate-600">{visitDescription}</p>
        </div>

        <div
          className="inline-flex shrink-0 rounded-full bg-cream p-1"
          role="group"
          aria-label={isEnglish ? "Choose Cartolandia visit" : "Elegir visita a Cartolandia"}
        >
          <button
            type="button"
            onClick={() => setSelectedVisit("2023")}
            aria-pressed={isFirstVisit}
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              isFirstVisit ? "bg-ink text-white shadow-sm" : "text-slate-600 hover:text-ink"
            }`}
          >
            2023 ({firstVisitPhotos.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedVisit("2025")}
            aria-pressed={!isFirstVisit}
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              !isFirstVisit ? "bg-ink text-white shadow-sm" : "text-slate-600 hover:text-ink"
            }`}
          >
            2025 ({secondVisitPhotos.length})
          </button>
        </div>
      </div>

      <InteractiveGallery
        photos={photos}
        onOpen={(index) => (isFirstVisit ? onOpenFirst(index) : onOpenSecond(index))}
        photosCountLabel={photosCountLabel}
        language={language}
      />
    </div>
  );
}

/* ============================================================
   HospitalVisit — página principal de Misiones y Hospital Infantil
   ============================================================ */
export default function HospitalVisit() {
  const { dictionary, language, t } = useLanguage();
  const copy = hospitalPageCopy[language] ?? hospitalPageCopy.es;
  const timelineCopy = hospitalTimelineCopy[language] ?? hospitalTimelineCopy.es;
  const hospitalStory = hospitalStoryByLanguage[language] ?? hospitalStoryByLanguage.es;

  const [lightbox, setLightbox] = useState(null);
  const [showFullStory, setShowFullStory] = useState(false);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  const openLightbox = (photos, index = 0) => setLightbox({ photos, index });

  const hospitalPhotosDisplay = hospitalPhotos.map((p) => ({
    src: p.src,
    label: t(`hospital.photoLabels.${p.key}`),
  }));

  const activeMilestone = hospitalMilestones[activeMilestoneIndex] ?? hospitalMilestones[0];
  const ActiveMilestoneIcon = activeMilestone.icon;
  const activeMilestonePhoto =
    hospitalPhotosDisplay[activeMilestone.photoIndex] ?? hospitalPhotosDisplay[0];
  const milestoneProgress = ((activeMilestoneIndex + 1) / hospitalMilestones.length) * 100;

  const goPrevMilestone = () =>
    setActiveMilestoneIndex((curr) =>
      curr === 0 ? hospitalMilestones.length - 1 : curr - 1
    );
  const goNextMilestone = () =>
    setActiveMilestoneIndex((curr) =>
      curr === hospitalMilestones.length - 1 ? 0 : curr + 1
    );

  return (
    <>
      {/* ========== HERO DIVIDIDO (ROSTROS COMPLETOS Y SIN CORTAR) ========== */}
      <section
        id="hospital-infantil-tlaxcala"
        className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white scroll-mt-28"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-blue/30 blur-3xl" />

        <div className="section-shell relative z-10 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="motion-rise">
              <span className="kicker kicker-light">{t("hospital.carouselLabel")}</span>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {language === "en"
                  ? `Children's Hospital of Tlaxcala (${t("hospital.title")})`
                  : `Hospital Infantil de Tlaxcala (${t("hospital.title")})`}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("hospital.text")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openLightbox(hospitalPhotosDisplay, 0)}
                  className="btn-primary"
                >
                  <Camera size={17} />
                  {copy.viewFullGallery} ({hospitalPhotosDisplay.length} {copy.photosCount})
                </button>
                <a href="#fechas-hospital" className="btn-ghost-light">
                  <CalendarDays size={17} />
                  {timelineCopy.timelineEyebrow}
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <figure className="photo-frame aspect-[3/4] max-h-[540px] w-full ring-2 ring-white/15">
                <img
                  src={hospitalPhotos[5].src}
                  alt={t("hospital.photoLabels.hospitalNew06")}
                  className="h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white/95">
                  {t("hospital.photoLabels.hospitalNew06")}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Estadísticas clave del Hospital Infantil + navegación rápida a misiones */}
          <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid gap-6 sm:grid-cols-3">
              {dictionary.hospital.stats.map((item) => (
                <div key={item.value} className="space-y-1">
                  <p className="font-display text-3xl font-semibold text-amber-300 sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="text-sm leading-6 text-white/80">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                {copy.missionsNavLabel}:
              </span>
              {otherMissions.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition hover:border-ember hover:bg-ember hover:text-white"
                >
                  {language === "en" ? m.titleEn : m.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HISTORIA, GALERÍA Y NECESIDADES DEL HOSPITAL ========== */}
      <section className="section-shell bg-cream">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Galería interactiva protagonista */}
          <div className="reveal lg:col-span-7">
            <InteractiveGallery
              photos={hospitalPhotosDisplay}
              onOpen={(idx) => openLightbox(hospitalPhotosDisplay, idx)}
              photosCountLabel={copy.photosCount}
              language={language}
            />
          </div>

          {/* Historia con divulgación progresiva */}
          <div className="reveal space-y-6 lg:col-span-5">
            <span className="kicker">{hospitalStory.eyebrow}</span>
            <h2 className="title-lg">{hospitalStory.title}</h2>

            <p className="text-base leading-8 text-slate-600">
              {hospitalStory.paragraphs[0]}
            </p>

            {showFullStory && (
              <div className="space-y-4 border-t border-ink/10 pt-4 text-base leading-8 text-slate-600">
                {hospitalStory.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowFullStory((prev) => !prev)}
              className="inline-flex items-center gap-2 text-sm font-bold text-ember hover:text-ember-dark"
            >
              <span>{showFullStory ? copy.readLess : copy.readMore}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${showFullStory ? "rotate-180" : ""}`}
              />
            </button>

            {/* Tarjetas limpias de Calendario y Necesidades Específicas */}
            <div className="grid gap-4 pt-2">
              <article className="soft-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                    <CalendarDays size={20} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {t("hospital.calendar")}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-0.5 text-xs font-bold text-ember">
                        <Clock size={12} />
                        {timelineCopy.monthlyVisit}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {timelineCopy.calendarIntro}
                    </p>
                  </div>
                </div>
              </article>

              <article className="soft-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                    <HeartPulse size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {t("hospital.needs")}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {t("hospital.needsText")}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FECHAS IMPORTANTES DEL HOSPITAL (LÍNEA DEL TIEMPO INTERACTIVA) ========== */}
      <section id="fechas-hospital" className="section-shell scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="kicker">{timelineCopy.timelineEyebrow}</span>
              <h2 className="title-lg mt-3">{timelineCopy.timelineTitle}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {timelineCopy.timelineText}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-cream px-4 py-2.5">
                <span className="font-display text-3xl font-semibold text-ember">
                  {hospitalMilestones.length}
                </span>
                <div className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {timelineCopy.impactLabel}
                  </span>
                  <span className="block text-xs font-bold text-ink">
                    {timelineCopy.completedEvents}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevMilestone}
                  aria-label={language === "en" ? "Previous milestone" : "Fecha anterior"}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-ember hover:text-ember"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="px-2 text-sm font-bold text-slate-500">
                  {activeMilestoneIndex + 1} / {hospitalMilestones.length}
                </span>
                <button
                  type="button"
                  onClick={goNextMilestone}
                  aria-label={language === "en" ? "Next milestone" : "Siguiente fecha"}
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition hover:bg-ember"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Selector horizontal de fechas */}
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-3">
            {hospitalMilestones.map((item, index) => {
              const isActive = index === activeMilestoneIndex;
              const dateLabel = language === "en" ? item.dateEn : item.dateEs;
              return (
                <button
                  key={item.dateEn}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveMilestoneIndex(index)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                    isActive
                      ? "bg-ember text-white shadow-md shadow-ember/25"
                      : "bg-cream text-slate-600 hover:bg-sand hover:text-ink"
                  }`}
                >
                  {dateLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-ember transition-all duration-500"
              style={{ width: `${milestoneProgress}%` }}
            />
          </div>

          {/* Hito activo con fotografía protagonista completa */}
          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
            <figure
              onClick={() =>
                openLightbox(hospitalPhotosDisplay, activeMilestone.photoIndex)
              }
              className="group relative min-h-[340px] cursor-zoom-in overflow-hidden rounded-[1.75rem] bg-ink shadow-photo sm:min-h-[420px] lg:col-span-7"
            >
              <img
                src={activeMilestonePhoto.src}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
              />
              <img
                key={activeMilestonePhoto.src}
                src={activeMilestonePhoto.src}
                alt={activeMilestonePhoto.label}
                className="gallery-photo-enter relative z-10 h-full w-full object-contain p-3 sm:p-5"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-ink/90 to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 z-30 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-ink shadow">
                  {language === "en" ? activeMilestone.dateEn : activeMilestone.dateEs}
                </span>
                <span className="font-sans text-xs font-medium text-white/90">
                  {activeMilestonePhoto.label}
                </span>
              </figcaption>
            </figure>

            <div className="soft-card flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                    <ActiveMilestoneIcon size={22} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    #{String(activeMilestoneIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-ember">
                  {language === "en" ? activeMilestone.dateEn : activeMilestone.dateEs}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {language === "en" ? activeMilestone.titleEn : activeMilestone.titleEs}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {language === "en" ? activeMilestone.textEn : activeMilestone.textEs}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-4">
                <button
                  type="button"
                  onClick={goPrevMilestone}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-ink"
                >
                  <ChevronLeft size={16} />
                  {language === "en" ? "Previous" : "Anterior"}
                </button>
                <button
                  type="button"
                  onClick={goNextMilestone}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark"
                >
                  {language === "en" ? "Next" : "Siguiente"}
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Vista desplegable con las 7 fechas completas para consulta rápida */}
          <details className="group mt-6 rounded-2xl border border-ink/5 bg-cream p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-ink">
              <span>
                {copy.allMilestones} ({hospitalMilestones.length})
              </span>
              <ChevronDown
                size={18}
                className="text-ember transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="mt-5 grid gap-4 border-t border-ink/10 pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {hospitalMilestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.dateEn}
                    type="button"
                    onClick={() => setActiveMilestoneIndex(idx)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      idx === activeMilestoneIndex
                        ? "border-ember bg-white shadow-soft"
                        : "border-ink/5 bg-white/70 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-ember">
                        {language === "en" ? item.dateEn : item.dateEs}
                      </span>
                      <Icon size={16} className="text-slate-400" />
                    </div>
                    <h4 className="mt-1.5 font-display text-lg font-semibold text-ink">
                      {language === "en" ? item.titleEn : item.titleEs}
                    </h4>
                    <p className="mt-1.5 text-xs leading-6 text-slate-600">
                      {language === "en" ? item.textEn : item.textEs}
                    </p>
                  </button>
                );
              })}
            </div>
          </details>
        </div>
      </section>

      {/* ========== OTRAS MISIONES (CARTOLANDIA, DÍA DE CARIDAD, ASILO DE SAN JUDAS) ========== */}
      {otherMissions.map((mission, missionIndex) => {
        const photos = (language === "en" ? mission.photosEn : mission.photos) || [];
        const isReversed = missionIndex % 2 === 1;
        const firstVisitPhotos =
          language === "en" ? cartolandiaFirstVisitPhotosEn : cartolandiaFirstVisitPhotos;
        const sectionBgs = ["bg-sand/60", "bg-cream", "bg-white"];
        const sectionBg = sectionBgs[missionIndex % sectionBgs.length];
        const MissionIcon = mission.icon;

        return (
          <section
            key={mission.id}
            id={mission.id}
            className={`section-shell scroll-mt-28 ${sectionBg}`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Columna de información e impacto */}
                <div
                  className={`reveal space-y-6 lg:col-span-5 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <span className="kicker">
                    <MissionIcon size={14} />
                    {copy.mission}
                  </span>

                  <h2 className="title-lg">
                    {language === "en" ? mission.titleEn : mission.title}
                  </h2>

                  <p className="lead">
                    {language === "en" ? mission.descriptionEn : mission.description}
                  </p>

                  {/* Cifras de impacto en font-display */}
                  <div className="grid grid-cols-3 gap-4 border-y border-ink/10 py-6">
                    {mission.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                          {language === "en" ? stat.labelEn : stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {photos.length > 0 && mission.id !== "cartolandia" && (
                    <button
                      type="button"
                      onClick={() => openLightbox(photos, 0)}
                      className="btn-secondary"
                    >
                      <Camera size={17} className="text-ember" />
                      {copy.viewGallery} ({photos.length} {copy.photosCount})
                    </button>
                  )}
                </div>

                {/* Columna fotográfica protagonista */}
                <div
                  className={`reveal lg:col-span-7 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  {mission.id === "cartolandia" ? (
                    <CartolandiaGallery
                      firstVisitPhotos={firstVisitPhotos}
                      secondVisitPhotos={photos}
                      onOpenFirst={(idx) => openLightbox(firstVisitPhotos, idx)}
                      onOpenSecond={(idx) => openLightbox(photos, idx)}
                      photosCountLabel={copy.photosCount}
                      language={language}
                    />
                  ) : photos.length > 0 ? (
                    <InteractiveGallery
                      photos={photos}
                      onOpen={(idx) => openLightbox(photos, idx)}
                      photosCountLabel={copy.photosCount}
                      language={language}
                    />
                  ) : (
                    <figure className="soft-card flex min-h-[320px] flex-col items-center justify-center text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                        <MissionIcon size={32} />
                      </span>
                      <p className="mt-4 text-sm font-medium text-slate-500">
                        {language === "en" ? mission.placeholderEn : mission.placeholder}
                      </p>
                    </figure>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ========== LLAMADO EMOCIONAL FINAL (SIN IMAGEN CORTADA Y SIN REPETIR "DONAR AHORA") ========== */}
      <section className="section-shell bg-cream">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#0D2B52] to-ink text-white shadow-photo">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div>
              <span className="kicker kicker-light">{copy.ctaEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {copy.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                {copy.ctaText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/voluntarios" className="btn-primary">
                  {copy.volunteerCta}
                  <ArrowRight size={16} />
                </Link>
                <Link to="/servicio-domiciliar" className="btn-ghost-light">
                  {language === "en" ? "Explore Home Care" : "Conocer Servicio Domiciliar"}
                </Link>
              </div>
            </div>

            <figure className="photo-frame aspect-[4/3] ring-2 ring-white/15">
              <img
                src={`${import.meta.env.BASE_URL}assets/misiones/dia-caridad-caritas-03.jpeg`}
                alt={copy.ctaTitle}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>
        </div>
      </section>

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
