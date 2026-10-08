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
} from "lucide-react";
import { createElement, useState } from "react";
import InfoCard from "../components/InfoCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useLanguage } from "../context/useLanguage.js";

const yearlySupport = [
  { year: 2021, months: "6", beneficiaries: 12, foodKg: 719, pantries: 72, cumulativePantries: 72, cumulativeFoodKg: 719 },
  { year: 2022, months: "12", beneficiaries: 17, foodKg: 1799, pantries: 136, cumulativePantries: 208, cumulativeFoodKg: 2518 },
  { year: 2023, months: "12", beneficiaries: 13, foodKg: 1416, pantries: 130, cumulativePantries: 338, cumulativeFoodKg: 3934 },
  { year: 2024, months: "7", beneficiaries: 20, foodKg: 1177, pantries: 140, cumulativePantries: 478, cumulativeFoodKg: 5111 },
  { year: 2025, months: "12", beneficiaries: 38, foodKg: 3285.68, pantries: 456, cumulativePantries: 934, cumulativeFoodKg: 8396.68 },
  { year: 2026, months: "7", beneficiaries: 33, foodKg: 1700, pantries: 231, cumulativePantries: 1165, cumulativeFoodKg: 10096.68 },
];

const infographicPeriods = [
  { id: "2026-jan-feb", months: { es: "Enero–febrero", en: "January–February" }, year: 2026, files: { es: null, en: null } },
  { id: "2026-mar-apr", months: { es: "Marzo–abril", en: "March–April" }, year: 2026, files: { es: null, en: null } },
  { id: "2026-may-jun", months: { es: "Mayo–junio", en: "May–June" }, year: 2026, files: { es: null, en: null } },
];

const donorSources2026 = [
  { key: "mexico", value: 37, color: "from-cyan-400 to-cyan-600", hex: "#06b6d4", icon: Globe, description: "Donaciones desde México" },
  { key: "englishCenter", value: 2, color: "from-emerald-400 to-emerald-600", hex: "#10b981", icon: GraduationCap, description: "Ingresos del English Center" },
  { key: "usd", value: 55, color: "from-amber-400 to-amber-600", hex: "#fbbf24", icon: Building2, description: "Donaciones en USD" },
  { key: "kermes", value: 6, color: "from-rose-400 to-rose-600", hex: "#f43f5e", icon: Heart, description: "Recaudación por kermés" },
];

const hospitalDonationMix = [
  { key: "hygieneKits", value: 43, color: "from-blue-400 to-blue-600", hex: "#3b82f6", icon: PackageCheck, description: "Kits de higiene personal" },
  { key: "pajamas", value: 18, color: "from-violet-400 to-violet-600", hex: "#8b5cf6", icon: Heart, description: "Pijamas para niños" },
  { key: "sandals", value: 6, color: "from-teal-400 to-teal-600", hex: "#14b8a6", icon: ClipboardList, description: "Chanclas y calzado" },
  { key: "activities", value: 33, color: "from-pink-400 to-pink-600", hex: "#ec4899", icon: Sparkles, description: "Actividades recreativas" },
];

const missionDonations = [
  { year: 2023, month: "Jun", place: "Cartolandia", value: 28, icon: Church, color: "from-orange-400 to-orange-600", description: "47 familias apoyadas" },
  { year: 2023, month: "Ago", place: "Cáritas", value: 30, icon: HandHeart, color: "from-amber-400 to-amber-600", description: "53 familias apoyadas" },
  { year: 2025, month: "Mar", place: "San Judas", value: 42, icon: Church, color: "from-red-400 to-red-600", description: "75 kg + 50 cobijas" },
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
    archiveText: "Consulta las tres ediciones bimestrales más recientes. Cada periodo tendrá una infografía en español y otra en inglés.",
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
  },
  en: {
    eyebrow: "Ministry charts",
    intro: "Annual food support, pantry deliveries, and ministry outreach at a glance.",
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
    archiveText: "Browse the three most recent bimonthly editions. Each period will have one Spanish infographic and one English infographic.",
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
  },
};

