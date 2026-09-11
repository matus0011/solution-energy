interface LogoEntry {
  name: string
  logo?: string
}

// Ściana logotypów partnerów/klientów. Pozycje z podpiętym plikiem (`logo`)
// pokazują właściwy obrazek, reszta — stylizowany wordmark tekstowy, dopóki
// nie podmienimy ich na docelowe pliki logo.
// Układ to wyśrodkowany flex-wrap, a nie siatka o stałej liczbie kolumn:
// logotypów jest mało i będzie ich przybywać nierówno, więc przy siatce
// ostatni rząd zostawiałby puste komórki przy krawędzi.
export default function LogoWall({ logos }: { logos: LogoEntry[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-4">
      {logos.map(({ name, logo }, index) => (
        <div
          key={`${name}-${index}`}
          className="group flex h-14 w-[calc(33.333%-1rem)] items-center justify-center px-2 sm:h-20 sm:w-[150px] sm:px-4"
        >
          {logo ? (
            <img
              src={logo}
              alt={name}
              title={name}
              className="max-h-6 w-auto max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 sm:max-h-10"
            />
          ) : (
            <span className="text-center text-[13px] font-bold uppercase leading-tight tracking-wide text-[#777777] transition-colors duration-300 group-hover:text-[#26282C]">
              {name}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
