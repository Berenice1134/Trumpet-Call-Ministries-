import {
  CalendarDays,
  Camera,
  HandHeart,
  HeartPulse,
  MapPinned,
  Sparkles,
  Target,
  ChevronDown,
  Star,
  Heart,
  Clock,
  Gift,
  Users,
} from "lucide-react";
import FeaturedPhotoGallery from "../components/FeaturedPhotoGallery.jsx";
import InfoCard from "../components/InfoCard.jsx";
import { useLanguage } from "../context/useLanguage.js";

const hospitalPhotos = [
  { key: "dreamsBoard", src: "/assets/hospital-infantil/hospital-01.jpeg" },
  { key: "blueCostume", src: "/assets/hospital-infantil/hospital-02.jpeg" },
  { key: "hospitalEntrance", src: "/assets/hospital-infantil/hospital-03.jpeg" },
  { key: "micActivity", src: "/assets/hospital-infantil/hospital-04.jpeg" },
  { key: "balloonArch", src: "/assets/hospital-infantil/hospital-05.jpeg" },
  { key: "groupActivity", src: "/assets/hospital-infantil/hospital-06.jpeg" },
  { key: "heartGraphic", src: "/assets/hospital-infantil/hospital-07.png" },
  { key: "hospitalKermesTeam", src: "/assets/hospital-infantil/hospital-kermes-01.jpeg" },
  { key: "hospitalKermesDelivery", src: "/assets/hospital-infantil/hospital-kermes-02.jpeg" },
  { key: "hospitalKermesWelcome", src: "/assets/hospital-infantil/hospital-kermes-03.jpeg" },
  { key: "hospitalKermesSupport", src: "/assets/hospital-infantil/hospital-kermes-04.jpeg" },
  { key: "hospitalKermesFoodTable", src: "/assets/hospital-infantil/hospital-kermes-05.jpeg" },
  { key: "hospitalKermesConversation", src: "/assets/hospital-infantil/hospital-kermes-06.jpeg" },
  { key: "hospitalKermesService", src: "/assets/hospital-infantil/hospital-kermes-07.jpeg" },
];

const featuredHospitalPhotoKeys = [
  "dreamsBoard",
  "groupActivity",
  "hospitalKermesWelcome",
];

const featuredHospitalPhotos = featuredHospitalPhotoKeys
  .map((key) => hospitalPhotos.find((photo) => photo.key === key))
  .filter(Boolean);

