# Freimoser.de — Redesign Brief

## Über das Projekt
Persönliche Branding-Website für S. Thomas Freimoser — VP Data Analytics & Automation, Bootstrapped Entrepreneur.
Die Domain freimoser.de soll später die Haupt-URL werden, aktuell läuft die Site auf GitHub Pages:
`https://freimoser.github.io/freimoser.de/`

## Tech-Stack (NICHT ändern)
- **Framework:** Astro 7.1.6 (statisch, kein SSR)
- **Sprache:** TypeScript strict, `.astro` Komponenten
- **Styling:** Pure CSS — KEIN Tailwind, KEIN React, KEINE externen UI-Libraries
- **Node:** v22.23.1
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Font:** Inter (Google Fonts) — darf bleiben oder ersetzt werden

## Bestehende Seiten (alle in src/pages/)
1. **index.astro** — Hero + 6 Featured-Projekt-Cards + About-Vorschau
2. **projekte.astro** — 9 AI-Projekte als Grid (Daten als Array in der Frontmatter)
3. **ueber-mich.astro** — Bio, Background, Tech-Stack, Standort
4. **kontakt.astro** — GitHub, LinkedIn, X, Direktkontakt
5. **impressum.astro** — Pflichtangaben (Pattaya, Thailand)
6. **datenschutz.astro** — Datenschutzerklärung

## Layout (src/layouts/Layout.astro)
- Sticky Nav mit Logo "Frei<span>moser</span>" und 4 Links (Home, Projekte, Über mich, Kontakt)
- Mobile Hamburger-Menü (existiert bereits)
- Footer mit Copyright + Links (GitHub, LinkedIn, Impressum, Datenschutz)
- Slot für Page-Content

## Style (src/styles/global.css)
- Aktuell: Dark Theme (--bg-primary: #0a0a0f) mit Amber-Akzenten (#f59e0b)
- CSS-Variablen für Farben, Abstände, Radien
- Responsive Breakpoints bei 768px und 640px

## Config (astro.config.mjs)
```js
site: 'https://freimoser.github.io',
base: '/freimoser.de',
build: { format: 'directory' }
```
**WICHTIG:** `base: '/freimoser.de'` muss erhalten bleiben, sonst brechen alle Pfade auf GitHub Pages!

## Was der Redesign umfassen soll

### Design-Richtung (kreative Freiheit)
- **Vibe:** Modern, professionell, technisch kompetent — aber nicht steril
- **Besser als Dark/Amber:** Du kannst das Farbschema komplett neu machen, oder das bestehende verbessern
- **Mood:** "AI Engineering & Automation" — futuristisch aber erwachsen, kein Spielzeug-Look
- **Mobile-First:** Alle Seiten müssen auf Smartphone perfekt aussehen

### Erwartete Änderungen
1. **global.css** — Komplett neues Design-System ODER massives Upgrade des bestehenden
2. **Layout.astro** — Verbessertes Layout, ggf. neue Navigation/Header/Footer-Struktur
3. **index.astro** — Neues Hero-Design, bessere Projekt-Präsentation
4. **projekte.astro** — Ansprechendere Projektdarstellung als nur Cards
5. **ueber-mich.astro** — Persönliche, storytelling-orientierte Seite
6. **kontakt.astro** — Moderne Kontaktseite
7. **favicon.svg** — Optional neues Favicon-Design

### Was bleiben muss
- **Alle Textinhalte** (Projektbeschreibungen, Bio-Texte, Impressum/Datenschutz)
- **Alle 9 Projektdaten** inkl. Icons, Tags, Beschreibungen
- **Seitenstruktur:** Home, Projekte, Über mich, Kontakt, Impressum, Datenschutz
- **`base: '/freimoser.de'`** in der Astro-Config
- **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- **Nur Astro + Pure CSS** — keine neuen Abhängigkeiten/Frameworks

## Arbeitsablauf
1. Änderungen in den Dateien vornehmen
2. NACH jeder Änderung: `npm run build` ausführen um sicherzustellen dass der Build nicht kaputt geht
3. Nicht vergessen: Alle Pfade müssen mit `import.meta.env.BASE_URL` oder relativ zum base-path funktionieren

## Projekt-Struktur
```
/data/freimoser.de/
├── astro.config.mjs
├── package.json
├── .gitignore
├── .github/workflows/deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projekte.astro
│   │   ├── ueber-mich.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   └── styles/
│       └── global.css
```

Los geht's! Mach ein richtig geiles Design draus 🚀
