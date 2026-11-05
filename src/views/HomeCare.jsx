import { useEffect, useState } from "react";
import {
  BookOpen,
  ClipboardList,
  MapPinned,
  PackageCheck,
  TrendingUp,
  ChevronDown,
  Heart,
  Home,
  Calendar,
  Camera,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Gift,
} from "lucide-react";
import AutoImageCarousel from "../components/AutoImageCarousel.jsx";
import { useLanguage } from "../context/useLanguage.js";

/* ============================================================
   BASE DE DATOS DE FOTOS
   Agrega aquí las nuevas imágenes que vayas sumando.
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
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-12.png`,
  },
  {
    key: "homeVisitElderlyWomanBag",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-01.jpeg`,
  },
  {
    key: "homeVisitTableSupport",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-02.jpeg`,
  },
  {
    key: "homeVisitConversation",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-03.jpeg`,
  },
  {
    key: "homeVisitFamilyKitchen",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-04.jpeg`,
  },
  {
    key: "homeVisitPrayerCare",
    src: `${import.meta.env.BASE_URL}assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-05.jpeg`,
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
];

const findPhoto = (key) => homeCarePhotos.find((p) => p.key === key);

/* ============================================================
   DISTRIBUCIÓN ÚNICA POR SECCIÓN (sin repetir fotos)
   ============================================================ */
const heroPhotoKeys = [
  "homeVisitElderlyWomanBag",
  "homeVisitPrayerCare",
  "familySupport",
  "homeVisitChildMilk",
  "carTeam",
  "coupleVisit",
];

const galleryPhotoKeys = [
  "homeVisitConversation",
  "personalDelivery",
  "tablePantry",
  "homeVisitFamilyBag",
  "outdoorFamily",
  "homeVisitFlorDelivery",
];

const zonasPhotoKeys = ["homeVisitVolunteersBags"];

// 1 foto por período (4 períodos), todas únicas
const timelinePhotoKeys = [
  "carBags",
  "homeVisitTableSupport",
  "homeVisitFamilyKitchen",
  "homeFamily",
];

const impactPhotoKeys = ["pantryDisplay", "singlePantry"];

const activityPhotoKeys = ["twoBags", "elderPantry"];

const heroPhotos = heroPhotoKeys.map(findPhoto).filter(Boolean);
const galleryPhotos = galleryPhotoKeys.map(findPhoto).filter(Boolean);
const zonasPhotos = zonasPhotoKeys.map(findPhoto).filter(Boolean);
const timelinePhotos = timelinePhotoKeys.map(findPhoto).filter(Boolean);
const impactPhotos = impactPhotoKeys.map(findPhoto).filter(Boolean);
const activityPhotos = activityPhotoKeys.map(findPhoto).filter(Boolean);

/* ============================================================
   COMPONENTES
   ============================================================ */

/* --- Lightbox / visualizador grande --- */
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
        aria-label="Cerrar"
      >
        <X size={22} />
      </button>

      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-4"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <img
        src={photos[index].src}
        alt=""
        className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-4"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}

/* --- Foto clickable sin descripción --- */
function PhotoFrame({ photo, onClick, className = "" }) {
  if (!photo) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition-shadow hover:shadow-2xl ${className}`}
      aria-label="Ampliar imagen"
    >
      <img
        src={photo.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md">
          <Camera size={20} />
        </span>
      </div>
    </button>
  );
}

/* --- Placeholder para imágenes futuras --- */
function PhotoPlaceholder({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white ${className}`}
    >
      <Camera size={22} className="text-slate-300" />
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
        Próximamente
      </span>
    </div>
  );
}

