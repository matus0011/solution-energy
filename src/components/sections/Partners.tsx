import { partners } from '@/lib/company'
import LogoWall from '@/components/LogoWall'

// Sekcja "Partnerzy" — sygnał technologiczny, nie handlowy: mówi, na jakim
// sprzęcie firma pracuje. Dlatego stoi tam, gdzie mowa o technologiach
// i zakresie kompetencji, a nie wszędzie obok logotypów klientów.
interface PartnersProps {
  title?: string
  description?: string
}

export default function Partners({
  title = 'Partnerzy',
  description = 'Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma jest w stanie sprostać nawet najbardziej wymagającym projektom.',
}: PartnersProps) {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">{title}</h2>
        <p className="max-w-3xl text-[17px] leading-relaxed text-[#777777]">{description}</p>
      </div>
      <LogoWall logos={partners} />
    </div>
  )
}
