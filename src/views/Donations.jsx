import {
  Banknote,
  Copy,
  DollarSign,
  Gift,
  Heart,
  Home,
  Hospital,
  Share2,
  Sparkles,
  Star,
  Users,
  Check,
  Camera,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  BookOpen,
  Compass,
  Snowflake,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/useLanguage.js";

const bankAccounts = [
  {
    bank: "INBURSA",
    accountNumber: "5007 2633 60",
    clabe: "0368 3050 0726 3336 01",
    concept: "DESPENSA",
    color: "from-cyan-500 to-blue-700",
    bgLight: "bg-cyan-50",
    borderLight: "border-cyan-200",
    icon: Banknote,
  },
];

const kermesWinterPhotos = [
  { key: "kermes01", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-01.jpeg" },
  { key: "kermes02", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-02.jpeg" },
  { key: "kermes03", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-03.jpeg" },
  { key: "kermes04", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-04.jpeg" },
  { key: "kermes05", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-05.jpeg" },
  { key: "kermes06", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-06.jpeg" },
  { key: "kermes07", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-07.jpeg" },
  { key: "kermes08", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-08.jpeg" },
  { key: "kermes09", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-09.jpeg" },
  { key: "kermes10", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-10.jpeg" },
  { key: "kermes11", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-11.jpeg" },
  { key: "kermes12", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-12.jpeg" },
  { key: "kermes13", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-13.jpeg" },
  { key: "kermes14", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-14.jpeg" },
  { key: "kermes15", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-15.jpeg" },
  { key: "kermes16", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-16.jpeg" },
  { key: "kermes17", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-17.jpeg" },
  { key: "kermes18", src: "/assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-18.jpeg" },
];

const donationPageCopy = {
  es: {
    badge: "Donaciones",
    activeDonors: "Donantes activos",
    raisedThisMonth: "Recaudado este mes",
    oneTimeDonations: "Donaciones únicas",
    plans: "Planes de Donación",
    chooseHow: "Elige cómo ayudar",
    chooseText: "Selecciona el plan que mejor se adapte a tu capacidad de donación",
    perMonth: "por mes",
    donateNow: "Donar ahora",
    popular: "Más popular",
    custom: "Personalizado",
    chooseAmount: "tú eliges el monto",
    transfers: "Transferencias",
    impact: "Impacto",
    kermesNav: "Kermés",
    kermesEyebrow: "Evento de caridad",
    kermesTitle: "Kermés Invierno Mágico de Caridad",
    kermesIntro:
      "Momentos de convivencia, apoyo y generosidad que ayudan a sostener el servicio a familias vulnerables.",
    kermesCounter: "foto",
    bankTransfer: "Transferencia Bancaria",
    bankDetails: "Datos bancarios",
    bankText: "Este es el único medio autorizado para transferencias. Usa el concepto DESPENSA al realizar tu donación.",
    accountNumber: "Número de cuenta",
    clabe: "CLABE interbancaria",
    transferConcept: "Concepto",
    copy: "Copiar",
    copied: "Copiado",
    shareBankDetails: "Compartir datos de transferencia",
    transferShared: "Datos de transferencia copiados",
    impactTitle: "Impacto de tu donación",
    founderLetterEyebrow: "Carta a visitantes",
    founderLetterTitle: "Una invitación desde el corazón del ministerio",
    founderLetterIntro:
      "Bienvenidos a nuestro sitio web y gracias por tu interés en Trumpet Call Ministries México.",
    founderLetterParagraphs: [
      "Esta pequeña organización basada en la fe es un proyecto del corazón, nacido del deseo de servir a los vulnerables en mi comunidad en Tlaxcala, México. El propósito es compartir el amor de Jesucristo con familias vulnerables en todo el estado de Tlaxcala mediante la distribución de suministros básicos de alimentos. Y al hacerlo, también compartimos la esperanza que tenemos en Jesús a través de las enseñanzas que se encuentran en la Santa Biblia.",
      "Esta organización comenzó en 2021 apoyando a 12 familias con dinero ganado al impartir clases de inglés. Cinco años después, y con el apoyo de donantes en México y en Estados Unidos, el ministerio ha distribuido más de 10 toneladas de alimentos básicos a más de 80 familias en todo el estado.",
      "Trabajando con iglesias de la zona, Trumpet Call Ministries México también proporcionó alimentos y ropa en comunidades de todo el estado. Sin embargo, a partir de enero de 2026, iniciamos un nuevo proyecto para apoyar a los niños con insuficiencia renal y a sus familias en el Hospital Infantil de Tlaxcala. Cada mes, apoyamos a estas familias con suministros necesarios que les ayudan a manejar su cuidado, así como con actividades basadas en la fe para fortalecerlas en Jesucristo y que puedan enfrentar su enfermedad desde una posición de fortaleza espiritual y emocional.",
      "Eres bienvenido a visitarnos a nuestra oficina en Loma Bonita, Tlaxcala. Me encantaría tener la oportunidad de darte un recorrido por nuestras instalaciones, presentarte a nuestro personal y beneficiarios de nuestros servicios.",
      "Por favor, considera unirte a nosotros para atender a familias en dificultades en Tlaxcala. Según las Escrituras, servirles es servir al Señor mismo. Cuando lo hacemos, Dios Padre promete bendecirnos.",
    ],
    founderLetterVerse:
      "Proverbios 11:25 dice: “Una persona generosa prosperará; quien refresque a otros será renovado.”",
    founderLetterSignature: "A Su servicio,",
    founderLetterName: "Andrea Byrn",
    founderLetterRole: "Directora",
    founderLetterStats: [
      { value: "2021", label: "Inicio del ministerio" },
      { value: "10+", label: "Toneladas distribuidas" },
      { value: "80+", label: "Familias alcanzadas" },
    ],
  },
  en: {
    badge: "Donations",
    activeDonors: "Active donors",
    raisedThisMonth: "Raised this month",
    oneTimeDonations: "One-time donations",
    plans: "Donation Plans",
    chooseHow: "Choose how to help",
    chooseText: "Select the plan that best matches your giving capacity",
    perMonth: "per month",
    donateNow: "Donate now",
    popular: "Most popular",
    custom: "Custom",
    chooseAmount: "you choose the amount",
    transfers: "Transfers",
    impact: "Impact",
    kermesNav: "Kermes",
    kermesEyebrow: "Charity event",
    kermesTitle: "Magical Winter Charity Kermes",
    kermesIntro:
      "Moments of fellowship, support, and generosity that help sustain service to vulnerable families.",
    kermesCounter: "photo",
    bankTransfer: "Bank Transfer",
    bankDetails: "Bank details",
    bankText: "This is the only authorized method for bank transfers. Use DESPENSA as the transfer concept.",
    accountNumber: "Account number",
    clabe: "Interbank CLABE",
    transferConcept: "Concept",
    copy: "Copy",
    copied: "Copied",
    shareBankDetails: "Share transfer details",
    transferShared: "Transfer details copied",
    impactTitle: "The impact of your donation",
    founderLetterEyebrow: "Letter to visitors",
    founderLetterTitle: "An invitation from the heart of the ministry",
    founderLetterIntro:
      "Welcome to our website, and thank you for your interest in Trumpet Call Ministries Mexico.",
    founderLetterParagraphs: [
      "This small faith-based organization is a project of the heart, birthed from the desire to serve the vulnerable in my community in Tlaxcala, Mexico. The purpose is to share the love of Jesus Christ with vulnerable families around the state of Tlaxcala through the distribution of basic food supplies. And in so doing, we also share the hope we have in Jesus through the teachings found in the Holy Bible.",
      "The ministry started in 2021 supporting 12 families in the Home Visit project with money earned from teaching English classes. Five years later, and with support from donors in Mexico and in the United States, the ministry has distributed over 10 tons of basic food supplies to over 80 families around the state.",
      "Working with area churches, Trumpet Call Ministries Mexico has provided food and clothes in communities around the state as well. Starting in January 2026, we began a new project to support children with renal failure and their families at the Children's Hospital of Tlaxcala. Each month, we support these families with needed supplies that help them manage their care, as well as faith-based activities to build them up in Jesus Christ so they are able to battle their illness from a position of spiritual and emotional strength.",
      "You are welcome to come visit us at our office in Loma Bonita, Tlaxcala. I would enjoy the opportunity to give you a tour of our facilities, introduce you to our staff, and introduce you to beneficiaries of our services.",
      "Please consider joining us to serve struggling families in Tlaxcala. According to the Scriptures, serving them is serving the Lord himself. When we do, God the Father promises to bless us.",
    ],
    founderLetterVerse:
      "Proverbs 11:25 says: “A generous person will prosper; whoever refreshes others will be refreshed.”",
    founderLetterSignature: "In His Service,",
    founderLetterName: "Andrea Byrn",
    founderLetterRole: "Director",
    founderLetterStats: [
      { value: "2021", label: "Ministry started" },
      { value: "10+", label: "Tons distributed" },
      { value: "80+", label: "Families reached" },
    ],
  },
};

function KermesPhotoCarousel({ photos, copy, language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = photos.length;
  const currentPhoto = photos[currentIndex];

  const goToSlide = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const previousSlide = () => goToSlide(currentIndex - 1);

  if (!currentPhoto) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[21/11]">
        <img
          src={currentPhoto.src}
          alt={`${copy.kermesTitle} ${currentIndex + 1}`}
          className="h-full w-full object-contain p-2"
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-5 pt-20 text-white">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-amber-300">
            {copy.kermesTitle}
          </p>
          <p className="mt-1 text-xs font-semibold text-white/70">
            {currentIndex + 1} / {totalSlides} {copy.kermesCounter}{totalSlides > 1 ? "s" : ""}
          </p>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75"
          aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
        >
          <ChevronLeft size={25} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75"
          aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
        >
          <ChevronRight size={25} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-slate-900 p-3">
        {photos.map((photo, index) => (
          <button
            key={photo.key}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              index === currentIndex
                ? "border-amber-400 opacity-100"
                : "border-white/10 opacity-60 hover:opacity-90"
            }`}
            aria-label={`${language === "en" ? "View photo" : "Ver foto"} ${index + 1}`}
          >
            <img
              src={photo.src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Donations() {
  const { language, t } = useLanguage();
  const copy = donationPageCopy[language] ?? donationPageCopy.es;
  const [copiedField, setCopiedField] = useState(null);

  const scrollToTransfers = () => {
    document.querySelector("#transferencias")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s/g, ""));
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const shareTransferDetails = async () => {
    const account = bankAccounts[0];
    const details = [
      `Banco: ${account.bank}`,
      `${copy.accountNumber}: ${account.accountNumber}`,
      `${copy.clabe}: ${account.clabe}`,
      `${copy.transferConcept}: ${account.concept}`,
    ].join("\n");

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Trumpet Call Ministries",
          text: details,
        });
        return;
      }

      await navigator.clipboard.writeText(details);
      setCopiedField("transfer-details");
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Error al compartir:", err);
    }
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section id="donaciones" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-orange-950 scroll-mt-28">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-amber-950/80 to-orange-950/90" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating coins decoration */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  opacity: 0.1,
                }}
              >
                <DollarSign size={24 + Math.random() * 20} className="text-amber-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="section-shell relative w-full">
          <div className="max-w-4xl mx-auto text-center motion-rise">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
                </span>
                <Heart size={14} className="text-amber-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                {copy.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent">
                {t("donations.title")}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed text-white/70 font-light max-w-2xl mx-auto">
              {t("donations.text")}
            </p>

            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto mt-8">
              {[
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative space-y-2 text-center">
                    <stat.icon size={20} className="text-amber-400 mx-auto" />
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href="#planes-donacion"
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {copy.plans}
              </a>
              <a
                href="#transferencias"
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {copy.transfers}
              </a>
              <a
                href="#impacto"
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {copy.impact}
              </a>
              <a
                href="#kermes-invierno-magico"
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {copy.kermesNav}
              </a>
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

      {/* ========== PLANS SECTION ========== */}
      <section id="planes-donacion" className="section-shell bg-gradient-to-b from-white to-slate-50 scroll-mt-28">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star size={14} />
            {copy.plans}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-amber-900 bg-clip-text text-transparent mb-4">
            {copy.chooseHow}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {copy.chooseText}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Monthly Home Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <Home size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t("donations.monthlyHome")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("donations.homeText")}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                    $250
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{copy.perMonth}</p>
                </div>
                <button
                  type="button"
                  onClick={scrollToTransfers}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  {copy.donateNow}
                </button>
              </div>
            </div>
          </div>

          {/* Monthly Hospital Card */}
          <div className="group relative lg:-mt-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl ring-2 ring-amber-400">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {copy.popular}
                </span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-200">
                  <Hospital size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t("donations.monthlyHospital")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("donations.hospitalText")}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                    $500
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{copy.perMonth}</p>
                </div>
                <button
                  type="button"
                  onClick={scrollToTransfers}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  {copy.donateNow}
                </button>
              </div>
            </div>
          </div>

          {/* Custom Donation Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200">
                  <Gift size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t("donations.gift")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t("donations.giftText")}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                    {copy.custom}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{copy.chooseAmount}</p>
                </div>
                <button
                  type="button"
                  onClick={scrollToTransfers}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-violet-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  {copy.donateNow}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BANK TRANSFER SECTION ========== */}
      <section id="transferencias" className="section-shell bg-white scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Banknote size={14} />
              {copy.bankTransfer}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
              {copy.bankDetails}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {copy.bankText}
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8">
            {bankAccounts.map((account, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${account.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg border ${account.borderLight}`}>
                  {/* Bank Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center shadow-lg`}>
                      <account.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{account.bank}</h3>
                      <p className="text-sm text-slate-500">{copy.bankTransfer}</p>
                    </div>
                  </div>

                  {/* Account Details */}
                  <div className="space-y-4">
                    {/* Account Number */}
                    <div className={`rounded-xl ${account.bgLight} p-4 border ${account.borderLight}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {copy.accountNumber}
                        </span>
                        <button
                          onClick={() => copyToClipboard(account.accountNumber, `account-${index}`)}
                          className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {copiedField === `account-${index}` ? (
                            <>
                              <Check size={14} className="text-emerald-500" />
                              <span className="text-emerald-500">{copy.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              {copy.copy}
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-lg font-bold text-slate-900 font-mono tracking-wider">
                        {account.accountNumber}
                      </p>
                    </div>

                    {/* CLABE */}
                    <div className={`rounded-xl ${account.bgLight} p-4 border ${account.borderLight}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {copy.clabe}
                        </span>
                        <button
                          onClick={() => copyToClipboard(account.clabe, `clabe-${index}`)}
                          className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {copiedField === `clabe-${index}` ? (
                            <>
                              <Check size={14} className="text-emerald-500" />
                              <span className="text-emerald-500">{copy.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              {copy.copy}
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-lg font-bold text-slate-900 font-mono tracking-wider">
                        {account.clabe}
                      </p>
                    </div>

                    {/* Transfer Concept */}
                    <div className={`rounded-xl ${account.bgLight} p-4 border ${account.borderLight}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {copy.transferConcept}
                        </span>
                        <button
                          onClick={() => copyToClipboard(account.concept, `concept-${index}`)}
                          className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {copiedField === `concept-${index}` ? (
                            <>
                              <Check size={14} className="text-emerald-500" />
                              <span className="text-emerald-500">{copy.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              {copy.copy}
                            </>
                          )}
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <Sparkles size={20} className="text-slate-400" />
                        <p className="text-lg font-black text-slate-900 tracking-wider">
                          {account.concept}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Share Button */}
                  <button
                    type="button"
                    onClick={shareTransferDetails}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                  >
                    {copiedField === "transfer-details" ? (
                      <Check size={18} className="text-emerald-500" />
                    ) : (
                      <Share2 size={18} />
                    )}
                    {copiedField === "transfer-details" ? copy.transferShared : copy.shareBankDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== IMPACT SECTION ========== */}
      <section id="impacto" className="section-shell bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-200">
                  <Heart size={36} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {copy.impactTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {t("donations.impactNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KERMES INVIERNO MAGICO SECTION ========== */}
      <section id="kermes-invierno-magico" className="relative overflow-hidden scroll-mt-28 bg-gradient-to-br from-slate-950 via-blue-950 to-amber-950">
        <div className="absolute inset-0 opacity-25 pattern-grid" />
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="section-shell relative">
          <div className="mb-10 flex flex-col gap-5 text-white lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-300 backdrop-blur">
                <Snowflake size={15} />
                {copy.kermesEyebrow}
              </div>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                {copy.kermesTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                {copy.kermesIntro}
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur">
              <Camera size={18} className="text-amber-300" />
              {kermesWinterPhotos.length} {copy.kermesCounter}s
            </div>
          </div>

          <KermesPhotoCarousel
            photos={kermesWinterPhotos}
            copy={copy}
            language={language}
          />
        </div>
      </section>

      {/* ========== FOUNDER LETTER SECTION - REDESIGNED ========== */}
      <section id="carta-fundadora" className="relative overflow-hidden scroll-mt-28">
        {/* Fondo decorativo con efecto de libro antiguo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-stone-100">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #8B6914 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative section-shell py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Encabezado decorativo */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-amber-100/80 backdrop-blur-sm border border-amber-200/50 shadow-sm mb-6">
                <BookOpen size={16} className="text-amber-700" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                  {copy.founderLetterEyebrow}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                {copy.founderLetterTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light italic">
                {copy.founderLetterIntro}
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
              {/* ===== COLUMNA IZQUIERDA - PERFIL ===== */}
              <aside className="relative">
                {/* Tarjeta principal con efecto pergamino */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950/90 to-orange-950/90 p-1 shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/20 via-orange-500/20 to-transparent opacity-50" />
                  
                  <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-6 backdrop-blur-sm">
                    {/* Marco decorativo superior */}
                    <div className="flex justify-center mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-400/50" />
                        <Compass size={20} className="text-amber-400/60" />
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-amber-400/50" />
                      </div>
                    </div>

                    {/* Foto con marco de oro */}
                    <figure className="group relative overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-amber-400/5 p-2 shadow-2xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <img
                        src="/assets/directora/andrea-byrn.png"
                        alt={language === "en" ? "Andrea Byrn, Director of Trumpet Call Ministries" : "Andrea Byrn, Directora de Trumpet Call Ministries"}
                        className="h-[420px] w-full rounded-xl object-cover object-[50%_25%] transition-all duration-700 group-hover:scale-[1.02]"
                      />
                      {/* Sello decorativo */}
                      <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-2 border-amber-400/30 bg-black/40 backdrop-blur-sm flex items-center justify-center rotate-[-10deg]">
                        <Award size={28} className="text-amber-400" />
                      </div>
                      <div className="absolute inset-x-3 bottom-3 rounded-b-xl bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-5 pb-5 pt-16">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                          {copy.founderLetterName}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/70">
                          {copy.founderLetterRole}
                        </p>
                      </div>
                    </figure>

                    {/* Nombre y título con estilo */}
                    <div className="mt-6 text-center">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-300">
                          Trumpet Call Ministries
                        </p>
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-white/90 tracking-tight">
                        {language === "en" ? "Faith in action," : "Fe en acción,"}
                        <span className="block text-amber-300/80">
                          {language === "en" ? "service with purpose." : "servicio con propósito."}
                        </span>
                      </h3>
                    </div>

                    {/* Stats con diseño mejorado */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {copy.founderLetterStats.map((stat) => (
                        <div key={stat.label} className="relative group/stat">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-xl blur-sm group-hover/stat:blur-md transition-all" />
                          <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <p className="text-2xl font-black bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                              {stat.value}
                            </p>
                            <p className="text-[10px] font-medium text-white/50 uppercase tracking-wider mt-0.5">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cita inspiradora */}
                    <div className="mt-6 p-4 rounded-xl border border-amber-400/10 bg-amber-400/5">
                      <div className="flex gap-3">
                        <Quote size={18} className="text-amber-400/40 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-white/60 italic leading-relaxed">
                          {language === "en" 
                            ? "\"Serve the Lord with gladness; come before his presence with singing.\"" 
                            : "\"Servid al Señor con alegría; venid ante su presencia con regocijo.\""}
                        </p>
                      </div>
                    </div>

                    {/* Línea decorativa inferior */}
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-400/30" />
                        <div className="w-2 h-2 rounded-full bg-amber-400/40" />
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-amber-400/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* ===== COLUMNA DERECHA - CARTA ===== */}
              <article className="relative">
                {/* Efecto de papel envejecido */}
                <div className="relative rounded-3xl bg-gradient-to-br from-amber-100/90 via-orange-50/90 to-stone-100/90 p-1 shadow-2xl border border-amber-200/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/10 via-orange-300/10 to-transparent opacity-30" />
                  
                  <div className="relative rounded-2xl bg-gradient-to-b from-white/95 to-amber-50/90 p-8 md:p-12 backdrop-blur-sm">
                    {/* Decoración de carta antigua */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="space-y-1">
                        <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-amber-300/20 rounded-full" />
                        <p className="text-xs font-serif text-amber-600/60 tracking-[0.3em] uppercase">
                          {language === "en" ? "A Personal Letter" : "Carta Personal"}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-amber-300/30 flex items-center justify-center">
                        <Sparkles size={14} className="text-amber-400/60" />
                      </div>
                    </div>

                    {/* Contenido de la carta */}
                    <div className="space-y-6 text-slate-700 leading-relaxed font-serif">
                      {copy.founderLetterParagraphs.map((paragraph, idx) => (
                        <p key={idx} className="first:drop-cap first:pl-1">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Versículo destacado */}
                    <div id="que-dice-la-biblia" className="my-8 scroll-mt-28 relative">
                      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
                      <div className="pl-6 py-4 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-400/5 border border-amber-200/20">
                        <div className="flex gap-4 items-start">
                          <Quote size={24} className="text-amber-400/50 flex-shrink-0 mt-1" />
                          <p className="text-xl font-serif italic text-slate-800 leading-relaxed">
                            {copy.founderLetterVerse}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Firma con estilo */}
                    <div className="mt-10 pt-8 border-t-2 border-amber-200/30">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-slate-500 font-serif italic">
                            {copy.founderLetterSignature}
                          </p>
                          <p className="text-3xl font-serif font-bold text-slate-900 tracking-wide">
                            {copy.founderLetterName}
                          </p>
                          <p className="text-sm font-medium text-amber-700">
                            {copy.founderLetterRole}
                          </p>
                        </div>
                        {/* Sello decorativo */}
                        <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-amber-400/30 bg-amber-400/10 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-[8px] font-bold uppercase text-amber-600/60 tracking-wider leading-tight">
                              {language === "en" ? "Founded" : "Fundado"}
                            </p>
                            <p className="text-sm font-serif font-bold text-amber-700">2021</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decoración inferior de carta */}
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-amber-300/30" />
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-amber-300/40" />
                          ))}
                        </div>
                        <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-amber-300/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .drop-cap::first-letter {
          font-size: 3.5em;
          float: left;
          line-height: 0.8;
          margin-right: 0.15em;
          color: #b45309;
          font-weight: 700;
          font-family: serif;
        }
        @media (max-width: 640px) {
          .drop-cap::first-letter {
            font-size: 2.8em;
          }
        }
      `}</style>
    </>
  );
}
