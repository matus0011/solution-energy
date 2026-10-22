// Oś czasu w układzie v2. Etapy pochodzą z realizacji w `projects.ts`
// (te same daty, zakresy i zdjęcia) oraz z daty założenia spółki z `companyFacts`.
// `project` to indeks w `projects`, czyli zarazem adres /realizacje/:id.
// Od etapu z `greenFrom` oś i cała strona przechodzą na kolor zielony.
// `icon` to rysunek z `timelineIcons.tsx`, używany w układzie v4 zamiast zdjęcia.

export type TimelineIconName =
  | 'cooling'
  | 'storage'
  | 'blueprint'
  | 'trigeneration'
  | 'biogas'
  | 'geothermal'
  | 'research'
  | 'drilling'
  | 'biomass'
  | 'cogeneration'

export type TimelineStep = {
  year: string
  title: string
  desc: string
  image?: string
  icon?: TimelineIconName
  project?: number
  greenFrom?: boolean
}

export const timeline: TimelineStep[] = [
  {
    year: '2011',
    title: 'Początek działalności',
    icon: 'blueprint',
    desc: 'Start spółki. Od pierwszych zleceń prowadzimy inwestycje kompleksowo: projekt, wykonawstwo i serwis.',
  },
  {
    year: '2016–2017',
    title: 'Trigeneracja dla szpitala w Łodzi',
    icon: 'trigeneration',
    desc: 'Ciepło, energia elektryczna i chłód z jednej jednostki, wraz z infrastrukturą elektroenergetyczną.',
    image: '/realizacje/lodz-szpital-hvac.jpg',
    project: 9,
  },
  {
    year: '2017–2018',
    title: 'Agregat SESBio w Lubartowie',
    icon: 'biogas',
    desc: 'Kogeneracja 190 kW na biogaz w obudowie wyciszonej własnej produkcji Energy Solutions.',
    image: '/realizacje/lubartow-sesbio.jpg',
    project: 6,
  },
  {
    year: '2018–2020',
    title: 'Ciepłownia geotermalna w Toruniu',
    icon: 'geothermal',
    desc: 'Otwory TG-1 i TG-2, kotły LOOS Unimat i absorpcyjne pompy ciepła Thermax.',
    image: '/realizacje/torun-geotermia.jpg',
    project: 2,
    greenFrom: true,
  },
  {
    year: '2020–2022',
    title: 'Centrum „Miękinia” AGH',
    icon: 'research',
    desc: 'Centrum Zrównoważonego Rozwoju i Poszanowania Energii Akademii Górniczo-Hutniczej.',
    image: '/realizacje/miekinia-agh.jpg',
    project: 7,
  },
  {
    year: '2021–2025',
    title: 'Ciepłownia geotermalna w Koninie',
    icon: 'drilling',
    desc: 'Ciepłownia z infrastrukturą i otworem Konin GT-3, w konsorcjum z UOS Drilling.',
    image: '/realizacje/konin-geotermia.jpg',
    project: 0,
  },
  {
    year: '2022–2023',
    title: 'Geotermia i biomasa w Sieradzu',
    icon: 'biomass',
    desc: 'Otwór zatłaczający GT-2 i moduł kogeneracyjny 0,9 MWe / 1,1 MWt w formule „zaprojektuj i wybuduj”.',
    image: '/realizacje/sieradz-geotermia.jpg',
    project: 1,
  },
  {
    year: 'Dziś',
    title: 'Kogeneracja 1,004 MW w Brzesku',
    icon: 'cogeneration',
    desc: 'Prowadzimy zadanie jako lider konsorcjum. Równolegle trwa modernizacja klimatyzacji szybu Daniłowicz w Wieliczce.',
    image: '/realizacje/brzesko-kogeneracja.jpg',
    project: 4,
  },
]

export const greenIndex = timeline.findIndex((step) => step.greenFrom)

// Final: 10 etapów z wytycznych klienta; opisy skrócone na potrzeby osi.
export const finalTimeline: TimelineStep[] = [
  { year: '2005', title: 'Powstanie i rejestracja spółki', icon: 'blueprint', desc: 'Rejestracja Energy Solutions. Początek usług elektroinstalacyjnych i inżynieryjnych.' },
  { year: '2011', title: 'Rozwój inwestycji przemysłowych', icon: 'cogeneration', desc: 'Rozwój zespołu i pierwsze wielobranżowe kontrakty technologiczne dla przemysłu.' },
  { year: '2014–2015', title: 'Projekt w Kopalni Soli „Wieliczka”', icon: 'cooling', desc: 'Klimatyzacja i osuszanie przy szybie Daniłowicz w zabytkowej kopalni UNESCO.' },
  { year: '2016', title: 'Smart Energy System — SES', icon: 'trigeneration', desc: 'Wdrożenie modułowego SES po własnych pracach badawczo-rozwojowych z lat 2014–2016.' },
  { year: '2016–2017', title: 'Pierwsza trigeneracja SES', icon: 'trigeneration', desc: 'Prąd, ciepło i chłód z jednego systemu dla Szpitala im. Biegańskiego w Łodzi.', project: 9 },
  { year: '2017–2018', title: 'Biogaz i pierwsza geotermia', icon: 'biogas', desc: 'SESBio w Tarnowie i Lubartowie. Pierwsze projekty dla Geotermii Podhalańskiej.' },
  { year: '2018–2024', title: 'Rozwój polskiej geotermii', icon: 'geothermal', desc: 'Inwestycje w całej Polsce i absorpcyjne pompy ciepła zasilane wodą geotermalną.' },
  { year: '2019–2023', title: 'B+R: SES i magazynowanie chłodu', icon: 'research', desc: 'Własne laboratorium. Badania magazynu chłodu opartego na przemianach fazowych wody.' },
  { year: '2022–2023', title: 'Hybrydowe OZE i akumulacja ciepła', icon: 'biomass', desc: 'Hybrydowa ciepłownia w Sieradzu. Kogeneracja z buforami ciepła dla IMEX Poland.' },
  { year: '> 2025', title: 'Największy akumulator ciepła w Europie', icon: 'storage', desc: 'Akumulator 61 000 m³ z infrastrukturą w EC Żerań w Warszawie dla ORLEN TERMIKA.', project: 10 },
]
