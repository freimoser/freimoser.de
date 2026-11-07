import type { APIRoute } from 'astro';
import { groups } from '../data/projects';
import { faqItems } from '../data/faq';

// llms.txt nach der Konvention von https://llmstxt.org
// Bewusst als Endpoint und nicht als Datei in public/: so stammen die
// Projektlinks aus derselben Quelle wie die Seite /projekte/ und können
// nicht auseinanderlaufen.

const SITE = 'https://freimoser.de';

const seiten = [
  ['Startseite', '/', 'Überblick über Schwerpunkte und die wichtigsten Projekte.'],
  ['Projekte', '/projekte/', 'Alle Projekte nach Themen sortiert, jeweils mit Beschreibung und Link.'],
  ['Über mich', '/ueber-mich/', 'Hintergrund, beruflicher Schwerpunkt, Tech-Stack und eingesetzte KI-Werkzeuge.'],
  ['Kontakt', '/kontakt/', 'Kontaktwege und Profile.'],
];

const zeile = (titel: string, url: string, text: string) => `- [${titel}](${url}): ${text}`;

export const GET: APIRoute = () => {
  const anzahl = groups.reduce((n, g) => n + g.projects.length, 0);

  const teile: string[] = [
    '# S. Thomas Freimoser',
    '',
    '> AI Engineering & Automation aus München. VP Data Analytics & Automation bei Petleo ' +
      `und Betreiber von ${anzahl} eigenen Websites, Apps und Datenprojekten.`,
    '',
    'Schwerpunkte sind KI-gestützte Automatisierung, Data Engineering, LLM-Agenten sowie ' +
      'Praxis-IT und Datenformate im Gesundheits- und Veterinärbereich (GDT, LDT/BDT, HL7 v2, ' +
      'FHIR, CDA, DICOM). Ein Großteil der Werkzeuge läuft vollständig im Browser: ohne Konto, ' +
      'ohne Server und ohne Datei-Upload. Inhaltssprache ist Deutsch.',
    '',
    '## Website',
    '',
    ...seiten.map(([t, p, d]) => zeile(t, `${SITE}${p}`, d)),
  ];

  for (const g of groups) {
    teile.push('', `## ${g.title}`, '', `${g.intro}`, '');
    for (const p of g.projects) {
      teile.push(zeile(p.name, p.url, p.description));
    }
  }

  // Die Fragen stammen aus derselben Quelle wie der sichtbare FAQ-Bereich der
  // Startseite. Als Liste formatiert, damit die Struktur der llms.txt-Konvention
  // (H2 + Liste) erhalten bleibt.
  teile.push('', '## Häufige Fragen', '');
  for (const f of faqItems) {
    teile.push(`- **${f.q}** ${f.a}`);
  }

  teile.push(
    '',
    '## Optional',
    '',
    zeile('Impressum', `${SITE}/impressum/`, 'Anbieterkennzeichnung nach § 5 TMG.'),
    zeile('Datenschutz', `${SITE}/datenschutz/`, 'Datenschutzerklärung der Website.'),
    '',
  );

  return new Response(teile.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