/* --- Grid reutilizable: fotos + placeholders + lightbox --- */
function PhotoGrid({
  photos,
  gridClassName = "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4",
  itemClassName = "h-44 sm:h-56",
  spanPattern = [],
  placeholderCount = 0,
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className={gridClassName}>
        {photos.map((photo, i) => (
          <PhotoFrame
            key={photo.key}
            photo={photo}
            className={`${itemClassName} ${spanPattern[i] || ""}`}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <PhotoPlaceholder
            key={`ph-${i}`}
            className={`${itemClassName} ${spanPattern[photos.length + i] || ""}`}
          />
        ))}
      </div>
      <Lightbox
        photos={photos}
        index={lightboxIndex}
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
   COPY
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

/* Span patterns para mosaico (12 items = 6 fotos + 6 placeholders) */
const gallerySpans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

/* ============================================================
   PÁGINA
   ============================================================ */
export default function HomeCare() {
  const { dictionary, language, t } = useLanguage();
  const copy = homeCarePageCopy[language] ?? homeCarePageCopy.es;
  const homeCareTimeline =
    homeCareTimelineByLanguage[language] ?? homeCareTimelineByLanguage.es;

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950">
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/servicio-domiciliar/domiciliar-01.png`}
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/80 to-violet-950/90" />
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="section-shell relative w-full">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="motion-rise space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  <Camera size={14} className="text-emerald-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  {t("homeCare.carouselLabel")}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-emerald-100 bg-clip-text text-transparent">
                  {t("homeCare.title")}
                </span>
              </h1>

              <p className="max-w-2xl text-lg font-light leading-relaxed text-white/70">
                {t("homeCare.text")}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    value: "12kg",
                    label: t("homeCare.activityItems.1"),
                    icon: PackageCheck,
                    color: "from-emerald-400 to-teal-500",
                  },
                  {
                    value: "$250",
                    label: t("homeCare.monthlyCost"),
                    icon: TrendingUp,
                    color: "from-blue-400 to-indigo-500",
                  },
                  {
                    value: "1x",
                    label: t("homeCare.monthlyVisit"),
                    icon: Calendar,
                    color: "from-violet-400 to-purple-500",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="relative space-y-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}
                      >
                        <item.icon size={18} className="text-white" />
                      </div>
                      <p className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-3xl font-black text-transparent">
                        {item.value}
                      </p>
                      <p className="text-xs font-semibold leading-5 text-white/60">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#galeria-domiciliar"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {language === "en" ? "See the stories" : "Ver las historias"}
                <ChevronDown
                  size={18}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Carrusel (sin descripciones visibles) */}
            <AutoImageCarousel
              className="motion-float"
              photos={heroPhotos}
              getLabel={() => ""}
              language={language}
              heightClassName="h-[420px] sm:h-[540px] lg:h-[660px]"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ===================== GALERÍA DE HISTORIAS ===================== */}
      <section
        id="galeria-domiciliar"
        className="section-shell scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
              <Images size={14} />
              {copy.galleryEyebrow}
            </span>
            <h2 className="mb-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.galleryTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
              {copy.galleryText}
            </p>
          </div>

          <PhotoGrid
            photos={galleryPhotos}
            gridClassName="grid grid-cols-2 gap-3 auto-rows-[160px] sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4"
            itemClassName=""
            spanPattern={gallerySpans}
            placeholderCount={6}
          />

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-emerald-400">
              {copy.galleryCta}
            </p>
            <a
              href="#donar"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-500/50"
            >
              <Heart size={16} className="fill-white" />
              {copy.donateCta}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ZONAS ===================== */}
      <section
        id="area-servicio-domiciliar"
        className="section-shell scroll-mt-28 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
                <MapPinned size={15} />
                {copy.serviceCoverageEyebrow}
              </span>
              <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                {copy.currentSupportAreasTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                {copy.currentSupportAreasText}
              </p>
              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-900/5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                  <MapPinned size={25} />
                </span>
                <span>
                  <span className="block text-3xl font-black text-slate-900">
                    {serviceCommunities.length}
                  </span>
                  <span className="text-sm font-bold text-slate-500">
                    {language === "en"
                      ? "active support areas"
                      : "zonas de apoyo activas"}
                  </span>
                </span>
              </div>

              <PhotoGrid
                photos={zonasPhotos}
                gridClassName="mt-5 grid grid-cols-2 gap-3"
                itemClassName="h-40 sm:h-48"
                placeholderCount={1}
              />
            </div>

            <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl shadow-emerald-900/10 backdrop-blur sm:p-8">
              <p className="mb-5 text-sm font-bold leading-6 text-slate-500 sm:text-base">
                {copy.currentSupportAreasLegend}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {serviceCommunities.map((community, index) => (
                  <div
                    key={community}
                    className="flex min-h-16 items-center gap-3 rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-xs font-black text-white shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold leading-5 text-slate-800">
                      {community}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HISTORIA ===================== */}
      <section
        id="historia-domiciliar"
        className="section-shell scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
      >
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-wider text-amber-600 shadow-sm">
              <BookOpen size={14} />
              {copy.historyEyebrow}
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-slate-900 via-amber-800 to-orange-700 bg-clip-text text-4xl font-black text-transparent lg:text-6xl">
              {copy.historyServiceTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
              {copy.historyServiceText}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="relative">
              <div className="absolute left-1/2 hidden h-full w-1 -translate-x-px bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 lg:block">
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 animate-pulse rounded-full bg-amber-400" />
                <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 animate-pulse rounded-full bg-amber-400" />
              </div>

              <div className="relative space-y-16">
                {homeCareTimeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const periodPhoto = timelinePhotos[index];

                  const textCard = (
                    <div className="group relative rounded-2xl border border-amber-100 bg-white p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl">
                      <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-br from-amber-100/30 to-orange-100/30" />
                      <span className="relative inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-bold tracking-wider text-amber-500">
                        {item.period}
                      </span>
                      <h3 className="relative mt-2 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="relative mt-2 leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                      <ul className="relative mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shadow-sm" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="relative mt-4 inline-flex rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-amber-700">
                        {item.stat}
                      </span>
                    </div>
                  );

                  const photosBlock = (
                    <PhotoGrid
                      photos={periodPhoto ? [periodPhoto] : []}
                      gridClassName="grid grid-cols-2 gap-3"
                      itemClassName="h-56 sm:h-64 lg:h-72"
                      placeholderCount={1}
                    />
                  );

                  return (
                    <div
                      key={item.period}
                      className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12"
                    >
                      <div
                        className={[
                          "lg:w-1/2",
                          isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8",
                        ].join(" ")}
                      >
                        {isEven ? textCard : photosBlock}
                      </div>

                      <div className="relative z-10 flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-300/50 ring-4 ring-white">
                          <div className="h-4 w-4 rounded-full bg-white" />
                        </div>
                      </div>

                      <div className="lg:w-1/2">
                        {!isEven ? textCard : photosBlock}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== IMPACTO ===================== */}
      <section
        id="toneladas-repartidas"
        className="section-shell scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white"
      >
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-600 shadow-sm">
              <TrendingUp size={14} />
              {copy.impactMetricsEyebrow}
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-700 bg-clip-text text-4xl font-black text-transparent lg:text-6xl">
              {copy.tonsTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
              {copy.tonsText}
            </p>
          </div>

          <div className="mx-auto mb-10 grid max-w-5xl gap-4 sm:grid-cols-3">
            {[
              {
                value: "500+",
                label: copy.familiesHelped,
                icon: Heart,
                color: "from-rose-400 to-pink-500",
              },
              {
                value: "2.5T",
                label: copy.tonsDistributed,
                icon: PackageCheck,
                color: "from-emerald-400 to-teal-500",
              },
              {
                value: "12",
                label: copy.activeCommunities,
                icon: MapPinned,
                color: "from-blue-400 to-indigo-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <stat.icon size={22} className="text-white" />
                </div>
                <p className="text-4xl font-black text-slate-900 transition-colors group-hover:text-emerald-700">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <PhotoGrid
              photos={impactPhotos}
              gridClassName="grid grid-cols-2 gap-3 sm:grid-cols-3"
              itemClassName="h-48 sm:h-64"
              placeholderCount={1}
            />

            <div className="flex flex-col justify-center rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-lg sm:p-9">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                <Heart size={14} className="fill-emerald-600" />
                {language === "en" ? "Every visit matters" : "Cada visita importa"}
              </span>
              <p className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                {copy.impactLeadTitle}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{copy.impactLeadText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ACTIVIDADES ===================== */}
      <section
        id="actividades-domiciliares"
        className="section-shell relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-600 shadow-sm">
              <Camera size={14} />
              {copy.activityPhotosEyebrow}
            </span>
            <h2 className="mb-4 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
              {copy.activityPhotosTitle}
            </h2>
          </div>

          <div className="mb-12">
            <PhotoGrid
              photos={activityPhotos}
              gridClassName="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
              itemClassName="h-44 sm:h-56 lg:h-64"
              placeholderCount={2}
            />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-100/20" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-teal-100/20" />

              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-300/40 transition-transform duration-300 group-hover:scale-110">
                  <ClipboardList size={22} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                  {t("homeCare.activities")}
                </h3>
              </div>

              <ul className="relative grid gap-3 sm:grid-cols-2">
                {dictionary.homeCare.activityItems.map((item, index) => (
                  <li
                    key={item}
                    className="group/item flex items-center gap-4 rounded-xl border border-transparent bg-gradient-to-r from-emerald-50/50 to-white p-4 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:from-emerald-100/50 hover:to-emerald-50/50 hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 text-sm font-bold text-emerald-600 transition-colors group-hover/item:from-emerald-200 group-hover/item:to-teal-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DONACIÓN ===================== */}
      <section
        id="donar"
        className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-rose-400/10 blur-3xl" />
        </div>

        <div className="section-shell relative">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
              <Sparkles size={14} />
              {copy.donateEyebrow}
            </span>
            <h2 className="mb-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.donateTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
              {copy.donateText}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300">
              <Heart size={14} className="fill-amber-300" />
              {copy.donateUrgency}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
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
            ].map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlight
                    ? "border-emerald-400/50 bg-emerald-500/10 shadow-2xl shadow-emerald-500/20 backdrop-blur-lg"
                    : "border-white/10 bg-white/5 backdrop-blur-lg hover:border-white/20"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                    {tier.badge}
                  </span>
                )}
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {tier.amount}
                  </span>
                  <span className="text-sm font-bold text-white/60">
                    {copy.donatePerMonth}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-emerald-300">
                  {tier.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-6 text-white/60">
                  {tier.desc}
                </p>
                <a
                  href="#donar-form"
                  className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition-all ${
                    tier.highlight
                      ? "bg-white text-slate-900 shadow-lg hover:bg-emerald-50"
                      : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  {copy.donateCta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a
              href="#donar-form"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-black text-white shadow-2xl shadow-emerald-500/40 transition-all hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-500/60"
            >
              <Heart size={20} className="fill-white" />
              {copy.donateCta}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <p className="flex items-center gap-2 text-xs font-semibold text-white/50">
              <ShieldCheck size={14} />
              {copy.donateTrust}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}