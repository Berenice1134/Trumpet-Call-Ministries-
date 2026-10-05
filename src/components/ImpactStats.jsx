export default function ImpactStats({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.label}
          className="shine-panel rounded-lg bg-ministry-blue p-5 text-white shadow-soft"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <p className="text-3xl font-black text-ministry-gold">{item.value}</p>
          <p className="mt-2 text-sm font-semibold leading-5 text-white/86">
            {item.label}
          </p>
        </article>
      ))}
    </div>
  );
}
