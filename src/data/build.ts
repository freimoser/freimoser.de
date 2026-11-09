// Einziger Zeitstempel des Builds.
//
// Startseite, Profilseite und der sichtbare Hinweis im Footer müssen denselben
// Wert benutzen. Würde jede Stelle ihr eigenes new Date() auswerten, könnte ein
// Build, der über Mitternacht läuft, im Schema den einen und im sichtbaren Text
// den anderen Tag zeigen — genau die Abweichung, die Google als Widerspruch
// zwischen Auszeichnung und Seiteninhalt wertet.
//
// Alle Ableitungen beziehen sich bewusst auf UTC, damit ISO-Zeitstempel,
// datetime-Attribut und ausgeschriebenes Datum denselben Tag bezeichnen. Der
// GitHub-Actions-Runner läuft ohnehin in UTC.

const BUILD = new Date();

/** ISO-8601 mit Zeitzone, für schema.org dateModified. */
export const buildDateIso = BUILD.toISOString();

/** YYYY-MM-DD, für das datetime-Attribut von <time>. */
export const buildDateAttr = buildDateIso.slice(0, 10);

/** Ausgeschrieben für den sichtbaren Hinweis, etwa „9. November 2026". */
export const buildDateDe = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(BUILD);

/** Jahreszahl für den Copyright-Hinweis. */
export const buildYear = Number(buildDateAttr.slice(0, 4));
