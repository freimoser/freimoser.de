export interface Project {
  name: string;
  url: string;
  domain: string;
  description: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export interface ProjectGroup {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
}

export const groups: ProjectGroup[] = [
  {
    id: 'tiermedizin',
    title: 'Tiermedizin & Digital Health',
    intro: 'Daten und Werkzeuge für die Branche, in der ich beruflich zu Hause bin.',
    projects: [
      {
        name: 'Tiermedizin in Zahlen',
        url: 'https://tiermedizin-in-zahlen.org/',
        domain: 'tiermedizin-in-zahlen.org',
        description: 'Zahlen zu Tierärzten, Praxen und Haustieren in Deutschland, jede mit Quelle. Dazu ein Studio, das animierte Diagramme direkt im Browser als MP4 erzeugt.',
        tags: ['Daten', 'Tiermedizin', 'D3', 'React'],
        image: 'tiermedizin-in-zahlen.webp',
        featured: true,
      },
      {
        name: 'GDT Viewer',
        url: 'https://freimoser.github.io/gdt-viewer/',
        domain: 'freimoser.github.io/gdt-viewer',
        description: 'GDT-Dateien (Gerätedatentransfer) im Browser lesen und konforme Testdaten nach GDT 2.1 und 3.x erzeugen. Läuft komplett lokal, ohne Upload.',
        tags: ['Tool', 'Praxis-IT', 'Browser-only'],
        image: 'gdt-viewer.webp',
      },
      {
        name: 'Marktübersicht digitale Tierarztpraxis',
        url: 'https://freimoser.github.io/marktuebersicht-tierarztpraxis/',
        domain: 'freimoser.github.io/marktuebersicht-tierarztpraxis',
        description: '47 digitale Lösungen für Tierarztpraxen im DACH-Markt, von Praxissoftware über KI-Dokumentation bis Videosprechstunde. Alphabetisch, ohne Rangfolge und ohne Bewertung.',
        tags: ['Marktübersicht', 'Tiermedizin', 'Praxis-IT'],
      },
    ],
  },
  {
    id: 'ratgeber',
    title: 'Ratgeber & Wissen',
    intro: 'Handgeschriebene Inhalte zu klaren Themen, mit Rechnern und Quellen.',
    projects: [
      {
        name: 'BierDurst',
        url: 'https://bierdurst.org/',
        domain: 'bierdurst.org',
        description: 'Alles über Bier in Deutschland: Biersorten, Vergleiche, Rechner, Regionen und Oktoberfest-Infos, verständlich erklärt. Mein reichweitenstärkstes Projekt.',
        tags: ['Ratgeber', 'Astro', 'Rechner'],
        image: 'bierdurst.webp',
        featured: true,
      },
      {
        name: 'TickSpot – Zecken finden',
        url: 'https://zecken-finden.org/',
        domain: 'zecken-finden.org',
        description: 'Zecken in Sekunden mit der Handykamera finden, dazu Wissen rund um Zeckenschutz und richtiges Entfernen.',
        tags: ['Gesundheit', 'Kamera-App', 'Ratgeber'],
        image: 'zecken-finden.webp',
        featured: true,
      },
      {
        name: 'Wasserfasten',
        url: 'https://wasserfasten.fyi/',
        domain: 'wasserfasten.fyi',
        description: 'Wasserfasten zum Abnehmen, begleitet von einem zertifizierten Ernährungsberater: ehrliche Zahlen, klare Sicherheitsregeln und die Phase danach.',
        tags: ['Gesundheit', 'Ratgeber', 'Astro'],
        image: 'wasserfasten.webp',
      },
      {
        name: 'SolarBalkon Ratgeber',
        url: 'https://freimoser.github.io/balkonkraftwerk-ratgeber/',
        domain: 'freimoser.github.io/balkonkraftwerk-ratgeber',
        description: 'Balkonkraftwerk kaufen, anmelden und Strom sparen: unabhängige Kaufberatung und Schritt-für-Schritt-Anleitungen für Mieter und Eigentümer.',
        tags: ['Energie', 'Ratgeber'],
        image: 'solarbalkon.webp',
      },
      {
        name: 'Balkon bepflanzen',
        url: 'https://freimoser.github.io/balkon-bepflanzen.de/',
        domain: 'freimoser.github.io/balkon-bepflanzen.de',
        description: 'Praxisnaher Ratgeber für Balkongärtner in Deutschland: welche Pflanzen zu Sonne, Schatten und Jahreszeit passen, vom Einsteiger-Tipp bis zum Profi-Trick.',
        tags: ['Garten', 'Ratgeber'],
        image: 'balkon-bepflanzen.webp',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Apps & Tools',
    intro: 'Kleine Anwendungen, die ein konkretes Problem lösen, meist ohne Konto und ohne Server.',
    projects: [
      {
        name: 'Konfliktlotse',
        url: 'https://konfliktlotse.app/',
        domain: 'konfliktlotse.app',
        description: 'Konkrete Gesprächshilfe für Alltagskonflikte: Konflikt auswählen und Schritt für Schritt den richtigen Weg für das schwierige Gespräch finden.',
        tags: ['App', 'Kommunikation'],
        image: 'konfliktlotse.webp',
        featured: true,
      },
      {
        name: 'FamilyTree Free',
        url: 'https://familytree-free.com/de/',
        domain: 'familytree-free.com',
        description: 'Stammbaum kostenlos erstellen, ohne Anmeldung. Der Familienbaum bleibt auf dem eigenen Gerät, keine Cloud, eine Datei als Sicherung.',
        tags: ['App', 'Privacy', 'Browser-only'],
        image: 'familytree-free.webp',
      },
      {
        name: 'Solvitalk',
        url: 'https://solvitalk.com/',
        domain: 'solvitalk.com',
        description: 'Spazieren gehen und dabei reden: 25 Minuten mit jemandem, den dasselbe Thema umtreibt, per Google Meet.',
        tags: ['Community', 'Web-App'],
        image: 'solvitalk.webp',
      },
      {
        name: 'ICS Editor',
        url: 'https://freimoser.github.io/ics-editor/',
        domain: 'freimoser.github.io/ics-editor',
        description: 'ICS-Dateien und Google-Kalender-Exporte im Browser öffnen, bearbeiten, aufteilen und für den Import vorbereiten, auch bei Dateien über Googles 1-MB-Grenze. Kostenlos und ohne Upload.',
        tags: ['Tool', 'Kalender', 'Browser-only'],
        image: 'ics-editor.webp',
      },
      {
        name: 'LDT & BDT Viewer',
        url: 'https://freimoser.github.io/ldt-bdt-viewer/',
        domain: 'freimoser.github.io/ldt-bdt-viewer',
        description: 'LDT- und BDT-Dateien aus Labor und Praxissoftware im Browser öffnen, Laborwerte lesen, Fehler finden und anonymisieren. Kostenlos und ohne Upload.',
        tags: ['Tool', 'Labordaten', 'Browser-only'],
        image: 'ldt-bdt-viewer.webp',
      },
      {
        name: 'E-Rechnung Klartext',
        url: 'https://freimoser.github.io/e-rechnung-klartext/',
        domain: 'freimoser.github.io/e-rechnung-klartext',
        description: 'XRechnung und ZUGFeRD lesbar anzeigen, prüfen, Fehlercodes verstehen und als PDF speichern. Kostenlos und ohne Upload.',
        tags: ['Tool', 'E-Rechnung', 'Browser-only'],
        image: 'e-rechnung-klartext.webp',
      },
      {
        name: 'DICOM Viewer',
        url: 'https://freimoser.github.io/dicom-viewer/',
        domain: 'freimoser.github.io/dicom-viewer',
        description: 'Röntgen-, CT- und MRT-Bilder und ganze Radiologie-CDs im Browser ansehen, anonym als PNG oder JPG exportieren. Kostenlos und ohne Upload, mit Beispieldateien zum Ausprobieren.',
        tags: ['Tool', 'Medizinische Bilder', 'Browser-only'],
        image: 'dicom-viewer.webp',
      },
      {
        name: 'CDA Viewer',
        url: 'https://freimoser.github.io/cda-viewer/',
        domain: 'freimoser.github.io/cda-viewer',
        description: 'Arztbriefe und Entlassbriefe im Format HL7 CDA R2 als lesbares Dokument im Browser anzeigen, mit Kopfdaten, Abschnitten und codierten Einträgen. Kostenlos und ohne Upload.',
        tags: ['Tool', 'Arztbrief', 'Browser-only'],
        image: 'cda-viewer.webp',
      },
      {
        name: 'KinoTom',
        url: 'https://freimoser.github.io/kinotom/',
        domain: 'freimoser.github.io/kinotom',
        description: 'Kuratierter Katalog frei zugänglicher Filme: Kurzfilme, Open Movies und KI-Filme zum direkten Anschauen.',
        tags: ['Katalog', 'Filme', 'Open Movies'],
        image: 'kinotom.webp',
      },
      {
        name: 'Journey Journal',
        url: 'https://freimoser.github.io/journey-journal-web/',
        domain: 'freimoser.github.io/journey-journal-web',
        description: 'Privates Tagebuch für die eigene Körper-Transformation: tägliche Foto- und Video-Check-ins, automatisch im eigenen Google Drive gesichert, nie in der Handy-Galerie.',
        tags: ['App', 'Privacy', 'Google Drive'],
        image: 'journey-journal.webp',
      },
      {
        name: 'Easy Photo Editor',
        url: 'https://freimoser.github.io/easy-photo-editor/',
        domain: 'freimoser.github.io/easy-photo-editor',
        description: 'Druckfertige Collagen für Fotoabzüge (dm, Photobook oder eigene Maße) direkt im Browser, ohne Upload.',
        tags: ['Tool', 'Browser-only'],
        image: 'easy-photo-editor.webp',
      },
    ],
  },
  {
    id: 'gaming',
    title: 'Gaming & Daten',
    intro: 'Datenprojekte rund um Videospiele.',
    projects: [
      {
        name: 'MyNextGameFinder',
        url: 'https://nextgamefinder.org/',
        domain: 'nextgamefinder.org',
        description: 'Acht Fragen zu Stimmung, Zeit und Geschmack, danach Spielempfehlungen, die wirklich zum Abend passen.',
        tags: ['Gaming', 'Empfehlungen', 'Next.js'],
        image: 'nextgamefinder.webp',
        featured: true,
      },
      {
        name: 'Meta Awards',
        url: 'https://metaawards.org/',
        domain: 'metaawards.org',
        description: 'Welches Spiel hat wirklich Game of the Year gewonnen? Rund 9.000 GOTY-Awards von über 3.000 Medien aus 100 Ländern, Jahr für Jahr gezählt.',
        tags: ['Gaming', 'Datenbank', 'Python'],
        image: 'metaawards.webp',
        featured: true,
      },
    ],
  },
];

export const allProjects = groups.flatMap((g) => g.projects);
export const featuredProjects = allProjects.filter((p) => p.featured);
