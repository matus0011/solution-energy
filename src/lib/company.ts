// Dane firmowe używane na stronie "Firma". Fakty, obszary działalności, etapy
// współpracy oraz certyfikaty/uprawnienia (tytuły i opisy) pochodzą z materiału
// referencyjnego klienta — "Portfolio Energy Solutions Sp. z o.o." (sekcje
// "Sektory naszej działalności", "Kilka słów o nas" — formuła EPC — i "Nasze
// uprawnienia").

export const companyFacts = [
  { value: '2011', label: 'początek działalności' },
  { value: '8', label: 'obszarów kompetencji' },
  { value: '100%', label: 'kompleksowa obsługa inwestycji' },
]

export const competencies = [
  {
    num: '01',
    title: 'Obiekty geotermalne',
    desc: 'Dokumentacja projektowa i realizacja kompletnych obiektów budowlanych wraz z instalacjami mechanicznymi oraz — we współpracy z wiodącym partnerem — odwierty produkcyjne i zatłaczające.',
  },
  {
    num: '02',
    title: 'Ciepłownie i kotłownie wodne, parowe oraz biomasowe',
    desc: 'Projektowanie, wykonawstwo i serwis kotłowni parowych i wodnych zasilanych biomasą, gazem ziemnym, biogazem lub paliwami alternatywnymi.',
  },
  {
    num: '03',
    title: 'Maszynownie chłodu, instalacje chłodnicze',
    desc: 'Projektowanie, wykonawstwo i serwis instalacji odzysku ciepła oraz wytwarzania chłodu w technologii absorpcyjnej i sprężarkowej.',
  },
  {
    num: '04',
    title: 'Instalacje CHP i trigeneracji',
    desc: 'Kompleksowa usługa — projektowanie, dostawa, wykonawstwo i serwis instalacji kogeneracyjnych i trigeneracyjnych, a także modernizacja istniejących układów.',
  },
  {
    num: '05',
    title: 'Elektroenergetyka i AKPiA',
    desc: 'Projektowanie, budowa i modernizacja układów zasilania, stacji transformatorowych oraz rozdzielnic SN i nN, wraz z pełną obsługą instalacji elektroenergetycznych.',
  },
  {
    num: '06',
    title: 'Sterowanie',
    desc: 'Projektowanie i wykonawstwo systemów sterowania i kontroli inteligentnych budynków (BMS) — od doboru sterownika po opracowanie wizualizacji.',
  },
  {
    num: '07',
    title: 'Instalacje HVAC',
    desc: 'Kompleksowa obsługa instalacji grzewczych, parowych, wentylacyjnych i klimatyzacyjnych — od projektu, przez wykonawstwo, po serwis.',
  },
  {
    num: '08',
    title: 'Mechanizacja procesów',
    desc: 'Relokacja i montaż linii technologicznych oraz maszyn, a także dostawa i montaż armatury przemysłowej, pneumatyki i hydrauliki siłowej.',
  },
]

// Etapy formuły EPC (Engineering, Procurement, Construction), w której Energy
// Solutions realizuje inwestycje — skrócone z 10 etapów wymienionych
// w dokumencie źródłowym do 6 logicznych grup.
export const processSteps = [
  {
    num: '01',
    title: 'Analiza i doradztwo',
    desc: 'Analiza wstępna oraz doradztwo na etapie podejmowania decyzji inwestycyjnej i w zakresie technicznym.',
  },
  {
    num: '02',
    title: 'Decyzje administracyjne',
    desc: 'Wsparcie Inwestora w procesie uzyskiwania decyzji administracyjnych oraz wykonanie raportu środowiskowego z decyzją środowiskową.',
  },
  {
    num: '03',
    title: 'Projektowanie',
    desc: 'Projektowanie instalacji oraz wykonanie projektu budowlanego wraz z uzyskaniem pozwolenia na budowę.',
  },
  {
    num: '04',
    title: 'Realizacja pod klucz',
    desc: 'Wykonanie inwestycji pod klucz — od prac budowlanych po montaż instalacji.',
  },
  {
    num: '05',
    title: 'Uruchomienie',
    desc: 'Rozruch technologiczny i przekazanie instalacji do eksploatacji.',
  },
  {
    num: '06',
    title: 'Obsługa i serwis',
    desc: 'Bieżąca obsługa oraz serwisowanie gwarancyjne i pogwarancyjne zrealizowanej inwestycji.',
  },
]

