import { ChevronDown, Menu, X } from "lucide-react";
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
        { label: "Área de servicio", id: "area-servicio" },
        { label: "Objetivo", id: "objetivo" },
        { label: "Cómo se sostiene el ministerio", id: "como-se-sostiene" },
      ],
    },
    {
      label: "Servicio Domiciliar",
      path: "/servicio-domiciliar",
      items: [
        { label: "Mapa de municipios", id: "mapa-municipios" },
        { label: "Área de servicio", id: "area-servicio-domiciliar" },
        { label: "Historia", id: "historia-domiciliar" },
        { label: "Toneladas repartidas", id: "toneladas-repartidas" },
        { label: "Galería de voluntarios", id: "galeria-voluntarios" },
      ],
    },
    {
      label: "Misiones",
      path: "/misiones",
      items: [
        { label: "Hospital Infantil de Tlaxcala", id: "hospital-infantil-tlaxcala" },
        { label: "Cartolandia", id: "cartolandia" },
        { label: "Día de Caridad", id: "dia-caridad" },
        { label: "Españita", id: "espanita" },
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
        { label: "PDF institucional", id: "pdf-institucional" },
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
        { label: "Municipality Map", id: "mapa-municipios" },
        { label: "Service Area", id: "area-servicio-domiciliar" },
        { label: "History", id: "historia-domiciliar" },
        { label: "Tons Distributed", id: "toneladas-repartidas" },
        { label: "Volunteer Gallery", id: "galeria-voluntarios" },
      ],
    },
    {
      label: "Missions",
      path: "/misiones",
      items: [
        { label: "Children's Hospital of Tlaxcala", id: "hospital-infantil-tlaxcala" },
        { label: "Cartolandia", id: "cartolandia" },
        { label: "Charity Day", id: "dia-caridad" },
        { label: "Españita", id: "espanita" },
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
        { label: "Institutional PDF", id: "pdf-institucional" },
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-12 w-16 place-items-center overflow-hidden rounded-md bg-white">
            <img
              src="/assets/tcm-logo.jpeg"
              alt={t("brand")}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden text-base font-bold leading-tight text-ink sm:block sm:text-lg">
            {t("brand")}
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {menuGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-ministry-sky hover:text-ministry-blue"
              >
                {group.label}
                <ChevronDown
                  size={16}
                  className="transition group-hover:rotate-180"
                />
              </button>
              <div className="pointer-events-none absolute left-0 top-full min-w-64 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`${group.path}#${item.id}`}
                    onClick={(event) =>
                      handleAnchorClick(event, group.path, item.id)
                    }
                    className="block rounded-md px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-ministry-sky hover:text-ministry-blue"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <select
            aria-label="Language selector"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none transition focus:border-ministry-teal focus:ring-2 focus:ring-ministry-teal/20"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-700 lg:hidden"
            aria-label={t("nav.menu")}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {menuGroups.map((group) => {
              const isGroupOpen = openMobileGroup === group.label;
              return (
                <div key={group.label} className="rounded-lg border border-slate-200">
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
                        isGroupOpen ? "rotate-180 text-ministry-teal" : "",
                      ].join(" ")}
                    />
                  </button>
                  {isGroupOpen && (
                    <div className="grid gap-1 border-t border-slate-100 p-2">
                      {group.items.map((item) => (
                        <a
                          key={item.id}
                          href={`${group.path}#${item.id}`}
                          onClick={(event) =>
                            handleAnchorClick(event, group.path, item.id)
                          }
                          className="rounded-md px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-ministry-sky hover:text-ministry-blue"
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
