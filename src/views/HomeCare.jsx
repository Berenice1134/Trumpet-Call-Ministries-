import {
  BookOpen,
  Camera,
  ClipboardList,
  MapPinned,
  PackageCheck,
  Sparkles,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronDown,
  Star,
  Heart,
  Home,
  Truck,
  Calendar,
} from "lucide-react";
import HelpRequestForm from "../components/HelpRequestForm.jsx";
import FeaturedPhotoGallery from "../components/FeaturedPhotoGallery.jsx";
import InfoCard from "../components/InfoCard.jsx";
import { useLanguage } from "../context/useLanguage.js";

const homeCarePhotos = [
  {
    key: "carTeam",
    src: "/assets/servicio-domiciliar/domiciliar-01.png",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    key: "carBags",
    src: "/assets/servicio-domiciliar/domiciliar-02.png",
    className: "",
  },
  {
    key: "pantryDisplay",
    src: "/assets/servicio-domiciliar/domiciliar-03.png",
    className: "",
  },
  {
    key: "coupleVisit",
    src: "/assets/servicio-domiciliar/domiciliar-04.png",
    className: "",
  },
  {
    key: "familySupport",
    src: "/assets/servicio-domiciliar/domiciliar-05.png",
    className: "sm:col-span-2",
  },
  {
    key: "tablePantry",
    src: "/assets/servicio-domiciliar/domiciliar-06.png",
    className: "",
  },
  {
    key: "singlePantry",
    src: "/assets/servicio-domiciliar/domiciliar-07.png",
    className: "",
  },
  {
    key: "outdoorFamily",
    src: "/assets/servicio-domiciliar/domiciliar-08.png",
    className: "sm:row-span-2",
  },
  {
    key: "twoBags",
    src: "/assets/servicio-domiciliar/domiciliar-09.png",
    className: "",
  },
  {
    key: "personalDelivery",
    src: "/assets/servicio-domiciliar/domiciliar-10.png",
    className: "",
  },
  {
    key: "elderPantry",
    src: "/assets/servicio-domiciliar/domiciliar-11.png",
    className: "sm:col-span-2",
  },
  {
    key: "homeFamily",
    src: "/assets/servicio-domiciliar/domiciliar-12.png",
    className: "",
  },
  {
    key: "homeVisitElderlyWomanBag",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-01.jpeg",
    className: "sm:col-span-2",
  },
  {
    key: "homeVisitTableSupport",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-02.jpeg",
    className: "",
  },
  {
    key: "homeVisitConversation",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-03.jpeg",
    className: "",
  },
  {
    key: "homeVisitFamilyKitchen",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-04.jpeg",
    className: "",
  },
  {
    key: "homeVisitPrayerCare",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-05.jpeg",
    className: "sm:col-span-2",
  },
  {
    key: "homeVisitVolunteersBags",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-06.jpeg",
    className: "",
  },
  {
    key: "homeVisitChildMilk",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-07.jpeg",
    className: "",
  },
  {
    key: "homeVisitFamilyBag",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-08.jpeg",
    className: "sm:col-span-2",
  },
  {
    key: "homeVisitFlorDelivery",
    src: "/assets/servicio-domiciliar/visita-domiciliar/visita-domiciliar-09.jpeg",
    className: "",
  },
];

const featuredHomeCarePhotoKeys = [
  "homeVisitElderlyWomanBag",
  "pantryDisplay",
  "familySupport",
];

const featuredHomeCarePhotos = featuredHomeCarePhotoKeys
  .map((key) => homeCarePhotos.find((photo) => photo.key === key))
  .filter(Boolean);

