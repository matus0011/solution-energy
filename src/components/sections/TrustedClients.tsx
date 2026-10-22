import { trustedClients, type LogoEntry } from '@/lib/company'
import LogoWall from '@/components/LogoWall'
import LogoMarquee, { type LogoSize } from '@/components/LogoMarquee'
import SectionTitle from '@/components/SectionTitle'
import { useIsV2 } from '@/lib/homeVariant'

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
  marqueeDuration?: number
  size?: LogoSize
  descriptionClassName?: string
}

export default function TrustedClients({
  title = 'Oni nam zaufali',
  description = 'Wysoką wiarygodność spółki oraz profesjonalizm wykonywanych usług potwierdza liczne grono zadowolonych klientów.',
  variant = 'wall',
  logos = trustedClients,
  size = 'md',
  marqueeDuration,
  descriptionClassName = 'max-w-xl',
}: TrustedClientsProps) {
  const v2 = useIsV2()

  return (
    <div className={`flex flex-col ${v2 ? 'gap-10 sm:gap-14' : 'gap-8 sm:gap-10'}`}>
      <div className={`flex flex-col ${v2 ? 'gap-5' : 'gap-3'}`}>
        <SectionTitle className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">
          {title}
        </SectionTitle>
        {description && (
          <p className={`text-[16px] leading-relaxed text-[#55595f] ${v2 ? 'sm:text-[18px]' : 'sm:text-[17px]'} ${descriptionClassName}`}>
            {description}
          </p>
        )}
      </div>
      {variant === 'marquee' ? <LogoMarquee logos={logos} size={size} duration={marqueeDuration} /> : <LogoWall logos={logos} />}
    </div>
  )
}
