import type { TimelineIconName } from './timeline'

type FinancialRow = { year: string; revenue: string; profit: string }
export type CompanyMilestone = {
  year: string
  title: string
  icon: TimelineIconName
  text: string
  financials?: FinancialRow[]
  note?: string
}

// Treść i wyniki przekazane przez klienta w wytycznych do zakładki O firmie.
export const companyHistory: CompanyMilestone[] = [
  {
    year: '15 grudnia 2005', title: 'Powstanie i rejestracja spółki', icon: 'blueprint',
    text: 'Oficjalny wpis Energy Solutions Sp. z o.o. do Krajowego Rejestru Sądowego zapoczątkował działalność firmy na rynku usług elektroinstalacyjnych i inżynieryjnych.',
  },
  {
    year: '2006–2016', title: 'Rozwój kompetencji i pozycji rynkowej', icon: 'cogeneration',
    text: 'Systematycznie poszerzamy portfolio w obszarze instalacji elektrycznych, automatyki przemysłowej i obsługi inwestycji. Zespół zdobywa doświadczenie przy złożonych projektach, także współfinansowanych ze środków unijnych.',
  },
  {
    year: '2017–2019', title: 'Dynamiczny wzrost skali działalności', icon: 'trigeneration',
    text: 'Wyraźny wzrost przychodów i zysku netto umacnia pozycję spółki jako partnera dla przemysłu i energetyki.',
    financials: [
      { year: '2017', revenue: '9,85 mln zł', profit: '425,8 tys. zł' },
      { year: '2018', revenue: '19,94 mln zł', profit: '—' },
      { year: '2019', revenue: '23,41 mln zł', profit: '> 1,08 mln zł' },
    ],
  },
  {
    year: '2020–2021', title: 'Stabilność w okresie pandemii', icon: 'research',
    text: 'Utrzymujemy stabilność operacyjną i zatrudnienie mimo wyzwań gospodarczych. Rozwijamy kompetencje w programowaniu PLC i nowoczesnej automatyce.',
    financials: [
      { year: '2020', revenue: '14,88 mln zł', profit: '870 tys. zł' },
      { year: '2021', revenue: '17,89 mln zł', profit: '> 1,33 mln zł' },
    ],
  },
  {
    year: '2022', title: 'Skokowy wzrost przychodów i zysków', icon: 'biomass',
    text: 'Pozyskanie i pomyślna realizacja dużych kontraktów przemysłowych przynoszą przełomowy wzrost wyników.',
    financials: [{ year: '2022', revenue: '36,59 mln zł', profit: '3,52 mln zł' }],
    note: 'EBITDA: ponad 5,32 mln zł.',
  },
  {
    year: '2023', title: 'Rekordowe wyniki finansowe', icon: 'storage',
    text: 'Najwyższe dotychczas obroty w historii spółki. Zatrudnienie stabilizuje się na poziomie około 39 wykwalifikowanych pracowników.',
    financials: [{ year: '2023', revenue: '102,38 mln zł', profit: '5,66 mln zł' }],
    note: 'EBITDA: blisko 6,95 mln zł.',
  },
  {
    year: '2024', title: 'Wysoka pozycja i stabilizacja', icon: 'geothermal',
    text: 'Po rekordowym roku 2023 utrzymujemy wysoki potencjał wykonawczy i stabilną pozycję na rynku.',
    financials: [{ year: '2024', revenue: '56,21 mln zł', profit: '1,30 mln zł' }],
  },
  {
    year: '2025–2026', title: 'Bieżąca działalność i nowe inicjatywy', icon: 'drilling',
    text: 'Kontynuujemy zaawansowane projekty inżynieryjne i energetyczne. Uczestniczymy także w rozwoju infrastruktury szkoleniowo-technicznej, m.in. wspierającej branżowe centra umiejętności.',
  },
]
