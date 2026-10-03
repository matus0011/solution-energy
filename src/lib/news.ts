// Aktualności demo. Treść opiera się na realizacjach z portfolio — bez
// wymyślonych komunikatów prasowych. Docelowo artykuły przyjdą z WordPressa.

export interface NewsItem {
  date: string
  title: string
  excerpt: string
  image: string
  href: string
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
