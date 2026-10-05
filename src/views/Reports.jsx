import {
  BarChart3,
  CalendarDays,
  FileText,
  HandHeart,
  MapPin,
  PackageCheck,
  Phone,
  PieChart,
  Scale,
  TrendingUp,
  Users,
  Sparkles,
  ArrowUp,
  ArrowDown,
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

const donorSources2026 = [
  { key: "mexico", value: 37, color: "from-cyan-400 to-cyan-600", hex: "#06b6d4", icon: Globe, description: "Donaciones desde México" },
  { key: "englishCenter", value: 2, color: "from-emerald-400 to-emerald-600", hex: "#10b981", icon: GraduationCap, description: "Ingresos del English Center" },
  { key: "usd", value: 55, color: "from-amber-400 to-amber-600", hex: "#fbbf24", icon: Building2, description: "Donaciones en USD" },
  { key: "kermes", value: 6, color: "from-rose-400 to-rose-600", hex: "#f43f5e", icon: Heart, description: "Recaudación por Kermes" },
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
    { date: "Julio 2021", title: "Inicio del programa domiciliar", text: "Comienzan las distribuciónes mensuales en Loma Bonita con 12 familias.", icon: PackageCheck },
    { date: "Noviembre 2021", title: "Primeros donadores en Estados Unidos", text: "Llegan las primeras donaciones internacionales para sostener la misión.", icon: Globe },
    { date: "Agosto 2023", title: "Misión con Cáritas", text: "Se comparte apoyo con 53 familias en la sede parroquial de San José.", icon: HandHeart },
    { date: "Febrero 2025", title: "Misión a Cartolandia", text: "Se colaboró con la iglesia Mensaje de Vida para servir a esta comunidad.", icon: Church },
    { date: "Enero 2026", title: "Misión al Hospital Infantil", text: "Inicia el acompañamiento a niños con insuficiencia renal en el Hospital Infantil de Tlaxcala.", icon: Baby },
    { date: "Julio 2026", title: "5 años de servicio", text: "El ministerio celebra más de 80 familias, 10 comunidades y 48 voluntarios.", icon: Award },
  ],
  en: [
    { date: "June 2021", title: "English Center opens", text: "English Center Tlaxcala begins as the first support source for the ministry.", icon: GraduationCap },
    { date: "July 2021", title: "Home visit program begins", text: "Monthly distributions begin in Loma Bonita with 12 families.", icon: PackageCheck },
    { date: "November 2021", title: "First donors in the United States", text: "The first international donations arrive to sustain the mission.", icon: Globe },
    { date: "August 2023", title: "Mission with Cáritas", text: "Support is shared with 53 families at San José parish.", icon: HandHeart },
    { date: "February 2025", title: "Mission to Cartolandia", text: "The ministry collaborates with Mensaje de Vida Church to serve this community.", icon: Church },
    { date: "January 2026", title: "Children's Hospital mission", text: "Support begins for children with kidney failure at the Children's Hospital of Tlaxcala.", icon: Baby },
    { date: "July 2026", title: "5 years of service", text: "The ministry celebrates more than 80 families, 10 communities, and 48 volunteers.", icon: Award },
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
    foodTitle: "Alimentos entregados por año",
    pantriesTitle: "Despensas donadas y acumuladas",
    donorTitle: "Fuentes de apoyo 2026",
    hospitalTitle: "Distribución de apoyos hospitalarios",
    missionTitle: "Misiones con donaciones registradas",
    timelineEyebrow: "Línea del tiempo de la infografía",
    timelineTitle: "5 años transformando Tlaxcala",
    timelineText:
      "La infografía Mayo-Agosto 2026 muestra cómo un comienzo pequeño se convirtió en una red de donadores, voluntarios, iglesias y familias sirviendo juntas.",
    contactTitle: "Contacto oficial del ministerio",
    contactText: "Para visitas, coordinación de apoyos o información del ministerio, usa los datos publicados en la infografía.",
    kg: "kg",
    months: "meses",
    beneficiariesWord: "beneficiarios",
    donated: "donado",
    cumulative: "acumulado",
    sourceLabels: {
      mexico: "México",
      englishCenter: "English Center",
      usd: "USD",
      kermes: "Kermes",
    },
    hospitalLabels: {
      hygieneKits: "Kits de aseo",
      pajamas: "Pijamas",
      sandals: "Chanclas",
      activities: "Actividades",
    },
    pdfTitle: "PDF institucional",
    clickToView: "Haz clic para ver detalles",
    total: "Total",
  },
  en: {
    eyebrow: "Ministry charts",
    intro: "Data taken from Graficos Ministerio.xlsx to visualize the progress of the home food support program.",
    stats: {
      pantries: "Pantries donated",
      food: "Food donated",
      beneficiaries: "Registered beneficiaries",
      topYear: "Year with most beneficiaries",
    },
    beneficiariesTitle: "Beneficiaries by year",
    foodTitle: "Food delivered by year",
    pantriesTitle: "Donated and cumulative pantries",
    donorTitle: "2026 support sources",
    hospitalTitle: "Hospital support distribution",
    missionTitle: "Missions with recorded donations",
    timelineEyebrow: "Infographic timeline",
    timelineTitle: "Five years transforming Tlaxcala",
    timelineText:
      "The May-August 2026 infographic shows how a small beginning became a network of donors, volunteers, churches, and families serving together.",
    contactTitle: "Official ministry contact",
    contactText: "For visits, support coordination, or ministry information, use the contact details published in the infographic.",
    kg: "kg",
    months: "months",
    beneficiariesWord: "beneficiaries",
    donated: "donated",
    cumulative: "cumulative",
    sourceLabels: {
      mexico: "México",
      englishCenter: "English Center",
      usd: "USD",
      kermes: "Kermes",
    },
    hospitalLabels: {
      hygieneKits: "Hygiene kits",
      pajamas: "Pajamas",
      sandals: "Sandals",
      activities: "Activities",
    },
    pdfTitle: "Institutional PDF",
    clickToView: "Click to view details",
    total: "Total",
  },
};

