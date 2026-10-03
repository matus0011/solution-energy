interface LogoEntry {
  name: string
  logo?: string
}

function LogoRow({ logos, hidden = false }: { logos: LogoEntry[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16" aria-hidden={hidden}>
      {logos.map(({ name, logo }) => (
        <div key={name} className="flex h-16 w-[140px] shrink-0 items-center justify-center">
          {logo ? (
            <img src={logo} alt={hidden ? '' : name} className="max-h-10 w-auto max-w-full object-contain" />
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
export default function LogoMarquee({ logos }: { logos: LogoEntry[] }) {
  return (
    <div className="relative overflow-hidden">
      <div className="logo-marquee flex w-max items-center">
        <LogoRow logos={logos} />
        <LogoRow logos={logos} hidden />
      </div>
    </div>
  )
}
