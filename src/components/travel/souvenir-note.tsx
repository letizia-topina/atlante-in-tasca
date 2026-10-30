import { Pin } from "lucide-react";

export function SouvenirNote({
  places,
  children,
}: {
  places: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="souvenir-note" aria-label="I nostri souvenir del viaggio">
      <span className="souvenir-pin" aria-hidden="true">
        <Pin size={29} strokeWidth={1.5} />
      </span>
      <p className="souvenir-places">{places}</p>
      {children}
    </aside>
  );
}
