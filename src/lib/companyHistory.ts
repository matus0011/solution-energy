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
    text: 'Rosnąca skala działalności umacnia pozycję spółki jako partnera dla przemysłu i energetyki.',
  },
  {
    year: '2020–2021', title: 'Stabilność w okresie pandemii', icon: 'research',
    text: 'Utrzymujemy stabilność operacyjną i zatrudnienie mimo wyzwań gospodarczych. Rozwijamy kompetencje w programowaniu PLC i nowoczesnej automatyce.',
  },
  {
    year: '2022–2023', title: 'Dynamiczny wzrost obrotów', icon: 'biomass',
    text: 'Pozyskanie i pomyślna realizacja dużych kontraktów przemysłowych przekładają się na dynamiczny wzrost obrotów spółki. Zatrudnienie wykwalifikowanych pracowników stabilizuje się.',
  },
  {
    year: '2024', title: 'Wysoka pozycja i stabilizacja', icon: 'geothermal',
    text: 'Po rekordowym roku 2023 utrzymujemy wysoki potencjał wykonawczy i stabilną pozycję na rynku.',
  },
  {
    year: '2025–2026', title: 'Bieżąca działalność i nowe inicjatywy', icon: 'drilling',
    text: 'Kontynuujemy zaawansowane projekty inżynieryjne i energetyczne. Uczestniczymy także w rozwoju infrastruktury szkoleniowo-technicznej, m.in. wspierającej branżowe centra umiejętności.',
  },
]
