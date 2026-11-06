import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-header";
export const metadata: Metadata = {
  title: {
    default: "Atlante in Tasca — Il nostro diario di viaggio",
    template: "%s | Atlante in Tasca",
  },
  description:
    "Due zaini, un mondo di storie. Un diario di viaggi in coppia tra l’Italia e il resto del mondo, con itinerari, ricordi e piccole scoperte.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Vai al contenuto
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
