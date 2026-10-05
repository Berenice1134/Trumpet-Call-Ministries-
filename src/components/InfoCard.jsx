export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className="card p-6">
      {Icon && (
        <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-ministry-gold/30 text-ministry-blue">
          <Icon size={22} />
        </div>
      )}
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  );
}
