export default function ImpactStats({ items, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className={`grid gap-6 sm:grid-cols-3 ${isDark ? "divide-white/15 sm:divide-x" : "divide-ink/10 sm:divide-x"}`}>
      {items.map((item, index) => (
        <article
          key={item.label}
          className="motion-rise px-2 text-center sm:px-6"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <p className={`font-display text-4xl font-semibold sm:text-5xl ${isDark ? "text-white" : "text-ink"}`}>
            {item.value}
          </p>
          <p className={`mt-2 text-sm font-medium leading-5 ${isDark ? "text-white/75" : "text-slate-600"}`}>
            {item.label}
          </p>
        </article>
      ))}
    </div>
  );
}
