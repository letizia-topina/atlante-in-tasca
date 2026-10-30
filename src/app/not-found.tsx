import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap about-page">
      <p className="eyebrow terracotta">FUORI DALLA MAPPA · 404</p>
      <h1>Una piccola deviazione.</h1>
      <p>Questa pagina non c’è, ma il prossimo viaggio ti aspetta.</p>
      <Link className="primary-link" href="/">
        Torna al diario ↗
      </Link>
    </section>
  );
}
