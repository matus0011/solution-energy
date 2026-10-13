import { useEffect, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ChargeBars } from '@/components/SectionTitle'
import { projects } from '@/lib/projects'
import { greenIndex, timeline, type TimelineStep } from '@/lib/timeline'
import { setDecarb, useScrollFrame } from '@/lib/timelineScroll'
import { useInView } from '@/lib/useInView'

const YELLOW = '#fbba00'
const GREEN = '#10b981'

// Linia odczytu na ekranie: wszystko nad nią jest już pod napięciem.
const READ_Y = 0.58

const DESKTOP = '(min-width: 1024px)'

type Geo = {
  still: boolean
  length: number
  nodes: number[]
  years: { top: number; height: number }[]
  steps: HTMLElement[]
  fills: HTMLElement[]
}

function Intro() {
  const { ref, shown } = useInView<HTMLDivElement>(0.4)

  return (
    <div
      ref={ref}
      className="relative z-[1] mb-16 grid gap-6 sm:mb-20 lg:mb-28 lg:grid-cols-2 lg:items-end lg:gap-x-[120px]"
    >
      <div className="flex flex-col items-start">
        <div className="mb-6">
          <ChargeBars on={shown} />
        </div>
        <h2 className="font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#1e2229] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px]">
          Inżynieria transformacji energetycznej.
        </h2>
      </div>
      <div className="flex flex-col items-start lg:pb-1.5">
        <p className="mb-8 max-w-[34rem] text-[17px] leading-[1.65] text-[#4a5058] sm:text-[18px]">
          Realizujemy strategiczne inwestycje pod klucz w formule EPC — od projektowania w standardzie 3D BIM, przez
          ciepłownie geotermalne i układy kogeneracyjne, po prefabrykację i rozruch obiektów.
        </p>
        <Link
          to="/firma/obszary-dzialalnosci"
          className="inline-flex items-center justify-center bg-[var(--brand-accent)] px-10 py-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#26282C] transition-colors duration-300 hover:bg-[var(--brand-accent-strong)]"
        >
          Zobacz więcej
        </Link>
      </div>
    </div>
  )
}

// Rok jest dwa razy: blady pod spodem i pełny na wierzchu, przycinany od dołu
// do wysokości linii odczytu.
function Year({ step, className = '' }: { step: TimelineStep; className?: string }) {
  return (
    <div
      data-year
      className={`tlv-year relative z-[1] mb-5 font-heading font-medium leading-none tracking-[-0.045em] lg:mb-0 ${className}`}
    >
      <span className="block">{step.year}</span>
      <span data-year-fill className="tlv-year-fill absolute inset-0" aria-hidden="true">
        {step.year}
      </span>
    </div>
  )
}

