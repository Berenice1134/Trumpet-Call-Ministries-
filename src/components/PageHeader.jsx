export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-ember/10 blur-3xl" />
      <div className="section-shell relative">
        {eyebrow && <p className="kicker">{eyebrow}</p>}
        <h1 className="title-xl mt-4 max-w-4xl">
          {title}
        </h1>
        {text && <p className="lead mt-5 max-w-3xl">{text}</p>}
      </div>
    </section>
  );
}