const homeCarePageCopy = {
  es: {
    territoryEyebrow: "Cobertura Territorial",
    municipalityMapTitle: "Mapa de municipios",
    municipalityMapText:
      "Estos son los municipios y comunidades que actualmente reciben apoyos domiciliares.",
    municipalityMapAlt: "Mapa de municipios con apoyos domiciliares activos en Tlaxcala",
    municipalityMapLegend:
      "Actualmente se apoya con servicio domiciliar en las siguientes comunidades y municipios:",
    serviceCoverageEyebrow: "Cobertura del Servicio",
    serviceAreaTitle: "Área de servicio",
    serviceAreaText:
      "La cobertura domiciliar se concentra en familias de Tlaxcala que reciben despensa, acompañamiento, oración y seguimiento mensual.",
    serviceAreaLegend:
      "Son los municipios que actualmente reciben apoyos domiciliares.",
    historyEyebrow: "Nuestra Trayectoria",
    historyServiceTitle: "Historia del servicio domiciliar",
    historyServiceText:
      "El servicio domiciliar ha crecido paso a paso, desde las primeras familias atendidas hasta una cobertura mensual organizada en comunidades de Tlaxcala.",
    timelineStart: "Inicio",
    timelineFirstSteps: "Primeros pasos",
    timelineGrowth: "Crecimiento",
    timelineExpansion: "Expansión del servicio",
    timelineCurrent: "Actualidad",
    timelineImpact: "Impacto actual",
    impactMetricsEyebrow: "Métricas de Impacto",
    tonsTitle: "Toneladas repartidas",
    tonsText:
      "Espacio para métricas de despensas, kilos repartidos y familias beneficiadas.",
    familiesHelped: "Familias beneficiadas",
    tonsDistributed: "Toneladas repartidas",
    activeCommunities: "Comunidades activas",
    viewFullGallery: "Ver galería completa",
    viewGallery: "Ver galería",
  },
  en: {
    territoryEyebrow: "Territorial Coverage",
    municipalityMapTitle: "Municipality Map",
    municipalityMapText:
      "These are the municipalities and communities currently receiving home care support.",
    municipalityMapAlt: "Map of municipalities with active home care support in Tlaxcala",
    municipalityMapLegend:
      "Home care support is currently provided in the following communities and municipalities:",
    serviceCoverageEyebrow: "Service Coverage",
    serviceAreaTitle: "Service Area",
    serviceAreaText:
      "Home care coverage focuses on families in Tlaxcala who receive pantry support, accompaniment, prayer, and monthly follow-up.",
    serviceAreaLegend:
      "Loma Bonita Tlax, El Sabinal Tlax, Tlacomulco Tlax, El Alto Chiautempan, Texcacoac Chiautempan, Contla de Juan Cuamatzi, Tlaxco, Tizostoc Ixtacuixtla de Mariaño Matamoros, Tixatlan Tlax, Zacatelco, Texoloc, and San Diego Metepec Tlax are the municipalities currently receiving home care support.",
    historyEyebrow: "Our Journey",
    historyServiceTitle: "Home Care Service History",
    historyServiceText:
      "Home care service has grown step by step, from the first families served to organized monthly coverage across communities in Tlaxcala.",
    timelineStart: "Start",
    timelineFirstSteps: "First steps",
    timelineGrowth: "Growth",
    timelineExpansion: "Service expansion",
    timelineCurrent: "Today",
    timelineImpact: "Current impact",
    impactMetricsEyebrow: "Impact Metrics",
    tonsTitle: "Tons Distributed",
    tonsText:
      "Space for pantry, kilograms distributed, and beneficiary family metrics.",
    familiesHelped: "Families helped",
    tonsDistributed: "Tons distributed",
    activeCommunities: "Active communities",
    viewFullGallery: "View full gallery",
    viewGallery: "View gallery",
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
        "La cobertura activa incluye 12 comunidades y municipios de Tlaxcala.",
        "Cada familia recibe despensa mensual, oración y acompañamiento según sus necesidades.",
        "El programa supera 1,165 despensas acumuladas y más de 10 toneladas de alimento.",
      ],
      stat: "12 zonas activas",
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
        "Active coverage includes 12 communities and municipalities in Tlaxcala.",
        "Each family receives monthly pantry support, prayer, and accompaniment according to their needs.",
        "The program has surpassed 1,165 cumulative pantry packages and more than 10 tons of food.",
      ],
      stat: "12 active areas",
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
  "Tizostoc, Ixtacuixtla de Mariaño Matamoros",
  "Tixatlan, Tlax.",
  "Zacatelco",
  "Texoloc",
  "San Diego Metepec, Tlax.",
];

