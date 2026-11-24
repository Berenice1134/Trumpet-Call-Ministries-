import {
  FileText,
  HandHeart,
  HeartPulse,
  Home as HomeIcon,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Heart,
  Sprout,
  BookOpen,
  GraduationCap,
  Globe,
  Church,
  HeartHandshake,
  PackageCheck,
  Sparkles,
  Award,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ImpactStats from "../components/ImpactStats.jsx";
import { useLanguage } from "../context/useLanguage.js";

const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
const heroGalleryPhotos = Array.from({ length: 10 }, (_, index) =>
  `home/hero/hero-visitas-${String(index + 1).padStart(2, "0")}.jpeg`
);

const dashboardItems = [
  {
    to: "/servicio-domiciliar",
    key: "homeCare",
    icon: HomeIcon,
    image: asset("servicio-domiciliar/visita-domiciliar/visita-domiciliar-10.jpeg"),
  },
  {
    to: "/misiones",
    key: "hospital",
    icon: HeartPulse,
    image: asset("hospital-infantil/hospital-nuevo-06.jpeg"),
  },
  {
    to: "/voluntarios",
    key: "volunteers",
    icon: Users,
    image: asset("voluntarios/voluntarios-04.jpeg"),
  },
  {
    to: "/donaciones",
    key: "donations",
    icon: HandHeart,
    image: asset("misiones/cartolandia-03.jpeg"),
  },
  {
    to: "/reportes",
    key: "reports",
    icon: FileText,
    image: asset("home/home-pantry-display.png"),
  },
];

const homePageCopy = {
  es: {
    mission: "Misión",
    vision: "Visión",
    historyEyebrow: "Nuestra Trayectoria",
    historyIntro: "Conoce cómo comenzó este ministerio y el camino que hemos recorrido.",
    historyStart: "Los Inicios",
    historyGrowth: "Crecimiento",
    historyPresent: "Presente",
    donations: "Donaciones",
    volunteering: "Voluntariado",
    helpQuestion: "¿Cómo puedes ayudar?",
    serviceEyebrow: "Navegación interna",
    serviceTitle: "Área de servicio",
    serviceText:
      "Actualmente, el ministerio apoya a comunidades de Tlaxcala mediante visitas domiciliarias y despensas mensuales.",
    storyCaption: "Cada visita es un abrazo, una oración y una mesa con alimento.",
    workEyebrow: "Cómo trabajamos",
    workTitle: "Un ministerio construido alrededor de familias y necesidades reales",
    workText: "Cada despensa y cada visita llevan un mensaje: ninguna familia tiene que enfrentar sus dificultades sola.",
    areasEyebrow: "Lo que hacemos",
    readMore: "Ver más",
    readLess: "Ver menos",
    ctaTitle: "Tu ayuda llega a una mesa, a un hogar y a un corazón",
    ctaText:
      "Con tu donativo o tu tiempo, una familia de Tlaxcala recibe alimento, compañía y la certeza de que no está sola.",
  },
  en: {
    mission: "Mission",
    vision: "Vision",
    historyEyebrow: "Our Journey",
    historyIntro: "Learn how this ministry began and the path it has walked so far.",
    historyStart: "The Beginning",
    historyGrowth: "Growth",
    historyPresent: "Today",
    donations: "Donations",
    volunteering: "Volunteer Service",
    helpQuestion: "How can you help?",
    serviceEyebrow: "Internal Navigation",
    serviceTitle: "Service Area",
    serviceText:
      "The ministry currently supports communities in Tlaxcala through home visits and monthly pantry support.",
    storyCaption: "Every visit is an embrace, a prayer, and a table with food.",
    workEyebrow: "How we work",
    workTitle: "A ministry built around real families and real needs",
    workText: "Every pantry and every visit carries a message: no family has to face hardship alone.",
    areasEyebrow: "What we do",
    readMore: "Read more",
    readLess: "Read less",
    ctaTitle: "Your help reaches a table, a home, and a heart",
    ctaText:
      "With your gift or your time, a family in Tlaxcala receives food, companionship, and the assurance that they are not alone.",
  },
};

const ministryTimelineByLanguage = {
  es: [
    {
      year: "Inicio",
      title: "Un comienzo pequeño con un gran deseo de servir",
      text: "El ministerio comenzó entregando 12 despensas en Loma Bonita, con el apoyo de 3 voluntarias.",
      video: "home/ministerio-inicio.mp4",
      details: [
        "El primer enfoque fue acompañar familias vulnerables de Loma Bonita.",
        "Cada entrega comenzó a unir alimento, oración, escucha y seguimiento personal.",
        "Ese pequeño inicio marcó la identidad del ministerio: servir a Cristo sirviendo a las familias.",
      ],
      stat: "12 despensas",
      icon: "🌟",
      color: "from-ministry-teal to-ministry-blue",
    },
    {
      year: "Junio 2021",
      title: "Apertura de English Center",
      text: "English Center Tlaxcala abrió sus puertas y se convirtió en una de las primeras bases de sostenimiento para el ministerio.",
      image: "home/ministerio-inicio.png",
      details: [
        "Las clases particulares de inglés comenzaron a generar recursos para apoyar despensas.",
        "La visión fue usar el trabajo diario como una forma concreta de sostener la misión.",
        "Desde ahí se empezó a sembrar una estructura que después crecería con donadores y voluntarios.",
      ],
      stat: "English Center",
      icon: "📚",
      color: "from-ministry-blue to-ink",
    },
    {
      year: "Julio 2021",
      title: "Inicio de visitas domiciliares mensuales",
      text: "Comenzaron las distribuciones mensuales en Loma Bonita, llevando despensas directamente a los hogares.",
      image: "home/visitas-domiciliares-inicio-julio-2021.jpeg",
      details: [
        "Las familias empezaron a recibir apoyo alimentario de manera constante.",
        "Cada visita incluyó reflexión bíblica y oración.",
        "La relación con los beneficiarios comenzó a construirse desde la confianza, la fe y el amor.",
      ],
      stat: "Loma Bonita",
      icon: "🏠",
      color: "from-ministry-teal to-cyan-600",
    },
    {
      year: "Agosto 2021",
      title: "Inauguración oficial del English Center",
      text: "La inauguración oficial del English Center fortaleció la base de apoyo al ministerio y dio mayor visibilidad al proyecto.",
      image: "voluntarios/english-center/english-center-inauguracion-agosto-2021.jpeg",
      details: [
        "El trabajo educativo y el servicio social empezaron a caminar juntos.",
        "La comunidad pudo ver que el ministerio no solo entregaba ayuda, sino que también buscaba mantenerla.",
        "Este paso preparó el camino para nuevas personas dispuestas a sumarse.",
      ],
      stat: "English Center",
      icon: "🎓",
      color: "from-ink to-ministry-blue",
    },
    {
      year: "Octubre 2021",
      title: "Se incorporan las primeras voluntarias",
      text: "Tres voluntarias se integraron formalmente al servicio, ayudando a preparar y repartir las despensas.",
      image: "voluntarios/primeras-voluntarias-octubre-2021.jpeg",
      details: [
        "El equipo dejó de ser un esfuerzo aislado y comenzó a tomar forma comunitaria.",
        "La preparación de alimentos se hizo con más orden, cuidado y colaboración.",
        "Desde entonces, el voluntariado se volvió una parte esencial del ministerio.",
      ],
      stat: "3 voluntarias",
      icon: "🤝",
      color: "from-sky-400 to-ministry-blue",
    },
    {
      year: "Enero 2022",
      title: "Primeras donaciones de Estados Unidos",
      text: "Llegaron las primeras donaciones provenientes de Estados Unidos, abriendo una nueva etapa de apoyo internacional.",
      image: "home/corazon-estados-unidos-mexico.png",
      details: [
        "El ministerio comenzó a ser sostenido por personas de distintos lugares unidas por una misma misión.",
        "Cada donación ayudó a convertir generosidad en despensas reales para familias vulnerables.",
        "La red de apoyo empezó a crecer más allá de la comunidad local.",
      ],
      stat: "Donadores USA",
      icon: "🇺🇸",
      color: "from-ministry-blue to-ministry-teal",
    },
    {
      year: "Julio 2023",
      title: "Primera misión a Cartolandia",
      text: "Se realizó la primera misión a Cartolandia, apoyando a 47 familias en colaboración con la Iglesia de la Inmaculada Concepción.",
      image: "misiones/cartolandia-primera-22.jpeg",
      details: [
        "El ministerio salió a servir fuera de su ruta inicial.",
        "La colaboración con iglesias permitió llegar a familias con necesidades muy visibles.",
        "Cartolandia se convirtió en una misión importante dentro del crecimiento del ministerio.",
      ],
      stat: "47 familias",
      icon: "🚐",
      color: "from-amber-400 to-ministry-gold",
    },
    {
      year: "Agosto 2023",
      title: "Misión con Cáritas en San José",
      text: "Se apoyó a 53 familias junto con Cáritas, teniendo como sede la Parroquia de San José.",
      image: "misiones/caritas-san-jose-2023.png",
      details: [
        "La alianza permitió organizar mejor la entrega y la atención a familias de la comunidad.",
        "El servicio combinó despensas, presencia del ministerio y apoyo de la comunidad.",
        "Este evento mostró el valor de trabajar en unidad por las familias vulnerables.",
      ],
      stat: "53 familias",
      icon: "⛪",
      color: "from-amber-400 to-amber-600",
    },
    {
      year: "Diciembre 2024",
      title: "Evento Mágico de Caridad",
      text: "Se realizó un evento de caridad y se recibió la primera donación mensual proveniente de México.",
      image: "misiones/evento-magico-caridad-diciembre-2024.jpeg",
      details: [
        "El ministerio comenzó a fortalecer también su red de donadores mexicanos.",
        "La generosidad local se sumó al trabajo mensual de despensas y acompañamiento.",
        "Este paso ayudó a dar más estabilidad al programa domiciliar.",
      ],
      stat: "Donación mensual",
      icon: "🎄",
      color: "from-ministry-teal to-sky-500",
    },
    {
      year: "Febrero 2025",
      title: "Misión a Cartolandia con Mensaje de Vida",
      text: "Se regresó a Cartolandia para apoyar a 35 familias en colaboración con la Iglesia Mensaje de Vida.",
      image: "misiones/cartolandia-mensaje-de-vida-febrero-2025.jpeg",
      details: [
        "La misión confirmó la necesidad de volver a comunidades que requieren seguimiento.",
        "La colaboración con iglesias locales ayudó a identificar y acompañar mejor a las familias.",
        "El ministerio siguió extendiendo alimento, oración y esperanza de forma práctica.",
      ],
      stat: "35 familias",
      icon: "💚",
      color: "from-ministry-teal to-ministry-blue",
    },
    {
      year: "Marzo 2025",
      title: "Misión a San Judas Tadeo en Españita",
      text: "En Españita se entregaron 75 kg de alimento y 50 cobijas como apoyo directo a la comunidad.",
      image: "misiones/san-judas-espanita-marzo-2025.jpeg",
      details: [
        "La ayuda respondió a necesidades concretas de alimento y abrigo.",
        "El equipo sirvió con cercanía a personas que necesitaban acompañamiento y provisión.",
        "Esta misión amplió el alcance hacia nuevas comunidades del Estado de Tlaxcala.",
      ],
      stat: "75 kg • 50 cobijas",
      icon: "🧥",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      year: "Enero 2026",
      title: "Misión al Hospital Infantil de Tlaxcala",
      text: "Inició el patrocinio mensual a niños con insuficiencia renal en el Hospital Infantil de Tlaxcala.",
      image: "hospital-infantil/mision-hospital-enero-2026.jpeg",
      details: [
        "El ministerio comenzó a servir a niños que reciben diálisis o hemodiálisis.",
        "Se preparan kits, actividades y apoyos prácticos según necesidades aprobadas por el hospital.",
        "La misión busca llevar amor, esperanza, fé y ánimo a los niños y a sus familias.",
      ],
      stat: "Hospital Infantil",
      icon: "🏥",
      color: "from-sky-400 to-ministry-blue",
    },
    {
      year: "Marzo 2026",
      title: "Primera recaudación con venta de comida",
      text: "Se realizó una recaudación de fondos mediante venta de comida en Loma Bonita para sostener la misión.",
      image: "misiones/marzo-2026-evento.jpeg",
      details: [
        "La comunidad participó comprando alimentos y apoyando el trabajo del ministerio.",
        "La recaudación ayudó a preparar nuevos apoyos para familias y misiones.",
        "Este modelo mostró que muchas manos pequeñas pueden sostener una obra grande.",
      ],
      stat: "Loma Bonita",
      icon: "🍲",
      color: "from-yellow-400 to-amber-500",
    },
    {
      year: "Julio 2026",
      title: "5 años transformando con servicio",
      text: "El ministerio celebró cinco años de servicio con nuevas recaudaciones y atención mensual a familias.",
      image: "misiones/julio-2026-aniversario.jpeg",
      details: [
        "Se realizó una recaudación mediante venta de comida en Ocotlán.",
        "El programa domiciliar mantuvo su atención mensual a las familias.",
        "La celebración reconoció el esfuerzo de la comunidad y de quienes hacen posible el servicio.",
      ],
      stat: "5 años de servicio",
      icon: "🎉",
      color: "from-ministry-blue to-ministry-teal",
    },
  ],
  en: [
    {
      year: "Beginning",
      title: "A small beginning with a great desire to serve",
      text: "The ministry began by delivering 12 pantry packages in Loma Bonita, with the support of 3 volunteers.",
      video: "home/ministerio-inicio.mp4",
      details: [
        "The first focus was accompanying vulnerable families in Loma Bonita.",
        "Each delivery began to combine food, prayer, listening, and personal follow-up.",
        "That small beginning shaped the ministry's identity: serving Christ by serving families.",
      ],
      stat: "12 pantry packages",
      icon: "🌟",
      color: "from-ministry-teal to-ministry-blue",
    },
    {
      year: "June 2021",
      title: "English Center opens",
      text: "English Center Tlaxcala opened its doors and became one of the first support foundations for the ministry.",
      image: "home/ministerio-inicio.png",
      details: [
        "Private English classes began generating resources for pantry support.",
        "The vision was to use daily work as a concrete way to sustain the mission.",
        "From there, a structure began to grow with donors and volunteers.",
      ],
      stat: "English Center",
      icon: "📚",
      color: "from-ministry-blue to-ink",
    },
    {
      year: "July 2021",
      title: "Monthly home visits begin",
      text: "Monthly distributions began in Loma Bonita, taking pantry support directly to homes.",
      image: "home/visitas-domiciliares-inicio-julio-2021.jpeg",
      details: [
        "Families began receiving food support consistently.",
        "Each visit offered families a space to share, reflect, and receive support.",
        "Relationships with beneficiaries began to grow through trust, faith, and love.",
      ],
      stat: "Loma Bonita",
      icon: "🏠",
      color: "from-ministry-teal to-cyan-600",
    },
    {
      year: "August 2021",
      title: "Official opening of the English Center",
      text: "The official opening of the English Center strengthened the ministry's support base and brought greater visibility to the project.",
      image: "voluntarios/english-center/english-center-inauguracion-agosto-2021.jpeg",
      details: [
        "Education work and social service began walking together.",
        "The community could see that the ministry did not only give help; it wanted to sustain it.",
        "This step prepared the way for new people to join.",
      ],
      stat: "English Center",
      icon: "🎓",
      color: "from-ink to-ministry-blue",
    },
    {
      year: "October 2021",
      title: "First volunteers join",
      text: "Three volunteers formally joined the service, helping prepare and distribute pantry packages.",
      image: "voluntarios/primeras-voluntarias-octubre-2021.jpeg",
      details: [
        "The team began to move from an individual effort into a community-shaped ministry.",
        "Food preparation became more organized, careful, and collaborative.",
        "Since then, volunteer service has become an essential part of the ministry.",
      ],
      stat: "3 volunteers",
      icon: "🤝",
      color: "from-sky-400 to-ministry-blue",
    },
    {
      year: "January 2022",
      title: "First donations from the United States",
      text: "The first donations from the United States arrived, opening a new stage of international support.",
      image: "home/corazon-estados-unidos-mexico.png",
      details: [
        "The ministry began to be supported by people from different places united by one mission.",
        "Each donation helped turn generosity into real pantry packages for vulnerable families.",
        "The support network began to grow beyond the local community.",
      ],
      stat: "USA donors",
      icon: "🇺🇸",
      color: "from-ministry-blue to-ministry-teal",
    },
    {
      year: "July 2023",
      title: "First mission to Cartolandia",
      text: "The first Cartolandia mission served 47 families in collaboration with Iglesia de la Inmaculada Concepción.",
      image: "misiones/cartolandia-primera-22.jpeg",
      details: [
        "The ministry stepped beyond its first home visit route.",
        "Church collaboration made it possible to reach families with very visible needs.",
        "Cartolandia became an important mission within the ministry's growth.",
      ],
      stat: "47 families",
      icon: "🚐",
      color: "from-amber-400 to-ministry-gold",
    },
    {
      year: "August 2023",
      title: "Mission with Cáritas at San José",
      text: "The ministry supported 53 families together with Cáritas, hosted at San José Parish.",
      image: "misiones/caritas-san-jose-2023.png",
      details: [
        "The partnership helped organize delivery and care for families in the community.",
        "The service combined pantry support, presence, and collaboration with a recognized aid institution.",
        "This event showed the value of working in unity for vulnerable families.",
      ],
      stat: "53 families",
      icon: "⛪",
      color: "from-amber-400 to-amber-600",
    },
    {
      year: "December 2024",
      title: "Magical Charity Event",
      text: "A charity event was held, and the first monthly donation from Mexico was received.",
      image: "misiones/evento-magico-caridad-diciembre-2024.jpeg",
      details: [
        "The ministry began strengthening its Mexican donor network.",
        "Local generosity joined the monthly work of pantry support and accompaniment.",
        "This step helped bring more stability to the home visit program.",
      ],
      stat: "Monthly donation",
      icon: "🎄",
      color: "from-ministry-teal to-sky-500",
    },
    {
      year: "February 2025",
      title: "Mission to Cartolandia with Mensaje de Vida",
      text: "The ministry returned to Cartolandia to support 35 families in collaboration with Mensaje de Vida Church.",
      image: "misiones/cartolandia-mensaje-de-vida-febrero-2025.jpeg",
      details: [
        "The mission confirmed the need to return to communities that need follow-up.",
        "Collaboration with local churches helped identify and accompany families more closely.",
        "The ministry continued extending food, prayer, and hope in a practical way.",
      ],
      stat: "35 families",
      icon: "💚",
      color: "from-ministry-teal to-ministry-blue",
    },
    {
      year: "March 2025",
      title: "Mission to San Judas Tadeo in Españita",
      text: "In Españita, 75 kg of food and 50 blankets were delivered as direct community support.",
      image: "misiones/san-judas-espanita-marzo-2025.jpeg",
      details: [
        "The support responded to concrete food and warmth needs.",
        "The team served closely with people who needed accompaniment and provision.",
        "This mission expanded the ministry's reach into new Tlaxcala communities.",
      ],
      stat: "75 kg • 50 blankets",
      icon: "🧥",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      year: "January 2026",
      title: "Children's Hospital of Tlaxcala mission",
      text: "Monthly sponsorship began for children with kidney failure at the Children's Hospital of Tlaxcala.",
      image: "hospital-infantil/mision-hospital-enero-2026.jpeg",
      details: [
        "The ministry began serving children receiving dialysis or hemodialysis.",
        "Kits, activities, and practical support are prepared according to hospital-approved needs.",
        "The mission seeks to bring love, hope, and encouragement to children and their families.",
      ],
      stat: "Children's Hospital",
      icon: "🏥",
      color: "from-sky-400 to-ministry-blue",
    },
    {
      year: "March 2026",
      title: "First food-sale fundraiser",
      text: "A food-sale fundraiser was held in Loma Bonita to sustain the mission.",
      image: "misiones/marzo-2026-evento.jpeg",
      details: [
        "The community participated by buying food and supporting the ministry's work.",
        "The fundraiser helped prepare new support for families and missions.",
        "This model showed how many small hands can sustain a large work.",
      ],
      stat: "Loma Bonita",
      icon: "🍲",
      color: "from-yellow-400 to-amber-500",
    },
    {
      year: "July 2026",
      title: "5 years transforming through service",
      text: "The ministry celebrated five years of service with new fundraisers and monthly family support.",
      image: "misiones/julio-2026-aniversario.jpeg",
      details: [
        "A food-sale fundraiser was held in Ocotlán.",
        "The home visit program continued its monthly support for families.",
        "The celebration recognized the community and everyone who makes the service possible.",
      ],
      stat: "5 years of service",
      icon: "🎉",
      color: "from-ministry-blue to-ministry-teal",
    },
  ],
};

const ministryContextByLanguage = {
  es: [
    {
      title: "Cómo se identifican las necesidades",
      text:
        "Cada familia tiene una historia que merece ser escuchada. Nos acercamos con respeto para conocer su situación y brindar apoyo con alimento, esperanza y dignidad:",
      points: [
        "Viudez",
        "Huérfanos",
        "Discapacidad",
        "Adultos mayores abandonados",
        "Familias de escasos recursos",
        "Familias vulnerables",
        "Padecimiento crónico",
        "Indigentes",
      ],
      icon: MapPin,
    },
  ],
  en: [
    {
      title: "How needs are identified",
      text:
        "Every family has a story that deserves to be heard. We approach each one with respect, learn about its situation, and offer support with food, hope, and dignity:",
      points: [
        "Widowhood",
        "Orphaned children",
        "Disability",
        "Abandoned older adults",
        "Families with limited resources",
        "Vulnerable families",
        "Chronic illness",
        "People experiencing homelessness",
      ],
      icon: MapPin,
    },
  ],
};
// Íconos representativos de cada suceso relevante (mismo orden que ministryTimelineByLanguage).
const timelineIcons = [
  Sprout, // Inicio
  BookOpen, // Apertura English Center
  HomeIcon, // Visitas domiciliares mensuales
  GraduationCap, // Inauguración English Center
  Users, // Primeras voluntarias
  Globe, // Donaciones de Estados Unidos
  Church, // Julio 2023
  HandHeart, // Agosto 2023
  HeartHandshake, // Diciembre 2024
  MapPin, // Febrero 2025
  PackageCheck, // Marzo 2025
  HeartPulse, // Hospital Infantil
  Sparkles, // Marzo 2026
  Award, // 5 años de servicio
];

export default function Home() {
  const { dictionary, language, t } = useLanguage();
  const copy = homePageCopy[language] ?? homePageCopy.es;
  const ministryTimeline = ministryTimelineByLanguage[language] ?? ministryTimelineByLanguage.es;
  const ministryContext = ministryContextByLanguage[language] ?? ministryContextByLanguage.es;
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [activeObjectiveTab, setActiveObjectiveTab] = useState("mission");
  const [openContextIndex, setOpenContextIndex] = useState(0);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [activeHeroPhotoIndex, setActiveHeroPhotoIndex] = useState(0);
  const timelinePillRefs = useRef([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroPhotoIndex((index) => (index + 1) % heroGalleryPhotos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isMapFullscreen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMapFullscreen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMapFullscreen]);

  const activeTimelineItem = ministryTimeline[activeTimelineIndex] ?? ministryTimeline[0];
  const ActiveTimelineIcon = timelineIcons[activeTimelineIndex % timelineIcons.length];
  const timelineProgress = ((activeTimelineIndex + 1) / ministryTimeline.length) * 100;

  useEffect(() => {
    const activeButton = timelinePillRefs.current[activeTimelineIndex];
    const container = activeButton?.parentElement;
    if (activeButton && container) {
      const targetLeft =
        activeButton.offsetLeft -
        container.clientWidth / 2 +
        activeButton.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  }, [activeTimelineIndex]);

  const goToPreviousTimelineItem = () => {
    setActiveTimelineIndex((current) => (current === 0 ? ministryTimeline.length - 1 : current - 1));
  };

  const goToNextTimelineItem = () => {
    setActiveTimelineIndex((current) => (current === ministryTimeline.length - 1 ? 0 : current + 1));
  };

  return (
    <>
      {/* ========== HERO DIVIDIDO DE ALTO IMPACTO (ROSTROS COMPLETOS Y NÍTIDOS) ========== */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-blue/30 blur-3xl" />

        <div className="section-shell relative z-10 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="motion-rise">
              <span className="kicker kicker-light">{t("home.heroEyebrow")}</span>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                {t("home.heroTitle")}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("home.heroText")}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#areas-ministerio" className="btn-primary">
                  {t("home.heroCta")}
                  <ArrowRight size={17} />
                </a>
                <a href="#historia" className="btn-ghost-light">
                  {t("home.historyTitle")}
                  <ChevronDown size={18} />
                </a>
              </div>
            </div>

            {/* Collage fotográfico con dimensiones uniformes */}
            <div className="grid grid-cols-12 items-center gap-4">
              <figure className="photo-frame col-span-7 h-[350px] w-full ring-2 ring-white/15 sm:h-[460px]">
                <img
                  key={heroGalleryPhotos[activeHeroPhotoIndex]}
                  src={asset(heroGalleryPhotos[activeHeroPhotoIndex])}
                  alt={language === "en" ? "Family receiving support from the ministry" : "Familia recibe apoyo del ministerio"}
                  className="gallery-photo-enter h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white/95 sm:text-sm">
                  {copy.storyCaption}
                </figcaption>
              </figure>

              <div className="col-span-5 grid gap-4">
                <figure className="photo-frame h-[167px] w-full ring-2 ring-white/15 sm:h-[222px]">
                  <img
                    key={heroGalleryPhotos[(activeHeroPhotoIndex + 1) % heroGalleryPhotos.length]}
                    src={asset(heroGalleryPhotos[(activeHeroPhotoIndex + 1) % heroGalleryPhotos.length])}
                    alt={language === "en" ? "Sharing with older adults" : "Compartiendo con adultos mayores"}
                    className="gallery-photo-enter h-full w-full object-cover object-top"
                  />
                </figure>
                <figure className="photo-frame h-[167px] w-full ring-2 ring-white/15 sm:h-[222px]">
                  <img
                    key={heroGalleryPhotos[(activeHeroPhotoIndex + 2) % heroGalleryPhotos.length]}
                    src={asset(heroGalleryPhotos[(activeHeroPhotoIndex + 2) % heroGalleryPhotos.length])}
                    alt={language === "en" ? "Home visit in Tlaxcala" : "Visita domiciliar en Tlaxcala"}
                    className="gallery-photo-enter h-full w-full object-cover object-top"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/15 pt-8">
            <ImpactStats items={dictionary.home.stats} variant="dark" />
          </div>
        </div>
      </section>

      {/* ========== MAPA PROTAGONISTA: CADA COMUNIDAD A LA QUE LLEGAMOS ========== */}
      <div id="area-servicio" className="scroll-mt-28" />
      <section
        id="zonas-de-apoyo"
        className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-[#0A1E3C] via-[#0D2B52] to-sand py-16 sm:py-24"
      >
        <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker kicker-light justify-center">
              <MapPin size={14} />
              {language === "en" ? "Our reach across Tlaxcala" : "Nuestro alcance en Tlaxcala"}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {language === "en" ? "Every community we support" : "Cada comunidad a la que llegamos"}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {language === "en"
                ? "This map brings together all ministry support areas across Tlaxcala, including home visits and mission communities."
                : "Este mapa reúne todas las zonas de apoyo del ministerio en Tlaxcala, incluidas las visitas domiciliares y las comunidades donde realizamos misiones."}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {[
                { icon: HomeIcon, label: language === "en" ? "Home visits" : "Visitas domiciliares" },
                { icon: Church, label: language === "en" ? "Mission communities" : "Comunidades de misión" },
                { icon: HeartPulse, label: language === "en" ? "Children's Hospital" : "Hospital Infantil" },
              ].map((chip) => {
                const ChipIcon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white ring-1 ring-white/20 backdrop-blur sm:text-sm"
                  >
                    <ChipIcon size={15} className="text-ember-light" />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          <figure className="reveal mt-12 overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_40px_100px_-30px_rgba(10,30,60,0.65)] ring-1 ring-white/30 sm:p-4">
            <button
              type="button"
              onClick={() => setIsMapFullscreen(true)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[1.5rem] text-left"
              aria-label={language === "en" ? "Open full-size map" : "Abrir mapa en tamaño completo"}
            >
              <img
                src={asset("home/mapa-zonas-apoyo-yauhquemehcan.png")}
                alt={
                  language === "en"
                    ? "Map of all Trumpet Call Ministries support areas in Tlaxcala, including mission communities"
                    : "Mapa de todas las zonas de apoyo de Trumpet Call Ministries en Tlaxcala, incluidas las comunidades de misión"
                }
                className="h-auto w-full transition duration-700 group-hover:scale-[1.02]"
                decoding="async"
              />
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur transition group-hover:bg-ember">
                <Maximize2 size={13} />
                {language === "en" ? "View full size" : "Ver en grande"}
              </span>
            </button>
            <figcaption className="flex flex-wrap items-center justify-center gap-2 px-3 pb-1 pt-4 text-center text-sm font-medium text-slate-500">
              <MapPin size={15} className="text-ember" />
              {language === "en"
                ? "Support areas and mission communities throughout Tlaxcala."
                : "Zonas de apoyo y comunidades de misión en Tlaxcala."}
            </figcaption>
          </figure>
        </div>
      </section>

      {isMapFullscreen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink/95 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setIsMapFullscreen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={
              language === "en"
                ? "Support areas map in Tlaxcala"
                : "Mapa de zonas de apoyo en Tlaxcala"
            }
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMapFullscreen(false);
              }}
              className="absolute right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2.5 text-xs font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-ember-dark sm:right-6 sm:top-6 sm:text-sm"
              aria-label={language === "en" ? "Close map" : "Cerrar mapa"}
            >
              <X size={18} strokeWidth={2.5} />
              <span>{language === "en" ? "Close" : "Cerrar"}</span>
            </button>

            <div
              className="relative flex max-h-[85vh] w-full max-w-6xl items-center justify-center overflow-auto rounded-2xl bg-white p-2 shadow-2xl sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={asset("home/mapa-zonas-apoyo-yauhquemehcan.png")}
                alt={
                  language === "en"
                    ? "Map of all Trumpet Call Ministries support areas in Tlaxcala"
                    : "Mapa de todas las zonas de apoyo de Trumpet Call Ministries en Tlaxcala"
                }
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          </div>,
          document.body
        )}

      {/* ========== ÁREAS DEL MINISTERIO (TARJETAS FOTOGRÁFICAS) ========== */}
      <section id="areas-ministerio" className="section-shell scroll-mt-28 bg-white">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="kicker">{copy.areasEyebrow}</span>
            <h2 className="title-lg mt-3">{t("home.gridTitle")}</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">{t("home.gridText")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {dashboardItems.map((item, index) => {
            const Icon = item.icon;
            const spanClass = index < 2 ? "lg:col-span-3 h-[420px] sm:h-[460px]" : "lg:col-span-2 h-[380px] sm:h-[420px]";

            return (
              <Link
                key={item.key}
                to={item.to}
                className={`photo-frame group relative flex flex-col justify-end p-7 text-white ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={t(`cards.${item.key}.title`)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent transition duration-500 group-hover:from-ink" />

                <div className="relative z-10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ember text-white shadow-md">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    {t(`cards.${item.key}.title`)}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-sm leading-6 text-white/85">
                    {t(`cards.${item.key}.text`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                    {t("common.learnMore")}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ========== OBJETIVO, MISIÓN Y VISIÓN (CON PESTAÑAS PARA NO SATURAR) ========== */}
      <section id="objetivo" className="section-shell scroll-mt-28 bg-sand">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <figure className="photo-frame h-[350px] w-full sm:h-[460px]">
              <img
                src={
                  activeObjectiveTab === "mission"
                    ? asset("home/objective-mission.jpeg")
                    : asset("home/objective-vision.jpeg")
                }
                alt={activeObjectiveTab === "mission" ? copy.mission : copy.vision}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <div className="photo-overlay" />
              <figcaption className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  {t("home.objectiveTitle")}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-white">
                  {activeObjectiveTab === "mission" ? copy.mission : copy.vision}
                </p>
              </figcaption>
            </figure>

            <div className="soft-card">
              <span className="kicker">{t("home.objectiveTitle")}</span>

              <div className="mt-5 inline-flex rounded-full bg-slate-100 p-1.5">
                <button
                  type="button"
                  onClick={() => setActiveObjectiveTab("mission")}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
                    activeObjectiveTab === "mission"
                      ? "bg-ember text-white shadow-sm"
                      : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {copy.mission}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveObjectiveTab("vision")}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
                    activeObjectiveTab === "vision"
                      ? "bg-ember text-white shadow-sm"
                      : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {copy.vision}
                </button>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold text-ink">
                {activeObjectiveTab === "mission" ? copy.mission : copy.vision}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {activeObjectiveTab === "mission" ? t("home.missionText") : t("home.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTEXTO DEL MINISTERIO (DIVULGACIÓN PROGRESIVA) ========== */}
      <section id="como-se-sostiene" className="section-shell scroll-mt-28 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="kicker">{copy.workEyebrow}</span>
            <h2 className="title-lg mt-3">{copy.workTitle}</h2>
            <p className="lead mt-4">{copy.workText}</p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl">
            {ministryContext.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openContextIndex === index;

              return (
                <article key={item.title} className="soft-card mx-auto w-full text-center">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>

                    {isOpen && (
                      <ul className="mt-5 grid gap-x-8 gap-y-2.5 border-t border-slate-100 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-center justify-center gap-3 text-center text-sm leading-6 text-slate-700">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenContextIndex(isOpen ? -1 : index)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ember hover:text-ember-dark"
                  >
                    {isOpen ? copy.readLess : copy.readMore}
                    <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[1.75rem] bg-gradient-to-r from-ink via-[#0D2B52] to-ink px-6 py-10 text-center text-white shadow-soft sm:px-12">
            <p className="mx-auto max-w-3xl font-display text-2xl italic leading-snug text-white/95 sm:text-3xl">
              {language === "en"
                ? "\u201cCarry each other\u2019s burdens, and in this way you will fulfill the law of Christ.\u201d \u2014 Galatians 6:2"
                : "\u201cSobrellevad los unos las cargas de los otros, y cumplid as\u00ed la ley de Cristo.\u201d \u2014 G\u00e1latas 6:2"}
            </p>
          </div>
        </div>
      </section>

      {/* ========== HISTORIA / LÍNEA DEL TIEMPO CON FOTOGRAFÍAS COMPLETAS ========== */}
      <section id="historia" className="section-shell scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="kicker">{copy.historyEyebrow}</span>
              <h2 className="title-lg mt-3">{t("home.historyTitle")}</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{copy.historyIntro}</p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={goToPreviousTimelineItem}
                aria-label={language === "en" ? "Previous key event" : "Suceso relevante anterior"}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink transition hover:border-ember hover:text-ember"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="px-3 text-sm font-bold text-slate-500">
                {activeTimelineIndex + 1} / {ministryTimeline.length}
              </span>
              <button
                type="button"
                onClick={goToNextTimelineItem}
                aria-label={language === "en" ? "Next key event" : "Siguiente suceso relevante"}
                className="grid h-11 w-11 place-items-center rounded-full bg-ember text-white transition hover:bg-ember-dark"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cinta horizontal de fechas con íconos */}
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-3">
            {ministryTimeline.map((item, index) => {
              const isActive = index === activeTimelineIndex;
              const PillIcon = timelineIcons[index % timelineIcons.length];
              return (
                <button
                  key={item.year}
                  ref={(el) => {
                    timelinePillRefs.current[index] = el;
                  }}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTimelineIndex(index)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition ${
                    isActive
                      ? "bg-ember text-white shadow-md shadow-ember/25"
                      : "bg-slate-100 text-slate-600 hover:bg-ministry-sky hover:text-ministry-blue"
                  }`}
                >
                  <PillIcon size={14} />
                  {item.year}
                </button>
              );
            })}
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ministry-blue via-ministry-teal to-ministry-gold transition-all duration-500"
              style={{ width: `${timelineProgress}%` }}
            />
          </div>

          {/* Tarjeta del suceso activo con fotografía o video */}
          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
            <div className="relative flex h-[520px] flex-col gap-5 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] p-5 text-white shadow-photo sm:h-[680px] sm:p-7 lg:col-span-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-ministry-teal/20 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/15 backdrop-blur">
                  {activeTimelineItem.stat}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-ember-light">
                  {language === "en" ? "Key event" : "Suceso relevante"} {String(activeTimelineIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative z-10 h-[260px] w-full sm:h-[440px]">
                {activeTimelineItem.video ? (
                  <video
                    className="h-full w-full rounded-2xl bg-black object-contain"
                    controls
                    preload="metadata"
                    playsInline
                    aria-label={language === "en" ? "Ministry beginnings video" : "Video de los inicios del ministerio"}
                  >
                    <source src={asset(activeTimelineItem.video)} type="video/mp4" />
                    {language === "en" ? "Your browser does not support video playback." : "Tu navegador no admite la reproducción de video."}
                  </video>
                ) : activeTimelineItem.image ? (
                  <img
                    src={asset(activeTimelineItem.image)}
                    alt={language === "en" ? "Ministry community and service" : "Comunidad y servicio del ministerio"}
                    className="h-full w-full rounded-2xl bg-white object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-2xl">
                    <ActiveTimelineIcon aria-hidden="true" size={88} strokeWidth={1.25} className="text-white/70" />
                  </div>
                )}
              </div>

              <div className="relative z-10 flex items-end justify-between gap-4">
                <p className="font-display text-4xl font-semibold leading-none text-white sm:text-6xl">
                  {activeTimelineItem.year}
                </p>
              </div>
            </div>

            <div className="soft-card flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                  {activeTimelineItem.year}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {activeTimelineItem.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{activeTimelineItem.text}</p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {activeTimelineItem.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
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

      {/* (El mapa principal de cobertura se movió justo debajo de la portada como protagonista.) */}

      {/* ========== LLAMADO EMOCIONAL FINAL (SIN IMAGEN CORTADA Y SIN REPETIR "DONAR AHORA") ========== */}
      <section className="section-shell bg-cream">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#0D2B52] to-ink text-white shadow-photo">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div>
              <span className="kicker kicker-light">{copy.helpQuestion}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {copy.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">{copy.ctaText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/donaciones" className="btn-primary">
                  <HandHeart size={17} />
                  {language === "en" ? "Donate" : "Donar"}
                </Link>
                <Link to="/misiones" className="btn-ghost-light">
                  {language === "en" ? "See community missions" : "Ver misiones comunitarias"}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <figure className="photo-frame h-[310px] w-full ring-2 ring-white/15 sm:h-[380px]">
              <img
                src={asset("home/ninos-reciben-despensa.jpeg")}
                alt={language === "en" ? "Children receiving a food pantry donation" : "Niños reciben una despensa"}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
