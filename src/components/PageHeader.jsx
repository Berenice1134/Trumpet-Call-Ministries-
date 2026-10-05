export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-white">
      <div className="section-shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold text-ink sm:text-5xl">
          {title}
        </h1>
        {text && <p className="section-copy">{text}</p>}
      </div>
    </section>
  );
}
