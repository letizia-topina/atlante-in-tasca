import Link from "next/link";
import { ArrowUpRight, Compass, Search } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link
        href="/"
        className="wordmark"
        aria-label="Atlante in Tasca, homepage"
      >
        <Compass size={34} strokeWidth={1.5} />
        <span>
          atlante
          <span className="brand-small">
            in tasca<span className="brand-dot">.</span>
          </span>
        </span>
      </Link>
      <nav aria-label="Navigazione principale">
        <Link href="/#viaggi">I nostri viaggi</Link>
        <Link href="/#destinazioni" className="optional-nav">
          Destinazioni
        </Link>
        <Link href="/europa" className="optional-nav">
          Europa
        </Link>
        <Link href="/chi-siamo">Chi siamo</Link>
      </nav>
      <Link
        className="header-search"
        href="/#cerca"
        aria-label="Cerca un viaggio"
      >
        <Search size={18} />
        <span>Cerca un’avventura</span>
        <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="wrap site-footer">
      <Link href="/" className="footer-brand">
        atlante in tasca.
      </Link>
      <p>Due zaini. Un mondo di storie.</p>
      <Link href="/europa" className="footer-region-link">
        Viaggi in Europa
      </Link>
      <span>
        Fatto con curiosità e un pizzico di{" "}
        <span className="terracotta">♥</span>
      </span>
    </footer>
  );
}
