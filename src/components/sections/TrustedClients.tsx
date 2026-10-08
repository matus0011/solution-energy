import { trustedClients, type LogoEntry } from '@/lib/company'
import LogoWall from '@/components/LogoWall'
import LogoMarquee, { type LogoSize } from '@/components/LogoMarquee'

// Sekcja "Oni nam zaufali" — najmocniejszy uniwersalny sygnał wiarygodności,
// więc stoi na kilku podstronach. `description` jest nadpisywalny, żeby na
// każdej z nich zdanie pasowało do kontekstu (realizacje, kontakt, firma),
// zamiast powtarzać wszędzie ten sam tekst.
interface TrustedClientsProps {
  title?: string
  /** `false` — sam nagłówek, bez akapitu. */
  description?: string | false
  variant?: 'wall' | 'marquee'
  /** Nadpisanie listy — domyślnie klienci z `company.ts`. */
  logos?: LogoEntry[]
  size?: LogoSize
  descriptionClassName?: string
}

export default function TrustedClients({
  title = 'Oni nam zaufali',
  description = 'Wysoką wiarygodność spółki oraz profesjonalizm wykonywanych usług potwierdza liczne grono zadowolonych klientów.',
  variant = 'wall',
  logos = trustedClients,
  size = 'md',
  descriptionClassName = 'max-w-xl',
}: TrustedClientsProps) {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">{title}</h2>
        {description && (
          <p className={`text-[16px] sm:text-[17px] leading-relaxed text-[#55595f] ${descriptionClassName}`}>
            {description}
          </p>
        )}
      </div>
      {variant === 'marquee' ? <LogoMarquee logos={logos} size={size} /> : <LogoWall logos={logos} />}
    </div>
  )
}
