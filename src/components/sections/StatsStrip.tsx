import { useEffect, useRef, useState } from 'react'
import { homeStats } from '@/lib/company'
import { useInView } from '@/lib/useInView'
import { useIsV2 } from '@/lib/homeVariant'

const finalStats = [
  { value: 1200, suffix: ' km', label: 'Ułożonych kabli i tras kablowych SN, nN oraz AKPiA', description: 'Kompleksowe instalacje elektroenergetyczne, linie przesyłowe, systemy sterowania BMS i okablowanie AKPiA obiektów przemysłowych.' },
  { value: 200, suffix: '', label: 'Sprefabrykowanych rozdzielnic nN, SN i szaf sterowniczych PLC', description: 'Rozdzielnice główne niskiego i średniego napięcia, szafy sterownicze automatyki procesowej oraz układy zasilania gwarantowanego.' },
  { value: 60000, suffix: ' m', label: 'Zmontowanych i zespawanych rurociągów technologicznych', description: 'Magistrale geotermalne ze stali kwasoodpornej, instalacje parowe wysokich parametrów, sieci biogazowe i preizolowane.' },
  { value: 100, suffix: '', label: 'Zainstalowanych i uruchomionych jednostek wytwórczych', description: 'Montaż, rozruch technologiczny i przekazanie jednostek do eksploatacji.' },
]

function Count({ value, suffix, run, dark = false }: { value: number; suffix: string; run: boolean; dark?: boolean }) {
  const v2 = useIsV2()
  const [current, setCurrent] = useState(run ? value : 0)

  useEffect(() => {
    if (!run) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(value)
      return
    }

    const start = performance.now()
    const duration = 1200
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, value])

  const formatted = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
  const cleanSuffix = suffix.trim()

  return (
    <span className={`inline-flex items-baseline ${v2 ? 'tracking-[-0.03em]' : 'tracking-[0.04em]'}`}>
      <span>{formatted}</span>
      {v2 ? (
        <span className={`ml-2 text-[0.5em] font-semibold tracking-normal ${dark ? 'text-[#26282C]/85' : 'text-white/85'}`}>{cleanSuffix}</span>
      ) : (
        <span className="ml-2.5 sm:ml-3 tracking-[0.07em] font-bold">{cleanSuffix}</span>
      )}
    </span>
  )
}

export default function StatsStrip({ final = false }: { final?: boolean }) {
  const v2 = useIsV2()
  const slider = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const { ref, shown } = useInView<HTMLElement>(0.4)

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden bg-[var(--brand-accent)] px-6 sm:px-10 lg:px-14 ${
        v2 ? 'py-12 sm:py-16 lg:py-20' : 'py-14 sm:py-20'
      }`}
    >
      <img
        src="/realizacje/konin-rurociag.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] grayscale ${final ? 'opacity-[0.07]' : 'opacity-[0.16]'}`}
      />
      <div
        ref={slider}
        role={final ? 'region' : undefined}
        aria-label={final ? 'Statystyki realizacji' : undefined}
        tabIndex={final ? 0 : undefined}
        onScroll={final ? (event) => {
          const track = event.currentTarget
          const cards = Array.from(track.children) as HTMLElement[]
          const first = cards[0]?.offsetLeft ?? 0
          let closest = 0
          cards.forEach((card, index) => {
            if (Math.abs(card.offsetLeft - first - track.scrollLeft) < Math.abs(cards[closest].offsetLeft - first - track.scrollLeft)) closest = index
          })
          setActiveSlide(closest)
        } : undefined}
        className={`mx-auto max-w-[1380px] 2xl:max-w-screen-2xl ${
          final ? '-mr-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mr-auto sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:overflow-visible sm:p-0 xl:grid-cols-4' : v2 ? 'grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8' : 'grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6'
        }`}
      >
        {(final ? finalStats : homeStats).map((stat, index) => (
          <div
            key={stat.label}
            className={`reveal flex flex-col ${final ? 'w-[85%] shrink-0 snap-start last:mr-[15vw] sm:w-auto sm:last:mr-0' : ''} ${v2 ? 'gap-3 sm:gap-4' : 'gap-4 sm:gap-6'} ${shown ? 'is-in' : ''}`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <span
              className={`font-heading leading-none ${final ? 'text-[#26282C]' : 'text-white'} tabular-nums ${
                final
                  ? 'whitespace-nowrap font-semibold text-[clamp(2.5rem,5.2vw,3.75rem)]'
                  : v2
                  ? 'whitespace-nowrap font-semibold text-[clamp(2.5rem,5.6vw,4rem)]'
                  : 'font-extrabold tracking-wide text-5xl sm:text-6xl'
              }`}
            >
              <Count value={stat.value} suffix={stat.suffix} run={shown} dark={final} />
            </span>
            {v2 && (
              <span className={`relative block h-[2px] w-full max-w-[200px] ${final ? 'bg-[#26282C]/20' : 'bg-white/30'}`} aria-hidden="true">
                <span
                  className={`absolute inset-y-0 left-0 ${final ? 'bg-[#26282C]' : 'bg-white'} transition-[width] duration-[1200ms] ease-out motion-reduce:transition-none`}
                  style={{ width: shown ? '100%' : '0%', transitionDelay: `${index * 140}ms` }}
                />
              </span>
            )}
            <span
              className={`font-medium ${
                final
                  ? 'text-[16px] leading-relaxed text-[#26282C] font-semibold'
                  : v2
                  ? 'max-w-[280px] text-[15px] leading-relaxed text-[#1F2124] sm:text-[16px]'
                  : 'max-w-xs leading-snug text-[#26282C]/90 text-[14px] sm:text-[15px]'
              }`}
            >
              {stat.label}
            </span>
            {final && 'description' in stat && typeof stat.description === 'string' && stat.description && (
              <p className="text-[14px] leading-relaxed text-[#3f4145]">{stat.description}</p>
            )}
          </div>
        ))}
      </div>
      {final && (
        <div className="mt-6 flex justify-center gap-1 sm:hidden" aria-label="Wybierz statystykę">
          {finalStats.map((stat, index) => (
            <button
              key={stat.label}
              type="button"
              aria-label={`Statystyka ${index + 1}: ${stat.label}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              onClick={() => {
                const track = slider.current
                const card = track?.children[index] as HTMLElement | undefined
                const first = track?.children[0] as HTMLElement | undefined
                if (track && card && first) track.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
              }}
              className="group flex size-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26282C]"
            >
              <span aria-hidden="true" className={`h-[2px] w-7 transition-colors motion-reduce:transition-none ${activeSlide === index ? 'bg-[#26282C]' : 'bg-[#26282C]/25 group-hover:bg-[#26282C]/60'}`} />
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
