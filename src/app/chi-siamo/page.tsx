import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "Chi siamo" };
export default function About() {
  return (
    <section className="wrap about-page">
      <p className="eyebrow terracotta">LA STORIA DIETRO LA MAPPA</p>
      <h1>
        Due zaini.
        <br />
        La stessa voglia di <em>partire.</em>
      </h1>
      <p>
        Viaggiamo in due e abbiamo creato Atlante in Tasca per raccogliere i
        nostri racconti, gli itinerari e i piccoli momenti che ci restano al
        ritorno.
      </p>
      <p>
        Il nostro primo racconto parte da Latina e ci porta in Toscana: due
        giorni tra Pisa e San Gimignano, una salita sulla Torre Pendente e un
        incontro inaspettato con Dante tra i vicoli.
      </p>
      <p>
        Da ogni meta portiamo a casa calamite e cartoline, da accompagnare con
        le nostre foto preferite e poche parole sui momenti vissuti insieme.
        Questo diario nasce dallo stesso desiderio: dare un posto ai nostri
        ricordi.
      </p>
      <Link href="/#viaggi" className="primary-link">
        Sfoglia il diario <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
