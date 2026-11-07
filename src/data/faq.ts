import { allProjects, groups } from './projects';

// Einzige Quelle für den sichtbaren FAQ-Bereich UND das FAQPage-Schema.
// Google verlangt, dass FAQ-Markup exakt dem entspricht, was auf der Seite
// steht. Beides aus demselben Array zu rendern ist die einzige Variante,
// bei der das auch in zwei Jahren noch stimmt.

export interface FaqItem {
  /** Frage, so wie sie jemand tatsächlich stellen würde. */
  q: string;
  /** Antwort als reiner Text: ohne Markup, damit sichtbarer Text und
   *  acceptedAnswer.text zeichengenau identisch sind. */
  a: string;
  /** Optionaler weiterführender Link. Gehört bewusst nicht ins Schema. */
  link?: { href: string; label: string };
}

const anzahlProjekte = allProjects.length;
const anzahlGruppen = groups.length;
const anzahlBrowserTools = allProjects.filter((p) =>
  p.tags.includes('Browser-only'),
).length;

// Zahlen unter 13 werden im Deutschen ausgeschrieben.
const ZAHLWORT = [
  'null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs',
  'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf',
];
const zahl = (n: number) => ZAHLWORT[n] ?? String(n);

export const faqItems: FaqItem[] = [
  {
    q: 'Wer ist S. Thomas Freimoser?',
    a:
      'Ich bin S. Thomas Freimoser, AI Engineer und bootstrapped Unternehmer aus München. ' +
      'Hauptberuflich verantworte ich als VP Data Analytics & Automation bei Petleo die ' +
      'Datenstrategie und die Automatisierungs-Pipelines des Unternehmens. Daneben baue und ' +
      `betreibe ich ${anzahlProjekte} eigene Websites, Apps und Datenprojekte in Eigenregie. ` +
      'Der rote Faden ist dabei immer derselbe: künstliche Intelligenz und saubere Daten so ' +
      'einsetzen, dass am Ende messbar Zeit oder Geld gespart wird.',
    link: { href: 'ueber-mich/', label: 'Mehr über mich' },
  },
  {
    q: 'Was macht ein VP Data Analytics & Automation?',
    a:
      'Die Rolle verbindet zwei Dinge, die in vielen Unternehmen getrennt voneinander laufen: ' +
      'Auswertung und Ausführung. Analytics heißt, die Zahlen eines Unternehmens verlässlich und ' +
      'an einer Stelle verfügbar zu machen, von der Datenquelle über die Pipeline bis zu dem ' +
      'Bericht, auf den sich eine Entscheidung wirklich stützen lässt. Automation heißt, die ' +
      'wiederkehrenden Arbeitsschritte dahinter abzulösen, heute zunehmend mit LLM-Agenten. ' +
      'Bei Petleo verantworte ich beides, von der Architektur bis zum laufenden Betrieb.',
  },
  {
    q: 'Welche Projekte betreibt S. Thomas Freimoser?',
    a:
      `Aktuell ${anzahlProjekte} eigene Projekte in ${zahl(anzahlGruppen)} Themenbereichen: ` +
      'Tiermedizin & Digital Health, Ratgeber & Wissen, Apps & Tools sowie Gaming & Daten. ' +
      'Dazu gehören unter anderem BierDurst, mein reichweitenstärkstes Projekt rund um Bier in ' +
      'Deutschland, Meta Awards mit rund 9.000 Game-of-the-Year-Auszeichnungen von über 3.000 ' +
      'Medien aus 100 Ländern, Tiermedizin in Zahlen mit belegten Branchendaten und einem ' +
      'Diagramm-Studio sowie eine Reihe von Viewern für medizinische Datenformate.',
    link: { href: 'projekte/', label: 'Alle Projekte ansehen' },
  },
  {
    q: 'Welche KI-Modelle nutzt du für deine Projekte?',
    a:
      'Ich arbeite bewusst modellübergreifend und wechsle je nach Aufgabe: Claude von Anthropic, ' +
      'GPT von OpenAI, Gemini von Google, Grok von xAI und Kimi von Moonshot, dazu Agenten-' +
      'Werkzeuge wie Devin und OpenCode sowie OpenRouter als gemeinsamen Zugang. Kein Modell ist ' +
      'in allem das beste: Umfangreiche Code-Umbauten, lange Recherchen und schnelle ' +
      'Klassifizierungen haben jeweils einen anderen Gewinner. Gebaut sind die Projekte selbst ' +
      'mit Python, TypeScript, Astro, React, Next.js und SQL.',
  },
  {
    q: 'Warum laufen so viele deiner Werkzeuge vollständig im Browser?',
    a:
      'Weil die Daten, um die es geht, niemanden sonst etwas angehen. ' +
      `${zahl(anzahlBrowserTools).charAt(0).toUpperCase()}${zahl(anzahlBrowserTools).slice(1)} ` +
      'meiner Tools verarbeiten die Datei ausschließlich lokal im Browser: kein Konto, kein ' +
      'Server, kein Upload. Ein Arztbrief, ein Laborbefund, eine Röntgenaufnahme oder ein ' +
      'Stammbaum verlässt dabei zu keinem Zeitpunkt das eigene Gerät. Technisch möglich ist das, ' +
      'weil moderne Browser Dateien selbst lesen und verarbeiten können, es also schlicht keine ' +
      'Gegenstelle braucht. Das vereinfacht nebenbei den Datenschutz erheblich: Was das Gerät nie ' +
      'verlässt, kann auch nicht abfließen.',
  },
  {
    q: 'Welche medizinischen Datenformate decken deine Viewer ab?',
    a:
      'Sechs Formate aus Praxis, Labor und Klinik: GDT (Gerätedatentransfer), LDT und BDT (Labor- ' +
      'und Behandlungsdatentransfer), HL7 v2 mit ADT-, ORU- und ORM-Nachrichten, FHIR mit ' +
      'Ressourcen, Bundles und FHIRPath-Tests, HL7 CDA R2 für Arzt- und Entlassbriefe sowie DICOM ' +
      'für Röntgen, CT, MRT und komplette Radiologie-CDs. Jeder Viewer zeigt die Datei lesbar an, ' +
      'hilft beim Finden von Fehlern und kann anonymisiert exportieren. Dazu kommt E-Rechnung ' +
      'Klartext für XRechnung und ZUGFeRD: anderes Fachgebiet, gleiches Prinzip.',
    link: { href: 'projekte/#apps', label: 'Zu den Tools' },
  },
  {
    q: 'Was kosten die Tools, und braucht man ein Konto?',
    a:
      'Sie sind kostenlos und ohne Anmeldung nutzbar: keine Registrierung, keine Testphase, keine ' +
      'Paywall. Möglich ist das, weil die Werkzeuge als statische Seiten ausgeliefert werden und ' +
      'die eigentliche Arbeit im Browser der Nutzerin oder des Nutzers stattfindet. Ohne einen ' +
      'Server, der Dateien entgegennimmt, verarbeitet und speichert, entstehen kaum laufende ' +
      'Kosten, die jemand tragen müsste.',
  },
  {
    q: 'Wie nimmt man Kontakt auf?',
    a:
      'Am schnellsten über LinkedIn oder X/Twitter, dort antworte ich in der Regel innerhalb von ' +
      '24 Stunden. Die E-Mail-Adresse steht im Impressum, Code und offene Projekte liegen auf ' +
      'GitHub unter github.com/freimoser. Über Austausch zu KI-Projekten, Automatisierung und ' +
      'Datenformaten im Gesundheitswesen freue ich mich besonders.',
    link: { href: 'kontakt/', label: 'Kontaktwege ansehen' },
  },
];

/** mainEntity für das FAQPage-Schema, wortgleich zum sichtbaren Text. */
export const faqMainEntity = faqItems.map((item) => ({
  '@type': 'Question',
  name: item.q,
  acceptedAnswer: { '@type': 'Answer', text: item.a },
}));
