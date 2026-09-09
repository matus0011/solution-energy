const stockImages = [
  'https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg',
  'https://pixabay.com/images/download/peterdargatz-windmill-50512_640.jpg',
]

export const projects = [
  {
    cat: 'Energetyka i kogeneracja',
    title: 'Modernizacja układu kogeneracyjnego — do uzupełnienia',
    desc: 'Krótki opis — do uzupełnienia.',
    date: '30 maja 2018',
  },
  {
    cat: 'Geotermia',
    title: 'Odwiert geotermalny — do uzupełnienia',
    desc: 'Krótki opis projektu geotermalnego, zakres prac, użyte technologie oraz lokalizacja inwestycji — do uzupełnienia rzeczywistą treścią.',
    date: '12 lipca 2019',
  },
  {
    cat: 'Instalacje elektryczne i AKPiA',
    title: 'Rozbudowa AKPiA w zakładzie — do uzupełnienia',
    desc: 'Krótki opis instalacji elektrycznej i systemu AKPiA — do uzupełnienia.',
    date: '4 marca 2020',
  },
  {
    cat: 'Ochrona środowiska',
    title: 'Wdrożenie — do uzupełnienia',
    desc: 'Opis zakresu prac związanych z ochroną środowiska dla tej realizacji, wraz z lokalizacją i harmonogramem — do uzupełnienia.',
    date: '21 września 2021',
  },
  {
    cat: 'Audyt energetyczny',
    title: 'Audyt energetyczny obiektu przemysłowego — do uzupełnienia',
    desc: 'Krótki opis audytu — do uzupełnienia.',
    date: '8 stycznia 2022',
  },
  {
    cat: 'Sieci ciepłownicze',
    title: 'Modernizacja sieci — do uzupełnienia',
    desc: 'Krótki opis zakresu modernizacji sieci ciepłowniczej, w tym etapy realizacji i zastosowane rozwiązania techniczne — do uzupełnienia.',
    date: '17 listopada 2023',
  },
].map((p, index) => ({
  ...p,
  image: stockImages[index % stockImages.length],
}))
