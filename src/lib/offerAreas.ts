export const offerAreas = [
  {
    slug: 'energetyka',
    title: 'Energetyka',
    image: '/realizacje/brzesko-mpec.jpg',
    imageAlt: 'Instalacja kogeneracyjna w MPEC Brzesko',
    lead: 'Ciepłownie, kotłownie, geotermia, kogeneracja i magazynowanie ciepła.',
    description: 'Realizujemy inwestycje energetyczne od dokumentacji projektowej po montaż i uruchomienie instalacji. Budujemy ciepłownie geotermalne, kotłownie oraz układy kogeneracyjne i trigeneracyjne. Integrujemy źródła energii z automatyką, infrastrukturą elektroenergetyczną i magazynowaniem ciepła. Nasze doświadczenie obejmuje m.in. ciepłownie w Koninie i Sieradzu oraz akumulator ciepła w EC Żerań.',
    gallery: [
      { src: '/realizacje/zeran-akumulator.jpg', alt: 'Akumulator ciepła w EC Żerań w Warszawie' },
      { src: '/realizacje/sieradz-geotermia.jpg', alt: 'Ciepłownia geotermalno-biomasowa w Sieradzu' },
      { src: '/realizacje/konin-geotermia.jpg', alt: 'Budowa ciepłowni geotermalnej w Koninie' },
    ],
  },
  {
    slug: 'przemysl',
    title: 'Przemysł',
    image: '/oferta/przemysl.webp',
    imageAlt: 'Kotły i instalacje technologiczne w hali przemysłowej',
    lead: 'Instalacje technologiczne, elektryczne i automatyka dla obiektów przemysłowych.',
    description: 'Wykonujemy instalacje technologiczne, elektryczne i układy automatyki dla przemysłu. Łączymy prace montażowe z dostawą urządzeń, okablowaniem AKPiA i rozruchem. Realizujemy również specjalistyczne instalacje klimatyzacji i chłodzenia w wymagających obiektach. Przykładem naszych prac jest instalacja przy szybie Daniłowicz w Kopalni Soli „Wieliczka”.',
    gallery: [
      { src: '/realizacje/wieliczka-instalacja.jpg', alt: 'Instalacja technologiczna przy szybie Daniłowicz w Wieliczce' },
      { src: '/realizacje/wieliczka-rozdzielnia.jpg', alt: 'Rozdzielnia dla instalacji w Kopalni Soli Wieliczka' },
      { src: '/realizacje/wieliczka-klimatyzacja.jpg', alt: 'Instalacja klimatyzacji w Kopalni Soli Wieliczka' },
    ],
  },
  {
    slug: 'ochrona-srodowiska-i-obiekty-publiczne',
    title: 'Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej',
    image: '/oferta/ochrona-srodowiska.webp',
    imageAlt: 'Oczyszczalnia ścieków na tle Tatr',
    lead: 'Oczyszczalnie, instalacje biogazowe i systemy energetyczne obiektów publicznych.',
    description: 'Realizujemy instalacje dla oczyszczalni ścieków oraz obiektów użyteczności publicznej. Wykonujemy węzły gospodarki biogazowo-osadowej i układy kogeneracyjne wykorzystujące biogaz. Dla obiektów publicznych wdrażamy rozwiązania zapewniające energię elektryczną, ciepło i chłód. Nasze realizacje obejmują m.in. oczyszczalnie w Zakopanem i Lubartowie oraz jednostkę trigeneracyjną dla szpitala w Łodzi.',
    gallery: [
      { src: '/realizacje/zakopane-legi.jpg', alt: 'Węzeł gospodarki biogazowo-osadowej w Zakopanem' },
      { src: '/realizacje/lubartow-sesbio.jpg', alt: 'Układ SESBio w oczyszczalni w Lubartowie' },
      { src: '/realizacje/lodz-szpital-hvac.jpg', alt: 'Instalacje jednostki trigeneracyjnej dla szpitala w Łodzi' },
    ],
  },
  {
    slug: 'produkcja',
    title: 'Produkcja',
    image: '/oferta/produkcja.webp',
    imageAlt: 'Spawacz Energy Solutions podczas spawania rury',
    lead: 'Prefabrykacja rozdzielnic, szaf sterowniczych i modułowych rozwiązań SES.',
    description: 'Prefabrykujemy rozdzielnice elektryczne i szafy sterownicze automatyki procesowej. Przygotowujemy rozwiązania kontenerowe oraz instalacje rurowe dopasowane do potrzeb inwestycji. Rozwijamy własne modułowe systemy SES, w tym wyciszone zabudowy agregatów SESBio. Łączymy prefabrykację z montażem i uruchomieniem urządzeń na obiekcie.',
    gallery: [
      { src: '/realizacje/lubartow-kontener-chp.jpg', alt: 'Kontenerowa zabudowa układu SESBio w Lubartowie' },
      { src: '/realizacje/lubartow-sesbio.jpg', alt: 'Agregat SESBio w wyciszonej zabudowie własnej produkcji' },
      { src: '/realizacje/lubartow-armatura.jpg', alt: 'Armatura instalacji układu w Lubartowie' },
    ],
  },
  {
    slug: 'serwis',
    title: 'Serwis',
    image: '/oferta/serwis.webp',
    imageAlt: 'Pracownicy Energy Solutions podczas serwisu pompy',
    lead: 'Obsługa gwarancyjna, pogwarancyjna i modernizacja instalacji.',
    description: 'Zapewniamy obsługę gwarancyjną i pogwarancyjną zrealizowanych instalacji. Wspieramy utrzymanie sprawności urządzeń oraz układów sterowania. Wykonujemy także remonty i modernizacje dostosowujące instalacje do potrzeb użytkowników. Doświadczenie w takich pracach obejmuje m.in. remont instalacji klimatyzacji przy szybie Daniłowicz w Wieliczce.',
    gallery: [
      { src: '/realizacje/wieliczka-klimatyzacja.jpg', alt: 'Remont instalacji klimatyzacji przy szybie Daniłowicz' },
      { src: '/realizacje/wieliczka-instalacja.jpg', alt: 'Instalacje technologiczne modernizowanego układu w Wieliczce' },
      { src: '/realizacje/wieliczka-rozdzielnia.jpg', alt: 'Układ elektryczny instalacji w Wieliczce' },
    ],
  },
] as const

export const offerAreaUrl = (slug: string) => `/oferta/${slug}?wersja=final`
