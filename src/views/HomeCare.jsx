import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  MapPinned,
  PackageCheck,
  TrendingUp,
  ChevronDown,
  Heart,
  Calendar,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Quote,
} from "lucide-react";
import AutoImageCarousel from "../components/AutoImageCarousel.jsx";
import { useLanguage } from "../context/useLanguage.js";

/* ============================================================
   Catálogo de imágenes y metadatos usados por las galerías de servicio.
   Las claves permiten componer selecciones por sección sin duplicar rutas.
   ============================================================ */
const homeCarePhotos = [
  {
    key: "carTeam",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-01.png`,
  },
  {
    key: "carBags",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-02.png`,
  },
  {
    key: "pantryDisplay",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-03.png`,
  },
  {
    key: "coupleVisit",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-04.png`,
  },
  {
    key: "familySupport",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-05.png`,
  },
  {
    key: "tablePantry",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-06.png`,
  },
  {
    key: "singlePantry",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-07.png`,
  },
  {
    key: "outdoorFamily",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-08.png`,
  },
  {
    key: "twoBags",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-09.png`,
  },
  {
    key: "personalDelivery",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-10.png`,
  },
  {
    key: "elderPantry",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-11.png`,
  },
  {
    key: "homeFamily",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-11.jpeg`,
  },
  {
    key: "homeVisitElderlyWomanBag",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-01.jpeg`,
  },
  {
    key: "homeVisitFamilyKitchen",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-04.jpeg`,
  },
  {
    key: "homeVisitVolunteersBags",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-06.jpeg`,
  },
  {
    key: "homeVisitChildMilk",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-07.jpeg`,
  },
  {
    key: "homeVisitFamilyBag",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-08.jpeg`,
  },
  {
    key: "homeVisitFlorDelivery",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-09.jpeg`,
  },
  {
    key: "homeVisitPantryTable",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-10.jpeg`,
  },
  {
    key: "homeVisitDoorwayCare",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-12.jpeg`,
  },
  {
    key: "homeVisitWheelchairCare",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-13.jpeg`,
  },
];

const findPhoto = (key) => homeCarePhotos.find((p) => p.key === key);

/* ============================================================
   Selecciones derivadas por sección; cada clave se asigna a una sola colección.
   ============================================================ */
const heroPhotoKeys = [
  "homeVisitDoorwayCare",
  "homeVisitWheelchairCare",
  "homeFamily",
  "homeVisitElderlyWomanBag",
  "homeVisitChildMilk",
  "carTeam",
];

const galleryPhotoKeys = [
  "homeVisitPantryTable",
  "homeFamily",
  "homeVisitDoorwayCare",
  "homeVisitWheelchairCare",
  "homeVisitFamilyBag",
  "outdoorFamily",
];

const zonasPhotoKeys = ["homeVisitVolunteersBags"];

const homeCareTimelineIcons = [
  PackageCheck,
  Calendar,
  TrendingUp,
  MapPinned,
];

const impactPhotoKeys = ["pantryDisplay", "singlePantry"];

const activityPhotoKeys = ["twoBags", "elderPantry"];

const heroPhotos = heroPhotoKeys.map(findPhoto).filter(Boolean);
const galleryPhotos = galleryPhotoKeys.map(findPhoto).filter(Boolean);
const zonasPhotos = zonasPhotoKeys.map(findPhoto).filter(Boolean);
const impactPhotos = impactPhotoKeys.map(findPhoto).filter(Boolean);
const activityPhotos = activityPhotoKeys.map(findPhoto).filter(Boolean);

/* ============================================================
   Componentes de presentación para galerías y visor modal.
   ============================================================ */

/* --- Lightbox / visualizador grande --- */
function Lightbox({ photos, index, onClose, onPrev, onNext, getLabel }) {
  useEffect(() => {
    if (index === null) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null || !photos[index]) return null;
  const activePhoto = photos[index];
  const caption = getLabel ? getLabel(activePhoto) : "";

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-ember sm:right-6 sm:top-6"
        aria-label="Cerrar"
      >
        <X size={22} />
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 sm:left-6"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <figure
        className="relative flex h-[62vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-ink/80 shadow-2xl ring-1 ring-white/15 sm:h-[70vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activePhoto.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
        />
        <img
          src={activePhoto.src}
          alt={caption}
          className="relative z-10 h-full w-full object-contain p-2 sm:p-4"
        />
      </figure>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 sm:right-6"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">
        {index + 1} / {photos.length}
      </div>
    </div>,
    document.body
  );
}

/* --- Foto clickable con estética editorial --- */
function PhotoFrame({ photo, label, onClick, className = "", contain = false }) {
  if (!photo) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`photo-frame group text-left ${className}`}
      aria-label={label || "Ampliar imagen"}
    >
      {contain && (
        <img
          src={photo.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
        />
      )}
      <img
        src={photo.src}
        alt={label || ""}
        loading="lazy"
        className={
          contain
            ? "relative z-10 h-full w-full object-contain p-3"
            : "h-full w-full object-cover object-[center_18%]"
        }
      />
      <div className="photo-overlay z-20 opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
      {label && (
        <span className="absolute bottom-4 left-5 right-5 z-30 font-display text-sm font-medium leading-snug text-white/95 sm:text-base">
          {label}
        </span>
      )}
      <span className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-ink/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        <Camera size={17} />
      </span>
    </button>
  );
}

/* --- Grid reutilizable con lightbox --- */
function PhotoGrid({
  photos,
  getLabel,
  gridClassName = "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
  itemClassName = "h-64 sm:h-72",
  spanPattern = [],
  contain = false,
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className={gridClassName}>
        {photos.map((photo, i) => (
          <PhotoFrame
            key={photo.key}
            photo={photo}
            label={getLabel ? getLabel(photo) : ""}
            className={`${itemClassName} ${spanPattern[i] || ""}`}
            contain={contain}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>
      <Lightbox
        photos={photos}
        index={lightboxIndex}
        getLabel={getLabel}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((i) => (i > 0 ? i - 1 : photos.length - 1))
        }
        onNext={() =>
          setLightboxIndex((i) => (i < photos.length - 1 ? i + 1 : 0))
        }
      />
    </>
  );
}

/* ============================================================
   Contenido localizado complementario a las traducciones compartidas.
   ============================================================ */
const homeCarePageCopy = {
  es: {
    currentSupportAreasTitle: "Zonas que reciben apoyo hoy",
    currentSupportAreasText:
      "El servicio domiciliar acompaña a familias de estas comunidades con despensa, oración y seguimiento cercano.",
    currentSupportAreasLegend:
      "Municipios y comunidades donde actualmente se brinda apoyo domiciliar:",
    serviceCoverageEyebrow: "Cobertura del Servicio",
    historyEyebrow: "Nuestra Trayectoria",
    historyServiceTitle: "Historia del servicio domiciliar",
    historyServiceText:
      "El servicio domiciliar ha crecido paso a paso, desde las primeras familias atendidas hasta una cobertura mensual organizada en comunidades de Tlaxcala.",
    impactMetricsEyebrow: "Métricas de Impacto",
    tonsTitle: "Toneladas repartidas",
    tonsText:
      "Detrás de cada kilo de alimento hay una historia de esperanza. Cada despensa lleva consigo el mensaje: «No estás solo».",
    familiesHelped: "Familias beneficiadas",
    tonsDistributed: "Toneladas repartidas",
    activeCommunities: "Comunidades activas",
    viewCoverage: "Conoce las zonas de apoyo",
    // Galería
    galleryEyebrow: "Galería de Historias",
    galleryTitle: "El rostro de nuestra misión",
    galleryText:
      "No son solo fotografías. Son madres, abuelos, niños y familias que un día sintieron que ya no podían solos... y encontraron una mano amiga. Cada imagen captura un momento de amor que tú haces posible.",
    galleryCta: "Estas historias pueden seguir sucediendo",
    // Impacto
    impactLeadTitle: "Historias que se ven, vidas que se transforman",
    impactLeadText:
      "Cada visita, cada despensa, cada oración representa una familia que dejó de sentir que estaba sola. Estas imágenes capturan la esencia de nuestro servicio: amor que se traduce en acción.",
    // Actividades
    activityPhotosEyebrow: "Momentos del Servicio",
    activityPhotosTitle: "Así se ve el amor en acción",
    // Donación
    donateEyebrow: "Sé parte de esta historia",
    donateTitle: "Tu donación se convierte en esperanza",
    donateText:
      "Con $250 al mes, una familia en Tlaxcala recibe despensa, oración y una visita que les recuerda que no están solos. Tú puedes ser esa mano amiga que estaban esperando.",
    donateTier1Title: "Apadrina 1 familia",
    donateTier1Desc: "Despensa mensual, visita y oración para una familia.",
    donateTier2Title: "Apadrina 2 familias",
    donateTier2Desc: "Doble bendición para tu comunidad cada mes.",
    donateTier2Badge: "Más elegido",
    donateTier3Title: "Apadrina 4 familias",
    donateTier3Desc: "Transformas comunidades enteras con tu generosidad.",
    donatePerMonth: "al mes",
    donateCta: "Quiero donar ahora",
    donateTrust: "100% de tu donación llega a las familias. Cada peso cuenta.",
    donateUrgency:
      "Hay familias esperando tu ayuda este mes en 12 comunidades de Tlaxcala.",
    readMore: "Ver detalles",
    readLess: "Ocultar detalles",
    volunteering: "Ser voluntario",
    showAllCommunities: "Ver las 12 comunidades",
    showFewerCommunities: "Ver menos",
  },
  en: {
    currentSupportAreasTitle: "Where support is reaching families today",
    currentSupportAreasText:
      "The home care service accompanies families in these communities with food support, prayer, and close follow-up.",
    currentSupportAreasLegend:
      "Municipalities and communities currently receiving home care support:",
    serviceCoverageEyebrow: "Service Coverage",
    historyEyebrow: "Our Journey",
    historyServiceTitle: "Home Care Service History",
    historyServiceText:
      "Home care service has grown step by step, from the first families served to organized monthly coverage across communities in Tlaxcala.",
    impactMetricsEyebrow: "Impact Metrics",
    tonsTitle: "Tons Distributed",
    tonsText:
      "Behind every kilogram of food there is a story of hope. Every pantry carries a message: 'You are not alone.'",
    familiesHelped: "Families helped",
    tonsDistributed: "Tons distributed",
    activeCommunities: "Active communities",
    viewCoverage: "Explore current support areas",
    galleryEyebrow: "Stories Gallery",
    galleryTitle: "The face of our mission",
    galleryText:
      "These are not just photographs. They are mothers, grandparents, children, and families who one day felt they could not go on alone... and found a helping hand. Each image captures a moment of love that you make possible.",
    galleryCta: "These stories can keep happening",
    impactLeadTitle: "Stories you can see, lives being transformed",
    impactLeadText:
      "Every visit, every pantry, every prayer represents a family that stopped feeling alone. These images capture the essence of our service: love translated into action.",
    activityPhotosEyebrow: "Moments of Service",
    activityPhotosTitle: "This is what love in action looks like",
    donateEyebrow: "Be part of this story",
    donateTitle: "Your donation becomes hope",
    donateText:
      "With $250 a month, a family in Tlaxcala receives a pantry, prayer, and a visit that reminds them they are not alone. You can be the helping hand they were waiting for.",
    donateTier1Title: "Sponsor 1 family",
    donateTier1Desc: "Monthly pantry, visit, and prayer for one family.",
    donateTier2Title: "Sponsor 2 families",
    donateTier2Desc: "Double blessing for your community every month.",
    donateTier2Badge: "Most chosen",
    donateTier3Title: "Sponsor 4 families",
    donateTier3Desc: "You transform entire communities with your generosity.",
    donatePerMonth: "per month",
    donateCta: "Donate now",
    donateTrust: "100% of your donation reaches the families. Every gift counts.",
    donateUrgency:
      "Families are waiting for your help this month in 12 communities of Tlaxcala.",
    readMore: "View details",
    readLess: "Hide details",
    volunteering: "Become a volunteer",
    showAllCommunities: "See all 12 communities",
    showFewerCommunities: "Show less",
  },
};

const homeCareTimelineByLanguage = {
  es: [
    {
      period: "2021",
      title: "Comienzo del apoyo alimentario",
      text: "El servicio domiciliar inició como una respuesta directa a familias que necesitaban alimento, acompañamiento y una visita cercana.",
      details: [
        "Se comenzó con 12 beneficiarios y entregas de despensa durante los primeros meses.",
        "Cada visita buscaba conocer la situación familiar, no solo entregar productos.",
        "El programa registró 72 despensas entregadas en esta primera etapa.",
      ],
      stat: "72 despensas",
    },
    {
      period: "2022-2023",
      title: "Seguimiento y rutas de visita",
      text: "Las visitas comenzaron a organizarse con mayor constancia, permitiendo dar seguimiento a las familias y mejorar la preparación de despensas.",
      details: [
        "Se fortalecieron rutas de entrega y horarios de visita para servir con más orden.",
        "El equipo de voluntarios apoyó en separar alimentos, cargar bolsas y visitar hogares.",
        "El ministerio alcanzó 338 despensas acumuladas al cierre de este periodo.",
      ],
      stat: "338 acumuladas",
    },
    {
      period: "2024-2025",
      title: "Expansión del alcance",
      text: "El programa amplió su alcance hacia más zonas de Tlaxcala y comenzó a reflejar un crecimiento más claro en beneficiarios y alimentos entregados.",
      details: [
        "Se incrementaron las familias acompañadas y la organización de entregas mensuales.",
        "En 2025 se registró el mayor número de beneficiarios: 38 familias.",
        "Ese mismo año se entregaron 456 despensas y más de 3,285 kg de alimentos.",
      ],
      stat: "38 familias",
    },
    {
      period: "2026",
      title: "Cobertura activa en Tlaxcala",
      text: "Actualmente el servicio domiciliar funciona como un programa mensual con comunidades identificadas, seguimiento constante y apoyo alimentario organizado.",
      details: [
        "La cobertura activa conecta comunidades y municipios de Tlaxcala.",
        "Cada familia recibe despensa mensual, oración y acompañamiento según sus necesidades.",
        "El programa supera las 1,165 despensas acumuladas y mantiene la entrega mensual de alimentos.",
      ],
      stat: "Cobertura en Tlaxcala",
    },
  ],
  en: [
    {
      period: "2021",
      title: "Beginning of food support",
      text: "Home care service began as a direct response to families who needed food, accompaniment, and a personal visit.",
      details: [
        "The program began with 12 beneficiaries and pantry deliveries during the first months.",
        "Each visit sought to understand the family's situation, not only deliver products.",
        "The program recorded 72 pantry packages delivered during this first stage.",
      ],
      stat: "72 pantries",
    },
    {
      period: "2022-2023",
      title: "Follow-up and visit routes",
      text: "Visits became more consistent, making it possible to follow up with families and improve pantry preparation.",
      details: [
        "Delivery routes and visit schedules became more organized.",
        "Volunteers helped separate food, load bags, and visit homes.",
        "The ministry reached 338 cumulative pantry packages by the end of this period.",
      ],
      stat: "338 cumulative",
    },
    {
      period: "2024-2025",
      title: "Expanded reach",
      text: "The program expanded into more areas of Tlaxcala and began to show clearer growth in beneficiaries and food delivered.",
      details: [
        "The number of accompanied families and monthly delivery organization increased.",
        "In 2025, the ministry recorded its highest number of beneficiaries: 38 families.",
        "That same year, 456 pantry packages and more than 3,285 kg of food were delivered.",
      ],
      stat: "38 families",
    },
    {
      period: "2026",
      title: "Active coverage in Tlaxcala",
      text: "Today, home care operates as a monthly program with identified communities, consistent follow-up, and organized food support.",
      details: [
        "Active coverage connects communities and municipalities in Tlaxcala.",
        "Each family receives monthly pantry support, prayer, and accompaniment according to their needs.",
        "The program has surpassed 1,165 cumulative pantry packages and continues monthly food deliveries.",
      ],
      stat: "Coverage in Tlaxcala",
    },
  ],
};

const serviceCommunities = [
  "Loma Bonita, Tlax.",
  "El Sabinal, Tlax.",
  "Tlacomulco, Tlax.",
  "El Alto, Chiautempan",
  "Texcacoac, Chiautempan",
  "Contla de Juan Cuamatzi",
  "Tlaxco",
  "Tizostoc, Ixtacuixtla de Mariano Matamoros",
  "Tizatlán, Tlax.",
  "Zacatelco",
  "Texoloc",
  "San Diego Metepec, Tlax.",
];

/* Patrón equilibrado de 3 columnas para que las fotografías verticales y horizontales luzcan centradas */
const gallerySpans = [
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
  "sm:col-span-6 lg:col-span-4 h-[280px] sm:h-[320px] w-full",
];

/* ============================================================
   Vista del servicio domiciliar: cobertura, historia, resultados y actividades.
   ============================================================ */
export default function HomeCare() {
  const { dictionary, language, t } = useLanguage();
  const copy = homeCarePageCopy[language] ?? homeCarePageCopy.es;
  const homeCareTimeline =
    homeCareTimelineByLanguage[language] ?? homeCareTimelineByLanguage.es;

  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [showTimelineDetails, setShowTimelineDetails] = useState(false);
  const [showAllCommunities, setShowAllCommunities] = useState(false);

  const activeTimelineItem =
    homeCareTimeline[activeTimelineIndex] ?? homeCareTimeline[0];
  const ActiveTimelineIcon =
    homeCareTimelineIcons[activeTimelineIndex % homeCareTimelineIcons.length];
  const timelineProgress =
    ((activeTimelineIndex + 1) / homeCareTimeline.length) * 100;

  const goToPreviousTimelineItem = () => {
    setActiveTimelineIndex((current) =>
      current === 0 ? homeCareTimeline.length - 1 : current - 1
    );
  };

  const goToNextTimelineItem = () => {
    setActiveTimelineIndex((current) =>
      current === homeCareTimeline.length - 1 ? 0 : current + 1
    );
  };

  const visibleCommunities = showAllCommunities
    ? serviceCommunities
    : serviceCommunities.slice(0, 6);

  return (
    <>
      {/* ===================== HERO DIVIDIDO (ROSTROS COMPLETOS Y SIN RECORTAR) ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-blue/30 blur-3xl" />

        <div className="section-shell relative z-10 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="motion-rise">
              <span className="kicker kicker-light">
                {t("homeCare.carouselLabel")}
              </span>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {t("homeCare.title")}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("homeCare.text")}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#galeria-domiciliar" className="btn-primary">
                  {language === "en" ? "See the stories" : "Ver las historias"}
                  <ArrowRight size={17} />
                </a>
                <a href="#area-servicio-domiciliar" className="btn-ghost-light">
                  {copy.currentSupportAreasTitle}
                  <ChevronDown size={18} />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <figure className="photo-frame h-[340px] w-full ring-2 ring-white/15 sm:h-[420px] lg:h-[460px]">
                <img
                  src={
                    findPhoto("homeVisitPantryTable")?.src ??
                    `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-10.jpeg`
                  }
                  alt={t("homeCare.photoLabels.homeVisitPantryTable")}
                  className="h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-4 left-5 right-5 text-sm font-semibold text-white/95">
                  {t("homeCare.photoLabels.homeVisitPantryTable")}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Cifras esenciales del programa sobre la portada */}
          <div className="mt-14 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {[
              {
                value: "12kg",
                label: t("homeCare.activityItems.1"),
                icon: PackageCheck,
              },
              {
                value: "$250",
                label: t("homeCare.monthlyCost"),
                icon: TrendingUp,
              },
              {
                value: "1x",
                label: t("homeCare.monthlyVisit"),
                icon: Calendar,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.value} className="flex items-start gap-4">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ember/20 text-amber-300 backdrop-blur-sm">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== GALERÍA DE HISTORIAS ===================== */}
      <section
        id="galeria-domiciliar"
        className="section-shell scroll-mt-28 bg-cream"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="kicker">{copy.galleryEyebrow}</span>
              <h2 className="title-lg mt-3">{copy.galleryTitle}</h2>
              <p className="lead mt-4">{copy.galleryText}</p>

              <blockquote className="mt-6 rounded-2xl border-l-4 border-ember bg-white p-6 shadow-soft">
                <Quote size={20} className="mb-2 text-ember" />
                <p className="font-display text-xl italic leading-snug text-ink">
                  {copy.tonsText}
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-6">
              <AutoImageCarousel
                photos={heroPhotos}
                language={language}
                heightClassName="h-[320px] sm:h-[400px] lg:h-[440px]"
              />
            </div>
          </div>

          <div className="reveal mt-12">
            <PhotoGrid
              photos={galleryPhotos}
              gridClassName="grid grid-cols-1 gap-5 sm:grid-cols-12"
              itemClassName="h-[280px] sm:h-[320px]"
              spanPattern={gallerySpans}
            />
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[1.75rem] bg-sand/70 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                {copy.galleryEyebrow}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">
                {copy.galleryCta}
              </p>
            </div>
            <a href="#donar" className="btn-primary shrink-0">
              <Heart size={16} className="fill-white" />
              {copy.donateCta}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ZONAS DE APOYO ===================== */}
      <section
        id="area-servicio-domiciliar"
        className="section-shell scroll-mt-28 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="reveal lg:col-span-5">
              <span className="kicker">{copy.serviceCoverageEyebrow}</span>
              <h2 className="title-lg mt-3">{copy.currentSupportAreasTitle}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                {copy.currentSupportAreasText}
              </p>

              <div className="soft-card mt-6 flex items-center gap-5 bg-cream/60">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ember/10 text-ember">
                  <MapPinned size={26} />
                </span>
                <div>
                  <span className="block font-display text-4xl font-semibold text-ink sm:text-5xl">
                    {serviceCommunities.length}
                  </span>
                  <span className="text-sm font-medium text-slate-600">
                    {language === "en"
                      ? "active support areas"
                      : "zonas de apoyo activas"}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <PhotoGrid
                  photos={zonasPhotos}
                  gridClassName="grid grid-cols-1"
                  itemClassName="h-[280px] sm:h-[320px] w-full"
                />
              </div>
            </div>

            <div className="reveal soft-card bg-cream/50 lg:col-span-7">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                {copy.currentSupportAreasLegend}
              </p>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {visibleCommunities.map((community, index) => (
                  <div
                    key={community}
                    className="flex items-center gap-3.5 rounded-2xl border border-ink/5 bg-white px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ember/10 font-display text-sm font-semibold text-ember">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-5 text-ink">
                      {community}
                    </span>
                  </div>
                ))}
              </div>

              {serviceCommunities.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllCommunities((prev) => !prev)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ember hover:text-ember-dark"
                >
                  {showAllCommunities
                    ? copy.showFewerCommunities
                    : copy.showAllCommunities}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      showAllCommunities ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HISTORIA DEL SERVICIO DOMICILIAR ===================== */}
      <section
        id="historia-domiciliar"
        className="section-shell scroll-mt-28 bg-sand/60"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="kicker">{copy.historyEyebrow}</span>
              <h2 className="title-lg mt-3">{copy.historyServiceTitle}</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                {copy.historyServiceText}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={goToPreviousTimelineItem}
                aria-label={
                  language === "en" ? "Previous period" : "Periodo anterior"
                }
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-ember hover:text-ember"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="px-3 text-sm font-bold text-slate-500">
                {activeTimelineIndex + 1} / {homeCareTimeline.length}
              </span>
              <button
                type="button"
                onClick={goToNextTimelineItem}
                aria-label={
                  language === "en" ? "Next period" : "Siguiente periodo"
                }
                className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition hover:bg-ember"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Selector de etapas */}
          <div className="no-scrollbar mt-8 flex gap-2.5 overflow-x-auto pb-3">
            {homeCareTimeline.map((item, index) => {
              const isActive = index === activeTimelineIndex;
              return (
                <button
                  key={item.period}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTimelineIndex(index)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition ${
                    isActive
                      ? "bg-ember text-white shadow-md shadow-ember/25"
                      : "bg-white text-slate-600 hover:bg-cream hover:text-ink"
                  }`}
                >
                  {item.period} · {item.stat}
                </button>
              );
            })}
          </div>

          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-ember transition-all duration-500"
              style={{ width: `${timelineProgress}%` }}
            />
          </div>

          {/* Tarjeta principal con ícono protagonista (sin fotografías) */}
          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] p-7 text-white shadow-photo sm:min-h-[380px] sm:p-10 lg:col-span-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-ministry-teal/20 blur-3xl" />
              <ActiveTimelineIcon
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-white/[0.06] sm:h-72 sm:w-72"
              />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <span
                  key={activeTimelineIndex}
                  className="gallery-photo-enter grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-ember via-rose-500 to-amber-500 shadow-lg shadow-ember/30 sm:h-24 sm:w-24"
                >
                  <ActiveTimelineIcon size={40} strokeWidth={1.75} />
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/15 backdrop-blur">
                  {activeTimelineItem.stat}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember-light">
                  {language === "en" ? "Stage" : "Etapa"} {String(activeTimelineIndex + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-5xl font-semibold leading-none text-white sm:text-6xl">
                  {activeTimelineItem.period}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {homeCareTimeline.map((item, index) => {
                    const DotIcon =
                      homeCareTimelineIcons[index % homeCareTimelineIcons.length];
                    const isActive = index === activeTimelineIndex;
                    const isPast = index < activeTimelineIndex;
                    return (
                      <button
                        key={`dot-${item.period}`}
                        type="button"
                        onClick={() => setActiveTimelineIndex(index)}
                        aria-label={item.period}
                        title={`${item.period} · ${item.stat}`}
                        className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                          isActive
                            ? "scale-105 bg-white text-ember shadow-lg"
                            : isPast
                              ? "bg-ember/30 text-white hover:bg-ember/50"
                              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                        }`}
                      >
                        <DotIcon size={15} />
                        <span>{item.period}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="soft-card flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                    {activeTimelineItem.period}
                  </span>
                  <span className="rounded-full bg-sand px-3.5 py-1 text-xs font-bold text-ink">
                    {activeTimelineItem.stat}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {activeTimelineItem.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {activeTimelineItem.text}
                </p>

                {showTimelineDetails && (
                  <ul className="mt-5 space-y-3 border-t border-ink/5 pt-5">
                    {activeTimelineItem.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  onClick={() => setShowTimelineDetails((prev) => !prev)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark"
                >
                  {showTimelineDetails ? copy.readLess : copy.readMore}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      showTimelineDetails ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-4">
                <button
                  type="button"
                  onClick={goToPreviousTimelineItem}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-ink"
                >
                  <ChevronLeft size={16} />
                  {language === "en" ? "Previous" : "Anterior"}
                </button>
                <button
                  type="button"
                  onClick={goToNextTimelineItem}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark"
                >
                  {language === "en" ? "Next" : "Siguiente"}
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== IMPACTO / TONELADAS REPARTIDAS ===================== */}
      <section
        id="toneladas-repartidas"
        className="section-shell scroll-mt-28 bg-ink text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <span className="kicker kicker-light">
              {copy.impactMetricsEyebrow}
            </span>
            <h2 className="title-lg mt-3 text-white">{copy.tonsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              {copy.tonsText}
            </p>
          </div>

          <div className="reveal mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                value: "500+",
                label: copy.familiesHelped,
                icon: Heart,
              },
              {
                value: language === "en" ? "10 tons" : "10 toneladas",
                label: copy.tonsDistributed,
                icon: PackageCheck,
              },
              {
                value: "12",
                label: copy.activeCommunities,
                icon: MapPinned,
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20 text-ember-light">
                    <Icon size={22} />
                  </span>
                  <p className="mt-5 font-display text-5xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/75">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-12 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <PhotoGrid
                photos={impactPhotos}
                gridClassName="grid grid-cols-1 gap-5 sm:grid-cols-2"
                itemClassName="h-[280px] sm:h-[320px] w-full"
              />
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 lg:col-span-5">
              <span className="kicker kicker-light">
                {language === "en"
                  ? "Every visit matters"
                  : "Cada visita importa"}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {copy.impactLeadTitle}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/80">
                {copy.impactLeadText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ACTIVIDADES DOMICILIARES ===================== */}
      <section
        id="actividades-domiciliares"
        className="section-shell scroll-mt-28 bg-cream"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="kicker">{copy.activityPhotosEyebrow}</span>
              <h2 className="title-lg mt-3">{copy.activityPhotosTitle}</h2>

              <div className="soft-card mt-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                    <ClipboardList size={22} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {t("homeCare.activities")}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {dictionary.homeCare.activityItems.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-cream/70 p-4 text-sm leading-6 text-slate-700"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white font-display text-xs font-semibold text-ember shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal lg:col-span-6">
              <PhotoGrid
                photos={activityPhotos}
                gridClassName="grid grid-cols-1 gap-5 sm:grid-cols-2"
                itemClassName="h-[280px] sm:h-[320px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== APADRINAMIENTO Y LLAMADO EMOCIONAL FINAL ===================== */}
      <section id="donar" className="section-shell scroll-mt-28 bg-white">
        <div id="donar-form" className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="kicker">{copy.donateEyebrow}</span>
            <h2 className="title-lg mt-3">{copy.donateTitle}</h2>
            <p className="lead mt-4">{copy.donateText}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand px-5 py-2 text-sm font-semibold text-ink">
              <Heart size={15} className="fill-ember text-ember" />
              {copy.donateUrgency}
            </p>
          </div>

          <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                amount: "$250",
                title: copy.donateTier1Title,
                desc: copy.donateTier1Desc,
                highlight: false,
              },
              {
                amount: "$500",
                title: copy.donateTier2Title,
                desc: copy.donateTier2Desc,
                highlight: true,
                badge: copy.donateTier2Badge,
              },
              {
                amount: "$1,000",
                title: copy.donateTier3Title,
                desc: copy.donateTier3Desc,
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.amount}
                className={`relative flex flex-col justify-between rounded-[1.75rem] p-8 transition duration-300 hover:-translate-y-1 ${
                  tier.highlight
                    ? "bg-ink text-white shadow-photo ring-2 ring-ember"
                    : "border border-ink/10 bg-cream/60 text-ink shadow-soft"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ember px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display text-4xl font-semibold sm:text-5xl ${
                        tier.highlight ? "text-white" : "text-ink"
                      }`}
                    >
                      {tier.amount}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        tier.highlight ? "text-white/70" : "text-slate-500"
                      }`}
                    >
                      {copy.donatePerMonth}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-display text-2xl font-semibold ${
                      tier.highlight ? "text-ember-light" : "text-ink"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      tier.highlight ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {tier.desc}
                  </p>
                </div>

                <Link
                  to="/donaciones#donaciones"
                  className={
                    tier.highlight
                      ? "btn-primary mt-8 w-full"
                      : "btn-secondary mt-8 w-full"
                  }
                >
                  {copy.donateCta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs font-semibold text-slate-500">
            <ShieldCheck size={16} className="text-ember" />
            {copy.donateTrust}
          </p>
        </div>
      </section>
    </>
  );
}
