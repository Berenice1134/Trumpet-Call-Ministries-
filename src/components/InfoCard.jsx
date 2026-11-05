export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className="soft-card">
      {Icon && (
        <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-ember/10 text-ember">
          <Icon size={22} />
        </div>
      )}
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 text-base leading-7 text-slate-600">{children}</div>
    </article>
  );
}
