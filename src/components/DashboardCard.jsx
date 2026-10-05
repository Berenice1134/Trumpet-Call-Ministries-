import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

export default function DashboardCard({ delay = 0, icon, title, text, to }) {
  const { t } = useLanguage();
  const CardIcon = icon;

  return (
    <Link
      to={to}
      className="card card-hover motion-rise block h-full p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-full flex-col">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-ministry-sky text-ministry-blue">
          <CardIcon size={24} />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ministry-blue">
          {t("common.learnMore")} <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
