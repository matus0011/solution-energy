import { trustedClients } from '@/lib/company'
import LogoWall from '@/components/LogoWall'

// Sekcja "Oni nam zaufali" — najmocniejszy uniwersalny sygnał wiarygodności,
// więc stoi na kilku podstronach. `description` jest nadpisywalny, żeby na
// każdej z nich zdanie pasowało do kontekstu (realizacje, kontakt, firma),
// zamiast powtarzać wszędzie ten sam tekst.
interface TrustedClientsProps {
  title?: string
  description?: string
}

export default function TrustedClients({
  title = 'Oni nam zaufali',
  description = 'Wysoką wiarygodność spółki oraz profesjonalizm wykonywanych usług potwierdza liczne grono zadowolonych klientów.',
}: TrustedClientsProps) {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">{title}</h2>
        <p className="max-w-3xl text-[17px] leading-relaxed text-[#777777]">{description}</p>
      </div>
      <LogoWall logos={trustedClients} />
    </div>
  )
}
