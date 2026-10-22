// Aktualności demo. Treść opiera się na realizacjach z portfolio — bez
// wymyślonych komunikatów prasowych. Docelowo artykuły przyjdą z WordPressa.

export interface NewsItem {
  date: string
  title: string
  excerpt: string
  image: string
  href: string
  imageClassName?: string
}

export const news: NewsItem[] = [
  {
    date: '2021–2025',
    title: 'Ciepłownia geotermalna w Koninie',
    excerpt:
      'Budowa ciepłowni geotermalnej wraz z infrastrukturą oraz otworem Konin GT-3. Energy Solutions w konsorcjum z UOS Drilling.',
    image: '/realizacje/konin-geotermia.jpg',
    href: '/realizacje/0',
  },
  {
    date: '2022–2023',
    title: 'Ciepłownia geotermalno-biomasowa w Sieradzu',
    excerpt:
      'Obiekt wraz z otworem zatłaczającym GT-2 i modułem kogeneracyjnym 0,9 MWe / 1,1 MWt, w formule „zaprojektuj i wybuduj”.',
    image: '/realizacje/sieradz-geotermia.jpg',
    href: '/realizacje/1',
  },
  {
    date: 'W realizacji',
    title: 'Układ kogeneracyjny 1,004 MW w Brzesku',
    excerpt:
      'Silnik gazowy w układzie kogeneracyjnym dla MPEC Brzesko. Energy Solutions prowadzi zadanie jako lider konsorcjum.',
    image: '/realizacje/brzesko-kogeneracja.jpg',
    href: '/realizacje/4',
  },
]

// Final: treść z aktywności LinkedIn; 100% napełnienia potwierdzone przez klienta.
export const finalNews: NewsItem[] = [
  {
    date: '',
    title: 'Akumulator ciepła w EC Żerań napełniony w 100%',
    excerpt: 'Akumulator ciepła w warszawskiej EC Żerań osiągnął pełne napełnienie. Zbiornik o pojemności 61 000 m³ będzie magazynować nadwyżki ciepła i wspierać stabilną pracę stołecznej sieci ciepłowniczej.',
    image: '/aktualnosci/zeran-akumulator.jpg',
    href: '/realizacje/10',
  },
  {
    date: '25.08.2026',
    title: 'Podpisanie umowy w Nowym Sączu',
    excerpt: 'Energy Solutions zrealizuje dla MPEC Nowy Sącz układ trzech pomp ciepła o mocy 200 kW każda. To drugi etap rozbudowy Elektrociepłowni Węgierska i kolejny krok w rozwoju miejskiego systemu ciepłowniczego.',
    image: '/aktualnosci/nowy-sacz-umowa.jpg',
    href: 'https://nowysacz.pl/aktualnosci/komunikaty-biura-prezydenta/rozbudowa-nowej-elektrocieplowni.html',
  },
  {
    date: '04.09.2026',
    title: 'Fritar — oddanie inwestycji i wizyta władz miasta',
    excerpt: 'Oddaliśmy do użytku kotłownię parową dla zakładu Fritar w Tarnowie, zrealizowaną we współpracy z LOOS Centrum. Ukończoną inwestycję odwiedzili przedstawiciele władz miasta oraz partnerzy projektu.',
    image: '/aktualnosci/fritar-oddanie.jpg',
    imageClassName: 'brightness-[2.5]',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7501690066432516097/',
  },
]
