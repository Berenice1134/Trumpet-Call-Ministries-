import {
  BarChart3,
  CalendarDays,
  FileText,
  HandHeart,
  PackageCheck,
  PieChart,
  Scale,
  TrendingUp,
  Users,
  Sparkles,
  Award,
  Globe,
  Church,
  Baby,
  Heart,
  Building2,
  GraduationCap,
  ClipboardList,
  Download,
  Eye,
  X,
  Maximize2,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { createElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

const yearlySupport = [
  { year: 2021, months: "6", beneficiaries: 12, foodKg: 719, pantries: 72, cumulativePantries: 72, cumulativeFoodKg: 719 },
  { year: 2022, months: "12", beneficiaries: 17, foodKg: 1799, pantries: 136, cumulativePantries: 208, cumulativeFoodKg: 2518 },
  { year: 2023, months: "12", beneficiaries: 13, foodKg: 1416, pantries: 130, cumulativePantries: 338, cumulativeFoodKg: 3934 },
  { year: 2024, months: "7", beneficiaries: 20, foodKg: 1177, pantries: 140, cumulativePantries: 478, cumulativeFoodKg: 5111 },
  { year: 2025, months: "12", beneficiaries: 38, foodKg: 3285.68, pantries: 456, cumulativePantries: 934, cumulativeFoodKg: 8396.68 },
  { year: 2026, months: "7", beneficiaries: 33, foodKg: 1700, pantries: 231, cumulativePantries: 1165, cumulativeFoodKg: 10096.68 },
];

const infographicPeriods = [
  {
    id: "2026-jan-feb",
    months: { es: "Enero–febrero", en: "January–February" },
    year: 2026,
    files: {
      es: "assets/reportes/infografia-enero-febrero-2026.pdf",
      en: "assets/reportes/newsletter-january-february-2026.pdf",
    },
  },
  {
    id: "2026-mar-apr",
    months: { es: "Marzo–abril", en: "March–April" },
    year: 2026,
    files: {
      es: "assets/reportes/infografia-marzo-abril-2026.pdf",
      en: "assets/reportes/newsletter-march-april-2026.pdf",
    },
  },
  {
    id: "2026-may-aug",
    months: { es: "Mayo–agosto", en: "May–August" },
    year: 2026,
    files: {
      es: "assets/reportes/infografia-mayo-agosto-2026.pdf",
      en: "assets/reportes/newsletter-may-august-2026.pdf",
    },
  },
];

const donorSources2026 = [
  { key: "mexico", value: 37, color: "from-ink to-ministry-blue", hex: "#0A1E3C", icon: Globe, description: "Donaciones desde México" },
  { key: "englishCenter", value: 2, color: "from-ministry-teal to-teal-600", hex: "#06B6D4", icon: GraduationCap, description: "Ingresos del English Center" },
  { key: "usd", value: 55, color: "from-ember to-ember-dark", hex: "#E11D48", icon: Building2, description: "Donaciones en USD" },
  { key: "kermes", value: 6, color: "from-amber-400 to-amber-600", hex: "#F59E0B", icon: Heart, description: "Recaudación por kermés" },
];

const hospitalDonationMix = [
  { key: "hygieneKits", value: 43, color: "from-ink to-ministry-blue", hex: "#0A1E3C", icon: PackageCheck, description: "Kits de higiene personal" },
  { key: "pajamas", value: 18, color: "from-ministry-teal to-teal-600", hex: "#06B6D4", icon: Heart, description: "Pijamas para niños" },
  { key: "sandals", value: 6, color: "from-amber-400 to-amber-600", hex: "#F59E0B", icon: ClipboardList, description: "Chanclas y calzado" },
  { key: "activities", value: 33, color: "from-ember to-ember-dark", hex: "#E11D48", icon: Sparkles, description: "Actividades recreativas" },
];

const missionDonations = [
  {
    year: 2023,
    month: "Jun",
    place: "Cartolandia",
    value: 28,
    icon: Church,
    color: "from-ember to-ember-dark",
    description: "47 familias apoyadas",
    photo: asset("misiones/cartolandia-primera-14.jpeg"),
  },
  {
    year: 2023,
    month: "Ago",
    place: "Cáritas",
    value: 30,
    icon: HandHeart,
    color: "from-ink to-ministry-blue",
    description: "53 familias apoyadas",
    photo: asset("misiones/dia-caridad-caritas-03.jpeg"),
  },
  {
    year: 2025,
    month: "Mar",
    place: "San Judas",
    value: 42,
    icon: Church,
    color: "from-ministry-teal to-teal-600",
    description: "75 kg + 50 cobijas",
    photo: asset("misiones/espanita-02.jpeg"),
  },
];

const infographicTimeline = {
  es: [
    { date: "Junio 2021", title: "Apertura de English Center", text: "English Center Tlaxcala abre camino como primer soporte del ministerio.", icon: GraduationCap },
    { date: "Julio 2021", title: "Inicio del programa domiciliar", text: "Comienzan las distribuciones mensuales en Loma Bonita, atendiendo a 12 familias.", icon: PackageCheck },
    { date: "Enero 2022", title: "Primeras donaciones de Estados Unidos", text: "Llegan las primeras donaciones internacionales para sostener la misión.", icon: Globe },
    { date: "Agosto 2023", title: "Misión con Cáritas", text: "Se comparte apoyo con 53 familias en la sede parroquial de San José.", icon: HandHeart },
    { date: "Febrero 2025", title: "Misión a Cartolandia", text: "Se colaboró con la iglesia Mensaje de Vida para servir a esta comunidad.", icon: Church },
    { date: "Enero 2026", title: "Misión al Hospital Infantil", text: "Inicia el acompañamiento a niños con insuficiencia renal en el Hospital Infantil de Tlaxcala.", icon: Baby },
    { date: "Julio 2026", title: "5 años de servicio", text: "El ministerio celebra cinco años de trabajo comunitario y acompañamiento a familias.", icon: Award },
  ],
  en: [
    { date: "June 2021", title: "English Center opens", text: "English Center Tlaxcala begins as the first support source for the ministry.", icon: GraduationCap },
    { date: "July 2021", title: "Home visit program begins", text: "Monthly distributions begin in Loma Bonita, serving 12 families.", icon: PackageCheck },
    { date: "January 2022", title: "First donations from the United States", text: "The first international donations arrive to sustain the mission.", icon: Globe },
    { date: "August 2023", title: "Mission with Cáritas", text: "Support is shared with 53 families at San José parish.", icon: HandHeart },
    { date: "February 2025", title: "Mission to Cartolandia", text: "The ministry collaborates with Mensaje de Vida Church to serve this community.", icon: Church },
    { date: "January 2026", title: "Children's Hospital mission", text: "Support begins for children with kidney failure at the Children's Hospital of Tlaxcala.", icon: Baby },
    { date: "July 2026", title: "5 years of service", text: "The ministry celebrates five years of community service and support for families.", icon: Award },
  ],
};

const reportsCopy = {
  es: {
    eyebrow: "Gráficos del ministerio",
    intro: "Detrás de cada cifra hay una mesa servida, una oración compartida y una familia acompañada con constancia en Tlaxcala.",
    heroQuote: "Cada número es una familia con nombre, rostro e historia",
    heroCtaCharts: "Explorar impacto",
    heroCtaPdfs: "Ver boletines e infografías",
    humanNoteEyebrow: "Transparencia con rostro humano",
    humanNoteTitle: "Más de diez toneladas de alimento convertidas en abrazos y esperanza",
    humanNoteText: "Cada despensa entregada desde 2021 representa visitas mensuales a hogares vulnerables, escucha atenta y seguimiento espiritual.",
    stats: {
      pantries: "Despensas donadas",
      food: "Alimentos donados",
      beneficiaries: "Beneficiarios registrados",
      topYear: "Año con más beneficiarios",
    },
    beneficiariesTitle: "Beneficiarios por año",
    foodTitle: "Toneladas de alimentos 2021–2026",
    pantriesTitle: "Despensas donadas y acumuladas",
    donorTitle: "Fuentes de apoyo 2026",
    hospitalTitle: "Distribución de apoyos hospitalarios",
    missionTitle: "Misiones con donaciones registradas",
    timelineEyebrow: "Hitos del ministerio",
    timelineTitle: "5 años transformando Tlaxcala",
    timelineText: "Conoce algunos momentos clave en la historia del ministerio.",
    tonsDelivered: "toneladas de alimentos entregadas",
    tenTons: "10 Toneladas",
    archiveEyebrow: "Documentos institucionales",
    archiveText: "Consulta los tres periodos más recientes, con una infografía en español y un boletín en inglés para cada periodo.",
    spanish: "Español",
    english: "Inglés",
    pending: "Espacio reservado. La infografía se agregará cuando esté disponible.",
    kg: "kg",
    months: "meses",
    beneficiariesWord: "beneficiarios",
    donated: "donado",
    cumulative: "acumulado",
    sourceLabels: {
      mexico: "México",
      englishCenter: "English Center",
      usd: "USD",
      kermes: "Kermés",
    },
    hospitalLabels: {
      hygieneKits: "Kits de aseo",
      pajamas: "Pijamas",
      sandals: "Chanclas",
      activities: "Actividades",
    },
    pdfTitle: "Infografías por periodo",
    annualLabel: "Alimentos",
    totalDonated: "Total de alimentos donados",
    clickToView: "Haz clic para ver detalles",
    total: "Total",
    expand: "Ampliar",
    tapToExpand: "Ver detalles",
    close: "Cerrar",
    showAllMilestones: "Ver los 7 hitos completos",
    showLessMilestones: "Mostrar resumen",
    ctaEyebrow: "¿Cómo puedes ayudar?",
    ctaTitle: "Sé parte del próximo reporte de esperanza en Tlaxcala",
    ctaText: "Tu donativo o voluntariado se transforma directamente en despensas mensuales, visitas al hospital y misiones comunitarias.",
    volunteering: "Voluntariado",
  },
  en: {
    eyebrow: "Ministry charts",
    intro: "Annual food support, pantry deliveries, and ministry outreach at a glance — where every number represents a family accompanied with love.",
    heroQuote: "Every number is a family with a name, a face, and a story",
    heroCtaCharts: "Explore impact",
    heroCtaPdfs: "View newsletters & infographics",
    humanNoteEyebrow: "Transparency with a human heart",
    humanNoteTitle: "Over ten tons of food turned into embraces and hope",
    humanNoteText: "Every pantry bag delivered since 2021 represents monthly visits to vulnerable homes, attentive listening, and spiritual care.",
    stats: {
      pantries: "Pantries donated",
      food: "Food donated",
      beneficiaries: "Registered beneficiaries",
      topYear: "Year with most beneficiaries",
    },
    beneficiariesTitle: "Beneficiaries by year",
    foodTitle: "Food delivered 2021–2026",
    pantriesTitle: "Donated and cumulative pantries",
    donorTitle: "2026 support sources",
    hospitalTitle: "Hospital support distribution",
    missionTitle: "Missions with recorded donations",
    timelineEyebrow: "Ministry milestones",
    timelineTitle: "Five years transforming Tlaxcala",
    timelineText: "Explore key moments in the ministry's history.",
    tonsDelivered: "tons of food delivered",
    tenTons: "10 Tons",
    archiveEyebrow: "Institutional documents",
    archiveText: "Browse the three most recent reporting periods, with a Spanish infographic and an English newsletter for each period.",
    spanish: "Spanish",
    english: "English",
    pending: "Reserved space. The infographic will be added when it is available.",
    kg: "kg",
    months: "months",
    beneficiariesWord: "beneficiaries",
    donated: "donated",
    cumulative: "cumulative",
    sourceLabels: {
      mexico: "México",
      englishCenter: "English Center",
      usd: "USD",
      kermes: "Kermés",
    },
    hospitalLabels: {
      hygieneKits: "Hygiene kits",
      pajamas: "Pajamas",
      sandals: "Sandals",
      activities: "Activities",
    },
    pdfTitle: "Infographics by period",
    annualLabel: "Food",
    totalDonated: "Total food donated",
    clickToView: "Click to view details",
    total: "Total",
    expand: "Expand",
    tapToExpand: "View details",
    close: "Close",
    showAllMilestones: "View all 7 milestones",
    showLessMilestones: "Show summary",
    ctaEyebrow: "How can you help?",
    ctaTitle: "Be part of the next report of hope in Tlaxcala",
    ctaText: "Your gift or volunteer service turns directly into monthly pantry bags, hospital visits, and community missions.",
    volunteering: "Volunteer Service",
  },
};

const formatNumber = (value, decimals = 0) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);

// ===== MODAL DE DETALLE (COMPACTO) =====
function DetailModal({ isOpen, onClose, title, data, total, totalLabel, hintLabel }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/75 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-photo"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 bg-ink px-6 py-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <h3 className="truncate font-display text-xl font-semibold leading-tight text-white">{title}</h3>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="shrink-0 rounded-full bg-white/15 p-2 text-white transition-colors hover:bg-white/25"
            >
              <X size={16} />
            </button>
          </div>
          {total !== undefined && (
            <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-ember-light">
              {totalLabel}: <span className="font-bold text-white">{total}</span>
            </p>
          )}
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 rounded-xl bg-cream px-4 py-3 transition-colors hover:bg-sand/70"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-ember" />
                <span className="truncate font-display text-base font-semibold text-ink">
                  {item.label}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2 tabular-nums">
                <span className="text-sm font-bold text-ink">{item.value}</span>
                {item.percentage !== undefined && (
                  <span className="text-xs font-semibold text-slate-500">
                    ({item.percentage}%)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 border-t border-ink/5 bg-cream/60 px-4 py-2.5">
          <p className="text-center text-xs font-medium text-slate-500">
            {hintLabel}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ===== STAT CARD =====
function StatCard({ icon, label, value, detail, expandLabel, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="soft-card group relative flex w-full flex-col justify-between text-left transition duration-300 hover:-translate-y-1 hover:border-ember/30 hover:shadow-photo"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ember/10 text-ember transition group-hover:bg-ember group-hover:text-white">
          {createElement(icon, { size: 22 })}
        </span>
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          {detail}
        </span>
      </div>

      <div className="mt-6">
        <span className="block font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {value}
        </span>
        <span className="mt-2 block text-base font-medium text-slate-600">{label}</span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-ember">
          {expandLabel}
        </span>
        <ArrowUpRight
          size={16}
          className="text-ember transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </button>
  );
}

// ===== CHART SHELL (vista previa compacta + modal al hacer clic) =====
function ChartShell({
  title,
  subtitle,
  icon,
  preview,
  children,
  expandLabel = "Ver detalles",
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const modal = open
    ? createPortal(
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <section className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream shadow-photo sm:max-h-[calc(100dvh-3rem)]">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-ink/10 bg-white px-5 py-4 sm:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                  {createElement(icon, { size: 18 })}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-semibold text-ink sm:text-xl">
                    {title}
                  </p>
                  {subtitle && (
                    <p className="truncate text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar gráfica"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:bg-ember"
              >
                <X size={18} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-7">{children}</div>
          </section>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${expandLabel}: ${title}`}
        className="soft-card group relative flex w-full flex-col justify-between text-left transition duration-300 hover:-translate-y-1 hover:border-ember/30 hover:shadow-photo focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ember/20"
      >
        <span className="flex w-full items-start justify-between gap-4">
          <span className="min-w-0 flex-1">
            <span className="block font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              {title}
            </span>
            {subtitle && (
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-ember">
                {subtitle}
              </span>
            )}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream text-ink transition group-hover:bg-ember group-hover:text-white">
            {createElement(icon, { size: 19 })}
          </span>
        </span>

        <span className="mt-6 block w-full flex-1">{preview}</span>

        <span className="mt-6 flex w-full items-center justify-between border-t border-ink/5 pt-4">
          <span className="h-1 w-12 rounded-full bg-ember/40 transition-all duration-300 group-hover:w-20 group-hover:bg-ember" />
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition group-hover:text-ember">
            {expandLabel}
            <Maximize2 size={13} />
          </span>
        </span>
      </button>

      {modal}
    </>
  );
}

// ===== BAR CHART (Beneficiarios) =====
function BarChartBlock({ title, data, valueKey, valueLabel, secondaryKey, secondaryLabel, expandLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);
  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  const preview = (
    <span className="flex h-28 items-end gap-2 pt-2">
      {data.map((item, i) => {
        const h = Math.max(12, (item[valueKey] / maxValue) * 100);
        const isLast = i === data.length - 1;
        return (
          <span key={item.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-bold text-ink">{item[valueKey]}</span>
            <span className="relative flex w-full flex-1 items-end">
              <span
                className={`w-full rounded-t-lg transition-all duration-500 ${
                  isLast ? "bg-ember" : "bg-ink/80 group-hover:bg-ink"
                }`}
                style={{ height: `${h}%` }}
              />
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {String(item.year).slice(2)}
            </span>
          </span>
        );
      })}
    </span>
  );

  return (
    <ChartShell
      title={title}
      subtitle={`${formatNumber(total)}${valueLabel ? ` ${valueLabel}` : ""}`}
      icon={BarChart3}
      preview={preview}
      expandLabel={expandLabel}
    >
      <article tabIndex={0} className="soft-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-ember">
              {formatNumber(total)}
              {valueLabel ? ` ${valueLabel}` : ""}
            </p>
          </div>
          <div className="rounded-2xl bg-ember/10 p-3 text-ember">
            <BarChart3 size={20} />
          </div>
        </div>

        {selectedData && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-cream p-4 border border-ink/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {selectedData.year}
              </p>
              <p className="font-display text-2xl font-semibold text-ember">
                {formatNumber(selectedData[valueKey])}
                {valueLabel ? ` ${valueLabel}` : ""}
              </p>
            </div>
            {secondaryKey && (
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {secondaryLabel}
                </p>
                <p className="font-display text-xl font-semibold text-ink">
                  {formatNumber(selectedData[secondaryKey])}
                </p>
              </div>
            )}
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-ink"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {data.map((item, index) => {
            const pct = (item[valueKey] / maxValue) * 100;
            const isSelected = selectedIndex === index;
            const prev = index > 0 ? data[index - 1][valueKey] : null;
            const delta = prev ? Math.round(((item[valueKey] - prev) / prev) * 100) : null;

            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedIndex(isSelected ? null : index)}
                className="group/row block w-full text-left"
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-display text-base font-semibold transition-colors ${
                        isSelected ? "text-ember" : "text-ink"
                      }`}
                    >
                      {item.year}
                    </span>
                    {delta !== null && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          delta >= 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-800"
                        }`}
                      >
                        {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-bold tabular-nums transition-colors ${
                      isSelected ? "text-ember" : "text-slate-600"
                    }`}
                  >
                    {formatNumber(item[valueKey])}
                    {valueLabel ? ` ${valueLabel}` : ""}
                  </span>
                </div>
                <div className="relative h-3 overflow-hidden rounded-full bg-sand">
                  <div
                    className={`relative h-full rounded-full transition-all duration-700 ease-out ${
                      isSelected ? "bg-ember" : "bg-ink group-hover/row:bg-ember"
                    }`}
                    style={{ width: `${Math.max(6, pct)}%` }}
                  />
                </div>
                {secondaryKey && (
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {formatNumber(item[secondaryKey])} {secondaryLabel}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </article>
    </ChartShell>
  );
}

// ===== AREA LINE CHART (HERO — Toneladas) =====
function AreaLineChartBlock({ title, data, annualLabel, totalDonated, kgLabel }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const W = 1000;
  const H = 400;
  const padL = 82;
  const padR = 44;
  const padT = 36;
  const padB = 60;
  const plotInsetX = 46;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const maxCum = 12000;
  const maxAnnual = Math.max(...data.map((d) => d.foodKg));

  const xFor = (i) =>
    padL + plotInsetX + (i / (data.length - 1)) * (innerW - plotInsetX * 2);
  const yCum = (v) => padT + innerH - (v / maxCum) * innerH;
  const yAnnual = (v) => padT + innerH - (v / maxAnnual) * (innerH * 0.55);

  const cumPts = data.map((d, i) => [xFor(i), yCum(d.cumulativeFoodKg)]);

  const smoothPath = (pts) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
      const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
      const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
      const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
    }
    return d;
  };

  const linePath = smoothPath(cumPts);
  const areaPath = `${linePath} L ${cumPts.at(-1)[0]} ${padT + innerH} L ${cumPts[0][0]} ${
    padT + innerH
  } Z`;

  const ticks = [0, 2000, 4000, 6000, 8000, 10000, 12000];
  const totalTons = (data.at(-1).cumulativeFoodKg / 1000).toFixed(1);
  const latestAnnual = data.at(-1).foodKg;
  const active = activeIndex !== null ? data[activeIndex] : null;

  return (
    <article className="soft-card relative">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <span className="kicker">
            <TrendingUp size={14} /> 2021 – 2026
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap items-stretch gap-3">
          <div className="rounded-2xl bg-ink px-5 py-3.5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember-light">
              {totalDonated}
            </p>
            <p className="mt-0.5 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {totalTons} t
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream px-5 py-3.5 text-ink">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              2026 · {annualLabel}
            </p>
            <p className="mt-0.5 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {formatNumber(latestAnnual)} {kgLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-6 text-xs font-bold text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-ember" />
          {annualLabel} ({kgLabel})
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-ink" />
          {totalDonated}
        </span>
      </div>

      <div className="relative mt-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          onMouseLeave={() => setActiveIndex(null)}
          role="img"
          aria-label={title}
        >
          <defs>
            <linearGradient id="barGradWarm" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#FB7185" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="areaGradWarm" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0A1E3C" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0A1E3C" stopOpacity="0" />
            </linearGradient>
          </defs>

          {ticks.map((t) => {
            const y = yCum(t);
            return (
              <g key={t}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={y}
                  y2={y}
                  stroke="#cbd5e1"
                  strokeDasharray="3 6"
                  strokeWidth="1"
                />
                <text
                  x={padL - 14}
                  y={y + 5}
                  textAnchor="end"
                  fill="#64748b"
                  fontSize="13"
                  fontWeight="600"
                >
                  {formatNumber(t)}
                </text>
              </g>
            );
          })}

          {data.map((d, i) => {
            const bw = (innerW / data.length) * 0.38;
            const y = yAnnual(d.foodKg);
            const h = padT + innerH - y;
            const isActive = activeIndex === i;
            return (
              <rect
                key={`bar-${d.year}`}
                x={xFor(i) - bw / 2}
                y={y}
                width={bw}
                height={Math.max(2, h)}
                rx="8"
                fill="url(#barGradWarm)"
                className="transition-opacity duration-300"
                opacity={activeIndex === null || isActive ? 0.92 : 0.35}
              />
            );
          })}

          <path d={areaPath} fill="url(#areaGradWarm)" className="transition-all duration-500" />
          <path
            d={linePath}
            fill="none"
            stroke="#0A1E3C"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {activeIndex !== null && (
            <line
              x1={xFor(activeIndex)}
              x2={xFor(activeIndex)}
              y1={padT}
              y2={padT + innerH}
              stroke="#E11D48"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.7"
            />
          )}

          {cumPts.map(([x, y], i) => {
            const isActive = activeIndex === i;
            return (
              <g key={`pt-${i}`} className="pointer-events-none">
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 10 : 6}
                  fill="#fff"
                  stroke="#0A1E3C"
                  strokeWidth="3"
                  className="transition-all duration-300"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 4.5 : 2.5}
                  fill="#E11D48"
                  className="transition-all duration-300"
                />
              </g>
            );
          })}

          {data.map((d, i) => {
            const x = xFor(i);
            const isActive = activeIndex === i;
            return (
              <g key={`x-${d.year}`}>
                <text
                  x={x}
                  y={H - 22}
                  textAnchor="middle"
                  fill={isActive ? "#0B2A3A" : "#64748b"}
                  fontSize="15"
                  fontWeight="700"
                  className="transition-colors"
                >
                  {d.year}
                </text>
                <rect
                  x={x - innerW / data.length / 2}
                  y={padT}
                  width={innerW / data.length}
                  height={innerH}
                  fill="transparent"
                  onMouseEnter={() => setActiveIndex(i)}
                />
              </g>
            );
          })}
        </svg>

        {active && (
          <div
            className={`pointer-events-none absolute z-20 w-max max-w-[260px] -translate-y-full rounded-2xl bg-ink px-4 py-3 text-white shadow-photo sm:max-w-xs ${
              activeIndex === 0
                ? "translate-x-0"
                : activeIndex === data.length - 1
                  ? "-translate-x-full"
                  : "-translate-x-1/2"
            }`}
            style={{
              left: `${(xFor(activeIndex) / W) * 100}%`,
              top: `${(yCum(active.cumulativeFoodKg) / H) * 100}%`,
              marginTop: "-14px",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember-light">
              {active.year}
            </p>
            <p className="mt-1 text-sm font-semibold">
              {formatNumber(active.foodKg, 2)} {kgLabel} · {annualLabel}
            </p>
            <p className="text-sm font-semibold text-white/85">
              {formatNumber(active.cumulativeFoodKg, 2)} {kgLabel} · {totalDonated}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

// ===== COLUMN CHART (Despensas) =====
function ColumnChartBlock({ title, data, valueKey, secondaryKey, valueLabel, secondaryLabel, expandLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);
  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  const preview = (
    <span className="flex h-28 items-end gap-2 pt-2">
      {data.map((item, i) => {
        const h = Math.max(12, (item[valueKey] / maxValue) * 100);
        const isLast = i === data.length - 1;
        return (
          <span key={item.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-bold text-ink">{item[valueKey]}</span>
            <span className="relative flex w-full flex-1 items-end">
              <span
                className={`w-full rounded-t-lg transition-all duration-500 ${
                  isLast ? "bg-ember" : "bg-ministry-teal/80 group-hover:bg-ministry-teal"
                }`}
                style={{ height: `${h}%` }}
              />
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {String(item.year).slice(2)}
            </span>
          </span>
        );
      })}
    </span>
  );

  return (
    <ChartShell
      title={title}
      subtitle={`${formatNumber(total)} ${valueLabel}`}
      icon={PackageCheck}
      preview={preview}
      expandLabel={expandLabel}
    >
      <article tabIndex={0} className="soft-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-ember">
              {formatNumber(total)} {valueLabel}
            </p>
          </div>
          <div className="rounded-2xl bg-ember/10 p-3 text-ember">
            <PackageCheck size={20} />
          </div>
        </div>

        {selectedData && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-cream p-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {selectedData.year}
              </p>
              <div className="mt-1 flex gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {valueLabel}
                  </p>
                  <p className="font-display text-xl font-semibold text-ember">
                    {formatNumber(selectedData[valueKey])}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {secondaryLabel}
                  </p>
                  <p className="font-display text-xl font-semibold text-ink">
                    {formatNumber(selectedData[secondaryKey])}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-ink"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="relative mt-6 overflow-hidden rounded-2xl bg-cream px-4 pb-4 pt-12">
          <div className="relative flex h-56 items-end gap-2 sm:gap-3">
            {data.map((item, index) => {
              const h = Math.max(10, (item[valueKey] / maxValue) * 100);
              const isSelected = selectedIndex === index;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedIndex(isSelected ? null : index)}
                  className="group/bar flex h-full flex-1 flex-col justify-end gap-2"
                >
                  <span className="text-center text-xs font-bold text-ink">
                    {item[valueKey]}
                  </span>
                  <div className="relative flex flex-1 items-end">
                    <div
                      className={`relative w-full rounded-t-xl transition-all duration-500 ${
                        isSelected
                          ? "bg-ember"
                          : "bg-ink/85 group-hover/bar:bg-ember"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span
                    className={`text-center text-xs font-bold transition-colors ${
                      isSelected ? "text-ember" : "text-slate-600"
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {data.slice(-3).map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-ink/5 bg-cream p-4 text-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-ink">{item.year}</p>
                <span className="h-2 w-2 rounded-full bg-ember" />
              </div>
              <p className="mt-1 font-medium text-slate-600">
                {formatNumber(item[secondaryKey])} {secondaryLabel}
              </p>
            </div>
          ))}
        </div>
      </article>
    </ChartShell>
  );
}

// ===== DONUT CHART =====
function DonutChart({ title, items, labels, expandLabel }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const largest = items.reduce(
    (max, item) => (item.value > max.value ? item : max),
    items[0]
  );
  const selectedItem = items.find((item) => item.key === selectedKey);
  // El centro muestra la sección seleccionada; si no hay selección, la más grande.
  const focusItem = selectedItem ?? largest;
  const FocusIcon = focusItem.icon;

  let acc = 0;
  const segments = items.map((item) => {
    const seg = (item.value / total) * circumference;
    const s = { ...item, seg, offset: acc };
    acc += seg;
    return s;
  });

  const preview = (
    <span className="flex items-center gap-5">
      <span className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 100 100" className="-rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F3EADF" strokeWidth="14" />
          {items.map((item, i) => {
            const before = items.slice(0, i).reduce((s, d) => s + d.value, 0);
            const after = before + item.value;
            return (
              <circle
                key={item.key}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={item.hex}
                strokeWidth="14"
                pathLength="100"
                strokeDasharray={`${Math.max(0, after - before - 1.5)} 100`}
                strokeDashoffset={-before}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
        <span className="absolute inset-0 grid place-items-center">
          <span className="font-display text-lg font-semibold leading-none text-ink">
            {largest.value}%
          </span>
        </span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-2">
        {items.map((item) => (
          <span key={item.key} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: item.hex }}
            />
            <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-600">
              {labels[item.key]}
            </span>
            <span className="shrink-0 text-xs font-bold text-ink">
              {item.value}%
            </span>
          </span>
        ))}
      </span>
    </span>
  );

  return (
    <ChartShell
      title={title}
      subtitle={`${total}%`}
      icon={PieChart}
      preview={preview}
      expandLabel={expandLabel}
    >
      <article tabIndex={0} className="soft-card">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
          <div className="rounded-2xl bg-ember/10 p-3 text-ember">
            <PieChart size={20} />
          </div>
        </div>

        {selectedItem && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-cream p-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {labels[selectedItem.key]}
              </p>
              <p className="font-display text-2xl font-semibold text-ember">{selectedItem.value}%</p>
            </div>
            <div className="max-w-[55%] text-right">
              <p className="text-sm font-medium text-slate-700">
                {selectedItem.description || "—"}
              </p>
            </div>
            <button
              onClick={() => setSelectedKey(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-ink"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="mt-6 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
          <div className="relative mx-auto h-52 w-52">
            <svg viewBox="0 0 100 100" className="-rotate-90">
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#F3EADF" strokeWidth="12" />
              {segments.map((s) => {
                const gap = 1.5;
                const isSelected = selectedKey === s.key;
                const isDimmed = selectedKey !== null && !isSelected;
                return (
                  <circle
                    key={s.key}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={s.hex}
                    strokeWidth={isSelected ? 15 : 12}
                    strokeDasharray={`${Math.max(0, s.seg - gap)} ${circumference}`}
                    strokeDashoffset={-s.offset}
                    opacity={isDimmed ? 0.25 : 1}
                    onClick={() => setSelectedKey(isSelected ? null : s.key)}
                    className="cursor-pointer transition-all duration-300 hover:opacity-90"
                  />
                );
              })}
            </svg>
            <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
              <div
                key={focusItem.key}
                className="gallery-photo-enter flex max-w-[7.5rem] flex-col items-center gap-1"
              >
                <FocusIcon size={16} style={{ color: focusItem.hex }} />
                <p className="font-display text-3xl font-semibold leading-none text-ink">
                  {focusItem.value}%
                </p>
                <p className="text-[0.65rem] font-bold uppercase leading-tight tracking-[0.12em] text-slate-500">
                  {labels[focusItem.key]}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {items.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedKey === item.key;
              const isDimmed = selectedKey !== null && !isSelected;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedKey(isSelected ? null : item.key)}
                  aria-pressed={isSelected}
                  style={isSelected ? { borderColor: item.hex, boxShadow: `0 0 0 1px ${item.hex}` } : undefined}
                  className={`w-full rounded-xl border p-3.5 text-left transition ${
                    isSelected
                      ? "bg-white"
                      : isDimmed
                        ? "border-ink/5 bg-cream/60 opacity-50 hover:opacity-90"
                        : "border-ink/5 bg-cream/60 hover:bg-cream"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-sm font-bold text-ink">
                      <Icon size={16} className="text-ember" />
                      {labels[item.key]}
                    </span>
                    <span className="font-display text-lg font-semibold text-ink">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sand">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.value}%`, backgroundColor: item.hex }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </article>
    </ChartShell>
  );
}

// ===== MISSION CARDS =====
function MissionCard({ item }) {
  const Icon = item.icon;
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-ink/5 bg-cream/60 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
      <figure className="photo-frame relative h-56 overflow-hidden rounded-none bg-ink">
        <img
          src={item.photo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
          loading="lazy"
        />
        <img
          src={item.photo}
          alt={item.place}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-1.5"
        />
        <div className="photo-overlay z-20" />
        <figcaption className="absolute bottom-3 left-4 right-4 z-30 flex items-center justify-between text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-md">
            <Icon size={13} />
            {item.month} {item.year}
          </span>
          <span className="font-display text-2xl font-semibold text-white">{item.value}%</span>
        </figcaption>
      </figure>
      <div className="p-5">
        <h4 className="font-display text-xl font-semibold text-ink">{item.place}</h4>
        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-ember transition-all duration-700"
            style={{ width: `${item.value}%` }}
          />
        </div>
      </div>
    </article>
  );
}

export default function Reports() {
  const { language, t } = useLanguage();
  const copy = reportsCopy[language] ?? reportsCopy.es;
  const timelineItems = infographicTimeline[language] ?? infographicTimeline.es;
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [selectedPeriodId, setSelectedPeriodId] = useState("2026-may-aug");
  const [selectedDocumentLanguage, setSelectedDocumentLanguage] = useState(
    language === "en" ? "en" : "es"
  );
  const [detailModal, setDetailModal] = useState(null);
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  const selectedPeriod =
    infographicPeriods.find((period) => period.id === selectedPeriodId) ??
    infographicPeriods.at(-1);
  const selectedInfographic = selectedPeriod.files[selectedDocumentLanguage];
  const visibleInfographicPeriods = infographicPeriods.slice(-3);

  useEffect(() => {
    if (!showFullscreen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowFullscreen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullscreen]);

  const totalPantries = yearlySupport.at(-1).cumulativePantries;
  const totalFoodKg = yearlySupport.at(-1).cumulativeFoodKg;
  const totalBeneficiaries = yearlySupport.reduce(
    (sum, item) => sum + item.beneficiaries,
    0
  );

  const handleStatClick = (stat) => {
    let title = "";
    let data = [];
    let total = "";

    switch (stat) {
      case "pantries":
        title = copy.stats.pantries;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: item.pantries,
          percentage: Math.round((item.pantries / totalPantries) * 100),
        }));
        total = formatNumber(totalPantries);
        break;
      case "food":
        title = copy.stats.food;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: `${formatNumber(item.foodKg, 2)} kg`,
          percentage: Math.round((item.foodKg / totalFoodKg) * 100),
        }));
        total = `${formatNumber(totalFoodKg, 2)} kg`;
        break;
      case "beneficiaries":
        title = copy.stats.beneficiaries;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: item.beneficiaries,
          percentage: Math.round((item.beneficiaries / totalBeneficiaries) * 100),
        }));
        total = formatNumber(totalBeneficiaries);
        break;
      default:
        return;
    }

    setDetailModal({ title, data, total });
  };

  const displayedMilestones = showAllMilestones ? timelineItems : timelineItems.slice(0, 4);

  return (
    <>
      {/* ========== HERO DIVIDIDO: CIFRAS CON ROSTRO HUMANO COMPLETO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-teal/15 blur-3xl" />

        <div className="section-shell relative z-10 w-full py-12 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="motion-rise lg:col-span-7">
              <span className="kicker kicker-light">{copy.eyebrow}</span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {t("reports.title")}
              </h1>
              <p className="mt-5 font-display text-xl italic text-ember-light sm:text-2xl">
                “{copy.heroQuote}”
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {copy.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#graficos-ministerio" className="btn-primary">
                  {copy.heroCtaCharts}
                  <ChevronDown size={18} />
                </a>
                <a href="#pdf-institucional" className="btn-ghost-light">
                  <FileText size={16} />
                  {copy.heroCtaPdfs}
                </a>
              </div>

              {/* Cifras humanas destacadas sobre la portada */}
              <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => handleStatClick("pantries")}
                  className="group text-left transition hover:opacity-95"
                >
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {formatNumber(totalPantries)}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/80 group-hover:text-ember-light sm:text-sm">
                    {copy.stats.pantries} (2021–2026) →
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => handleStatClick("food")}
                  className="group text-left transition hover:opacity-95"
                >
                  <p className="font-display text-3xl font-semibold text-ember-light sm:text-4xl">
                    {formatNumber(totalFoodKg / 1000, 1)} t
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/80 group-hover:text-ember-light sm:text-sm">
                    {copy.tonsDelivered} ({formatNumber(totalFoodKg, 2)} kg) →
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => handleStatClick("beneficiaries")}
                  className="group text-left transition hover:opacity-95"
                >
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {formatNumber(totalBeneficiaries)}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/80 group-hover:text-ember-light sm:text-sm">
                    {copy.stats.beneficiaries} →
                  </p>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="photo-frame mx-auto max-w-md aspect-[3/4] shadow-2xl ring-1 ring-white/15">
                <img
                  src={asset("servicio-domiciliar/visita-domiciliar/visita-domiciliar-02.jpeg")}
                  alt={
                    language === "en"
                      ? "Ministry pantry delivery and family accompaniment in Tlaxcala"
                      : "Entrega de despensa y acompañamiento familiar en Tlaxcala"
                  }
                  className="h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white">
                  {copy.tenTons} · 2021–2026
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GRÁFICOS DEL MINISTERIO ========== */}
      <section
        id="graficos-ministerio"
        className="section-shell scroll-mt-28 bg-cream"
      >
        <div className="mx-auto max-w-7xl">
          {/* Intro humana con fotografía */}
          <div className="reveal mb-14 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="kicker">{copy.humanNoteEyebrow}</span>
              <h2 className="title-lg mt-3">{copy.humanNoteTitle}</h2>
              <p className="lead mt-4">{copy.humanNoteText}</p>
            </div>
            <figure className="photo-frame h-64 sm:h-72 lg:col-span-5">
              <img
                src={asset("home/home-pantry-display.png")}
                alt={copy.stats.pantries}
                loading="lazy"
              />
              <div className="photo-overlay" />
              <figcaption className="absolute bottom-5 left-5 right-5 font-display text-lg font-medium text-white">
                {copy.tenTons} · 2021–2026
              </figcaption>
            </figure>
          </div>

          {/* Tarjetas de impacto interactivas */}
          <div className="reveal grid gap-6 sm:grid-cols-3">
            <StatCard
              icon={PackageCheck}
              label={copy.stats.pantries}
              value={formatNumber(totalPantries)}
              detail="2021–2026"
              expandLabel={copy.tapToExpand}
              onClick={() => handleStatClick("pantries")}
            />
            <StatCard
              icon={Scale}
              value={`${formatNumber(totalFoodKg / 1000, 1)} t`}
              label={copy.tonsDelivered}
              detail={`${formatNumber(totalFoodKg, 2)} kg`}
              expandLabel={copy.tapToExpand}
              onClick={() => handleStatClick("food")}
            />
            <StatCard
              icon={Users}
              label={copy.stats.beneficiaries}
              value={formatNumber(totalBeneficiaries)}
              detail="2021–2026"
              expandLabel={copy.tapToExpand}
              onClick={() => handleStatClick("beneficiaries")}
            />
          </div>

          {/* Gráfica principal de alimentos */}
          <div className="reveal mt-8">
            <AreaLineChartBlock
              title={copy.foodTitle}
              data={yearlySupport}
              annualLabel={copy.annualLabel}
              totalDonated={copy.totalDonated}
              kgLabel={copy.kg}
            />
          </div>

          {/* Fila 2: Beneficiarios + Fuentes de apoyo */}
          <div className="reveal mt-6 grid gap-6 lg:grid-cols-2">
            <BarChartBlock
              title={copy.beneficiariesTitle}
              data={yearlySupport}
              valueKey="beneficiaries"
              valueLabel=""
              secondaryKey="months"
              secondaryLabel={copy.months}
              expandLabel={copy.tapToExpand}
            />
            <DonutChart
              title={copy.donorTitle}
              items={donorSources2026}
              labels={copy.sourceLabels}
              expandLabel={copy.tapToExpand}
            />
          </div>

          {/* Fila 3: Despensas + Hospital */}
          <div className="reveal mt-6 grid gap-6 lg:grid-cols-2">
            <ColumnChartBlock
              title={copy.pantriesTitle}
              data={yearlySupport}
              valueKey="pantries"
              valueLabel={copy.donated}
              secondaryKey="cumulativePantries"
              secondaryLabel={copy.cumulative}
              expandLabel={copy.tapToExpand}
            />
            <DonutChart
              title={copy.hospitalTitle}
              items={hospitalDonationMix}
              labels={copy.hospitalLabels}
              expandLabel={copy.tapToExpand}
            />
          </div>

          {/* Fila 4: Misiones con fotografía */}
          <article className="reveal soft-card mt-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="kicker">2023 – 2025</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {copy.missionTitle}
                </h3>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                <HandHeart size={20} />
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {missionDonations.map((item) => (
                <MissionCard key={`${item.year}-${item.place}`} item={item} />
              ))}
            </div>
          </article>
        </div>
      </section>

      {detailModal && (
        <DetailModal
          isOpen={true}
          onClose={() => setDetailModal(null)}
          title={detailModal.title}
          data={detailModal.data}
          total={detailModal.total}
          totalLabel={copy.total}
          hintLabel={copy.clickToView}
        />
      )}

      {/* ========== HITOS DEL MINISTERIO (SECCIÓN OSCURA CON DIVULGACIÓN PROGRESIVA) ========== */}
      <section
        id="linea-tiempo-ministerio"
        className="section-shell scroll-mt-28 bg-ink text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="kicker kicker-light">
                <CalendarDays size={14} />
                {copy.timelineEyebrow}
              </span>
              <h2 className="title-lg mt-3 text-white">{copy.timelineTitle}</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/75">
              {copy.timelineText}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {displayedMilestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={`${item.date}-${item.title}`}
                  className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-ember-light/40 hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-ember-light">
                        {item.date}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon size={17} />
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-white/75">
                      {item.text}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 pt-3 border-t border-white/10">
                    <span className="font-display text-sm font-semibold text-ember-light">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                </article>
              );
            })}
          </div>

          {timelineItems.length > 4 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllMilestones((prev) => !prev)}
                className="btn-ghost-light"
              >
                {showAllMilestones ? copy.showLessMilestones : copy.showAllMilestones}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showAllMilestones ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========== INFOGRAFÍAS Y BOLETINES PDF ========== */}
      <section
        id="pdf-institucional"
        className="section-shell scroll-mt-28 bg-sand/60"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="kicker">
              <FileText size={14} />
              {copy.archiveEyebrow}
            </span>
            <h2 className="title-lg mt-3">{copy.pdfTitle}</h2>
            <p className="lead mt-4">{copy.archiveText}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3" aria-label={copy.pdfTitle}>
            {visibleInfographicPeriods.map((period, idx) => {
              const isSelected = selectedPeriodId === period.id;
              return (
                <article
                  key={period.id}
                  className={`rounded-[1.5rem] border p-6 transition duration-300 ${
                    isSelected
                      ? "border-ember bg-white shadow-soft"
                      : "border-ink/5 bg-white/75 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        isSelected ? "bg-ember text-white" : "bg-sand text-ink"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      {period.year}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPeriodId(period.id)}
                    aria-label={`${period.months[language] ?? period.months.es} ${period.year}`}
                    aria-current={isSelected ? "step" : undefined}
                    className="mt-4 block text-left font-display text-2xl font-semibold text-ink hover:text-ember"
                  >
                    {period.months[language] ?? period.months.es} {period.year}
                  </button>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["es", "en"].map((docLanguage) => {
                      const hasFile = Boolean(period.files[docLanguage]);
                      const active =
                        isSelected && selectedDocumentLanguage === docLanguage;
                      return (
                        <button
                          key={docLanguage}
                          type="button"
                          disabled={!hasFile}
                          onClick={() => {
                            setSelectedPeriodId(period.id);
                            setSelectedDocumentLanguage(docLanguage);
                          }}
                          className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                            active
                              ? "bg-ink text-white shadow-sm"
                              : "border border-ink/10 bg-cream text-ink hover:border-ember hover:text-ember disabled:cursor-not-allowed disabled:opacity-50"
                          }`}
                        >
                          {docLanguage === "es" ? copy.spanish : copy.english}
                          {hasFile ? " · PDF" : " · …"}
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-soft">
            {selectedInfographic ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 bg-white px-5 py-4 sm:px-7">
                  <div className="min-w-0">
                    <p className="truncate font-display text-lg font-semibold text-ink sm:text-xl">
                      {selectedPeriod.months[language] ?? selectedPeriod.months.es}{" "}
                      {selectedPeriod.year}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">
                      {selectedDocumentLanguage === "es" ? copy.spanish : copy.english} · PDF
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => setShowFullscreen(true)}
                      className="btn-secondary !px-5 !py-2.5 !text-xs"
                    >
                      <Eye size={15} />
                      {language === "en" ? "Fullscreen" : "Pantalla completa"}
                    </button>
                    <a
                      href={`${import.meta.env.BASE_URL}${selectedInfographic}`}
                      download
                      className="btn-primary !px-5 !py-2.5 !text-xs"
                    >
                      <Download size={15} />
                      {language === "en" ? "Download" : "Descargar"}
                    </a>
                  </div>
                </div>
                <iframe
                  title={`${
                    selectedPeriod.months[language] ?? selectedPeriod.months.es
                  } ${selectedPeriod.year} — ${selectedDocumentLanguage}`}
                  className="h-[76vh] min-h-[540px] max-h-[1080px] w-full bg-white"
                  src={`${import.meta.env.BASE_URL}${selectedInfographic}`}
                />
              </>
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
                <FileText size={48} className="text-slate-300" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {selectedPeriod.months[language] ?? selectedPeriod.months.es}{" "}
                  {selectedPeriod.year} ·{" "}
                  {selectedDocumentLanguage === "es" ? copy.spanish : copy.english}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-slate-500">
                  {copy.pending}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== LLAMADO EMOCIONAL FINAL ========== */}
      <section className="section-shell bg-cream">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#0D2B52] to-ink text-white shadow-photo">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="kicker kicker-light">{copy.ctaEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {copy.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                {copy.ctaText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/voluntarios" className="btn-primary">
                  <Users size={16} />
                  {copy.volunteering}
                </Link>
                <a href="#pdf-institucional" className="btn-ghost-light">
                  <FileText size={16} />
                  {copy.heroCtaPdfs}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="photo-frame mx-auto max-w-sm aspect-[3/4] ring-1 ring-white/15">
                <img
                  src={asset("misiones/cartolandia-03.jpeg")}
                  alt={copy.ctaTitle}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
                <div className="photo-overlay" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {showFullscreen &&
        selectedInfographic &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/95 p-3 pt-16 sm:p-6 sm:pt-20"
            role="dialog"
            aria-modal="true"
            aria-label={language === "en" ? "PDF viewer" : "Visor de PDF"}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowFullscreen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setShowFullscreen(false)}
              aria-label={language === "en" ? "Close PDF viewer" : "Cerrar visor de PDF"}
              title={language === "en" ? "Close PDF viewer (Esc)" : "Cerrar visor de PDF (Esc)"}
              className="fixed right-4 top-3 z-[1010] inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-ink shadow-xl transition hover:bg-ember hover:text-white sm:right-6 sm:top-4"
            >
              <X size={18} />
              {language === "en" ? "Close" : "Cerrar"}
            </button>
            <div className="h-[calc(100dvh-5.5rem)] w-full max-w-[1700px] overflow-hidden rounded-2xl bg-white shadow-2xl">
              <iframe
                title={`${
                  selectedPeriod.months[language] ?? selectedPeriod.months.es
                } ${selectedPeriod.year}`}
                className="h-full w-full bg-white"
                src={`${import.meta.env.BASE_URL}${selectedInfographic}`}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
