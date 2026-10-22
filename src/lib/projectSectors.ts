import { projects } from './projects'
import { offerAreas } from './offerAreas'

export const projectSectors = offerAreas.map((area) => area.title)
export type ProjectSector = typeof offerAreas[number]['title']

// Przypisanie według udokumentowanego zakresu, a nie rodzaju inwestora.
// Lubartów obejmuje własną produkcję SESBio; Wieliczka — remont instalacji.
const assignments: ProjectSector[][] = [
  ['Energetyka'], ['Energetyka'], ['Energetyka'], ['Energetyka'], ['Energetyka'],
  ['Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej'], ['Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej', 'Produkcja'], ['Energetyka', 'Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej'],
  ['Przemysł', 'Serwis'], ['Energetyka', 'Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej'], ['Energetyka'],
  ['Obiekty Ochrony Środowiska i Obiekty Użyteczności Publicznej'], ['Energetyka'],
]

const displayOrder = [10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const categorizedProjects = displayOrder.map((id) => ({ id, ...projects[id], sectors: assignments[id] }))
