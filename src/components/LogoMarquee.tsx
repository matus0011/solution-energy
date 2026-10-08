export type LogoSize = 'md' | 'lg' | 'xl'

interface LogoEntry {
  name: string
  logo?: string
}

function LogoRow({
  logos,
  hidden = false,
  size = 'md',
}: {
  logos: LogoEntry[]
  hidden?: boolean
  size?: LogoSize
}) {
  const containerClasses = {
    md: 'h-16 w-[140px]',
    lg: 'h-20 w-[210px] sm:h-24 sm:w-[260px]',
    xl: 'h-20 w-[200px] sm:h-24 sm:w-[240px]',
  }[size]

  const imgClasses = {
    md: 'max-h-10 w-auto max-w-full object-contain',
    lg: 'max-h-14 sm:max-h-18 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105',
    xl: 'max-h-14 sm:max-h-16 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105',
  }[size]

  const gapClasses = {
    md: 'gap-12 pr-12 sm:gap-16 sm:pr-16',
    lg: 'gap-14 pr-14 sm:gap-20 sm:pr-20',
    xl: 'gap-8 pr-8 sm:gap-10 sm:pr-10',
  }[size]

  return (
    <div className={`flex shrink-0 items-center ${gapClasses}`} aria-hidden={hidden}>
      {logos.map(({ name, logo }) => (
        <div key={name} className={`flex shrink-0 items-center justify-center ${containerClasses}`}>
          {logo ? (
            <img src={logo} alt={hidden ? '' : name} className={imgClasses} />
          ) : (
            <span className="text-center text-[13px] font-bold uppercase tracking-wide text-[#777777]">{name}</span>
          )}
        </div>
      ))}
    </div>
  )
}

// Dwie identyczne listy, żeby pętla nie miała szwu. Druga jest ukryta
// przy „ogranicz animacje”.
export default function LogoMarquee({
  logos,
  size = 'md',
}: {
  logos: LogoEntry[]
  size?: LogoSize
}) {
  return (
    <div className="relative overflow-hidden py-2">
      <div className="logo-marquee flex w-max items-center">
        <LogoRow logos={logos} size={size} />
        <LogoRow logos={logos} size={size} hidden />
      </div>
    </div>
  )
}
