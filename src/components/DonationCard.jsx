import { HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/useLanguage.js";

export default function DonationCard({ title, text, amount, custom, onDonate }) {
  const { t } = useLanguage();
  const handleDonate = () => {
    if (onDonate) {
      onDonate();
      return;
    }

    document.querySelector("#transferencias")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-ministry-gold/30 text-ministry-blue">
        <HeartHandshake size={24} />
      </div>
      <h2 className="mt-5 text-xl font-bold text-ink">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
      {custom ? (
        <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-700">
          {t("common.amount")}
          <input
            type="number"
            min="1"
            className="rounded-md border border-slate-300 px-3 py-3 text-lg font-bold outline-none focus:border-ministry-teal focus:ring-2 focus:ring-ministry-teal/20"
            placeholder="$"
          />
        </label>
      ) : (
        <p className="mt-6 text-3xl font-black text-ministry-blue">{amount}</p>
      )}
      <button
        type="button"
        onClick={handleDonate}
        className="mt-6 rounded-md bg-ministry-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-ministry-teal"
      >
        {t("common.donateNow")}
      </button>
    </article>
  );
}
