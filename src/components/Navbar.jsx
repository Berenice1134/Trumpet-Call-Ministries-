import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const menuGroupsByLanguage = {
  es: [
    {
      label: "Inicio",
      path: "/",
      items: [
        { label: "Sobre nosotros", id: "sobre-nosotros" },
        { label: "Historia", id: "historia" },
        { label: "Objetivo", id: "objetivo" },
      ],
    },
    {
      label: "Servicio Domiciliar",
      path: "/servicio-domiciliar",
      items: [
        { label: "Zonas con apoyo actual", id: "area-servicio-domiciliar" },
        { label: "Historia", id: "historia-domiciliar" },
        { label: "Toneladas repartidas", id: "toneladas-repartidas" },
        { label: "Actividades", id: "actividades-domiciliares" },
      ],
    },
    {
      label: "Misiones",
      path: "/misiones",
      items: [
        { label: "Hospital Infantil de Tlaxcala HIT", id: "hospital-infantil-tlaxcala" },
        { label: "Cartolandia", id: "cartolandia" },
        { label: "Día de Caridad", id: "dia-caridad" },
        { label: "Asilo de San Judas", id: "espanita" },
      ],
    },
    {
      label: "Voluntarios",
      path: "/voluntarios",
      items: [
        { label: "Secciones de voluntarios", id: "grupos" },
        { label: "Testimonios", id: "testimonios" },
      ],
    },
    {
      label: "Donaciones",
      path: "/donaciones",
      items: [
        { label: "Donaciones", id: "donaciones" },
        { label: "Carta de fundadora", id: "carta-fundadora" },
        { label: "Qué dice la Biblia", id: "que-dice-la-biblia" },
        { label: "Kermés Invierno Mágico de Caridad", id: "kermes-invierno-magico" },
      ],
    },
    {
      label: "Reportes",
      path: "/reportes",
      items: [
        { label: "Gráficos del ministerio", id: "graficos-ministerio" },
        { label: "Infografías", id: "pdf-institucional" },
      ],
    },
  ],
  en: [
    {
      label: "Home",
      path: "/",
      items: [
        { label: "About Us", id: "sobre-nosotros" },
        { label: "History", id: "historia" },
        { label: "Service Area", id: "area-servicio" },
        { label: "Objective", id: "objetivo" },
        { label: "How the Ministry Is Supported", id: "como-se-sostiene" },
      ],
    },
    {
      label: "Home Care",
      path: "/servicio-domiciliar",
      items: [
        { label: "Current support areas", id: "area-servicio-domiciliar" },
        { label: "History", id: "historia-domiciliar" },
        { label: "Tons Distributed", id: "toneladas-repartidas" },
        { label: "Activities", id: "actividades-domiciliares" },
      ],
    },
    {
      label: "Missions",
      path: "/misiones",
      items: [
        { label: "HIT", id: "hospital-infantil-tlaxcala" },
        { label: "Cartolandia", id: "cartolandia" },
        { label: "Charity Day", id: "dia-caridad" },
        { label: "Asilo de San Judas", id: "espanita" },
      ],
    },
    {
      label: "Volunteers",
      path: "/voluntarios",
      items: [
        { label: "Volunteer Sections", id: "grupos" },
        { label: "Testimonies", id: "testimonios" },
      ],
    },
    {
      label: "Donations",
      path: "/donaciones",
      items: [
        { label: "Donations", id: "donaciones" },
        { label: "Founder's Letter", id: "carta-fundadora" },
        { label: "What the Bible Says", id: "que-dice-la-biblia" },
        { label: "Magical Winter Charity Fair", id: "kermes-invierno-magico" },
      ],
    },
    {
      label: "Reports",
      path: "/reportes",
      items: [
        { label: "Ministry Charts", id: "graficos-ministerio" },
        { label: "Infographics", id: "pdf-institucional" },
      ],
    },
  ],
};

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const menuGroups = menuGroupsByLanguage[language] ?? menuGroupsByLanguage.es;

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleAnchorClick(event, path, id) {
    event.preventDefault();
    setIsOpen(false);
    setOpenMobileGroup(null);

    if (location.pathname !== path) {
      navigate(`${path}#${id}`);
      window.setTimeout(() => scrollToSection(id), 120);
      return;
    }

    window.history.pushState(null, "", `${path}#${id}`);
    scrollToSection(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-6 lg:px-8">
        
        {/* Mantiene el logotipo visible en móvil y oculta el nombre cuando falta espacio horizontal. */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 sm:gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          {/* El contenedor no se contrae para conservar la proporción del logotipo. */}
          <span className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <img
              src={`${import.meta.env.BASE_URL}assets/tcm-logo.jpeg`}
              alt={t("brand")}
              /* La altura escala por breakpoint; el ancho automático conserva la proporción original. */
              className="h-10 w-auto object-contain sm:h-12 xl:h-14"
            />
          </span>
          
          {/* La marca textual se habilita desde el breakpoint sm para priorizar controles en móvil. */}
          <span className="hidden whitespace-nowrap font-display text-base font-semibold leading-tight text-ink sm:block lg:text-[15px] xl:text-lg">
            {t("brand")}
          </span>
        </NavLink>

        <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {menuGroups.map((group) => {
            const isCurrent = location.pathname === group.path || (group.path === "/misiones" && location.pathname === "/hospital-infantil");
            return (
            <div key={group.label} className="group relative shrink-0">
              <button
                type="button"
                onClick={() => navigate(group.path)}
                className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-semibold leading-none transition hover:bg-slate-100 hover:text-ember xl:px-3.5 xl:text-[14.5px] ${isCurrent ? "bg-rose-50 text-ember" : "text-slate-700"}`}
              >
                <span>{group.label}</span>
                <ChevronDown
                  size={13}
                  className="shrink-0 opacity-60 transition group-hover:rotate-180"
                />
              </button>
              <div className="pointer-events-none absolute left-0 top-full min-w-64 translate-y-2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-soft">
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`${group.path}#${item.id}`}
                    onClick={(event) =>
                      handleAnchorClick(event, group.path, item.id)
                    }
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-rose-50 hover:text-ember"
                  >
                    {item.label}
                  </a>
                ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:gap-2.5">
          {/* Selector de idioma moderno tipo píldora segmentada (sin <select> nativo) */}
          <div
            role="group"
            aria-label="Language selector"
            className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 p-0.5"
          >
            {["es", "en"].map((lang) => {
              const active = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={active}
                  className={`rounded-full px-2.5 py-1 text-[12px] font-bold uppercase leading-none transition ${
                    active
                      ? "bg-ink text-white shadow-sm"
                      : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
          <NavLink
            to="/donaciones#donaciones"
            onClick={() => setIsOpen(false)}
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-ember via-rose-500 to-amber-500 px-4 py-2.5 text-[13.5px] font-bold leading-none text-white shadow-md shadow-ember/25 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/35 sm:inline-flex xl:px-5 xl:text-[14px]"
          >
            <Heart size={14} className="shrink-0 fill-white" />
            <span>{t("common.donateNow")}</span>
          </NavLink>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
            aria-label={t("nav.menu")}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-ink/5 bg-cream px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            <NavLink
              to="/donaciones#donaciones"
              onClick={() => setIsOpen(false)}
              className="btn-primary sm:hidden"
            >
              <Heart size={16} className="fill-white" />
              {t("common.donateNow")}
            </NavLink>
            {menuGroups.map((group) => {
              const isGroupOpen = openMobileGroup === group.label;
              return (
                <div key={group.label} className="rounded-2xl border border-ink/5 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold text-ink"
                    onClick={() =>
                      setOpenMobileGroup(isGroupOpen ? null : group.label)
                    }
                  >
                    {group.label}
                    <ChevronDown
                      size={18}
                      className={[
                        "transition",
                        isGroupOpen ? "rotate-180 text-ember" : "",
                      ].join(" ")}
                    />
                  </button>
                  {isGroupOpen && (
                    <div className="grid gap-1 border-t border-ink/5 p-2">
                      {group.items.map((item) => (
                        <a
                          key={item.id}
                          href={`${group.path}#${item.id}`}
                          onClick={(event) =>
                            handleAnchorClick(event, group.path, item.id)
                          }
                          className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-cream hover:text-ember"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
