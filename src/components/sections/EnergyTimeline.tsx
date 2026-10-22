import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { greenIndex, timeline as originalTimeline, finalTimeline, type TimelineStep } from '@/lib/timeline'
import { setDecarb, useScrollFrame } from '@/lib/timelineScroll'
import TimelineIcon from '@/components/timelineIcons'
import { ChargeBars } from '@/components/SectionTitle'
import { useInView } from '@/lib/useInView'

const YELLOW = '#fbba00'
const GREEN = '#10b981'

// Głowica stoi w tym miejscu ekranu, a oś przesuwa się pod nią.
const HEAD_X = 0.42
const HEAD_Y = 0.62
const PHOTO_MIN = 48
const PHOTO_MAX = 170

const zoneStyle = (index: number, final = false) => ({ '--tl-zone': !final && index >= greenIndex ? GREEN : YELLOW }) as CSSProperties

function StepCard({ step, className = '', final = false }: { step: TimelineStep; className?: string; final?: boolean }) {
  const body = (
    <>
      {final && step.icon && <div className="tlv-band flex items-center px-5 py-3 [&_svg]:h-20 [&_svg]:w-auto"><TimelineIcon name={step.icon} /></div>}
      {!final && step.image && (
        <div className="tl-photo overflow-hidden">
          <img src={step.image} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}
      <div className={`flex flex-col gap-1.5 ${final ? 'px-5 pb-5 pt-2' : 'p-5'}`}>
        <span className={`tl-year font-heading ${final ? 'text-[30px]' : 'text-[26px]'} font-semibold leading-none tracking-[-0.01em]`}>
          {step.year}
        </span>
        <span className={`mt-1 font-heading ${final ? 'text-[16px]' : 'text-[17px]'} font-semibold leading-snug text-[#26282C]`}>{step.title}</span>
        <span className={final ? 'text-[14px] leading-[1.5] text-[#4a5058]' : 'line-clamp-3 text-[14.5px] leading-relaxed text-[#55595f]'}>{step.desc}</span>
      </div>
    </>
  )

  const classes = `tl-card group flex flex-col bg-white ${className}`
  return step.project !== undefined ? (
    <Link to={`/realizacje/${step.project}${final ? '?wersja=final' : ''}`} className={classes}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  )
}

function Intro({ className = '', final = false }: { className?: string; final?: boolean }) {
  const { ref, shown } = useInView<HTMLDivElement>(0.4)

  return (
    <div ref={ref} className={`flex flex-col items-start text-left ${className}`}>
      <div className="mb-6">
        <ChargeBars on={shown} />
      </div>
      <h2 className="mb-6 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#1e2229] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px]">
        Inżynieria transformacji energetycznej.
      </h2>
      <p className="mb-8 text-[17px] leading-[1.65] text-[#4a5058] sm:text-[18px]">
        {final ? 'Od usług elektroinstalacyjnych po strategiczne inwestycje energetyczne. Poznaj 10 etapów rozwoju Energy Solutions.' : 'Realizujemy strategiczne inwestycje pod klucz w formule EPC — od projektowania w standardzie 3D BIM, przez ciepłownie geotermalne i układy kogeneracyjne, po prefabrykację i rozruch obiektów.'}
      </p>
      <Link
        to={final ? '/oferta?wersja=final' : '/firma/obszary-dzialalnosci'}
        className="inline-flex items-center justify-center bg-[var(--brand-accent)] px-10 py-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#26282C] transition-colors duration-300 hover:bg-[var(--brand-accent-strong)]"
      >
        Zobacz więcej
      </Link>
    </div>
  )
}

function HorizontalTimeline({ final = false }: { final?: boolean }) {
  const timeline = final ? finalTimeline : originalTimeline
  const speed = final ? 2 : 1
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const axisRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const geo = useRef({ top: 0, headX: 0, maxShift: 0, axisLeft: 0, axisWidth: 0, nodes: [] as number[] })

  useScrollFrame(
    () => {
      const section = sectionRef.current
      const sticky = stickyRef.current
      const track = trackRef.current
      const axis = axisRef.current
      if (!section || !sticky || !track || !axis || section.offsetWidth === 0) return false

      // Zdjęcia rosną tylko do wysokości, przy której karty nad i pod osią mieszczą się
      // w ramce; na niskich ekranach, gdy zostałby z nich pasek, chowamy je.
      const room = Math.min(
        ...[...track.querySelectorAll<HTMLElement>('.tl-photo')].map((photo) => {
          const card = photo.parentElement!
          const free = Math.min(card.offsetTop, card.parentElement!.clientHeight - card.offsetTop - card.offsetHeight)
          return photo.offsetHeight + free
        }),
      )
      const photo = Math.min(PHOTO_MAX, Math.floor(room))
      section.style.setProperty('--tl-photo', `${photo >= PHOTO_MIN ? photo : 0}px`)

      const trackLeft = track.getBoundingClientRect().left
      const nodes = [...track.querySelectorAll<HTMLElement>('[data-node]')].map((node) => {
        const rect = node.getBoundingClientRect()
        return rect.left + rect.width / 2 - trackLeft
      })
      const axisRect = axis.getBoundingClientRect()
      const headX = sticky.clientWidth * HEAD_X
      const maxShift = Math.max(0, nodes[nodes.length - 1] - headX + 1)

      geo.current = {
        top: parseFloat(getComputedStyle(sticky).top) || 0,
        headX,
        maxShift,
        axisLeft: axisRect.left - trackLeft,
        axisWidth: axisRect.width,
        nodes,
      }
      section.style.height = `${sticky.offsetHeight + maxShift / speed}px`
      axis.style.setProperty('--tl-switch', final ? '99999px' : `${nodes[greenIndex] - (axisRect.left - trackLeft)}px`)
      return true
    },
    () => {
      const { top, headX, maxShift, axisLeft, axisWidth, nodes } = geo.current
      const section = sectionRef.current!
      const shift = Math.min(maxShift, Math.max(0, (top - section.getBoundingClientRect().top) * speed))
      const reach = headX + shift

      trackRef.current!.style.transform = `translate3d(${-shift}px, 0, 0)`
      const filled = Math.min(axisWidth, Math.max(0, reach - axisLeft))
      fillRef.current!.style.clipPath = `inset(0 ${axisWidth - filled}px 0 0)`
      headRef.current!.classList.toggle('is-on', filled > 0)

      const current = Math.max(0, nodes.reduce((last, node, index) => node <= reach ? index : last, 0))
      trackRef.current!.querySelectorAll<HTMLElement>('[data-step]').forEach((step, index) => {
        step.classList.toggle('is-lit', nodes[index] <= reach)
        if (final) step.classList.toggle('is-current', index === current)
      })
      if (counterRef.current) counterRef.current.textContent = String(current + 1).padStart(2, '0')
      setDecarb(!final && reach >= nodes[greenIndex])
    },
  )

  return (
    <section ref={sectionRef} className={`relative hidden bg-[#f5f4f1] lg:block motion-reduce:!hidden ${final ? 'tl-final-desktop' : ''}`} aria-label="Oś czasu">
      <div ref={stickyRef} className="sticky top-[88px] h-[calc(100vh-88px)] overflow-hidden">
        {!final && <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e4e2dc_1.4px,transparent_1.5px)] bg-[length:22px_22px] [mask-image:linear-gradient(to_bottom,transparent_30%,black_100%)]"
          aria-hidden="true"
        />}
        {final && <div className="absolute bottom-5 right-24 z-10 text-[13px] tabular-nums text-[#55595f] lg:right-28"><span ref={counterRef} className="font-semibold text-[#26282c]">01</span><span className="mx-2 text-[#8b8e93]">/</span>10</div>}

        <div
          ref={trackRef}
          className={`relative flex h-full w-max items-center will-change-transform ${final ? 'py-6' : 'py-[clamp(48px,7vh,112px)]'}`}
          style={{ paddingLeft: 'max(3.5rem, calc((100vw - 1380px) / 2))', paddingRight: '50vw' }}
        >
          <Intro final={final} className="w-[440px] shrink-0 pr-6 xl:w-[520px]" />

          <div className="relative flex h-full items-center pl-16">
            <div ref={axisRef} className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#26282C]/[0.12]" aria-hidden="true">
              <div ref={fillRef} className="tl-fill absolute inset-x-0 top-1/2 h-[4px] -translate-y-1/2" />
            </div>

            {timeline.map((step, index) => {
              const up = index % 2 === 0
              return (
                <div
                  key={step.title}
                  data-step
                  className={`tl-step relative h-full w-[300px] shrink-0 xl:w-[330px] ${index > 0 ? '-ml-[96px] xl:-ml-[110px]' : ''}`}
                  style={{ ...zoneStyle(index, final), '--tl-from': up ? '-16px' : '16px' } as CSSProperties}
                >
                  <span
                    data-node
                    className="tl-node absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    aria-hidden="true"
                  />
                  <span
                    className={`tl-stem absolute left-1/2 h-9 w-px -translate-x-1/2 ${up ? 'bottom-1/2 mb-[9px]' : 'top-1/2 mt-[9px]'}`}
                    aria-hidden="true"
                  />
                  <StepCard
                    step={step}
                    final={final}
                    className={`absolute inset-x-0 ${up ? 'bottom-1/2 mb-[45px]' : 'top-1/2 mt-[45px]'}`}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div
          ref={headRef}
          className="tl-head pointer-events-none absolute top-1/2 h-[18px] w-[18px] rounded-full"
          style={{ left: `${HEAD_X * 100}%` }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

function VerticalTimeline() {
  const timeline = originalTimeline
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const geo = useRef({ nodes: [] as number[], height: 0 })

  useScrollFrame(
    () => {
      const list = listRef.current
      if (!list || sectionRef.current?.offsetWidth === 0) return false
      const listTop = list.getBoundingClientRect().top
      const nodes = [...list.querySelectorAll<HTMLElement>('[data-node]')].map((node) => {
        const rect = node.getBoundingClientRect()
        return rect.top + rect.height / 2 - listTop
      })
      geo.current = { nodes, height: list.offsetHeight }
      list.style.setProperty('--tl-switch', `${nodes[greenIndex]}px`)
      return true
    },
    () => {
      const { nodes, height } = geo.current
      const list = listRef.current!
      const reach = window.innerHeight * HEAD_Y - list.getBoundingClientRect().top
      const filled = Math.min(height, Math.max(0, reach))
      fillRef.current!.style.clipPath = `inset(0 0 ${height - filled}px 0)`
      list.querySelectorAll<HTMLElement>('[data-step]').forEach((step, index) => {
        step.classList.toggle('is-lit', nodes[index] <= reach)
      })
      setDecarb(reach >= nodes[greenIndex])
    },
  )

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:hidden lg:py-28 motion-reduce:!block lg:px-14"
      aria-label="Oś czasu"
    >
      <div className="mx-auto flex max-w-[1380px] flex-col gap-14 2xl:max-w-screen-2xl">
        <Intro className="max-w-2xl" />

        <ol ref={listRef} className="relative flex max-w-2xl flex-col gap-10 pl-10 sm:pl-14">
          <div className="absolute bottom-0 left-[8px] top-0 w-[2px] bg-[#26282C]/[0.12]" aria-hidden="true" />
          <div ref={fillRef} className="tl-fill-y absolute bottom-0 left-[7px] top-0 w-[4px]" aria-hidden="true" />

          {timeline.map((step, index) => (
            <li
              key={step.title}
              data-step
              className="tl-step relative"
              style={{ ...zoneStyle(index), '--tl-from': '16px' } as CSSProperties}
            >
              <span
                data-node
                className="tl-node absolute -left-10 top-8 h-[18px] w-[18px] rounded-full sm:-left-14"
                aria-hidden="true"
              />
              <StepCard step={step} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function MobileFinalTimeline() {
  const [active, setActive] = useState(0)
  return (
    <section className="tl-final-mobile bg-[#f5f4f1] px-6 py-14 sm:px-10 lg:hidden motion-reduce:!block" aria-label="Oś czasu">
      <Intro final className="max-w-xl" />
      <div className="mb-6 mt-8 flex items-center justify-between gap-4 text-[13px] text-[#55595f]"><p>Przesuń, aby poznać naszą historię.</p><span className="shrink-0 tabular-nums"><span className="font-semibold text-[#26282c]">{String(active + 1).padStart(2, '0')}</span> / 10</span></div>
      <ol onScroll={(event) => {
        const list = event.currentTarget
        const cards = Array.from(list.children) as HTMLElement[]
        const first = cards[0]?.offsetLeft ?? 0
        const nearest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - first - list.scrollLeft) < Math.abs(cards[best].offsetLeft - first - list.scrollLeft) ? index : best, 0)
        setActive(nearest)
      }} tabIndex={0} aria-label="Etapy rozwoju Energy Solutions" className="-mr-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 pr-6 sm:mr-0">
        {finalTimeline.map((step, index) => (
          <li key={step.year} className={`tl-step relative w-[85%] max-w-[360px] shrink-0 snap-start border-t-2 border-[#d9dadd] pt-6 ${index === active ? 'is-current' : ''}`} style={{ '--tl-zone': YELLOW } as CSSProperties}>
            <span className="absolute -top-2 left-4 size-3 rounded-full bg-[#aeb1b5]" aria-hidden="true" />
            <StepCard step={step} final className="h-full" />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function EnergyTimeline({ final = false }: { final?: boolean }) {
  useEffect(() => () => setDecarb(false), [])

  return (
    <>
      <HorizontalTimeline final={final} />
      {final ? <MobileFinalTimeline /> : <VerticalTimeline />}
    </>
  )
}