const formatNumber = (value, decimals = 0) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);

// ===== COMPONENTE DE DETALLE PARA GRÁFICAS =====
function DetailModal({ isOpen, onClose, title, data, total, color }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
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

        {/* Content */}
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

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-400 text-center">
            {reportsCopy.es.clickToView}
          </p>
        </div>
      </div>
    </div>
  );
}

// ===== STAT CARD MEJORADO =====
function StatCard({ icon, label, value, detail, color, gradient, onClick }) {
  return (
    <article 
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${color} opacity-10 transition duration-500 group-hover:scale-125 group-hover:opacity-20`} />
      <div className="relative flex items-start gap-4">
        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
          {createElement(icon, { size: 24 })}
        </span>
        <span>
          <span className="block text-3xl font-black text-slate-900">{value}</span>
          <span className="mt-1 block text-sm font-bold text-slate-700">{label}</span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{detail}</span>
        </span>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />
      <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs font-bold text-ministry-blue">Ver detalles →</span>
      </div>
    </article>
  );
}

// ===== BAR CHART CON INTERACCIÓN =====
function BarChartBlock({ title, data, valueKey, color, valueLabel, secondaryKey, secondaryLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));

  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <article className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
        <div className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors group-hover:bg-slate-200">
          <BarChart3 size={20} />
        </div>
      </div>

      {/* Detalle del elemento seleccionado */}
      {selectedData && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-600">{selectedData.year}</p>
              <p className="text-2xl font-black text-ministry-blue">
                {formatNumber(selectedData[valueKey], selectedData[valueKey] % 1 ? 2 : 0)} {valueLabel}
              </p>
            </div>
            {secondaryKey && (
              <div className="text-right">
                <p className="text-xs text-slate-400">{secondaryLabel}</p>
                <p className="text-lg font-black text-slate-700">
                  {formatNumber(selectedData[secondaryKey], selectedData[secondaryKey] % 1 ? 2 : 0)}
                </p>
              </div>
            )}
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white/50 p-1 hover:bg-white transition-colors"
            >
              <X size={16} className="text-slate-500" />
            </button>
          </div>
        </div>
      )}

      <div className="space-y-5">
        {data.map((item, index) => {
          const width = `${Math.max(8, (item[valueKey] / maxValue) * 100)}%`;
          const isSelected = selectedIndex === index;

          return (
            <div 
              key={item.year} 
              className={`cursor-pointer transition-all duration-300 ${isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
              onClick={() => setSelectedIndex(isSelected ? null : index)}
            >
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className={`font-black ${isSelected ? 'text-ministry-blue' : 'text-slate-800'}`}>
                  {item.year}
                </span>
                <span className={`font-bold ${isSelected ? 'text-ministry-blue' : 'text-slate-500'}`}>
                  {formatNumber(item[valueKey], item[valueKey] % 1 ? 2 : 0)} {valueLabel}
                </span>
              </div>
              <div className="relative h-5 overflow-hidden rounded-full bg-slate-100">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${color} shadow-sm transition-all duration-700 ease-out ${isSelected ? 'ring-2 ring-ministry-blue ring-offset-2' : ''}`}
                  style={{ width }}
                >
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white/30" />
                </div>
              </div>
              {secondaryKey && (
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {formatNumber(item[secondaryKey], item[secondaryKey] % 1 ? 2 : 0)} {secondaryLabel}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}

// ===== AREA LINE CHART CON INTERACCIÓN =====
function AreaLineChartBlock({ title, data, valueKey, valueLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const values = data.map((item) => item[valueKey]);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = maxValue - minValue || 1;
  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 86 - ((item[valueKey] - minValue) / range) * 66;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,92 ${points} 100,92`;

  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <article className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
        <div className="rounded-full bg-emerald-50 p-2 text-emerald-600 transition-colors group-hover:bg-emerald-100">
          <TrendingUp size={20} />
        </div>
      </div>

      {/* Detalle del punto seleccionado */}
      {selectedData && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-600">{selectedData.year}</p>
              <p className="text-2xl font-black text-emerald-600">
                {formatNumber(selectedData[valueKey], 2)} {valueLabel}
              </p>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white/50 p-1 hover:bg-white transition-colors"
            >
              <X size={16} className="text-slate-500" />
            </button>
          </div>
        </div>
      )}

      <div className="rounded-2xl bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 p-4">
        <svg viewBox="0 0 100 100" className="h-64 w-full overflow-visible cursor-pointer">
          <defs>
            <linearGradient id="foodAreaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="foodGlow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((line) => (
            <line key={line} x1="0" x2="100" y1={line} y2={line} stroke="#cbd5e1" strokeDasharray="1 3" strokeWidth="0.35" />
          ))}
          <polygon points={areaPoints} fill="url(#foodAreaGradient)" />
          <polyline 
            points={points} 
            fill="none" 
            stroke="#059669" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
          />
          <polyline 
            points={points} 
            fill="none" 
            stroke="url(#foodGlow)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="6" 
            opacity="0.3" 
          />
          {data.map((item, index) => {
            const [x, y] = points.split(" ")[index].split(",");
            const isSelected = selectedIndex === index;
            return (
              <g 
                key={item.year} 
                className="cursor-pointer" 
                onClick={() => setSelectedIndex(isSelected ? null : index)}
              >
                <circle 
                  cx={x} 
                  cy={y} 
                  r={isSelected ? "5" : "3.5"} 
                  fill={isSelected ? "#059669" : "#ffffff"} 
                  stroke="#059669" 
                  strokeWidth={isSelected ? "3" : "2"} 
                />
                <circle 
                  cx={x} 
                  cy={y} 
                  r={isSelected ? "10" : "6"} 
                  fill="#059669" 
                  opacity={isSelected ? "0.25" : "0.15"} 
                />
                <text x={x} y="98" textAnchor="middle" className={`fill-${isSelected ? 'emerald-600' : 'slate-500'} text-[4px] font-bold`}>
                  {item.year}
                </text>
                {isSelected && (
                  <>
                    <rect 
                      x={parseFloat(x) - 15} 
                      y={parseFloat(y) - 18} 
                      width="30" 
                      height="14" 
                      rx="4" 
                      fill="#059669" 
                      opacity="0.9"
                    />
                    <text 
                      x={x} 
                      y={parseFloat(y) - 8} 
                      textAnchor="middle" 
                      className="fill-white text-[3.5px] font-black"
                    >
                      {formatNumber(item[valueKey], 0)} {valueLabel}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-bold text-slate-500">2021</p>
          <p className="text-xl font-black text-slate-900">{formatNumber(data[0][valueKey])} {valueLabel}</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 border border-emerald-100">
          <p className="font-bold text-emerald-700">{data.at(-1).year}</p>
          <p className="text-xl font-black text-emerald-700">{formatNumber(data.at(-1)[valueKey], 2)} {valueLabel}</p>
        </div>
      </div>
    </article>
  );
}

// ===== COLUMN CHART CON INTERACCIÓN =====
function ColumnChartBlock({ title, data, valueKey, secondaryKey, valueLabel, secondaryLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const maxValue = Math.max(...data.map((item) => item[valueKey]));
  const selectedData = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <article className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
        <div className="rounded-full bg-cyan-50 p-2 text-cyan-600 transition-colors group-hover:bg-cyan-100">
          <BarChart3 size={20} />
        </div>
      </div>

      {selectedData && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-600">{selectedData.year}</p>
              <div className="flex gap-4 mt-1">
                <div>
                  <p className="text-xs text-slate-400">{valueLabel}</p>
                  <p className="text-xl font-black text-cyan-600">{formatNumber(selectedData[valueKey])}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">{secondaryLabel}</p>
                  <p className="text-xl font-black text-slate-700">{formatNumber(selectedData[secondaryKey])}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full bg-white/50 p-1 hover:bg-white transition-colors"
            >
              <X size={16} className="text-slate-500" />
            </button>
          </div>
        </div>
      )}

      <div className="flex h-72 items-end gap-2 rounded-2xl bg-gradient-to-b from-cyan-50/50 to-white/50 p-4">
        {data.map((item, index) => {
          const height = `${Math.max(12, (item[valueKey] / maxValue) * 100)}%`;
          const isSelected = selectedIndex === index;
          return (
            <div 
              key={item.year} 
              className="flex h-full flex-1 flex-col justify-end gap-2 cursor-pointer"
              onClick={() => setSelectedIndex(isSelected ? null : index)}
            >
              <div className="flex flex-1 items-end">
                <div
                  className={`group/bar relative w-full rounded-t-2xl bg-gradient-to-t from-ministry-blue to-cyan-400 shadow-lg transition-all duration-500 ${isSelected ? 'ring-2 ring-ministry-blue ring-offset-2 scale-105' : 'hover:brightness-110'}`}
                  style={{ height }}
                >
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2 py-1 text-xs font-black text-white shadow-lg transition ${isSelected ? 'opacity-100' : 'opacity-0 group-hover/bar:opacity-100'}`}>
                    {formatNumber(item[valueKey])} {valueLabel}
                  </span>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30 blur-sm" />
                </div>
              </div>
              <span className={`text-center text-xs font-black ${isSelected ? 'text-ministry-blue' : 'text-slate-500'}`}>
                {item.year}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {data.slice(-3).map((item) => (
          <div key={item.year} className="rounded-2xl bg-slate-50 p-4 text-sm transition hover:bg-slate-100">
            <p className="font-black text-slate-900">{item.year}</p>
            <p className="mt-1 font-bold text-slate-500">
              {formatNumber(item[secondaryKey])} {secondaryLabel}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

// ===== DONUT CHART CON INTERACCIÓN =====
function DonutChart({ title, items, labels }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const largest = items.reduce((max, item) => (item.value > max.value ? item : max), items[0]);

  const selectedItem = items.find(item => item.key === selectedKey);

  return (
    <article className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
        <div className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors group-hover:bg-slate-200">
          <PieChart size={20} />
        </div>
      </div>

      {selectedItem && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-600">{labels[selectedItem.key]}</p>
              <p className="text-2xl font-black text-ministry-blue">{selectedItem.value}%</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Descripción</p>
              <p className="text-sm font-bold text-slate-700">{selectedItem.description || '-'}</p>
            </div>
            <button
              onClick={() => setSelectedKey(null)}
              className="rounded-full bg-white/50 p-1 hover:bg-white transition-colors"
            >
              <X size={16} className="text-slate-500" />
            </button>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-center">
        <div className="relative mx-auto h-56 w-56 cursor-pointer">
          <svg viewBox="0 0 100 100" className="-rotate-90">
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="12" />
            {items.map((item) => {
              const segment = (item.value / total) * circumference;
              const gap = 2.4;
              const dash = `${Math.max(0, segment - gap)} ${circumference}`;
              const offset = -cumulative;
              cumulative += segment;
              const isSelected = selectedKey === item.key;
              return (
                <circle
                  key={item.key}
                  cx="50"
                  cy="50"
                  r={isSelected ? radius + 3 : radius}
                  fill="none"
                  stroke={item.hex}
                  strokeDasharray={dash}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  strokeWidth={isSelected ? "15" : "12"}
                  className="transition-all duration-300 cursor-pointer hover:brightness-110"
                  onClick={() => setSelectedKey(isSelected ? null : item.key)}
                >
                  <animate attributeName="stroke-dashoffset" from={-cumulative} to={-cumulative + segment} dur="1.5s" fill="freeze" />
                </circle>
              );
            })}
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <p className="text-4xl font-black text-slate-900">{largest.value}%</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {labels[largest.key]}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedKey === item.key;
          return (
            <div 
              key={item.key} 
              className={`group/item rounded-xl p-3 transition-all cursor-pointer ${isSelected ? 'bg-slate-100 ring-2 ring-ministry-blue' : 'bg-slate-50 hover:bg-slate-100'}`}
              onClick={() => setSelectedKey(isSelected ? null : item.key)}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-sm font-black text-slate-800">
                  <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${item.color}`} />
                  <Icon size={16} className="text-slate-400" />
                  {labels[item.key]}
                </span>
                <span className={`text-sm font-black ${isSelected ? 'text-ministry-blue' : 'text-ministry-blue'}`}>
                  {item.value}%
                </span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700 ${isSelected ? 'ring-1 ring-ministry-blue' : ''}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          );
        })}
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
  const [detailModal, setDetailModal] = useState(null);

  const totalPantries = yearlySupport.at(-1).cumulativePantries;
  const totalFoodKg = yearlySupport.at(-1).cumulativeFoodKg;
  const totalBeneficiaries = yearlySupport.reduce((sum, item) => sum + item.beneficiaries, 0);
  const topBeneficiaryYear = yearlySupport.reduce((top, item) =>
    item.beneficiaries > top.beneficiaries ? item : top
  );

  const handleStatClick = (stat) => {
    let title = '';
    let data = [];
    let total = '';
    let color = '';

    switch(stat) {
      case 'pantries':
        title = copy.stats.pantries;
        data = yearlySupport.map(item => ({
          label: item.year,
          value: item.pantries,
          color: 'from-cyan-400 to-cyan-600',
          percentage: Math.round((item.pantries / totalPantries) * 100)
        }));
        total = formatNumber(totalPantries);
        color = 'from-cyan-500 to-blue-600';
        break;
      case 'food':
        title = copy.stats.food;
        data = yearlySupport.map(item => ({
          label: item.year,
          value: `${formatNumber(item.foodKg, 2)} kg`,
          color: 'from-emerald-400 to-emerald-600',
          percentage: Math.round((item.foodKg / totalFoodKg) * 100)
        }));
        total = `${formatNumber(totalFoodKg, 2)} kg`;
        color = 'from-emerald-500 to-teal-600';
        break;
      case 'beneficiaries':
        title = copy.stats.beneficiaries;
        data = yearlySupport.map(item => ({
          label: item.year,
          value: item.beneficiaries,
          color: 'from-rose-400 to-rose-600',
          percentage: Math.round((item.beneficiaries / totalBeneficiaries) * 100)
        }));
        total = formatNumber(totalBeneficiaries);
        color = 'from-rose-500 to-pink-600';
        break;
      default:
        return;
    }

    setDetailModal({ title, data, total, color });
  };

  return (
    <>
      <PageHeader title={t("reports.title")} text={t("reports.text")} />

      <section id="graficos-ministerio" className="section-shell scroll-mt-28 bg-gradient-to-b from-white via-cyan-50/30 to-white">
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

          {/* Stats Grid - Clickables */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard 
              icon={PackageCheck} 
              label={copy.stats.pantries} 
              value={formatNumber(totalPantries)} 
              detail="2021-2026" 
              color="bg-ministry-blue" 
              gradient="from-ministry-blue to-cyan-500"
              onClick={() => handleStatClick('pantries')}
            />
            <StatCard 
              icon={Scale} 
              label={copy.stats.food} 
              value={`${formatNumber(totalFoodKg / 1000, 2)} t`} 
              detail={`${formatNumber(totalFoodKg, 2)} kg`} 
              color="bg-emerald-500" 
              gradient="from-emerald-400 to-emerald-600"
              onClick={() => handleStatClick('food')}
            />
            <StatCard 
              icon={Users} 
              label={copy.stats.beneficiaries} 
              value={formatNumber(totalBeneficiaries)} 
              detail="2021-2026" 
              color="bg-rose-500" 
              gradient="from-rose-400 to-rose-600"
              onClick={() => handleStatClick('beneficiaries')}
            />
            <StatCard 
              icon={TrendingUp} 
              label={copy.stats.topYear} 
              value={topBeneficiaryYear.year} 
              detail={`${topBeneficiaryYear.beneficiaries} ${copy.beneficiariesWord}`} 
              color="bg-amber-500" 
              gradient="from-amber-400 to-orange-500"
            />
          </div>

          {/* Charts Grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <BarChartBlock
              title={copy.beneficiariesTitle}
              data={yearlySupport}
              valueKey="beneficiaries"
              valueLabel=""
              secondaryKey="months"
              secondaryLabel={copy.months}
              color="from-rose-400 to-pink-500"
            />
            <AreaLineChartBlock
              title={copy.foodTitle}
              data={yearlySupport}
              valueKey="foodKg"
              valueLabel={copy.kg}
            />
            <ColumnChartBlock
              title={copy.pantriesTitle}
              data={yearlySupport}
              valueKey="pantries"
              valueLabel={copy.donated}
              secondaryKey="cumulativePantries"
              secondaryLabel={copy.cumulative}
            />
            <DonutChart 
              title={copy.donorTitle} 
              items={donorSources2026} 
              labels={copy.sourceLabels} 
            />
          </div>

          {/* Bottom Row */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <DonutChart 
              title={copy.hospitalTitle} 
              items={hospitalDonationMix} 
              labels={copy.hospitalLabels} 
            />
            <article className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-slate-900">{copy.missionTitle}</h3>
                <div className="rounded-full bg-rose-50 p-2 text-rose-600 transition-colors group-hover:bg-rose-100">
                  <HandHeart size={20} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {missionDonations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={`${item.year}-${item.place}`} className="group/item relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white p-5 ring-1 ring-slate-100 transition-all hover:ring-2 hover:ring-amber-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                      <div className={`absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} opacity-10 transition group-hover/item:scale-150`} />
                      <div className="relative">
                        <div className="flex items-center gap-2">
                          <div className={`rounded-lg bg-gradient-to-br ${item.color} p-1.5 text-white`}>
                            <Icon size={14} />
                          </div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                            {item.month} {item.year}
                          </p>
                        </div>
                        <h4 className="mt-2 text-lg font-black text-slate-900">{item.place}</h4>
                        <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                        <p className="mt-3 text-3xl font-black text-ministry-blue">{item.value}%</p>
                        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
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

      {/* Timeline Section */}
      <section id="linea-tiempo-infografia" className="section-shell scroll-mt-28 bg-white">
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
              <div className="h-full w-full" style={{ 
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
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
                      <p className="text-sm leading-7 text-white/60 group-hover:text-white/80 transition-colors">{item.text}</p>
                      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Section */}
      <section id="pdf-institucional" className="section-shell scroll-mt-28 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700 border border-violet-200">
              <FileText size={15} />
              {copy.pdfTitle}
            </span>
          </div>

          <div className="rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
            {/* Header con contacto */}
            <div className="bg-gradient-to-r from-ministry-blue to-cyan-600 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
                <div>
                  <h3 className="text-2xl font-black text-white">{copy.contactTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{copy.contactText}</p>
                </div>
                <div className="grid gap-3 text-sm font-bold text-white/90">
                  <span className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <Phone size={18} className="text-cyan-200" />
                    <a href="tel:+522463307994" className="hover:text-white transition-colors">246 330 79 94</a>
                    <span className="text-white/30">|</span>
                    <a href="tel:+522464150417" className="hover:text-white transition-colors">246 415 04 17</a>
                  </span>
                  <span className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <MapPin size={18} className="text-cyan-200" />
                    {language === "en"
                      ? "Calle Herreros 53 corner with Pintores, Col. Loma Bonita, Tlaxcala"
                      : "Calle Herreros 53 esq. con Pintores, Col. Loma Bonita, Tlaxcala"}
                  </span>
                </div>
              </div>
            </div>

            {/* Viewer PDF */}
            <div className="relative">
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => setShowFullscreen(true)}
                  className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-slate-700 shadow-lg hover:bg-white transition-all hover:scale-105"
                >
                  <Eye size={16} />
                  {language === "en" ? "Fullscreen" : "Pantalla completa"}
                </button>
                <a
                  href="/assets/reportes/infografia-mayo-agosto-2026.pdf"
                  download
                  className="flex items-center gap-2 rounded-full bg-ministry-blue/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-white shadow-lg hover:bg-ministry-blue transition-all hover:scale-105"
                >
                  <Download size={16} />
                  {language === "en" ? "Download" : "Descargar"}
                </a>
              </div>
              <iframe
                title={t("reports.viewerTitle")}
                className="h-[600px] w-full bg-white"
                src="/assets/reportes/infografia-mayo-agosto-2026.pdf"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-amber-100 p-3">
                  <Sparkles size={20} className="text-amber-600" />
                </div>
                <p className="font-semibold text-slate-700">
                  {t("reports.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowFullscreen(false)}
            className="absolute top-4 right-4 text-white/50 hover:text-white text-4xl transition-colors"
          >
            ×
          </button>
          <iframe
            title={t("reports.viewerTitle")}
            className="h-[95vh] w-full max-w-6xl rounded-lg"
            src="/assets/reportes/infografia-mayo-agosto-2026.pdf"
          />
        </div>
      )}
    </>
  );
}