import { useOutlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "./BackToTop.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

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

  return (
    <div className="min-h-screen bg-ministry-mist text-ink">
      <Navbar />
      <main key={location.pathname} className="page-transition">
        {outlet}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
