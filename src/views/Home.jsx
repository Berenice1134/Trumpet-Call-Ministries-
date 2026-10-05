import {
  FileText,
  HandHeart,
  HeartPulse,
  Home as HomeIcon,
  Sparkles,
  Users,
  ArrowRight,
  ChevronDown,
  MapPin,
  Star,
  Target,
  BookOpen,
  Heart,
  HelpingHand,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  Flame,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard.jsx";
import ImpactStats from "../components/ImpactStats.jsx";
import InfoCard from "../components/InfoCard.jsx";
import { useLanguage } from "../context/useLanguage.js";

const dashboardItems = [
  {
    to: "/servicio-domiciliar",
    key: "homeCare",
    icon: HomeIcon,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-200",
  },
  {
    to: "/misiones",
    key: "hospital",
    icon: HeartPulse,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-200",
  },
  {
    to: "/voluntarios",
    key: "volunteers",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-200",
  },
  {
    to: "/donaciones",
    key: "donations",
    icon: HandHeart,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-200",
  },
  {
    to: "/reportes",
    key: "reports",
    icon: FileText,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-200",
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
      "Actualmente el ministerio apoya comunidades de Tlaxcala mediante visitas domiciliares, despensas mensuales y acompañamiento espiritual.",
    servicePlaceholder:
      "Loma Bonita, El Sabinal, Tlacomulco, El Alto, Texcacoac, Contla de Juan Cuamatzi, Tlaxco, Tizostoc, Tixatlan, Zacatelco, Texoloc y San Diego Metepec.",
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
      "The ministry currently supports communities in Tlaxcala through home visits, monthly pantry support, and spiritual accompaniment.",
    servicePlaceholder:
      "Loma Bonita, El Sabinal, Tlacomulco, El Alto, Texcacoac, Contla de Juan Cuamatzi, Tlaxco, Tizostoc, Tixatlan, Zacatelco, Texoloc, and San Diego Metepec.",
  },
};

const ministryTimelineByLanguage = {
  es: [
    {
      year: "Inicio",
      title: "Un comienzo pequeño con una carga grande en el corazón",
      text: "El ministerio inició con 12 familias, una colonia y 3 voluntarias dispuestas a servir con constancia.",
      details: [
        "El primer enfoque fue acompañar familias vulnerables de Loma Bonita.",
        "Cada entrega comenzó a unir alimento, oración, escucha y seguimiento personal.",
        "Ese pequeño inicio marcó la identidad del ministerio: servir a Cristo sirviendo a las familias.",
      ],
      stat: "12 familias",
      icon: "🌟",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      year: "Junio 2021",
      title: "Apertura de English Center",
      text: "English Center Tlaxcala abrió sus puertas y se convirtió en una de las primeras bases de sostenimiento para el ministerio.",
      details: [
        "Las clases particulares de inglés comenzaron a generar recursos para apoyar despensas.",
        "La visión fue usar el trabajo diario como una forma concreta de sostener la misión.",
        "Desde ahí se empezó a sembrar una estructura que después crecería con donadores y voluntarios.",
      ],
      stat: "English Center",
      icon: "📚",
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "Julio 2021",
      title: "Inicio de visitas domiciliares mensuales",
      text: "Comenzaron las distribuciones mensuales en Loma Bonita, llevando despensas directamente a los hogares.",
      details: [
        "Las familias empezaron a recibir apoyo alimentario de manera constante.",
        "Cada visita incluyó acompañamiento espiritual, reflexión bíblica y oración.",
        "La relación con los beneficiarios comenzó a construirse desde la confianza, la fe y el amor.",
      ],
      stat: "Loma Bonita",
      icon: "🏠",
      color: "from-teal-400 to-teal-600",
    },
    {
      year: "Agosto 2021",
      title: "Inauguración oficial del primer English Center",
      text: "La inauguración oficial del primer English Center fortaleció el soporte del ministerio y dio visibilidad al proyecto.",
      details: [
        "El trabajo educativo y el servicio social empezaron a caminar juntos.",
        "La comunidad pudo ver que el ministerio no solo entregaba ayuda, sino que buscaba sostenerla.",
        "Este paso preparó el camino para nuevas personas dispuestas a sumarse.",
      ],
      stat: "Primer centro",
      icon: "🎓",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      year: "Octubre 2021",
      title: "Se incorporan las primeras voluntarias",
      text: "Tres voluntarias se integraron formalmente al servicio, ayudando a preparar y repartir las despensas.",
      details: [
        "El equipo dejó de ser un esfuerzo aislado y comenzó a tomar forma comunitaria.",
        "La preparación de alimentos se hizo con más orden, cuidado y colaboración.",
        "Desde entonces, el voluntariado se volvió una parte esencial del ministerio.",
      ],
      stat: "3 voluntarias",
      icon: "🤝",
      color: "from-purple-400 to-purple-600",
    },
    {
      year: "Noviembre 2021",
      title: "Primeras donaciones desde Estados Unidos",
      text: "Llegaron las primeras donaciones provenientes de Estados Unidos, abriendo una nueva etapa de apoyo internacional.",
      details: [
        "El ministerio comenzó a ser sostenido por personas de distintos lugares unidas por una misma misión.",
        "Cada donación ayudó a convertir generosidad en despensas reales para familias vulnerables.",
        "La red de apoyo empezó a crecer más allá de la comunidad local.",
      ],
      stat: "Donadores USA",
      icon: "🇺🇸",
      color: "from-red-400 to-red-600",
    },
    {
      year: "Julio 2023",
      title: "Primera misión a Cartolandia",
      text: "Se realizó la primera misión a Cartolandia, apoyando a 47 familias en colaboración con la Iglesia de la Inmaculada Concepción.",
      details: [
        "El ministerio salió a servir fuera de su ruta inicial.",
        "La colaboración con iglesias permitió llegar a familias con necesidades muy visibles.",
        "Cartolandia se convirtió en una misión importante dentro del crecimiento del ministerio.",
      ],
      stat: "47 familias",
      icon: "🚐",
      color: "from-orange-400 to-orange-600",
    },
    {
      year: "Agosto 2023",
      title: "Misión con Cáritas en San José",
      text: "Se apoyó a 53 familias junto con Cáritas, teniendo como sede la Parroquia de San José.",
      details: [
        "La alianza permitió organizar mejor la entrega y la atención a familias de la comunidad.",
        "El servicio combinó despensas, presencia y colaboración con una institución de ayuda reconocida.",
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
      details: [
        "El ministerio comenzó a fortalecer también su red de donadores mexicanos.",
        "La generosidad local se sumó al trabajo mensual de despensas y acompañamiento.",
        "Este paso ayudó a dar más estabilidad al programa domiciliar.",
      ],
      stat: "Donación mensual",
      icon: "🎄",
      color: "from-rose-400 to-rose-600",
    },
    {
      year: "Febrero 2025",
      title: "Misión a Cartolandia con Mensaje de Vida",
      text: "Se regresó a Cartolandia para apoyar a 35 familias en colaboración con la Iglesia Mensaje de Vida.",
      details: [
        "La misión confirmó la necesidad de volver a comunidades que requieren seguimiento.",
        "La colaboración con iglesias locales ayudó a identificar y acompañar mejor a las familias.",
        "El ministerio siguió extendiendo alimento, oración y esperanza de forma práctica.",
      ],
      stat: "35 familias",
      icon: "💚",
      color: "from-green-400 to-green-600",
    },
    {
      year: "Marzo 2025",
      title: "Misión a San Judas Tadeo en Españita",
      text: "En Españita se entregaron 75 kg de alimento y 50 cobijas como apoyo directo a la comunidad.",
      details: [
        "La ayuda respondió a necesidades concretas de alimento y abrigo.",
        "El equipo sirvió con cercanía a personas que necesitaban acompañamiento y provisión.",
        "Esta misión amplió el alcance hacia nuevas comunidades de Tlaxcala.",
      ],
      stat: "75 kg • 50 cobijas",
      icon: "🧥",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      year: "Enero 2026",
      title: "Misión al Hospital Infantil de Tlaxcala",
      text: "Inició el patrocinio mensual a niños con insuficiencia renal en el Hospital Infantil de Tlaxcala.",
      details: [
        "El ministerio comenzó a servir a niños que reciben diálisis o hemodiálisis.",
        "Se preparan kits, actividades y apoyos prácticos según necesidades aprobadas por el hospital.",
        "La misión busca llevar amor, esperanza y ánimo a los niños y a sus familias.",
      ],
      stat: "Hospital Infantil",
      icon: "🏥",
      color: "from-pink-400 to-pink-600",
    },
    {
      year: "Marzo 2026",
      title: "Primera recaudación con venta de comida",
      text: "Se realizó una recaudación de fondos mediante venta de comida en Loma Bonita para sostener la misión.",
      details: [
        "La comunidad participó comprando alimentos y apoyando el trabajo del ministerio.",
        "La recaudación ayudó a preparar nuevos apoyos para familias y misiones.",
        "Este modelo mostró que muchas manos pequeñas pueden sostener una obra grande.",
      ],
      stat: "Loma Bonita",
      icon: "🍲",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      year: "Julio 2026",
      title: "5 años transformando con servicio",
      text: "El ministerio celebró cinco años de servicio con nuevas recaudaciones y atención mensual a familias.",
      details: [
        "Se realizó una recaudación mediante venta de comida en Ocotlán.",
        "El programa domiciliar atendió a 35 familias al mes.",
        "El ministerio reportó más de 80 familias, 10 comunidades y 48 voluntarios.",
      ],
      stat: "+80 familias",
      icon: "🎉",
      color: "from-fuchsia-400 to-fuchsia-600",
    },
  ],
  en: [
    {
      year: "Beginning",
      title: "A small beginning with a great burden in the heart",
      text: "The ministry began with 12 families, one neighborhood, and 3 volunteers willing to serve faithfully.",
      details: [
        "The first focus was accompanying vulnerable families in Loma Bonita.",
        "Each delivery began to combine food, prayer, listening, and personal follow-up.",
        "That small beginning shaped the ministry's identity: serving Christ by serving families.",
      ],
      stat: "12 beneficiaries",
      icon: "🌟",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      year: "June 2021",
      title: "English Center opens",
      text: "English Center Tlaxcala opened its doors and became one of the first support foundations for the ministry.",
      details: [
        "Private English classes began generating resources for pantry support.",
        "The vision was to use daily work as a concrete way to sustain the mission.",
        "From there, a structure began to grow with donors and volunteers.",
      ],
      stat: "English Center",
      icon: "📚",
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "July 2021",
      title: "Monthly home visits begin",
      text: "Monthly distributions began in Loma Bonita, taking pantry support directly to homes.",
      details: [
        "Families began receiving food support consistently.",
        "Each visit included spiritual accompaniment, Bible reflection, and prayer.",
        "Relationships with beneficiaries began to grow through trust, faith, and love.",
      ],
      stat: "Loma Bonita",
      icon: "🏠",
      color: "from-teal-400 to-teal-600",
    },
    {
      year: "August 2021",
      title: "Official opening of the first English Center",
      text: "The official opening strengthened the ministry's support base and gave visibility to the service project.",
      details: [
        "Education work and social service began walking together.",
        "The community could see that the ministry did not only give help; it wanted to sustain it.",
        "This step prepared the way for new people to join.",
      ],
      stat: "First center",
      icon: "🎓",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      year: "October 2021",
      title: "First volunteers join",
      text: "Three volunteers formally joined the service, helping prepare and distribute pantry packages.",
      details: [
        "The team began to move from an individual effort into a community-shaped ministry.",
        "Food preparation became more organized, careful, and collaborative.",
        "Since then, volunteer service has become an essential part of the ministry.",
      ],
      stat: "3 volunteers",
      icon: "🤝",
      color: "from-purple-400 to-purple-600",
    },
    {
      year: "November 2021",
      title: "First donations from the United States",
      text: "The first donations from the United States arrived, opening a new stage of international support.",
      details: [
        "The ministry began to be supported by people from different places united by one mission.",
        "Each donation helped turn generosity into real pantry packages for vulnerable families.",
        "The support network began to grow beyond the local community.",
      ],
      stat: "USA donors",
      icon: "🇺🇸",
      color: "from-red-400 to-red-600",
    },
    {
      year: "July 2023",
      title: "First mission to Cartolandia",
      text: "The first Cartolandia mission served 47 families in collaboration with Iglesia de la Inmaculada Concepcion.",
      details: [
        "The ministry stepped beyond its first home visit route.",
        "Church collaboration made it possible to reach families with very visible needs.",
        "Cartolandia became an important mission within the ministry's growth.",
      ],
      stat: "47 families",
      icon: "🚐",
      color: "from-orange-400 to-orange-600",
    },
    {
      year: "August 2023",
      title: "Mission with Caritas at San Jose",
      text: "The ministry supported 53 families together with Caritas, hosted at San Jose Parish.",
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
      details: [
        "The ministry began strengthening its Mexican donor network.",
        "Local generosity joined the monthly work of pantry support and accompaniment.",
        "This step helped bring more stability to the home visit program.",
      ],
      stat: "Monthly donor",
      icon: "🎄",
      color: "from-rose-400 to-rose-600",
    },
    {
      year: "February 2025",
      title: "Mission to Cartolandia with Mensaje de Vida",
      text: "The ministry returned to Cartolandia to support 35 families in collaboration with Mensaje de Vida Church.",
      details: [
        "The mission confirmed the need to return to communities that need follow-up.",
        "Collaboration with local churches helped identify and accompany families more closely.",
        "The ministry continued extending food, prayer, and hope in a practical way.",
      ],
      stat: "35 families",
      icon: "💚",
      color: "from-green-400 to-green-600",
    },
    {
      year: "March 2025",
      title: "Mission to San Judas Tadeo in Espanita",
      text: "In Espanita, 75 kg of food and 50 blankets were delivered as direct community support.",
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
      details: [
        "The ministry began serving children receiving dialysis or hemodialysis.",
        "Kits, activities, and practical support are prepared according to hospital-approved needs.",
        "The mission seeks to bring love, hope, and encouragement to children and their families.",
      ],
      stat: "Children's Hospital",
      icon: "🏥",
      color: "from-pink-400 to-pink-600",
    },
    {
      year: "March 2026",
      title: "First food-sale fundraiser",
      text: "A food-sale fundraiser was held in Loma Bonita to sustain the mission.",
      details: [
        "The community participated by buying food and supporting the ministry's work.",
        "The fundraiser helped prepare new support for families and missions.",
        "This model showed how many small hands can sustain a large work.",
      ],
      stat: "Loma Bonita",
      icon: "🍲",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      year: "July 2026",
      title: "5 years transforming through service",
      text: "The ministry celebrated five years of service with new fundraisers and monthly family support.",
      details: [
        "A food-sale fundraiser was held in Ocotlan.",
        "The home visit program served 35 families per month.",
        "The ministry reported more than 80 families, 10 communities, and 48 volunteers.",
      ],
      stat: "80+ families",
      icon: "🎉",
      color: "from-fuchsia-400 to-fuchsia-600",
    },
  ],
};

const beneficiariesByLanguage = {
  es: [
    "Viudas",
    "Huérfanos",
    "Personas con discapacidad",
    "Adultos mayores solos o abandonados",
    "Familias de escasos recursos",
    "Familias vulnerables",
    "Personas con padecimiento crónico o terminal",
    "Personas sin hogar o en crisis temporal",
  ],
  en: [
    "Widows",
    "Orphans",
    "People with disabilities",
    "Older adults who are alone or abandoned",
    "Low-income families",
    "Vulnerable families",
    "People with chronic or terminal illness",
    "People without housing or in temporary crisis",
  ],
};

const supportAreasByLanguage = {
  es: [
    {
      title: "Clases particulares de inglés",
      text: "English Center Tlaxcala ayuda a sostener el ministerio y fue parte del inicio de este proyecto de servicio.",
      icon: BookOpen,
    },
    {
      title: "Donadores mexicanos y extranjeros",
      text: "Cada donación se transforma en despensa, kit, calzado, ropa adaptada o apoyo práctico para una familia.",
      icon: HandHeart,
    },
    {
      title: "Voluntarios de corazón",
      text: "Estudiantes, padres, vecinos, iglesias, grupos particulares y beneficiarios ayudan a empacar y repartir.",
      icon: Users,
    },
  ],
  en: [
    {
      title: "Private English classes",
      text: "English Center Tlaxcala helps sustain the ministry and was part of the beginning of this service project.",
      icon: BookOpen,
    },
    {
      title: "Mexican and international donors",
      text: "Every donation becomes a pantry package, kit, footwear, adapted clothing, or practical support for a family.",
      icon: HandHeart,
    },
    {
      title: "Wholehearted volunteers",
      text: "Students, parents, neighbors, churches, private groups, and beneficiaries help pack and distribute support.",
      icon: Users,
    },
  ],
};

const ministryContextByLanguage = {
  es: [
    {
      title: "Organización y sostenimiento",
      text:
        "Trumpet Call Ministries México comenzó en Tlaxcala bajo la dirección de Andrea Lee Byrn. Desde julio de 2021 inició la distribución mensual de despensas a familias necesitadas, uniendo apoyo alimentario con acompañamiento espiritual.",
      points: [
        "La primera distribución apoyó a 12 familias.",
        "English Center Tlaxcala ayuda a sostener la compra de alimentos.",
        "También se reciben donaciones de México y Estados Unidos.",
      ],
      icon: HelpingHand,
    },
    {
      title: "Cómo se identifican las necesidades",
      text:
        "El ministerio trabaja con delegaciones, iglesias locales, vecinos y amigos para identificar familias que podrían beneficiarse del apoyo. Después se realiza una visita domiciliar para confirmar la necesidad y conocer mejor la situación familiar.",
      points: [
        "Se busca acompañar a quienes no siempre reciben apoyo gubernamental.",
        "Las visitas permiten escuchar, orientar y conectar con recursos disponibles.",
        "El proceso acerca al ministerio a las familias con mayor vulnerabilidad.",
      ],
      icon: MapPin,
    },
    {
      title: "La realidad de muchas familias",
      text:
        "El material institucional describe una necesidad grande de alimento y esperanza en Tlaxcala. Muchas familias enfrentan enfermedades, abandono, pérdida de empleo, falta de apoyo familiar o crisis económicas que se han prolongado desde la pandemia.",
      points: [
        "Adultos mayores, viudas y personas con enfermedades graves.",
        "Madres solteras y familias cuidando niños o familiares vulnerables.",
        "Personas con discapacidad o crisis temporales sin apoyo suficiente.",
      ],
      icon: HeartPulse,
    },
  ],
  en: [
    {
      title: "Organization and support",
      text:
        "Trumpet Call Ministries Mexico began in Tlaxcala under the direction of Andrea Lee Byrn. Since July 2021, it has distributed monthly food pantry support to families in need, combining food assistance with spiritual care.",
      points: [
        "The first distribution supported 12 families.",
        "English Center Tlaxcala helps fund food purchases.",
        "Donations are also received from Mexico and the United States.",
      ],
      icon: HelpingHand,
    },
    {
      title: "How needs are identified",
      text:
        "The ministry works with neighborhood delegations, local churches, neighbors, and friends to identify families who may benefit from support. A home visit then helps confirm the need and understand each family's situation more personally.",
      points: [
        "The ministry seeks to support those who do not always receive government aid.",
        "Visits create space to listen, guide, and connect families with available resources.",
        "This process brings the ministry close to the most vulnerable families.",
      ],
      icon: MapPin,
    },
    {
      title: "The reality many families face",
      text:
        "The institutional material describes a great need for food and hope in Tlaxcala. Many families face illness, abandonment, job loss, lack of family support, or economic crises that have continued since the pandemic.",
      points: [
        "Older adults, widows, and people with serious illnesses.",
        "Single mothers and families caring for vulnerable children or relatives.",
        "People with disabilities or temporary crises without enough support.",
      ],
      icon: HeartPulse,
    },
  ],
};

export default function Home() {
  const { dictionary, language, t } = useLanguage();
  const copy = homePageCopy[language] ?? homePageCopy.es;
  const ministryTimeline = ministryTimelineByLanguage[language] ?? ministryTimelineByLanguage.es;
  const beneficiaries = beneficiariesByLanguage[language] ?? beneficiariesByLanguage.es;
  const supportAreas = supportAreasByLanguage[language] ?? supportAreasByLanguage.es;
  const ministryContext = ministryContextByLanguage[language] ?? ministryContextByLanguage.es;
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const activeTimelineItem = ministryTimeline[activeTimelineIndex] ?? ministryTimeline[0];
  const timelineProgress = ((activeTimelineIndex + 1) / ministryTimeline.length) * 100;

  const goToPreviousTimelineItem = () => {
    setActiveTimelineIndex((current) => (current === 0 ? ministryTimeline.length - 1 : current - 1));
  };

  const goToNextTimelineItem = () => {
    setActiveTimelineIndex((current) => (current === ministryTimeline.length - 1 ? 0 : current + 1));
  };

  const getActiveGradient = () => {
    return activeTimelineItem.color || "from-amber-400 to-amber-600";
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <img
            src="/assets/home/home-hero-opening.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/80 to-violet-950/90" />
          
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="section-shell relative w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="motion-rise space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
                  </span>
                  <Sparkles size={14} className="text-amber-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  {t("home.heroEyebrow")}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-white to-blue-100 bg-clip-text text-transparent">
                  {t("home.heroTitle")}
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-white/70 font-light">
                {t("home.heroText")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donaciones#donaciones"
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-sm hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t("common.donateNow")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                </Link>
                <a
                  href="#objetivo"
                  className="group px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  {t("home.heroCta")}
                  <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="pt-4">
                <ImpactStats items={dictionary.home.stats} />
              </div>
            </div>

            <div className="motion-float grid gap-4 sm:grid-cols-2">
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 shadow-2xl sm:row-span-2 hover:border-white/20 transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/home/home-pantry-display.png"
                    alt="Despensa de Trumpet Call Ministries"
                    className="h-full min-h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </figure>

              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 shadow-2xl hover:border-white/20 transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/home/home-hero-opening.jpeg"
                    alt="Apertura del ministerio"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </figure>

              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 shadow-2xl hover:border-amber-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <img
                    src="/assets/home/home-logo.jpeg"
                    alt={t("brand")}
                    className="image-pop mx-auto h-32 w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-400/20" />
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      <div id="sobre-nosotros" className="scroll-mt-28" />

      {/* ========== OBJETIVO SECTION ========== */}
      <section id="objetivo" className="section-shell scroll-mt-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Target size={14} />
              {t("home.aboutEyebrow")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-4">
              {t("home.objectiveTitle")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {t("home.objectiveText")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{copy.mission}</h3>
                <p className="text-slate-600 leading-relaxed">{t("home.missionText")}</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{copy.vision}</h3>
                <p className="text-slate-600 leading-relaxed">{t("home.visionText")}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-amber-50 p-6 text-center shadow-lg">
            <p className="text-xl font-black text-slate-900 md:text-2xl">
              {t("home.missionVisionTagline")}
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-100 bg-slate-950 p-6 shadow-xl md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  <Heart size={14} />
                  {language === "en" ? "Who we serve" : "A quienes servimos"}
                </span>
                <h3 className="mt-4 text-3xl font-black text-white">
                  {language === "en" ? "Families facing difficult seasons" : "Familias atravesando temporadas difíciles"}
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/65">
                {language === "en"
                  ? "Home visits focus on people who need more than a pantry package: they need to be heard, accompanied, prayed for, and reminded that they are not alone."
                  : "Las visitas domiciliares se enfocan en personas que necesitan más que una despensa: necesitan ser escuchadas, acompañadas, recibir oración y recordar que no están solas."}
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {beneficiaries.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/85">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gradient-to-b from-white via-ministry-sky/35 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-ministry-blue/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-ministry-blue">
              <HelpingHand size={15} />
              {language === "en" ? "Ministry context" : "Contexto del ministerio"}
            </span>
            <h2 className="mt-4 text-4xl font-black text-ink sm:text-5xl">
              {language === "en"
                ? "A ministry built around real families and real needs"
                : "Un ministerio construido alrededor de familias y necesidades reales"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {language === "en"
                ? "This information comes from the institutional material and helps explain why the ministry combines food support, spiritual care, and personal follow-up."
                : "Esta información viene del material institucional y ayuda a explicar por qué el ministerio une apoyo alimentario, cuidado espiritual y seguimiento personal."}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {ministryContext.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-ministry-gold/15 transition group-hover:bg-ministry-blue/10" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ministry-blue text-white shadow-lg shadow-ministry-blue/20">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                    <div className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ministry-gold" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-ink p-6 text-center text-white shadow-2xl shadow-slate-300/60">
            <p className="text-lg font-semibold leading-8 text-white/85">
              {language === "en"
                ? "Carry each other's burdens, and in this way you will fulfill the law of Christ. Galatians 6:2"
                : "Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo. Gálatas 6:2"}
            </p>
          </div>
        </div>
      </section>

      {/* ========== HISTORIA SECTION - SIN SCROLL ========== */}
      <section id="historia" className="section-shell scroll-mt-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame size={14} />
              {copy.historyEyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-amber-800 to-orange-800 bg-clip-text text-transparent mb-4">
              {t("home.historyTitle")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {copy.historyIntro}
            </p>
          </div>

          <div className="relative">
            {/* Grid de botones - sin scroll horizontal */}
            <div className="relative mb-10">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                {ministryTimeline.map((item, index) => {
                  const isActive = index === activeTimelineIndex;
                  const isPast = index < activeTimelineIndex;

                  return (
                    <button
                      key={item.year}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveTimelineIndex(index)}
                      className={`
                        group relative flex flex-col items-center gap-1.5 transition-all duration-500
                        ${isActive ? 'scale-105' : 'hover:scale-105'}
                        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded-lg
                      `}
                    >
                      {/* Indicador circular */}
                      <div className="relative">
                        <div className={`
                          relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                          transition-all duration-500 shadow-lg
                          ${isActive 
                            ? `bg-gradient-to-br ${item.color} shadow-${item.color.split(' ')[0].replace('from-', '')}/40 ring-4 ring-${item.color.split(' ')[0].replace('from-', '')}/20` 
                            : isPast 
                              ? 'bg-amber-100 border-2 border-amber-300' 
                              : 'bg-white border-2 border-slate-200 hover:border-amber-300'
                          }
                        `}>
                          <span className="text-xl sm:text-2xl leading-none">{item.icon}</span>
                          {isActive && (
                            <>
                              <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 animate-ping" />
                              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-400/10 animate-pulse" />
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Etiqueta del año */}
                      <span className={`
                        text-[10px] sm:text-xs font-bold transition-all duration-300 text-center leading-tight
                        ${isActive ? 'text-amber-700' : 'text-slate-400 group-hover:text-slate-600'}
                      `}>
                        {item.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contenido principal */}
            <div className="relative">
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${getActiveGradient()} opacity-5 blur-2xl transition-all duration-700`} />
              
              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] items-stretch">
                {/* Tarjeta de información */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-slate-100 p-6 md:p-8 transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-48 h-48 rounded-bl-full bg-gradient-to-br ${getActiveGradient()} opacity-10 transition-all duration-700`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${getActiveGradient()} 
                          flex items-center justify-center text-2xl sm:text-3xl shadow-lg transition-all duration-500
                          ${getActiveGradient().split(' ')[0].replace('from-', 'shadow-')}/30
                        `}>
                          {activeTimelineItem.icon}
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">
                            {language === "en" ? "Milestone" : "Hito"}
                          </p>
                          <p className="text-xl sm:text-2xl font-black text-slate-900">{activeTimelineItem.year}</p>
                        </div>
                      </div>
                      <div className={`
                        px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-br ${getActiveGradient()} 
                        text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg
                      `}>
                        {activeTimelineItem.stat}
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-4">
                      {activeTimelineItem.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                      {activeTimelineItem.text}
                    </p>

                    <div className="space-y-3">
                      {activeTimelineItem.details.map((detail, idx) => (
                        <div 
                          key={idx} 
                          className="group flex gap-4 items-start p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all duration-300 hover:shadow-md"
                        >
                          <div className={`
                            flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${getActiveGradient()} 
                            flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg transition-all duration-300
                            group-hover:scale-110
                          `}>
                            {idx + 1}
                          </div>
                          <p className="text-slate-700 leading-relaxed text-xs sm:text-sm flex-1">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {language === "en" ? "Progress" : "Progreso"}
                        </span>
                        <span className="text-sm font-black text-slate-600">
                          {activeTimelineIndex + 1} / {ministryTimeline.length}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${getActiveGradient()} transition-all duration-700 ease-out`}
                          style={{ width: `${timelineProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel visual */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 shadow-2xl border border-white/10">
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${getActiveGradient()} blur-3xl animate-pulse`} />
                    <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br ${getActiveGradient()} blur-3xl animate-pulse animation-delay-2000`} />
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-center">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className={`
                        inline-block text-6xl sm:text-8xl p-6 sm:p-8 rounded-full bg-gradient-to-br ${getActiveGradient()} 
                        shadow-2xl transition-all duration-500 animate-float
                      `}>
                        {activeTimelineItem.icon}
                      </div>
                    </div>

                    <div className="text-center space-y-3 sm:space-y-4">
                      <div className="flex justify-center gap-2">
                        <div className="w-8 sm:w-12 h-0.5 bg-amber-400/30" />
                        <Sparkles size={14} className="text-amber-400/50" />
                        <div className="w-8 sm:w-12 h-0.5 bg-amber-400/30" />
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-white/90 leading-tight">
                        {language === "en" ? "Every step tells a story" : "Cada paso cuenta una historia"}
                      </p>
                      <p className="text-white/50 text-xs sm:text-sm">
                        {language === "en" ? "A journey of faith and service" : "Un viaje de fe y servicio"}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={goToPreviousTimelineItem}
                        className="group px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/20 bg-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2"
                      >
                        <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden xs:inline">{language === "en" ? "Back" : "Atrás"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={goToNextTimelineItem}
                        className={`group px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r ${getActiveGradient()} text-white font-bold text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2`}
                      >
                        <span className="hidden xs:inline">{language === "en" ? "Next" : "Siguiente"}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOSTENIBILIDAD SECTION ========== */}
      <section id="como-se-sostiene" className="section-shell scroll-mt-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart size={14} />
              {t("home.supportTitle")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-violet-900 bg-clip-text text-transparent mb-4">
              {t("home.supportTitle")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {t("home.supportText")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div key={area.title} className="group bg-gradient-to-br from-violet-50 to-white rounded-2xl p-8 border border-violet-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-200">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
    </section>

      {/* ========== SERVICE AREA ========== */}
      <section id="area-servicio" className="bg-gradient-to-br from-slate-900 to-indigo-950 scroll-mt-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="section-shell relative">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">
              <MapPin size={14} />
              {copy.serviceEyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              {copy.serviceTitle}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {copy.serviceText}
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-6">
              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-xl">
                <img
                  src="/assets/servicio-domiciliar/mapa-area-servicio.png"
                  alt={language === "en" ? "Map of communities served in Tlaxcala" : "Mapa de comunidades atendidas en Tlaxcala"}
                  className="w-full rounded-2xl object-contain"
                />
              </div>
              <div className="p-2 text-left lg:p-6">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-300">
                  <MapPin size={15} />
                  {language === "en" ? "Active coverage" : "Cobertura activa"}
                </div>
                <h3 className="text-3xl font-black text-white">
                  {language === "en" ? "12 supported communities" : "12 comunidades atendidas"}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {copy.servicePlaceholder}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    language === "en" ? "Monthly pantry support" : "Despensa mensual",
                    language === "en" ? "Home visits" : "Visitas domiciliares",
                    language === "en" ? "Prayer and accompaniment" : "Oración y acompañamiento",
                    language === "en" ? "Tlaxcala communities" : "Comunidades de Tlaxcala",
                  ].map((item) => (
                    <span key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/85">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DASHBOARD GRID ========== */}
      <section id="dashboards" className="bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="section-shell">
          <div className="text-center mb-12">
            <p className="eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-bold uppercase tracking-wider mb-4">
              {t("home.gridEyebrow")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-violet-900 bg-clip-text text-transparent mb-4">
              {t("home.gridTitle")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {t("home.gridText")}
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {dashboardItems.map((item, index) => (
              <DashboardCard
                key={item.key}
                to={item.to}
                icon={item.icon}
                title={t(`cards.${item.key}.title`)}
                text={t(`cards.${item.key}.text`)}
                delay={index * 100}
                gradient={item.color}
                bgLight={item.bgLight}
                borderLight={item.borderLight}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @media (max-width: 400px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 401px) and (max-width: 640px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
