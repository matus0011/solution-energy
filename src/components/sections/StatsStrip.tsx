import { useEffect, useState } from 'react'
import { homeStats } from '@/lib/company'
import { useInView } from '@/lib/useInView'

function formatStat(value: number, suffix: string) {
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
  return `${formatted}${suffix}`
}

function Count({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
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

  return <>{formatStat(current, suffix)}</>
}

export default function StatsStrip() {
  const { ref, shown } = useInView<HTMLElement>(0.4)

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#fbba00] px-6 py-14 sm:px-10 sm:py-20 lg:px-14"
    >
      <img
        src="/realizacje/konin-rurociag.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] opacity-[0.16] grayscale"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {homeStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`reveal flex flex-col gap-4 sm:gap-6 ${shown ? 'is-in' : ''}`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <span className="font-heading text-5xl sm:text-6xl font-extrabold leading-none text-white tracking-tight">
              <Count value={stat.value} suffix={stat.suffix} run={shown} />
            </span>
            <span className="max-w-xs text-[14px] sm:text-[15px] font-medium leading-snug text-[#26282C]/90">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
