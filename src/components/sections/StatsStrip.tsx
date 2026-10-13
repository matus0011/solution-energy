import { useEffect, useState } from 'react'
import { homeStats } from '@/lib/company'
import { useInView } from '@/lib/useInView'
import { useIsV2 } from '@/lib/homeVariant'

function Count({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
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
        <span className="ml-2 text-[0.5em] font-semibold tracking-normal text-white/85">{cleanSuffix}</span>
      ) : (
        <span className="ml-2.5 sm:ml-3 tracking-[0.07em] font-bold">{cleanSuffix}</span>
      )}
    </span>
  )
}

export default function StatsStrip() {
  const v2 = useIsV2()
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
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] opacity-[0.16] grayscale"
      />
      <div
        className={`mx-auto grid max-w-[1380px] 2xl:max-w-screen-2xl grid-cols-1 ${
          v2 ? 'gap-10 md:grid-cols-3 md:gap-8' : 'gap-8 sm:grid-cols-3 sm:gap-6'
        }`}
      >
        {homeStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`reveal flex flex-col ${v2 ? 'gap-3 sm:gap-4' : 'gap-4 sm:gap-6'} ${shown ? 'is-in' : ''}`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <span
              className={`font-heading leading-none text-white tabular-nums ${
                v2
                  ? 'whitespace-nowrap font-semibold text-[clamp(2.5rem,5.6vw,4rem)]'
                  : 'font-extrabold tracking-wide text-5xl sm:text-6xl'
              }`}
            >
              <Count value={stat.value} suffix={stat.suffix} run={shown} />
            </span>
            {v2 && (
              <span className="relative block h-[2px] w-full max-w-[200px] bg-white/30" aria-hidden="true">
                <span
                  className="absolute inset-y-0 left-0 bg-white transition-[width] duration-[1200ms] ease-out motion-reduce:transition-none"
                  style={{ width: shown ? '100%' : '0%', transitionDelay: `${index * 140}ms` }}
                />
              </span>
            )}
            <span
              className={`font-medium ${
                v2
                  ? 'max-w-[280px] text-[15px] leading-relaxed text-[#1F2124] sm:text-[16px]'
                  : 'max-w-xs leading-snug text-[#26282C]/90 text-[14px] sm:text-[15px]'
              }`}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