export default function HomeCare() {
  const { dictionary, language, t } = useLanguage();
  const copy = homeCarePageCopy[language] ?? homeCarePageCopy.es;
  const homeCareTimeline = homeCareTimelineByLanguage[language] ?? homeCareTimelineByLanguage.es;

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <img
            src="/assets/servicio-domiciliar/domiciliar-01.png"
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/80 to-violet-950/90" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="section-shell relative w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div className="motion-rise space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <Home size={14} className="text-emerald-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  {t("homeCare.carouselLabel")}
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-emerald-100 bg-clip-text text-transparent">
                  {t("homeCare.title")}
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                {t("homeCare.text")}
              </p>

              {/* Stats Grid */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { 
                    value: "12kg", 
                    label: t("homeCare.activityItems.1"),
                    icon: PackageCheck,
                    color: "from-emerald-400 to-teal-500"
                  },
                  { 
                    value: "$250", 
                    label: t("homeCare.monthlyCost"),
                    icon: TrendingUp,
                    color: "from-blue-400 to-indigo-500"
                  },
                  { 
                    value: "1x", 
                    label: t("homeCare.monthlyVisit"),
                    icon: Calendar,
                    color: "from-violet-400 to-purple-500"
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"
                      style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                    />
                    <div className="relative space-y-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon size={18} className="text-white" />
                      </div>
                      <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                        {item.value}
                      </p>
                      <p className="text-xs font-semibold leading-5 text-white/60">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#galeria-voluntarios"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                {copy.viewFullGallery}
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Right Gallery */}
            <div className="motion-float grid gap-4 sm:grid-cols-2">
              {featuredHomeCarePhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 shadow-2xl hover:border-white/20 transition-all duration-500 ${
                    index === 0 ? "sm:row-span-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl h-full">
                    <img
                      src={photo.src}
                      alt={t(`homeCare.photoLabels.${photo.key}`)}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        index === 0 ? "h-full min-h-[340px]" : "h-40 sm:h-44"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section id="galeria-voluntarios" className="section-shell scroll-mt-28 bg-white">
        <div className="mb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                <Camera size={17} />
                {t("homeCare.gallery")}
              </div>
              <h2 className="mt-4 max-w-3xl text-4xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent sm:text-5xl">
                {t("homeCare.galleryTitle")}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              {t("homeCare.galleryIntro")}
            </p>
          </div>
        </div>

        <FeaturedPhotoGallery
          photos={homeCarePhotos}
          badge={t("homeCare.gallery")}
          getLabel={(photo) => t(`homeCare.photoLabels.${photo.key}`)}
        />
      </section>

<div id="area-servicio-domiciliar" className="scroll-mt-28" />

{/* ========== MAPA DE MUNICIPIOS SECTION ========== */}
<section id="mapa-municipios" className="relative scroll-mt-28 overflow-hidden bg-slate-950 py-12 lg:py-16">
  <div className="absolute inset-0 opacity-30 pattern-grid" />
  <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-ministry-teal/30 blur-3xl" />
  <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-ministry-gold/25 blur-3xl" />
  <div className="section-shell relative">
    <div className="text-center mb-8 lg:mb-10">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-ministry-gold text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur border border-white/10">
        <MapPinned size={14} />
        {copy.territoryEyebrow}
      </span>
      <h2 className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-white via-cyan-100 to-ministry-gold bg-clip-text text-transparent mb-3">
        {copy.municipalityMapTitle}
      </h2>
      <p className="text-white/70 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
        {copy.municipalityMapText}
      </p>
    </div>
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-cyan-950/70 backdrop-blur">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Map Column */}
          <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 p-4 sm:p-6 lg:p-8">
            <div className="relative h-full flex flex-col">
              <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
                <div className="absolute inset-4 rounded-3xl bg-ministry-teal/10 blur-2xl" />
                <img
                  src="/assets/servicio-domiciliar/mapa-area-servicio.png"
                  alt={copy.municipalityMapAlt}
                  className="relative w-full h-full object-contain rounded-3xl shadow-2xl ring-1 ring-white/70"
                />
                <div className="absolute left-4 top-4 hidden rounded-full bg-slate-950/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-ministry-gold shadow-lg backdrop-blur sm:inline-flex">
                  {copy.territoryEyebrow}
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-4 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: serviceCommunities.length, label: language === "en" ? "active areas" : "zonas activas", icon: MapPinned },
                    { value: "12kg", label: language === "en" ? "monthly pantry" : "despensa mensual", icon: PackageCheck },
                    { value: "1x", label: language === "en" ? "monthly visit" : "visita mensual", icon: Calendar },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ministry-blue text-white">
                        <stat.icon size={17} />
                      </span>
                      <span>
                        <span className="block text-xl font-black text-ink leading-tight">{stat.value}</span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 leading-tight">{stat.label}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Communities List Column */}
          <div className="relative overflow-hidden bg-gradient-to-br from-ministry-blue via-slate-900 to-ink p-6 lg:p-8 text-white flex flex-col">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-ministry-gold/15" />
            <div className="relative flex flex-col h-full">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/15 shrink-0">
                <MapPinned size={28} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black leading-tight">
                {copy.serviceAreaTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/78">
                {copy.municipalityMapLegend}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 flex-1 content-start">
                {serviceCommunities.map((community, index) => (
                  <span
                    key={community}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-sm backdrop-blur transition hover:translate-x-1 hover:bg-white/15"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ministry-gold text-xs font-black text-ink">
                      {index + 1}
                    </span>
                    <span className="truncate">{community}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========== HISTORIA SECTION ========== */}
<section id="historia-domiciliar" className="section-shell scroll-mt-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
  {/* Background decorations */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative">
    <div className="text-center mb-16">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-5 border border-amber-200/50 shadow-sm">
        <BookOpen size={14} />
        {copy.historyEyebrow}
      </span>
      <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-amber-800 to-orange-700 bg-clip-text text-transparent mb-4">
        {copy.historyServiceTitle}
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
        {copy.historyServiceText}
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line with gradient and animation */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 hidden lg:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
        </div>
        
        <div className="space-y-16 relative">
          {homeCareTimeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.period} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className={["lg:w-1/2", isEven ? "lg:text-right lg:pr-8" : "lg:pl-8"].join(" ")}>
                  {isEven ? (
                    <div className="group relative bg-white rounded-2xl p-7 shadow-xl border border-amber-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 hover:border-amber-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full -mr-16 -mt-16" />
                      <span className="relative inline-block text-amber-500 font-bold text-sm tracking-wider bg-amber-50 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                      <h3 className="relative text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
                      <p className="relative text-slate-600 mt-2 leading-relaxed">{item.text}</p>
                      <ul className="relative mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2 items-start">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shadow-sm" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="relative mt-4 inline-flex rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-amber-700 border border-amber-200/50">
                        {item.stat}
                      </span>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/50 ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div className="absolute -inset-2 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="lg:w-1/2">
                  {!isEven ? (
                    <div className="group relative bg-white rounded-2xl p-7 shadow-xl border border-amber-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 hover:border-amber-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full -mr-16 -mt-16" />
                      <span className="relative inline-block text-amber-500 font-bold text-sm tracking-wider bg-amber-50 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                      <h3 className="relative text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
                      <p className="relative text-slate-600 mt-2 leading-relaxed">{item.text}</p>
                      <ul className="relative mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2 items-start">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shadow-sm" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="relative mt-4 inline-flex rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-amber-700 border border-amber-200/50">
                        {item.stat}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========== TONELADAS REPARTIDAS SECTION ========== */}
<section id="toneladas-repartidas" className="section-shell scroll-mt-28 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/10 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative">
    <div className="text-center mb-14">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-5 border border-emerald-200/50 shadow-sm">
        <TrendingUp size={14} />
        {copy.impactMetricsEyebrow}
      </span>
      <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent mb-4">
        {copy.tonsTitle}
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
        {copy.tonsText}
      </p>
    </div>
    
    {/* Stats Grid */}
    <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-10">
      {[
        { value: "500+", label: copy.familiesHelped, icon: Heart, color: "from-rose-400 to-pink-500", bg: "from-rose-50 to-pink-50", border: "rose-200" },
        { value: "2.5T", label: copy.tonsDistributed, icon: PackageCheck, color: "from-emerald-400 to-teal-500", bg: "from-emerald-50 to-teal-50", border: "emerald-200" },
        { value: "12", label: copy.activeCommunities, icon: MapPinned, color: "from-blue-400 to-indigo-500", bg: "from-blue-50 to-indigo-50", border: "blue-200" },
      ].map((stat, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 p-7 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-2xl"
          style={{ borderColor: `rgba(var(--${stat.border}), 0.3)` }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"
            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
          />
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg shadow-${stat.border}/30 group-hover:scale-110 transition-transform duration-300`}>
            <stat.icon size={22} className="text-white" />
          </div>
          <p className="text-4xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">{stat.value}</p>
          <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50/80 to-white p-10 text-center border-2 border-emerald-200/50 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
        <div className="relative flex items-center justify-center gap-4 flex-wrap">
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========== ACTIVITIES & FORM SECTION ========== */}
<section className="section-shell bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
  
  <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] max-w-6xl mx-auto relative">
    {/* Left Column - Activities */}
    <div className="grid gap-6">
      <div className="group relative bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/20 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-100/20 rounded-full -ml-20 -mb-20" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-300/40 group-hover:scale-110 transition-transform duration-300">
            <ClipboardList size={22} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {t("homeCare.activities")}
          </h3>
        </div>
        <ul className="relative grid gap-3">
          {dictionary.homeCare.activityItems.map((item, index) => (
            <li
              key={item}
              className="group/item flex items-center gap-4 rounded-xl bg-gradient-to-r from-emerald-50/50 to-white p-4 font-medium text-slate-700 hover:from-emerald-100/50 hover:to-emerald-50/50 transition-all duration-300 border border-transparent hover:border-emerald-200 shadow-sm hover:shadow-md"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-sm font-bold text-emerald-600 group-hover/item:from-emerald-200 group-hover/item:to-teal-200 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="group relative bg-white rounded-2xl p-8 border border-violet-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100/20 rounded-full -mr-20 -mt-20" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-300/40 group-hover:scale-110 transition-transform duration-300">
            <PackageCheck size={22} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
            {t("homeCare.gallery")}
          </h3>
        </div>
        <p className="relative text-slate-600 leading-relaxed">
          {t("homeCare.galleryIntro")}
        </p>
        <a
          href="#galeria-voluntarios"
          className="relative inline-flex items-center gap-2 mt-5 text-violet-600 font-semibold hover:text-violet-700 transition-colors group/link"
        >
          <span className="border-b-2 border-violet-200 group-hover/link:border-violet-500 transition-colors pb-0.5">
            {copy.viewGallery}
          </span>
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    {/* Right Column - Form */}
    <div className="lg:sticky lg:top-28 h-fit">
      <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-100/10 to-orange-100/10 rounded-full -ml-24 -mb-24" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/40">
            <Star size={22} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {t("homeCare.formTitle")}
          </h2>
        </div>
        <div className="relative">
          <HelpRequestForm />
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
