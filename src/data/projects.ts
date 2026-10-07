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
      },
      {
        name: 'Balkon bepflanzen',
        url: 'https://freimoser.github.io/balkon-bepflanzen.de/',
        domain: 'freimoser.github.io/balkon-bepflanzen.de',
        description: 'Praxisnaher Ratgeber für Balkongärtner in Deutschland: welche Pflanzen zu Sonne, Schatten und Jahreszeit passen, vom Einsteiger-Tipp bis zum Profi-Trick.',
        tags: ['Garten', 'Ratgeber'],
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
      },
      {
        name: 'Journey Journal',
        url: 'https://freimoser.github.io/journey-journal-web/',
        domain: 'freimoser.github.io/journey-journal-web',
        description: 'Privates Tagebuch für die eigene Körper-Transformation: tägliche Foto- und Video-Check-ins, automatisch im eigenen Google Drive gesichert, nie in der Handy-Galerie.',
        tags: ['App', 'Privacy', 'Google Drive'],
      },
      {
        name: 'Easy Photo Editor',
        url: 'https://freimoser.github.io/easy-photo-editor/',
        domain: 'freimoser.github.io/easy-photo-editor',
        description: 'Druckfertige Collagen für Fotoabzüge (dm, Photobook oder eigene Maße) direkt im Browser, ohne Upload.',
        tags: ['Tool', 'Browser-only'],
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