const formatNumber = (value, decimals = 0) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);

// ===== MODAL DE DETALLE =====
function DetailModal({ isOpen, onClose, title, data, total, color }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-full bg-white/20 p-2 hover:bg-white/30 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          {total !== undefined && (
            <p className="mt-2 text-sm text-white/80">
              {reportsCopy.es.total}: <span className="font-black">{total}</span>
            </p>
          )}
        </div>

        <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                <span className="font-bold text-slate-800">{item.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-black text-slate-900">{item.value}</span>
                {item.percentage && (
                  <span className="text-sm font-bold text-slate-400">({item.percentage}%)</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-400 text-center">{reportsCopy.es.clickToView}</p>
        </div>
      </div>
    </div>
  );
}

// ===== STAT CARD =====
function StatCard({ icon, label, value, detail, color, gradient, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
    >
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full ${color} opacity-[0.08] blur-2xl transition duration-700 group-hover:scale-125 group-hover:opacity-20`}
      />
      <div className="relative flex items-start gap-4">
        <span
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          {createElement(icon, { size: 24 })}
        </span>
        <span className="min-w-0">
          <span className="block text-3xl font-black tracking-tight text-slate-900">{value}</span>
          <span className="mt-1 block text-sm font-bold text-slate-700">{label}</span>
          <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            {detail}
          </span>
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div
          className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${gradient} opacity-70 transition-all duration-500 group-hover:w-28 group-hover:opacity-100`}
        />
        <span className="translate-x-2 text-xs font-black text-ministry-blue opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          Ver detalles →
        </span>
      </div>
    </article>
  );
}

// ===== BAR CHART (Beneficiarios) =====
function BarChartBlock({ title, data, valueKey, color, valueLabel, secondaryKey, secondaryLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);
  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-rose-200/50 to-pink-200/40 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
            <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
              {formatNumber(total)}
              {valueLabel ? ` ${valueLabel}` : ""}
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-3 text-white shadow-lg shadow-rose-500/30">
            <BarChart3 size={20} />
          </div>
        </div>

        {selectedData && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 p-4 ring-1 ring-rose-100 animate-in slide-in-from-top-2 duration-300">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                {selectedData.year}
              </p>
              <p className="text-2xl font-black text-rose-600">
                {formatNumber(selectedData[valueKey])}
                {valueLabel ? ` ${valueLabel}` : ""}
              </p>
            </div>
            {secondaryKey && (
              <div className="text-right">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {secondaryLabel}
                </p>
                <p className="text-lg font-black text-slate-700">
                  {formatNumber(selectedData[secondaryKey])}
                </p>
              </div>
            )}
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-slate-900"
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
                      className={`font-black transition-colors ${
                        isSelected ? "text-rose-600" : "text-slate-800"
                      }`}
                    >
                      {item.year}
                    </span>
                    {delta !== null && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-black tracking-tight ring-1 ring-inset ${
                          delta >= 0
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-rose-50 text-rose-700 ring-rose-200"
                        }`}
                      >
                        {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-black tabular-nums transition-colors ${
                      isSelected ? "text-rose-600" : "text-slate-500"
                    }`}
                  >
                    {formatNumber(item[valueKey])}
                    {valueLabel ? ` ${valueLabel}` : ""}
                  </span>
                </div>
                <div className="relative h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200/70">
                  <div
                    className={`relative h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out ${
                      isSelected
                        ? "shadow-[0_0_0_3px_rgba(244,63,94,0.18)]"
                        : "group-hover/row:brightness-110"
                    }`}
                    style={{ width: `${Math.max(6, pct)}%` }}
                  >
                    <span className="absolute inset-x-1 top-0.5 h-1 rounded-full bg-white/35" />
                  </div>
                </div>
                {secondaryKey && (
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {formatNumber(item[secondaryKey])} {secondaryLabel}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}

// ===== AREA LINE CHART (HERO — Toneladas) =====
function AreaLineChartBlock({ title, data, annualLabel, totalDonated, kgLabel }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const W = 1000;
  const H = 420;
  const padL = 78;
  const padR = 40;
  const padT = 40;
  const padB = 64;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const maxCum = 12000;
  const maxAnnual = Math.max(...data.map((d) => d.foodKg));

  const xFor = (i) => padL + (i / (data.length - 1)) * innerW;
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
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-200/50 to-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose-200/40 to-amber-200/40 blur-3xl" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-200">
              <TrendingUp size={12} /> 2021 – 2026
            </span>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h3>
          </div>
          <div className="flex items-stretch gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-3 text-white shadow-lg shadow-emerald-500/30">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] opacity-80">
                {totalDonated}
              </p>
              <p className="text-2xl font-black leading-tight">{totalTons} t</p>
            </div>
            <div className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] opacity-70">
                2026 · {annualLabel}
              </p>
              <p className="text-2xl font-black leading-tight">
                {formatNumber(latestAnnual)} {kgLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-bold text-slate-600">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-b from-rose-400 to-rose-600" />
            {annualLabel} ({kgLabel})
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
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
              <linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#0d9488" />
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
                    stroke="#e2e8f0"
                    strokeDasharray="3 6"
                    strokeWidth="1"
                  />
                  <text
                    x={padL - 14}
                    y={y + 5}
                    textAnchor="end"
                    fill="#94a3b8"
                    fontSize="13"
                    fontWeight="700"
                  >
                    {formatNumber(t)}
                  </text>
                </g>
              );
            })}

            {data.map((d, i) => {
              const bw = (innerW / data.length) * 0.42;
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
                  fill="url(#barGrad)"
                  className="transition-opacity duration-300"
                  opacity={activeIndex === null || isActive ? 0.9 : 0.35}
                />
              );
            })}

            <path d={areaPath} fill="url(#areaGrad)" className="transition-all duration-500" />
            <path
              d={linePath}
              fill="none"
              stroke="url(#lineGrad)"
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
                stroke="#0d9488"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.55"
              />
            )}

            {cumPts.map(([x, y], i) => {
              const isActive = activeIndex === i;
              return (
                <g key={`pt-${i}`} className="pointer-events-none">
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 11 : 6}
                    fill="#fff"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 5 : 2.8}
                    fill="#10b981"
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
                    y={H - 26}
                    textAnchor="middle"
                    fill={isActive ? "#0f172a" : "#64748b"}
                    fontSize="15"
                    fontWeight="800"
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
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-2xl bg-slate-900/95 px-4 py-3 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur"
              style={{
                left: `${(xFor(activeIndex) / W) * 100}%`,
                top: `${(yCum(active.cumulativeFoodKg) / H) * 100}%`,
                marginTop: "-16px",
              }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                {active.year}
              </p>
              <p className="mt-1 text-sm font-bold">
                {formatNumber(active.foodKg, 2)} {kgLabel} · {annualLabel}
              </p>
              <p className="text-sm font-bold text-emerald-300">
                {formatNumber(active.cumulativeFoodKg, 2)} {kgLabel} · {totalDonated}
              </p>
              <div className="mt-2 h-0.5 w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ===== COLUMN CHART (Despensas) =====
function ColumnChartBlock({ title, data, valueKey, secondaryKey, valueLabel, secondaryLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);
  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-200/50 to-blue-200/40 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
            <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
              {formatNumber(total)} {valueLabel}
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 text-white shadow-lg shadow-cyan-500/30">
            <BarChart3 size={20} />
          </div>
        </div>

        {selectedData && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 p-4 ring-1 ring-cyan-100 animate-in slide-in-from-top-2 duration-300">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                {selectedData.year}
              </p>
              <div className="mt-1 flex gap-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {valueLabel}
                  </p>
                  <p className="text-xl font-black text-cyan-600">
                    {formatNumber(selectedData[valueKey])}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {secondaryLabel}
                  </p>
                  <p className="text-xl font-black text-slate-700">
                    {formatNumber(selectedData[secondaryKey])}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-slate-900"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="relative mt-6 h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-cyan-50/60 via-white to-transparent p-4">
          {/* Grid lines */}
          <div className="pointer-events-none absolute inset-x-4 top-4 bottom-12 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-px bg-slate-100" />
            ))}
          </div>

          <div className="relative flex h-full items-end gap-2 sm:gap-3">
            {data.map((item, index) => {
              const h = Math.max(8, (item[valueKey] / maxValue) * 100);
              const isSelected = selectedIndex === index;
              const prev = index > 0 ? data[index - 1][valueKey] : null;
              const delta = prev ? Math.round(((item[valueKey] - prev) / prev) * 100) : null;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedIndex(isSelected ? null : index)}
                  className="group/bar flex h-full flex-1 flex-col justify-end gap-2"
                >
                  <div className="relative flex flex-1 items-end">
                    <div
                      className={`relative w-full rounded-t-2xl bg-gradient-to-t from-cyan-600 via-cyan-500 to-sky-400 shadow-lg transition-all duration-500 ${
                        isSelected
                          ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-white"
                          : "group-hover/bar:brightness-110"
                      }`}
                      style={{ height: `${h}%` }}
                    >
                      {/* Glow base */}
                      <span className="absolute -bottom-1 left-1/2 h-3 w-[80%] -translate-x-1/2 rounded-full bg-cyan-400/60 blur-md" />
                      {/* Top shine */}
                      <span className="absolute inset-x-1 top-1 h-1.5 rounded-full bg-white/40" />
                      {/* Delta pill */}
                      {delta !== null && (
                        <span
                          className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-black shadow-md ring-1 ring-white transition ${
                            isSelected ? "opacity-100" : "opacity-0 group-hover/bar:opacity-100"
                          } ${
                            delta >= 0
                              ? "bg-emerald-500 text-white"
                              : "bg-rose-500 text-white"
                          }`}
                        >
                          {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-center text-xs font-black transition-colors ${
                      isSelected ? "text-cyan-600" : "text-slate-500"
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
              className="group/mini rounded-2xl bg-slate-50 p-4 text-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow"
            >
              <div className="flex items-center justify-between">
                <p className="font-black text-slate-900">{item.year}</p>
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
              </div>
              <p className="mt-1 font-bold text-slate-500">
                {formatNumber(item[secondaryKey])} {secondaryLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

// ===== DONUT CHART =====
function DonutChart({ title, items, labels }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const largest = items.reduce(
    (max, item) => (item.value > max.value ? item : max),
    items[0]
  );
  const selectedItem = items.find((item) => item.key === selectedKey);
  const LargestIcon = largest.icon;

  let acc = 0;
  const segments = items.map((item) => {
    const seg = (item.value / total) * circumference;
    const s = { ...item, seg, offset: acc };
    acc += seg;
    return s;
  });

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-slate-200/60 to-cyan-100/60 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
          <div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-3 text-white shadow-lg">
            <PieChart size={20} />
          </div>
        </div>

        {selectedItem && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 p-4 ring-1 ring-slate-200 animate-in slide-in-from-top-2 duration-300">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                {labels[selectedItem.key]}
              </p>
              <p className="text-2xl font-black text-ministry-blue">{selectedItem.value}%</p>
            </div>
            <div className="max-w-[55%] text-right">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Detalle
              </p>
              <p className="text-sm font-bold text-slate-700">
                {selectedItem.description || "—"}
              </p>
            </div>
            <button
              onClick={() => setSelectedKey(null)}
              className="rounded-full bg-white p-1.5 text-slate-500 shadow-sm transition hover:text-slate-900"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="mt-6 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
          <div className="relative mx-auto h-56 w-56">
            {/* Halo suave detrás de la dona */}
            <div className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-br from-cyan-100/60 via-transparent to-rose-100/60 blur-2xl" />
            <svg viewBox="0 0 100 100" className="-rotate-90">
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#eef2f7" strokeWidth="12" />
              {segments.map((s) => {
                const gap = 2.5;
                const isSelected = selectedKey === s.key;
                return (
                  <circle
                    key={s.key}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={s.hex}
                    strokeWidth={isSelected ? 16 : 12}
                    strokeLinecap="round"
                    strokeDasharray={`${Math.max(0, s.seg - gap)} ${circumference}`}
                    strokeDashoffset={-s.offset}
                    onClick={() => setSelectedKey(isSelected ? null : s.key)}
                    className="cursor-pointer transition-all duration-500 hover:brightness-110"
                    style={{ filter: isSelected ? `drop-shadow(0 0 6px ${s.hex})` : "none" }}
                  />
                );
              })}
            </svg>
            <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-white/85 px-5 py-3 shadow-lg ring-1 ring-slate-100 backdrop-blur">
                <LargestIcon size={18} className="text-slate-400" />
                <p className="text-4xl font-black leading-none text-slate-900">
                  {largest.value}%
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  {labels[largest.key]}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {items.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedKey === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedKey(isSelected ? null : item.key)}
                  className={`group/item relative w-full overflow-hidden rounded-xl p-3 pl-4 text-left ring-1 transition-all ${
                    isSelected
                      ? "bg-slate-100 ring-2 ring-ministry-blue"
                      : "bg-slate-50 ring-slate-100 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow"
                  }`}
                >
                  {/* Barra lateral color */}
                  <span
                    className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${item.color}`}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-sm font-black text-slate-800">
                      <Icon size={16} className="text-slate-400" />
                      {labels[item.key]}
                    </span>
                    <span className="text-sm font-black text-ministry-blue">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

// ===== MISSION CARDS =====
function MissionCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group/item relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-amber-200">
      <div
        className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-xl transition group-hover/item:scale-150`}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <div
            className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow`}
          >
            <Icon size={14} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
            {item.month} {item.year}
          </p>
        </div>
        <h4 className="mt-3 text-lg font-black text-slate-900">{item.place}</h4>
        <p className="mt-1 text-xs text-slate-500">{item.description}</p>
        <p className="mt-4 text-3xl font-black text-ministry-blue">{item.value}%</p>
        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
            style={{ width: `${item.value}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Reports() {
  const { language, t } = useLanguage();
  const copy = reportsCopy[language] ?? reportsCopy.es;
  const timelineItems = infographicTimeline[language] ?? infographicTimeline.es;
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [selectedPeriodId, setSelectedPeriodId] = useState("2026-may-jun");
  const [selectedDocumentLanguage, setSelectedDocumentLanguage] = useState(
    language === "en" ? "en" : "es"
  );
  const [detailModal, setDetailModal] = useState(null);
  const selectedPeriod =
    infographicPeriods.find((period) => period.id === selectedPeriodId) ??
    infographicPeriods.at(-1);
  const selectedInfographic = selectedPeriod.files[selectedDocumentLanguage];
  const visibleInfographicPeriods = infographicPeriods.slice(-3).reverse();

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
    let color = "";

    switch (stat) {
      case "pantries":
        title = copy.stats.pantries;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: item.pantries,
          color: "from-cyan-400 to-cyan-600",
          percentage: Math.round((item.pantries / totalPantries) * 100),
        }));
        total = formatNumber(totalPantries);
        color = "from-cyan-500 to-blue-600";
        break;
      case "food":
        title = copy.stats.food;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: `${formatNumber(item.foodKg, 2)} kg`,
          color: "from-emerald-400 to-emerald-600",
          percentage: Math.round((item.foodKg / totalFoodKg) * 100),
        }));
        total = `${formatNumber(totalFoodKg, 2)} kg`;
        color = "from-emerald-500 to-teal-600";
        break;
      case "beneficiaries":
        title = copy.stats.beneficiaries;
        data = yearlySupport.map((item) => ({
          label: item.year,
          value: item.beneficiaries,
          color: "from-rose-400 to-rose-600",
          percentage: Math.round((item.beneficiaries / totalBeneficiaries) * 100),
        }));
        total = formatNumber(totalBeneficiaries);
        color = "from-rose-500 to-pink-600";
        break;
      default:
        return;
    }

    setDetailModal({ title, data, total, color });
  };

  return (
    <>
      <PageHeader title={t("reports.title")} text={t("reports.text")} />

      <section
        id="graficos-ministerio"
        className="section-shell scroll-mt-28 bg-gradient-to-b from-white via-cyan-50/30 to-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-ministry-gold/20 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-ministry-blue border border-ministry-gold/20">
              <Sparkles size={15} />
              {copy.eyebrow}
            </div>
            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
              {t("reports.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-5 sm:grid-cols-3">
            <StatCard
              icon={PackageCheck}
              label={copy.stats.pantries}
              value={formatNumber(totalPantries)}
              detail="2021-2026"
              color="bg-ministry-blue"
              gradient="from-ministry-blue to-cyan-500"
              onClick={() => handleStatClick("pantries")}
            />
            <StatCard
              icon={Scale}
              value={formatNumber(totalFoodKg / 1000, 1)}
              label={copy.tonsDelivered}
              detail={`${formatNumber(totalFoodKg, 2)} kg`}
              color="bg-emerald-500"
              gradient="from-emerald-400 to-emerald-600"
              onClick={() => handleStatClick("food")}
            />
            <StatCard
              icon={Users}
              label={copy.stats.beneficiaries}
              value={formatNumber(totalBeneficiaries)}
              detail="2021-2026"
              color="bg-rose-500"
              gradient="from-rose-400 to-rose-600"
              onClick={() => handleStatClick("beneficiaries")}
            />
          </div>

          {/* HERO: Food chart full width */}
          <div className="mt-8">
            <AreaLineChartBlock
              title={copy.foodTitle}
              data={yearlySupport}
              annualLabel={copy.annualLabel}
              totalDonated={copy.totalDonated}
              kgLabel={copy.kg}
            />
          </div>

          {/* Row 2: Beneficiarios + Donut fuentes */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <BarChartBlock
              title={copy.beneficiariesTitle}
              data={yearlySupport}
              valueKey="beneficiaries"
              valueLabel=""
              secondaryKey="months"
              secondaryLabel={copy.months}
              color="from-rose-400 to-pink-500"
            />
            <DonutChart
              title={copy.donorTitle}
              items={donorSources2026}
              labels={copy.sourceLabels}
            />
          </div>

          {/* Row 3: Despensas + Donut hospital */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ColumnChartBlock
              title={copy.pantriesTitle}
              data={yearlySupport}
              valueKey="pantries"
              valueLabel={copy.donated}
              secondaryKey="cumulativePantries"
              secondaryLabel={copy.cumulative}
            />
            <DonutChart
              title={copy.hospitalTitle}
              items={hospitalDonationMix}
              labels={copy.hospitalLabels}
            />
          </div>

          {/* Row 4: Misiones full width */}
          <article className="mt-6 group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-rose-200/50 to-amber-200/40 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                    {copy.missionTitle}
                  </h3>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                    2023 – 2025
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 p-3 text-white shadow-lg shadow-rose-500/30">
                  <HandHeart size={20} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {missionDonations.map((item) => (
                  <MissionCard key={`${item.year}-${item.place}`} item={item} />
                ))}
              </div>
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
          color={detailModal.color}
        />
      )}

      <section
        id="linea-tiempo-ministerio"
        className="section-shell scroll-mt-28 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-ministry-blue border border-cyan-200">
              <CalendarDays size={15} />
              {copy.timelineEyebrow}
            </span>
            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
              {copy.timelineTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {copy.timelineText}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl md:p-10">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-ministry-gold/20 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={`${item.date}-${item.title}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 transition group-hover:scale-150" />
                    <div className="relative">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ministry-gold text-sm font-black text-slate-950 shadow-lg">
                          {index + 1}
                        </span>
                        <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                          {item.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-lg bg-white/10 p-2 text-cyan-400">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-lg font-black text-white/95">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-white/60 group-hover:text-white/80 transition-colors">
                        {item.text}
                      </p>
                      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pdf-institucional"
        className="section-shell scroll-mt-28 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 border border-violet-200">
              <FileText size={15} />
              {copy.pdfTitle}
            </span>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {copy.archiveText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4" aria-label={copy.pdfTitle}>
              {visibleInfographicPeriods.map((period) => (
                <article
                  key={period.id}
                  className={`rounded-2xl border p-5 transition ${
                    selectedPeriodId === period.id
                      ? "border-ministry-blue bg-cyan-50 shadow-md"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setSelectedPeriodId(period.id)}
                    className="w-full text-left text-xl font-black text-slate-900"
                  >
                    {period.months[language] ?? period.months.es} {period.year}
                  </button>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {["es", "en"].map((docLanguage) => {
                      const hasFile = Boolean(period.files[docLanguage]);
                      const active =
                        selectedPeriodId === period.id &&
                        selectedDocumentLanguage === docLanguage;
                      return (
                        <button
                          key={docLanguage}
                          onClick={() => {
                            setSelectedPeriodId(period.id);
                            setSelectedDocumentLanguage(docLanguage);
                          }}
                          className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                            active
                              ? "border-ministry-blue bg-ministry-blue text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-500"
                          }`}
                        >
                          {docLanguage === "es" ? copy.spanish : copy.english}
                          {hasFile ? " · PDF" : " · …"}
                        </button>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              {selectedInfographic ? (
                <>
                  <div className="absolute right-4 top-4 z-10 flex gap-2">
                    <button
                      onClick={() => setShowFullscreen(true)}
                      className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg"
                    >
                      <Eye size={16} />
                      {language === "en" ? "Fullscreen" : "Pantalla completa"}
                    </button>
                    <a
                      href={`${import.meta.env.BASE_URL}${selectedInfographic}`}
                      download
                      className="flex items-center gap-2 rounded-full bg-ministry-blue px-4 py-2 text-sm font-bold text-white shadow-lg"
                    >
                      <Download size={16} />
                      {language === "en" ? "Download" : "Descargar"}
                    </a>
                  </div>
                  <iframe
                    title={`${
                      selectedPeriod.months[language] ?? selectedPeriod.months.es
                    } ${selectedPeriod.year} — ${selectedDocumentLanguage}`}
                    className="h-[600px] w-full bg-white"
                    src={`${import.meta.env.BASE_URL}${selectedInfographic}`}
                  />
                </>
              ) : (
                <div className="flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
                  <FileText size={48} className="text-slate-300" />
                  <h3 className="mt-5 text-2xl font-black text-slate-800">
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
        </div>
      </section>

      {showFullscreen && selectedInfographic && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowFullscreen(false)}
            className="absolute top-4 right-4 text-white/50 hover:text-white text-4xl transition-colors"
          >
            ×
          </button>
          <iframe
            title={`${
              selectedPeriod.months[language] ?? selectedPeriod.months.es
            } ${selectedPeriod.year}`}
            className="h-[95vh] w-full max-w-6xl rounded-lg"
            src={`${import.meta.env.BASE_URL}${selectedInfographic}`}
          />
        </div>
      )}
    </>
  );
}