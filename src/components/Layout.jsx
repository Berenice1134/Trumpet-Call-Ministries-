import { useOutlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "./BackToTop.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const mainRef = useRef(null);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [location]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    const selectors = [
      ":scope > section:not(:first-of-type) .reveal",
      ":scope > section:not(:first-of-type) .section-shell > div",
      ":scope > section:not(:first-of-type) .soft-card",
      ":scope > section:not(:first-of-type) article",
      ":scope > section:not(:first-of-type) figure",
    ].join(", ");

    const rawElements = Array.from(root.querySelectorAll(selectors));
    // Evita animar dos veces un padre y su hijo directo al mismo tiempo si ambos coinciden
    const elements = rawElements.filter(
      (el) => !el.closest(".fixed") && !el.querySelector(".reveal")
    );

    // Asigna un retraso escalonado suave a elementos hermanos dentro de cuadrículas
    const grids = Array.from(
      root.querySelectorAll(":scope > section:not(:first-of-type) .grid")
    );
    grids.forEach((grid) => {
      const directChildren = Array.from(grid.children);
      directChildren.forEach((child, idx) => {
        if (
          child.matches(
            ".soft-card, article, figure, .reveal, [data-scroll-reveal]"
          )
        ) {
          child.style.setProperty("--reveal-delay", `${(idx % 4) * 90}ms`);
        }
      });
    });

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => {
      el.setAttribute("data-scroll-reveal", "");
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main ref={mainRef} key={location.pathname} className="page-transition">
        {outlet}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