function Card({ step, side, className = '' }: { step: TimelineStep; side: 'left' | 'right'; className?: string }) {
  const category = step.project !== undefined ? projects[step.project]?.cat : undefined
  const body = (
    <>
      {step.image && (
        <div className="tlv-photo relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:min-h-[200px] sm:w-[42%] lg:aspect-[16/9] lg:min-h-0 lg:w-auto xl:aspect-auto xl:min-h-[236px] xl:w-[44%]">
          <img src={step.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:p-7">
        {category && <span className="text-[13px] font-medium text-[#7a7f86]">{category}</span>}
        <h3 className="font-heading text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#26282C] sm:text-[19px]">
          <span className="es-card-title">{step.title}</span>
        </h3>
        <p className="line-clamp-3 text-[15px] leading-relaxed text-[#55595f]">{step.desc}</p>
      </div>
    </>
  )

  const classes = `tlv-card group relative z-[1] flex flex-col bg-white sm:flex-row lg:flex-col ${
    side === 'right' ? 'xl:flex-row-reverse' : 'xl:flex-row'
  } ${className}`

  return step.project !== undefined ? (
    <Link
      to={`/realizacje/${step.project}`}
      className={`${classes} outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f4f1]`}
    >
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  )
}

// Układ v3: oś czasu jako drzewko z góry na dół. Pień przejmuje kreskę „Przewiń”
// z hero i biegnie środkiem; etapy odchodzą od niego na przemian w lewo i w prawo.
// Na telefonie pień stoi przy lewej krawędzi.
export default function EnergyTimelineVertical() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const trunkRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const geo = useRef<Geo>({ still: false, length: 0, nodes: [], years: [], steps: [], fills: [] })

  useEffect(() => () => setDecarb(false), [])

  useScrollFrame(
    () => {
      const section = sectionRef.current
      const wrap = wrapRef.current
      const list = listRef.current
      const trunk = trunkRef.current
      if (!section || !wrap || !list || !trunk) return false

      // Najpierw wszystkie odczyty, potem zapis — jeden przelicz układu.
      const wrapTop = wrap.getBoundingClientRect().top
      const top =
        (window.matchMedia(DESKTOP).matches ? section.getBoundingClientRect().top : list.getBoundingClientRect().top) -
        wrapTop
      const origin = wrapTop + top
      const nodes = [...list.querySelectorAll<HTMLElement>('[data-node]')].map((node) => {
        const rect = node.getBoundingClientRect()
        return rect.top + rect.height / 2 - origin
      })
      const years = [...list.querySelectorAll<HTMLElement>('[data-year]')].map((year) => {
        const rect = year.getBoundingClientRect()
        return { top: rect.top - origin, height: rect.height }
      })
      const length = nodes[nodes.length - 1]

      geo.current = {
        still: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        length,
        nodes,
        years,
        steps: [...list.querySelectorAll<HTMLElement>('[data-step]')],
        fills: [...list.querySelectorAll<HTMLElement>('[data-year-fill]')],
      }
      trunk.style.top = `${top}px`
      trunk.style.height = `${length}px`
      trunk.style.setProperty('--tl-switch', `${nodes[greenIndex]}px`)
      return true
    },
    () => {
      const { still, length, nodes, years, steps, fills } = geo.current
      const reach = window.innerHeight * READ_Y - trunkRef.current!.getBoundingClientRect().top
      // Przy „ogranicz animacje” wszystko stoi zapalone; motyw zmienia się nadal według pozycji.
      const level = still ? Infinity : reach
      const filled = Math.min(length, Math.max(0, level))

      fillRef.current!.style.clipPath = `inset(0 0 ${length - filled}px 0)`
      headRef.current!.style.transform = `translate3d(0, ${filled}px, 0)`
      dotRef.current!.classList.toggle('is-on', level > 0)

      steps.forEach((step, index) => step.classList.toggle('is-lit', nodes[index] <= level))
      fills.forEach((fill, index) => {
        const { top, height } = years[index]
        const shown = Math.min(height, Math.max(0, level - top))
        fill.style.clipPath = `inset(0 0 ${height - shown}px 0)`
      })
      setDecarb(reach >= nodes[greenIndex])
    },
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f4f1] px-6 py-20 [--tlv-ys:clamp(40px,11vw,56px)] sm:px-10 lg:px-14 lg:py-28 lg:[--tlv-ys:clamp(48px,6.2vw,96px)]"
      aria-label="Oś czasu"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e4e2dc_1.4px,transparent_1.5px)] bg-[length:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
        aria-hidden="true"
      />

      <div ref={wrapRef} className="relative mx-auto max-w-[1380px] 2xl:max-w-screen-2xl">
        <div ref={trunkRef} className="absolute left-[9px] w-0 lg:left-1/2" aria-hidden="true">
          <div className="absolute inset-y-0 -left-px w-[2px] bg-[#26282C]/[0.12]" />
          <div ref={fillRef} className="tl-fill-y absolute inset-y-0 -left-[2px] w-[4px]" />
          <div className="tlv-tail absolute -left-px top-full h-28 w-[2px]" />
          <div ref={headRef} className="absolute left-0 top-0 z-[2] will-change-transform">
            <span ref={dotRef} className="tl-head absolute left-0 top-0 h-[18px] w-[18px] rounded-full" />
          </div>
        </div>

        <Intro />

        <ol ref={listRef} className="relative flex flex-col gap-14 sm:gap-16 lg:gap-24">
          {timeline.map((step, index) => {
            const side = index % 2 === 0 ? 'right' : 'left'
            const anchor = 'absolute left-[9px] top-[calc(var(--tlv-ys)/2)] lg:left-1/2 lg:top-1/2'
            return (
              <li
                key={step.title}
                data-step
                data-side={side}
                className="tl-step tlv-step relative pl-10 sm:pl-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-[120px] lg:pl-0"
                style={{ '--tl-zone': index >= greenIndex ? GREEN : YELLOW } as CSSProperties}
              >
                {index === greenIndex && (
                  <span className={`tlv-ripple ${anchor} h-0 w-0`} aria-hidden="true">
                    <i className="[--r:150px]" />
                    <i className="[--r:340px]" />
                    <i className="[--r:620px]" />
                  </span>
                )}
                <span
                  className={`tlv-branch absolute top-1/2 hidden h-[2px] w-[51px] -translate-y-1/2 lg:block ${
                    side === 'right' ? 'left-[calc(50%+9px)] origin-left' : 'right-[calc(50%+9px)] origin-right'
                  }`}
                  aria-hidden="true"
                />
                <span
                  data-node
                  className={`tl-node ${anchor} z-[1] h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    index === greenIndex ? 'tlv-geo' : ''
                  }`}
                  aria-hidden="true"
                />
                <Year
                  step={step}
                  className={side === 'right' ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : 'lg:col-start-2 lg:row-start-1'}
                />
                <Card
                  step={step}
                  side={side}
                  className={side === 'right' ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