const otherMissions = [
  {
    id: "cartolandia",
    title: "Cartolandia",
    titleEn: "Cartolandia",
    icon: MapPinned,
    description: "Espacio para documentar la misión en Cartolandia, familias atendidas y evidencia visual.",
    descriptionEn: "Space to document the Cartolandia mission, families served, and visual evidence.",
    stats: [
      { value: "150+", label: "Familias", labelEn: "Families" },
      { value: "3", label: "Visitas", labelEn: "Visits" },
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
    photos: [
      { src: "/assets/misiones/cartolandia-01.jpeg", label: "Condiciones de vivienda en Cartolandia" },
      { src: "/assets/misiones/cartolandia-02.jpeg", label: "Entrega comunitaria junto al vehículo del ministerio" },
      { src: "/assets/misiones/cartolandia-03.jpeg", label: "Entrega de alimento a familias" },
      { src: "/assets/misiones/cartolandia-04.jpeg", label: "Oración y acompañamiento durante la visita" },
      { src: "/assets/misiones/cartolandia-05.jpeg", label: "Familias recibiendo apoyo y seguimiento" },
      { src: "/assets/misiones/cartolandia-06.jpeg", label: "Despensas entregadas desde la ruta de visita" },
      { src: "/assets/misiones/cartolandia-07.jpeg", label: "Acompañamiento cercano a beneficiarios" },
    ],
    photosEn: [
      { src: "/assets/misiones/cartolandia-01.jpeg", label: "Housing conditions in Cartolandia" },
      { src: "/assets/misiones/cartolandia-02.jpeg", label: "Community delivery beside the ministry vehicle" },
      { src: "/assets/misiones/cartolandia-03.jpeg", label: "Food delivery to families" },
      { src: "/assets/misiones/cartolandia-04.jpeg", label: "Prayer and accompaniment during the visit" },
      { src: "/assets/misiones/cartolandia-05.jpeg", label: "Families receiving support and follow-up" },
      { src: "/assets/misiones/cartolandia-06.jpeg", label: "Pantries delivered during the visit route" },
      { src: "/assets/misiones/cartolandia-07.jpeg", label: "Close accompaniment for beneficiaries" },
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
      { src: "/assets/misiones/dia-caridad-caritas-01.jpeg", label: "Despensas preparadas para el apoyo con Fundación Cáritas" },
      { src: "/assets/misiones/dia-caridad-caritas-02.jpeg", label: "Preparación de alimentos para familias" },
      { src: "/assets/misiones/dia-caridad-caritas-03.jpeg", label: "Entrega de despensa en la iglesia de San José" },
      { src: "/assets/misiones/dia-caridad-caritas-04.jpeg", label: "Apoyo compartido durante el Día de Caridad 2023" },
      { src: "/assets/misiones/dia-caridad-caritas-05.jpeg", label: "Servicio con Fundación Cáritas y la iglesia de San José" },
    ],
    photosEn: [
      { src: "/assets/misiones/dia-caridad-caritas-01.jpeg", label: "Pantries prepared for the support with Fundación Cáritas" },
      { src: "/assets/misiones/dia-caridad-caritas-02.jpeg", label: "Food preparation for families" },
      { src: "/assets/misiones/dia-caridad-caritas-03.jpeg", label: "Pantry delivery at San José Church" },
      { src: "/assets/misiones/dia-caridad-caritas-04.jpeg", label: "Support shared during Charity Day 2023" },
      { src: "/assets/misiones/dia-caridad-caritas-05.jpeg", label: "Service with Fundación Cáritas and San José Church" },
    ],
  },
  {
    id: "espanita",
    title: "Españita",
    titleEn: "Españita",
    icon: Target,
    description: "Espacio para información de la misión en Españita, necesidades y próximos pasos.",
    descriptionEn: "Space for Españita mission information, needs, and next steps.",
    stats: [
      { value: "80+", label: "Familias", labelEn: "Families" },
      { value: "2", label: "Misiones", labelEn: "Missions" },
      { value: "300kg", label: "Repartidos", labelEn: "Distributed" },
    ],
    gradient: "from-violet-400 to-purple-500",
    bgGradient: "from-slate-900 via-violet-950 to-purple-950",
    orbColor: "bg-violet-500/20",
    accentColor: "violet",
    badgeColor: "text-violet-400",
    statColor: "from-violet-400 to-purple-400",
    placeholder: "[Insertar información de Españita]",
    placeholderEn: "[Insert Españita information]",
    photos: [
      { src: "/assets/misiones/espanita-01.jpeg", label: "Preparación de alimentos y apoyos" },
      { src: "/assets/misiones/espanita-02.jpeg", label: "Entrega cercana a beneficiarios" },
      { src: "/assets/misiones/espanita-03.jpeg", label: "Equipo de servicio en Españita" },
      { src: "/assets/misiones/espanita-04.jpeg", label: "Acompañamiento y apoyo comunitario" },
    ],
    photosEn: [
      { src: "/assets/misiones/espanita-01.jpeg", label: "Food and support preparation" },
      { src: "/assets/misiones/espanita-02.jpeg", label: "Personal delivery to beneficiaries" },
      { src: "/assets/misiones/espanita-03.jpeg", label: "Service team in Españita" },
      { src: "/assets/misiones/espanita-04.jpeg", label: "Community accompaniment and support" },
    ],
  },
];

const hospitalPageCopy = {
  es: {
    mission: "Misión",
    upcomingDates: "Próximás fechas",
    viewGallery: "Ver galería",
    viewFullGallery: "Ver galería completa",
  
  },
  en: {
    mission: "Mission",
    upcomingDates: "Upcoming dates",
    
    viewGallery: "View gallery",
    viewFullGallery: "View full gallery",
    
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

export default function HospitalVisit() {
  const { dictionary, language, t } = useLanguage();
  const copy = hospitalPageCopy[language] ?? hospitalPageCopy.es;
  const timelineCopy = hospitalTimelineCopy[language] ?? hospitalTimelineCopy.es;
  const hospitalStory = hospitalStoryByLanguage[language] ?? hospitalStoryByLanguage.es;

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section
        id="hospital-infantil-tlaxcala"
        className="relative min-h-screen flex items-center scroll-mt-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-pink-950"
      >
        {/* Background Layers */}
        <div className="absolute inset-0">
          <img
            src="/assets/hospital-infantil/hospital-01.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-rose-950/80 to-pink-950/90" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-400" />
                  </span>
                  <HeartPulse size={14} className="text-rose-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                  {t("hospital.carouselLabel")}
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-rose-100 bg-clip-text text-transparent">
                  {t("hospital.title")}
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                {t("hospital.text")}
              </p>

              {/* Stats Grid */}
              <div className="grid gap-4 sm:grid-cols-3">
                {dictionary.hospital.stats.map((item, index) => {
                  const icons = [Heart, Users, Gift];
                  const colors = [
                    "from-rose-400 to-pink-500",
                    "from-blue-400 to-indigo-500",
                    "from-amber-400 to-orange-500"
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

              {/* CTA */}
              <a
                href="#galeria-hospital"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                {copy.viewFullGallery}
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Right Gallery */}
            <div className="motion-float grid gap-4 sm:grid-cols-2">
              {featuredHospitalPhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 shadow-2xl hover:border-white/20 transition-all duration-500 ${
                    index === 0 ? "sm:row-span-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl h-full">
                    <img
                      src={photo.src}
                      alt={t(`hospital.photoLabels.${photo.key}`)}
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
      <section id="galeria-hospital" className="section-shell scroll-mt-28 bg-white">
        <div className="mb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-700">
                <Camera size={17} />
                {t("hospital.gallery")}
              </div>
              <h2 className="mt-4 max-w-3xl text-4xl font-black bg-gradient-to-r from-slate-900 to-rose-900 bg-clip-text text-transparent sm:text-5xl">
                {t("hospital.galleryTitle")}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              {t("hospital.galleryIntro")}
            </p>
          </div>
        </div>

        <FeaturedPhotoGallery
          photos={hospitalPhotos}
          badge={t("hospital.gallery")}
          getLabel={(photo) => t(`hospital.photoLabels.${photo.key}`)}
        />
      </section>

      <section className="section-shell bg-gradient-to-b from-white via-rose-50/40 to-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-4 shadow-2xl">
            <img
              src="/assets/hospital-infantil/hospital-02.jpeg"
              alt={t("hospital.photoLabels.blueCostume")}
              className="h-full max-h-[520px] w-full rounded-[1.5rem] object-contain"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-rose-200">
                Hospital Infantil de Tlaxcala
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
          {/* Calendar Card */}
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

          {/* Needs Card */}
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
      {otherMissions.flatMap((mission, missionIndex) => {
        const photos = language === "en" ? mission.photosEn : mission.photos;

        return [
        <section
          key={mission.id}
          id={mission.id}
          className={`relative min-h-screen flex items-center scroll-mt-28 overflow-hidden bg-gradient-to-br ${mission.bgGradient}`}
        >
          {/* Background Layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-transparent to-slate-900/90" />
            
            {/* Animated gradient orbs */}
            <div className={`absolute top-1/4 -left-20 w-96 h-96 ${mission.orbColor} rounded-full blur-3xl animate-pulse`} />
            <div className={`absolute bottom-1/4 -right-20 w-96 h-96 ${mission.orbColor} rounded-full blur-3xl animate-pulse animation-delay-2000`} />
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
              <div className={`motion-rise space-y-8 ${missionIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Badge */}
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

                {/* Title */}
                <h2 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
                    {language === "en" ? mission.titleEn : mission.title}
                  </span>
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                  {language === "en" ? mission.descriptionEn : mission.description}
                </p>

                {/* Stats Grid */}
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

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`#galeria-${mission.id}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    {copy.viewGallery}
                  </a>
                </div>
              </div>

              {/* Right Preview */}
              <div className={`motion-float ${missionIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid gap-4">
                  {mission.photos ? (
                    <figure className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-white/25">
                      <div className="relative h-[460px] overflow-hidden rounded-2xl bg-slate-950/40">
                        <img
                          src={mission.photos[0].src}
                          alt={(language === "en" ? mission.photosEn : mission.photos)[0].label}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
                      </div>
                    </figure>
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
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
            </div>
          </div>
        </section>,
        photos ? (
          <section key={`${mission.id}-gallery`} id={`galeria-${mission.id}`} className="section-shell scroll-mt-28 bg-white">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-ministry-gold/25 px-4 py-2 text-sm font-bold text-ministry-blue">
                  <Camera size={17} />
                  {language === "en" ? `${mission.titleEn} gallery` : `Galeria de ${mission.title}`}
                </div>
                <h2 className="mt-4 max-w-3xl text-4xl font-black bg-gradient-to-r from-slate-900 to-ministry-blue bg-clip-text text-transparent sm:text-5xl">
                  {language === "en" ? `Moments from ${mission.titleEn}` : `Momentos de ${mission.title}`}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                {language === "en"
                  ? "A visual record of the service, teamwork, and community support shared during this mission."
                  : "Registro visual del servicio, trabajo en equipo y apoyo comunitario compartido durante esta misión."}
              </p>
            </div>
            <FeaturedPhotoGallery
              photos={photos}
              badge={language === "en" ? mission.titleEn : mission.title}
              getLabel={(photo) => photo.label}
            />
          </section>
        ) : null,
        ].filter(Boolean);
      })}
    </>
  );
}
