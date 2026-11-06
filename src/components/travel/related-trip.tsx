import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function RelatedTrip({
  href,
  place,
  title,
  children,
  label = "Continua il viaggio",
}: {
  href: string;
  place: string;
  title: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <aside
      className="related-trip"
      aria-label={`Il viaggio continua: ${place}`}
    >
      <p className="eyebrow">
        <MapPin size={14} aria-hidden="true" />
        {place}
      </p>
      <h3>{title}</h3>
      <div className="related-trip-copy">{children}</div>
      <Link href={href} className="related-trip-link">
        {label}
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </aside>
  );
}