// Certyfikaty posiadane przez spółkę. `logo` — oficjalne oznaczenie danej
// normy/dyrektywy (public/logos/certifications), tam gdzie ono istnieje;
// WPQR nie ma jednego powszechnego znaku, więc zostaje przy ikonie.
export const certifications = [
  {
    code: 'ISO 9001:2015',
    title: 'Zintegrowany System Zarządzania',
    desc: 'W zakresie projektowania, serwisu i generalnego wykonawstwa obiektów oraz instalacji w branży sanitarnej, technologicznej, elektrycznej i sterowania.',
    logo: '/logos/certifications/iso.svg',
  },
  {
    code: 'ISO 45001:2018',
    title: 'System Zarządzania BHP',
    desc: 'System Zarządzania Bezpieczeństwem i Higieną Pracy w organizacji — w tym samym zakresie branżowym.',
    logo: '/logos/certifications/iso.svg',
  },
  {
    code: 'ISO 14001:2015',
    title: 'System Zarządzania Środowiskowego',
    desc: 'Zarządzanie środowiskowe w organizacji — w tym samym zakresie branżowym.',
    logo: '/logos/certifications/iso.svg',
  },
  {
    code: 'PED 2014/68/UE',
    title: 'Zgodność z dyrektywą ciśnieniową',
    desc: 'Moduł A2 — w zakresie wytwarzania urządzeń ciśnieniowych.',
    logo: '/logos/certifications/ce-marking.svg',
  },
  {
    code: 'WPQR',
    title: 'Zatwierdzone technologie spawania',
    desc: 'Certyfikowane procedury kwalifikowania technologii spawania.',
  },
]

// Logotypy partnerów i klientów. Na razie tylko kilka realnych plików
// (public/logos/partners|clients). Pokazujemy wyłącznie realne pozycje — bez
// powielania ich w siatce. Powtórzone logo tej samej marki obok siebie jest
// natychmiast widoczne i podważa wiarygodność całej sekcji, a te listy stoją
// teraz na kilku podstronach naraz.
interface LogoEntry {
  name: string
  logo: string
}

export const partners: LogoEntry[] = [
  { name: 'Legrand', logo: '/logos/partners/legrand.svg' },
  { name: 'Schneider Electric', logo: '/logos/partners/schneider-electric.svg' },
  { name: 'Emerson', logo: '/logos/partners/emerson.png' },
  { name: 'Tedom', logo: '/logos/partners/tedom.png' },
  { name: 'Siemens', logo: '/logos/partners/siemens.svg' },
  { name: 'KSB', logo: '/logos/partners/ksb.png' },
  { name: 'ABB', logo: '/logos/partners/abb.svg' },
  { name: 'Alfa Laval', logo: '/logos/partners/alfa-laval.svg' },
]

export const trustedClients: LogoEntry[] = [
  { name: 'GE', logo: '/logos/clients/ge.svg' },
  { name: 'AGH', logo: '/logos/clients/agh.svg' },
  { name: 'Valeo', logo: '/logos/clients/valeo.svg' },
  { name: 'Kraków Airport', logo: '/logos/clients/krakow-airport.svg' },
  { name: 'Coca-Cola HBC', logo: '/logos/clients/coca-cola-hbc.svg' },
]

// Kwalifikacje posiadane przez pracowników spółki.
export const staffQualifications = [
  'Uprawnienia budowlane do projektowania i kierowania robotami budowlanymi bez ograniczeń — w specjalności konstrukcyjno-budowlanej oraz instalacyjnej (sieci, instalacje i urządzenia elektryczne, elektroenergetyczne, cieplne, wentylacyjne, gazowe, wodociągowe i kanalizacyjne).',
  'Uprawnienia do zatrudnienia na szczeblu osoby niższego dozoru ruchu w specjalności elektrycznej, teletechnicznej i automatyki w zakładach górniczych wydobywających ropę naftową i gaz ziemny.',
  'Uprawnienia energetyczne na stanowiskach dozoru i eksploatacji dla wszystkich grup — elektrycznej, cieplnej i gazowej.',
  'Uprawnienia UDT w zakresie F-gazów oraz napełniania zbiorników przenośnych (naczyń ciśnieniowych) o pojemności powyżej 350 cm³ gazami skroplonymi.',
]
