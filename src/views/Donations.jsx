import {
  ArrowRight,
  Banknote,
  BookOpen,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Gift,
  Heart,
  Home,
  Hospital,
  Quote,
  Share2,
  Snowflake,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

const bankAccounts = [
  {
    bank: "INBURSA",
    accountNumber: "4658 2859 1470 0814",
    clabe: "0368 3050 0726 3336 01",
    icon: Banknote,
  },
];

const kermesWinterPhotos = [
  { key: "kermes01", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-01.jpeg` },
  { key: "kermes02", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-02.jpeg` },
  { key: "kermes03", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-03.jpeg` },
  { key: "kermes04", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-04.jpeg` },
  { key: "kermes05", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-05.jpeg` },
  { key: "kermes06", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-06.jpeg` },
  { key: "kermes07", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-07.jpeg` },
  { key: "kermes08", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-08.jpeg` },
  { key: "kermes09", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-09.jpeg` },
  { key: "kermes10", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-10.jpeg` },
  { key: "kermes11", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-11.jpeg` },
  { key: "kermes12", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-12.jpeg` },
  { key: "kermes13", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-13.jpeg` },
  { key: "kermes14", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-14.jpeg` },
  { key: "kermes15", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-15.jpeg` },
  { key: "kermes16", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-16.jpeg` },
  { key: "kermes17", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-17.jpeg` },
  { key: "kermes18", src: `${import.meta.env.BASE_URL}assets/donaciones/kermes-invierno-magico/kermes-invierno-magico-18.jpeg` },
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
    bankText: "Este es el único medio autorizado para transferencias. Elige el área que quieres apoyar y usa el concepto indicado.",
    accountNumber: "Número de cuenta",
    clabe: "Clave interbancaria para transferencias interbancaria",
    transferConcept: "Concepto",
    copy: "Copiar",
    copied: "Copiado",
    shareBankDetails: "Compartir datos de transferencia",
    transferShared: "Datos de transferencia copiados",
    impactTitle: "Impacto de tu donación",
    supportOptions: [
      { value: "home", label: "Servicio domiciliar", concept: "SERVICIO DOMICILIAR" },
      { value: "hospital", label: "Hospital Infantil de Tlaxcala", concept: "HOSPITAL INFANTIL DE TLAXCALA" },
      { value: "general", label: "General / personalizado", concept: "GENERAL" },
    ],
    founderLetterEyebrow: "Carta a visitantes",
    founderLetterTitle: "Una invitación desde el corazón del ministerio",
    founderLetterIntro:
      "Bienvenidos a nuestro sitio web y gracias por tu interés en Trumpet Call Ministries México.",
    founderLetterParagraphs: [
      "Esta pequeña organización basada en la fe es un proyecto del corazón, nacido del deseo de servir a los vulnerables en mi comunidad en Tlaxcala, México. El propósito es compartir el amor de Jesucristo con familias vulnerables en todo el estado de Tlaxcala mediante la distribución de suministros básicos de alimentos. Y al hacerlo, también compartimos la esperanza que tenemos en Jesús a través de las enseñanzas que se encuentran en la Santa Biblia.",
      "Las clases de inglés y la generosidad de donantes en México y Estados Unidos han sostenido la entrega de alimentos básicos a familias de Tlaxcala.",
      "Trabajando con iglesias de la zona, Trumpet Call Ministries México también proporcionó alimentos y ropa en comunidades de todo el estado. Sin embargo, a partir de enero de 2026, iniciamos un nuevo proyecto para apoyar a los niños con insuficiencia renal y a sus familias en el Hospital Infantil de Tlaxcala. Cada mes, apoyamos a estas familias con suministros necesarios que les ayudan a manejar su cuidado, así como con actividades basadas en la fe para fortalecerlas en Jesucristo y que puedan enfrentar su enfermedad desde una posición de fortaleza espiritual y emocional.",
      "Eres bienvenido a visitarnos a nuestra oficina en Loma Bonita, Tlaxcala. Me encantaría tener la oportunidad de darte un recorrido por nuestras instalaciones, presentarte a nuestro personal y beneficiarios de nuestros servicios.",
      "Por favor, considera unirte a nosotros para atender a familias en dificultades en Tlaxcala. Según las Escrituras, servirles es servir al Señor mismo. Cuando lo hacemos, Dios Padre promete bendecirnos.",
    ],
    founderLetterVerse:
      "Proverbios 11:25 dice: “Una persona generosa prosperará; quien refresque a otros será renovado.”",
    founderLetterSignature: "A Su servicio,",
    founderLetterName: "Lic. Andrea L. Byrn",
    founderLetterRole: "Directora",
    readFullLetter: "Leer carta completa",
    readLessLetter: "Mostrar menos",
    bibleEyebrow: "Qué dice la Biblia",
    bibleSubtitle: "Servir a quienes más lo necesitan es responder al llamado de amor del Señor.",
    whatGiftAchieves: "Lo que logra tu aportación",
    impactHighlights: [
      { value: "80+", label: "Familias acompañadas cada mes" },
      { value: "12 kg", label: "De alimento básico en cada despensa" },
      { value: "HIT", label: "Kits, insumos y apoyo en hemodiálisis" },
    ],
    ctaEyebrow: "Tu generosidad transforma vidas",
    ctaTitle: "Hoy puedes poner alimento en una mesa y esperanza en un corazón",
    ctaText:
      "Cada transferencia se convierte en despensas, insumos médicos para niños con insuficiencia renal y visitas llenas de fe en Tlaxcala.",
    ctaVolunteer: "Quiero ser voluntario",
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
    kermesNav: "Kermés",
    kermesEyebrow: "Charity event",
    kermesTitle: "Magical Winter Charity Kermés",
    kermesIntro:
      "Moments of fellowship, support, and generosity that help sustain service to vulnerable families.",
    kermesCounter: "photo",
    bankTransfer: "Bank Transfer",
    bankDetails: "Bank details",
    bankText: "This is the only authorized method for bank transfers. Choose the area you want to support and use the matching concept.",
    accountNumber: "Account number",
    clabe: "Interbank Clave interbancaria para transferencias",
    transferConcept: "Concept",
    copy: "Copy",
    copied: "Copied",
    shareBankDetails: "Share transfer details",
    transferShared: "Transfer details copied",
    impactTitle: "The impact of your donation",
    supportOptions: [
      { value: "home", label: "Home care service", concept: "HOME CARE SERVICE" },
      { value: "hospital", label: "Children's Hospital of Tlaxcala", concept: "CHILDREN'S HOSPITAL OF TLAXCALA" },
      { value: "general", label: "General / custom", concept: "GENERAL" },
    ],
    founderLetterEyebrow: "Letter to visitors",
    founderLetterTitle: "An invitation from the heart of the ministry",
    founderLetterIntro:
      "Welcome to our website, and thank you for your interest in Trumpet Call Ministries Mexico.",
    founderLetterParagraphs: [
      "This small faith-based organization is a project of the heart, birthed from the desire to serve the vulnerable in my community in Tlaxcala, Mexico. The purpose is to share the love of Jesus Christ with vulnerable families around the state of Tlaxcala through the distribution of basic food supplies. And in so doing, we also share the hope we have in Jesus through the teachings found in the Holy Bible.",
      "English classes and the generosity of donors in Mexico and the United States have helped sustain food support for families across Tlaxcala.",
      "Working with area churches, Trumpet Call Ministries Mexico has provided food and clothes in communities around the state as well. Starting in January 2026, we began a new project to support children with renal failure and their families at the Children's Hospital of Tlaxcala. Each month, we support these families with needed supplies that help them manage their care, as well as faith-based activities to build them up in Jesus Christ so they are able to battle their illness from a position of spiritual and emotional strength.",
      "You are welcome to come visit us at our office in Loma Bonita, Tlaxcala. I would enjoy the opportunity to give you a tour of our facilities, introduce you to our staff, and introduce you to beneficiaries of our services.",
      "Please consider joining us to serve struggling families in Tlaxcala. According to the Scriptures, serving them is serving the Lord himself. When we do, God the Father promises to bless us.",
    ],
    founderLetterVerse:
      "Proverbs 11:25 says: “A generous person will prosper; whoever refreshes others will be refreshed.”",
    founderLetterSignature: "In His Service,",
    founderLetterName: "Lic. Andrea L. Byrn",
    founderLetterRole: "Director",
    readFullLetter: "Read full letter",
    readLessLetter: "Show less",
    bibleEyebrow: "What the Bible Says",
    bibleSubtitle: "Serving those in greatest need is answering the Lord's call to love.",
    whatGiftAchieves: "What your gift achieves",
    impactHighlights: [
      { value: "80+", label: "Families accompanied every month" },
      { value: "12 kg", label: "Of staple food in every pantry bag" },
      { value: "HIT", label: "Kits, supplies & hemodialysis care" },
    ],
    ctaEyebrow: "Your generosity transforms lives",
    ctaTitle: "Today you can place food on a table and hope in a heart",
    ctaText:
      "Every transfer becomes food pantries, medical supplies for children with kidney failure, and faith-filled visits across Tlaxcala.",
    ctaVolunteer: "Become a volunteer",
  },
};

function KermesPhotoCarousel({ photos, copy, language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = photos.length;
  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    if (totalSlides < 2) return undefined;
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % totalSlides);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const previousSlide = () => goToSlide(currentIndex - 1);

  if (!currentPhoto) return null;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink/80 shadow-photo">
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40 sm:aspect-[16/10] lg:aspect-[21/11]">
        <img
          key={currentPhoto.key}
          src={currentPhoto.src}
          alt={`${copy.kermesTitle} ${currentIndex + 1}`}
          className="gallery-photo-enter h-full w-full object-contain p-2 sm:p-4"
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent px-6 pb-6 pt-20 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-light">
            {copy.kermesTitle}
          </p>
          <p className="mt-1 text-sm font-medium text-white/80">
            {currentIndex + 1} / {totalSlides} {copy.kermesCounter}
            {totalSlides > 1 ? "s" : ""}
          </p>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/70 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-ember"
          aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/70 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-ember"
          aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="no-scrollbar flex gap-2.5 overflow-x-auto border-t border-white/10 bg-ink/95 p-4">
        {photos.map((photo, index) => (
          <button
            key={photo.key}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition duration-300 ${
              index === currentIndex
                ? " scale-[1.03] border-ember opacity-100 shadow-md"
                : "border-white/10 opacity-55 hover:opacity-90"
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
  const [selectedSupport, setSelectedSupport] = useState("general");
  const [isLetterExpanded, setIsLetterExpanded] = useState(false);

  const selectedConcept =
    copy.supportOptions.find((option) => option.value === selectedSupport)?.concept ?? "GENERAL";

  const scrollToTransfers = (support = selectedSupport) => {
    setSelectedSupport(support);
    document.querySelector("#transferencias")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = async (text, field, removeSpaces = true) => {
    try {
      await navigator.clipboard.writeText(removeSpaces ? text.replace(/\s/g, "") : text);
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
      `${copy.transferConcept}: ${selectedConcept}`,
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

  const donationPlans = [
    {
      key: "home",
      supportValue: "home",
      icon: Home,
      title: t("donations.monthlyHome"),
      description: t("donations.homeText"),
      amount: "$250",
      subtitle: copy.perMonth,
      image: asset("servicio-domiciliar/visita-domiciliar/visita-domiciliar-05.jpeg"),
      imageAlt:
        language === "en"
          ? "Monthly home care pantry delivery"
          : "Entrega mensual de despensa en servicio domiciliar",
      featured: false,
    },
    {
      key: "hospital",
      supportValue: "hospital",
      icon: Hospital,
      title: t("donations.monthlyHospital"),
      description: t("donations.hospitalText"),
      amount: "$500",
      subtitle: copy.perMonth,
      image: asset("hospital-infantil/hospital-nuevo-06.jpeg"),
      imageAlt:
        language === "en"
          ? "Support for children at the Children's Hospital of Tlaxcala"
          : "Apoyo a niños en el Hospital Infantil de Tlaxcala",
      featured: true,
    },
    {
      key: "general",
      supportValue: "general",
      icon: Gift,
      title: t("donations.gift"),
      description: t("donations.giftText"),
      amount: copy.custom,
      subtitle: copy.chooseAmount,
      image: asset("misiones/cartolandia-03.jpeg"),
      imageAlt:
        language === "en"
          ? "Community mission and food support"
          : "Misión comunitaria y entrega de alimentos",
      featured: false,
    },
  ];

  const visibleParagraphs = isLetterExpanded
    ? copy.founderLetterParagraphs
    : copy.founderLetterParagraphs.slice(0, 2);

  return (
    <>
      {/* ========== HERO DIVIDIDO CON FOTOGRAFÍA COMPLETA (SIN ROSTROS CORTADOS) ========== */}
      <section
        id="donaciones"
        className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white scroll-mt-28"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-blue/30 blur-3xl" />

        <div className="section-shell relative z-10 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="motion-rise">
              <span className="kicker kicker-light">{copy.badge}</span>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {t("donations.title")}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("donations.text")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#planes-donacion" className="btn-primary">
                  <Heart size={16} className="fill-white" />
                  {copy.chooseHow}
                </a>
                <a href="#transferencias" className="btn-ghost-light">
                  <Banknote size={18} />
                  {copy.bankDetails}
                </a>
              </div>

              {/* Píldoras de navegación interna de la página */}
              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href="#planes-donacion"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.plans}
                </a>
                <a
                  href="#transferencias"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.transfers}
                </a>
                <a
                  href="#impacto"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.impact}
                </a>
                <a
                  href="#carta-fundadora"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.founderLetterEyebrow}
                </a>
                <a
                  href="#que-dice-la-biblia"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.bibleEyebrow}
                </a>
                <a
                  href="#kermes-invierno-magico"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm transition hover:bg-ember hover:border-ember"
                >
                  {copy.kermesNav}
                </a>
              </div>
            </div>

            {/* Fotografía vertical completa, sin recortar las cabezas */}
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <figure className="photo-frame aspect-[3/4] max-h-[540px] w-full ring-2 ring-white/15">
                <img
                  src={asset("servicio-domiciliar/visita-domiciliar/visita-domiciliar-02.jpeg")}
                  alt={
                    language === "en"
                      ? "Warm embrace during a ministry food delivery in Tlaxcala"
                      : "Abrazo cálido durante la entrega de alimento en Tlaxcala"
                  }
                  className="h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white/95">
                  {language === "en"
                    ? "Every gift reaches a real family in Tlaxcala."
                    : "Cada donativo llega directamente a una familia real en Tlaxcala."}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Cifras clave del impacto de donar */}
          <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {copy.impactHighlights.map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl font-semibold text-amber-300 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PLANES DE DONACIÓN CON FOTOGRAFÍAS PROTAGONISTAS ========== */}
      <section id="planes-donacion" className="section-shell scroll-mt-28 bg-cream">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="kicker">{copy.plans}</span>
          <h2 className="title-lg mt-3">{copy.chooseHow}</h2>
          <p className="lead mt-4">{copy.chooseText}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {donationPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.key}
                className={`reveal flex flex-col overflow-hidden rounded-[1.75rem] bg-white transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "ring-2 ring-ember shadow-photo"
                    : "border border-slate-200/80 shadow-soft"
                }`}
              >
                <figure className="photo-frame relative h-64 w-full rounded-none">
                  <img
                    src={plan.image}
                    alt={plan.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="photo-overlay" />
                  {plan.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-ember px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {copy.popular}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ember text-white shadow-md">
                      <Icon size={22} />
                    </span>
                    <div className="text-right">
                      <p className="font-display text-3xl font-semibold leading-none text-white sm:text-4xl">
                        {plan.amount}
                      </p>
                      <p className="mt-1 text-xs font-medium text-white/85">{plan.subtitle}</p>
                    </div>
                  </div>
                </figure>

                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {plan.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {plan.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToTransfers(plan.supportValue)}
                    className={`mt-7 w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    <Heart size={16} className={plan.featured ? "fill-white" : "text-ember"} />
                    {language === "en" ? "Select this option" : "Elegir este apoyo"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ========== DATOS BANCARIOS Y LO QUE LOGRA TU DONACIÓN ========== */}
      <section id="transferencias" className="section-shell scroll-mt-28 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-3xl">
            <span className="kicker">{copy.bankTransfer}</span>
            <h2 className="title-lg mt-3">{copy.bankDetails}</h2>
            <p className="lead mt-4">{copy.bankText}</p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Tarjeta de cuenta bancaria */}
            <div>
              {bankAccounts.map((account, index) => {
                const AccountIcon = account.icon;
                return (
                  <div
                    key={account.bank}
                    className="soft-card border border-slate-200 bg-slate-50/70 p-6 sm:p-9"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white shadow-sm">
                          <AccountIcon size={26} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                            {copy.bankTransfer}
                          </p>
                          <h3 className="font-display text-3xl font-semibold text-ink">
                            {account.bank}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Número de cuenta */}
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {copy.accountNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(account.accountNumber, `account-${index}`)
                            }
                            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-ink transition hover:bg-ember hover:text-white"
                          >
                            {copiedField === `account-${index}` ? (
                              <>
                                <Check size={14} className="text-emerald-600" />
                                <span className="text-emerald-700">{copy.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                {copy.copy}
                              </>
                            )}
                          </button>
                        </div>
                        <p className="mt-2 font-mono text-xl font-bold tracking-wider text-ink sm:text-2xl">
                          {account.accountNumber}
                        </p>
                      </div>

                      {/* CLABE interbancaria */}
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {copy.clabe}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(account.clabe, `clabe-${index}`)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-ink transition hover:bg-ember hover:text-white"
                          >
                            {copiedField === `clabe-${index}` ? (
                              <>
                                <Check size={14} className="text-emerald-600" />
                                <span className="text-emerald-700">{copy.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                {copy.copy}
                              </>
                            )}
                          </button>
                        </div>
                        <p className="mt-2 font-mono text-xl font-bold tracking-wider text-ink sm:text-2xl">
                          {account.clabe}
                        </p>
                      </div>

                      {/* Concepto y selector moderno de destino (sin <select> nativo) */}
                      <div className="rounded-2xl border border-ember/25 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-ember">
                            {copy.transferConcept}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(selectedConcept, `concept-${index}`, false)
                            }
                            className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-ember transition hover:bg-ember hover:text-white"
                          >
                            {copiedField === `concept-${index}` ? (
                              <>
                                <Check size={14} className="text-emerald-600" />
                                <span className="text-emerald-700">{copy.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                {copy.copy}
                              </>
                            )}
                          </button>
                        </div>

                        <div className="mt-2 flex items-center gap-2.5">
                          <Sparkles size={18} className="shrink-0 text-ember" />
                          <p className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
                            {selectedConcept}
                          </p>
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                          {language === "en"
                            ? "Choose what to support"
                            : "Elige a qué quieres apoyar"}
                        </p>

                        <div
                          role="radiogroup"
                          aria-label={
                            language === "en"
                              ? "Choose what to support"
                              : "Elige a qué quieres apoyar"
                          }
                          className="mt-2.5 grid gap-2"
                        >
                          {copy.supportOptions.map((option) => {
                            const isSelected = selectedSupport === option.value;
                            return (
                              <button
                                key={option.value}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                onClick={() => setSelectedSupport(option.value)}
                                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
                                  isSelected
                                    ? "border-ember bg-rose-50/80 text-ink shadow-sm ring-1 ring-ember"
                                    : "border-slate-200 bg-slate-50/60 text-slate-700 hover:border-ember/40 hover:bg-white"
                                }`}
                              >
                                <span>{option.label}</span>
                                <span
                                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                    isSelected
                                      ? "bg-ember text-white"
                                      : "bg-slate-200/70 text-slate-600"
                                  }`}
                                >
                                  {isSelected && <Check size={12} />}
                                  {option.concept}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={shareTransferDetails}
                      className="btn-secondary mt-6 w-full"
                    >
                      {copiedField === "transfer-details" ? (
                        <Check size={18} className="text-emerald-600" />
                      ) : (
                        <Share2 size={18} />
                      )}
                      {copiedField === "transfer-details"
                        ? copy.transferShared
                        : copy.shareBankDetails}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Columna derecha: Impacto visual de la donación (#impacto) */}
            <div id="impacto" className="scroll-mt-28 space-y-6">
              <figure className="photo-frame h-72 sm:h-80">
                <img
                  src={asset("home/home-pantry-display.png")}
                  alt={
                    language === "en"
                      ? "Food pantry packages prepared with donations"
                      : "Despensas preparadas gracias a las donaciones"
                  }
                  loading="lazy"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    {copy.whatGiftAchieves}
                  </span>
                  <p className="mt-1 font-display text-2xl font-semibold">
                    {copy.impactTitle}
                  </p>
                </figcaption>
              </figure>

              <div className="soft-card border border-slate-200/80 bg-cream">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                  <Heart size={24} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {copy.impactTitle}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {t("donations.impactNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CARTA DE LA FUNDADORA Y QUÉ DICE LA BIBLIA ========== */}
      <section id="carta-fundadora" className="section-shell scroll-mt-28 bg-sand">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-3xl">
            <span className="kicker">
              <BookOpen size={14} />
              {copy.founderLetterEyebrow}
            </span>
            <h2 className="title-lg mt-3">{copy.founderLetterTitle}</h2>
            <p className="lead mt-4 italic">{copy.founderLetterIntro}</p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            {/* Retrato de la directora */}
            <aside className="reveal space-y-6">
              <figure className="photo-frame aspect-[4/5] w-full">
                <img
                  src={asset("directora/andrea-byrn.png")}
                  alt={
                    language === "en"
                      ? "Andrea Byrn, Director of Trumpet Call Ministries"
                      : "Andrea Byrn, Directora de Trumpet Call Ministries"
                  }
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-full bg-ember px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Trumpet Call Ministries • 2021
                  </span>
                  <p className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                    {copy.founderLetterName}
                  </p>
                  <p className="text-sm font-medium text-white/85">{copy.founderLetterRole}</p>
                </figcaption>
              </figure>

              <div className="soft-card bg-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">
                  {language === "en"
                    ? "Faith in action, service with purpose."
                    : "Fe en acción, servicio con propósito."}
                </p>
                <p className="mt-3 font-display text-lg italic leading-relaxed text-ink">
                  {language === "en"
                    ? "“Serve the Lord with gladness; come before his presence with singing.”"
                    : "“Servid al Señor con alegría; venid ante su presencia con regocijo.”"}
                </p>
              </div>
            </aside>

            {/* Carta personal con divulgación progresiva */}
            <article className="reveal soft-card bg-white p-7 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-ember">
                  {language === "en" ? "A Personal Letter" : "Carta Personal"}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Loma Bonita, Tlaxcala
                </span>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                {visibleParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "font-display text-xl font-normal leading-relaxed text-ink"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {copy.founderLetterParagraphs.length > 2 && (
                <button
                  type="button"
                  onClick={() => setIsLetterExpanded((prev) => !prev)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-50 px-5 py-2.5 text-sm font-bold text-ember transition hover:bg-ember hover:text-white"
                >
                  {isLetterExpanded ? copy.readLessLetter : copy.readFullLetter}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isLetterExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {/* Qué dice la Biblia (#que-dice-la-biblia) */}
              <div
                id="que-dice-la-biblia"
                className="mt-9 scroll-mt-28 rounded-2xl border-l-4 border-ember bg-cream p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember">
                  <Quote size={16} />
                  <span>{copy.bibleEyebrow}</span>
                </div>
                <p className="quote-block mt-3 text-xl sm:text-2xl">
                  {copy.founderLetterVerse}
                </p>
                <p className="mt-2 text-sm text-slate-600">{copy.bibleSubtitle}</p>
              </div>

              {/* Firma de la fundadora */}
              <div className="mt-9 flex flex-wrap items-end justify-between gap-4 border-t border-slate-100 pt-7">
                <div>
                  <p className="font-display text-base italic text-slate-500">
                    {copy.founderLetterSignature}
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {copy.founderLetterName}
                  </p>
                  <p className="text-sm font-semibold text-ember">{copy.founderLetterRole}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-cream px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    {language === "en" ? "Founded" : "Fundado"}
                  </p>
                  <p className="font-display text-lg font-semibold text-ink">2021</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========== GALERÍA KERMÉS INVIERNO MÁGICO DE CARIDAD ========== */}
      <section
        id="kermes-invierno-magico"
        className="section-shell scroll-mt-28 bg-ink text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="kicker kicker-light">
                <Snowflake size={14} />
                {copy.kermesEyebrow}
              </span>
              <h2 className="title-lg mt-3 text-white">{copy.kermesTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                {copy.kermesIntro}
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm">
              <Camera size={18} className="text-ember-light" />
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

      {/* ========== CIERRE EMOCIONAL (SIN IMAGEN CORTADA Y SIN REPETIR "DONAR AHORA") ========== */}
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
                  {copy.ctaVolunteer}
                  <ArrowRight size={16} />
                </Link>
                <Link to="/reportes" className="btn-ghost-light">
                  {language === "en" ? "View impact reports" : "Ver reportes de impacto"}
                </Link>
              </div>
            </div>

            <figure className="photo-frame aspect-[4/3] ring-2 ring-white/15">
              <img
                src={asset("donaciones/kermes-invierno-magico/kermes-invierno-magico-02.jpeg")}
                alt={copy.kermesTitle}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
