// Realizacje — dane, opisy zakresu prac i zdjęcia pochodzą z materiału
// referencyjnego klienta ("Portfolio Energy Solutions Sp. z o.o.", sekcja
// "Referencje"). To wyselekcjonowany zestaw ~10 z ~50 pozycji z dokumentu —
// reprezentatywny przekrój wszystkich czterech kategorii referencji klienta.
// Zdjęcia (public/realizacje/) to prawdziwe fotografie z budów dołączone do
// tego samego dokumentu. `gallery` to dodatkowe zdjęcia z tego samego zbioru,
// dobrane tematycznie do danej realizacji (nie wszystkie mają 100% pewne
// dopasowanie 1:1 do konkretnej budowy — część to reprezentatywne zdjęcia
// z tej samej kategorii technologii).

export const projects = [
  {
    cat: 'Ciepłownie geotermalne',
    title: 'Budowa Ciepłowni Geotermalnej w Koninie',
    desc: 'Zadanie I — budowa ciepłowni geotermalnej wraz z infrastrukturą. Zadanie II — wykonanie otworu geotermalnego Konin GT-3. Konsorcjum: lider UOS Drilling S.A., partner Energy Solutions.',
    date: '2021–2025',
    client: 'Miejskie Przedsiębiorstwo Energetyki Cieplnej — KONIN Sp. z o.o.',
    image: '/realizacje/konin-geotermia.jpg',
    gallery: ['/realizacje/konin-geotermia.jpg', '/realizacje/konin-wiertnica.jpg', '/realizacje/konin-rurociag.jpg'],
  },
  {
    cat: 'Ciepłownie geotermalne',
    title: 'Ciepłownia geotermalno-biomasowa w Sieradzu',
    desc: 'Budowa ciepłowni geotermalno-biomasowej wraz z otworem zatłaczającym GT-2 oraz modułu kogeneracyjnego 0,9 MWe / 1,1 MWt — w formule „zaprojektuj i wybuduj”. Konsorcjum: lider Inżynieria Rzeszów S.A., partner Energy Solutions.',
    date: '2022–2023',
    client: 'Przedsiębiorstwo Energetyki Cieplnej Sp. z o.o., Sieradz',
    image: '/realizacje/sieradz-geotermia.jpg',
    gallery: [
      '/realizacje/sieradz-geotermia.jpg',
      '/realizacje/sieradz-kontener-chp.jpg',
      '/realizacje/sieradz-kominy.jpg',
    ],
  },
  {
    cat: 'Ciepłownie geotermalne',
    title: 'Budowa Ciepłowni Geotermalnej w Toruniu',
    desc: 'Wykorzystanie istniejących otworów TG-1 i TG-2, wraz z dostawą kotłów LOOS Unimat oraz dwóch wysokosprawnych absorpcyjnych pomp ciepła Thermax. Konsorcjum: lider Inżynieria Rzeszów S.A., partner Energy Solutions.',
    date: '2018–2020',
    client: 'Geotermia Toruń Sp. z o.o.',
    image: '/realizacje/torun-geotermia.jpg',
    gallery: ['/realizacje/torun-geotermia.jpg', '/realizacje/torun-pompa.jpg', '/realizacje/torun-armatura.jpg'],
  },
  {
    cat: 'Obiekty energetyczne',
    title: 'Kotłownia gazowo-olejowa w EC Pruszków',
    desc: 'Budowa kotłowni gazowo-olejowej wraz z instalacjami i gospodarkami pomocniczymi oraz powiązaniami do infrastruktury zakładu. Konsorcjum: lider Instal Warszawa S.A., partner Energy Solutions.',
    date: '2021–2024',
    client: 'PGNiG Termika S.A.',
    image: '/realizacje/pruszkow-kotlownia.jpg',
    gallery: [
      '/realizacje/pruszkow-kotlownia.jpg',
      '/realizacje/pruszkow-hala-kotlowni.jpg',
      '/realizacje/pruszkow-rurociagi.jpg',
    ],
  },
  {
    cat: 'Obiekty energetyczne',
    title: 'Silnik gazowy w układzie kogeneracyjnym 1,004 MW',
    desc: 'Budowa silnika gazowego w układzie kogeneracyjnym o mocy 1,004 MW. Konsorcjum: lider Energy Solutions Sp. z o.o., partner Ferox Energy System Sp. z o.o.',
    date: 'W realizacji',
    client: 'MPEC Sp. z o.o., Brzesko',
    image: '/realizacje/brzesko-kogeneracja.jpg',
    gallery: [
      '/realizacje/brzesko-kogeneracja.jpg',
      '/realizacje/brzesko-sterownica.jpg',
      '/realizacje/brzesko-silnik-gazowy.jpg',
    ],
  },
  {
    cat: 'Ochrona środowiska i gospodarka wodno-kanalizacyjna',
    title: 'Agregaty kogeneracyjne na biogaz — Oczyszczalnia Ścieków w Dzierżoniowie',
    desc: 'Montaż agregatów kogeneracyjnych zasilanych biogazem na terenie miejskiej oczyszczalni ścieków.',
    date: '2021–2023',
    client: 'Wodociągi i Kanalizacja Sp. z o.o., Dzierżoniów',
    image: '/realizacje/dzierzoniow-kogeneracja.jpg',
    gallery: [
      '/realizacje/dzierzoniow-kogeneracja.jpg',
      '/realizacje/dzierzoniow-agregat.jpg',
      '/realizacje/dzierzoniow-budynek.jpg',
    ],
  },
  {
    cat: 'Ochrona środowiska i gospodarka wodno-kanalizacyjna',
    title: 'Rozbudowa i przebudowa Oczyszczalni Ścieków w Lubartowie',
    desc: 'Prace w branży elektrycznej, AKPiA i sterowania, dostawa i rozruch kotłowni gazowej 2×250 kW wraz z agregatem kogeneracyjnym 190 kW w obudowie wyciszonej SESBio własnej produkcji Energy Solutions, zasilanym biogazem.',
    date: '2017–2018',
    client: 'Inżynieria Rzeszów S.A. (dla Oczyszczalni Ścieków w Lubartowie)',
    image: '/realizacje/lubartow-sesbio.jpg',
    gallery: [
      '/realizacje/lubartow-sesbio.jpg',
      '/realizacje/lubartow-kontener-chp.jpg',
      '/realizacje/lubartow-armatura.jpg',
    ],
  },
  {
    cat: 'Obiekty użyteczności publicznej',
    title: 'Centrum Zrównoważonego Rozwoju i Poszanowania Energii „Miękinia”',
    desc: 'Budowa Centrum Zrównoważonego Rozwoju i Poszanowania Energii „Miękinia” Akademii Górniczo-Hutniczej im. St. Staszica w Krakowie, zlokalizowanego w Gminie Krzeszowice.',
    date: '2020–2022',
    client: 'Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie',
    image: '/realizacje/miekinia-agh.jpg',
    gallery: ['/realizacje/miekinia-agh.jpg', '/realizacje/miekinia-panele.jpg', '/realizacje/miekinia-budynek.jpg'],
  },
  {
    cat: 'Obiekty użyteczności publicznej',
    title: 'Instalacja klimatyzacji przy szybie Daniłowicz',
    desc: 'Zaprojektowanie i wykonanie robót budowlanych mających na celu remont instalacji klimatyzacji przy szybie Daniłowicz w Kopalni Soli „Wieliczka”.',
    date: 'W realizacji',
    client: 'Kopalnia Soli „Wieliczka”',
    image: '/realizacje/wieliczka-klimatyzacja.jpg',
    gallery: [
      '/realizacje/wieliczka-klimatyzacja.jpg',
      '/realizacje/wieliczka-rozdzielnia.jpg',
      '/realizacje/wieliczka-instalacja.jpg',
    ],
  },
  {
    cat: 'Obiekty użyteczności publicznej',
    title: 'Jednostka trigeneracyjna dla szpitala wojewódzkiego w Łodzi',
    desc: 'Budowa jednostki trigeneracyjnej wytwarzania energii cieplnej, elektrycznej oraz chłodu w skojarzeniu, wraz z niezbędną infrastrukturą elektroenergetyczną i sterowniczą.',
    date: '2016–2017',
    client: 'Wojewódzki Specjalistyczny Szpital im. dr Władysława Biegańskiego, Łódź',
    image: '/realizacje/lodz-szpital-hvac.jpg',
    gallery: [
      '/realizacje/lodz-szpital-hvac.jpg',
      '/realizacje/lodz-hala-technologiczna.jpg',
      '/realizacje/lodz-instalacja-wewnetrzna.jpg',
    ],
  },
]
