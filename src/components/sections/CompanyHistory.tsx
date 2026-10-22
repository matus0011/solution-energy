import { useRef } from 'react'
import TimelineIcon from '@/components/timelineIcons'
import { companyHistory, type CompanyMilestone } from '@/lib/companyHistory'
import { useScrollFrame } from '@/lib/timelineScroll'

function Milestone({ step }: { step: CompanyMilestone }) {
  return <>
    <div className="company-history-icon [&_svg]:h-20 [&_svg]:w-auto" aria-hidden="true"><TimelineIcon name={step.icon} /></div>
    <p className="company-history-year mt-3 font-heading text-[30px] font-semibold leading-tight tracking-tight text-[#26282c]">{step.year}</p>
    <div className="company-history-content mt-14">
      <h2 className="font-heading text-[24px] font-semibold leading-tight text-[#26282c]">{step.title}</h2>
      <p className="mt-4 text-[16px] leading-relaxed text-[#55595f]">{step.text}</p>
      {step.financials && <table className="mt-5 w-full text-left text-[13px] tabular-nums text-[#26282c]">
        <caption className="sr-only">Przybliżone wyniki finansowe</caption>
        <thead className="border-b border-[#d5d6d8] text-[#676b72]"><tr><th scope="col" className="pb-2 font-normal">Rok</th><th scope="col" className="pb-2 font-normal">Przychody</th><th scope="col" className="pb-2 font-normal">Zysk netto</th></tr></thead>
        <tbody>{step.financials.map((row) => <tr key={row.year}><th scope="row" className="py-2 pr-3 font-medium">{row.year}</th><td className="py-2 pr-3 font-semibold">{row.revenue}</td><td className="py-2">{row.profit}</td></tr>)}</tbody>
      </table>}
      {step.note && <p className="mt-3 text-sm text-[#55595f]">{step.note}</p>}
    </div>
  </>
}

export default function CompanyHistory() {
  const listRef = useRef<HTMLOListElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const geo = useRef({ nodes: [] as number[], start: 0, height: 0 })

  useScrollFrame(() => {
    const list = listRef.current
    const track = trackRef.current
    if (!list || !track || !list.clientWidth) return false
    const listRect = list.getBoundingClientRect()
    const rows = [...list.querySelectorAll<HTMLElement>('[data-milestone]')]
    const nodes = rows.map((row) => {
      const year = row.querySelector<HTMLElement>('.company-history-year')!.getBoundingClientRect()
      const node = row.querySelector<HTMLElement>('.company-history-node')!
      node.style.top = `${year.top - row.getBoundingClientRect().top + year.height / 2}px`
      return year.top - listRect.top + year.height / 2
    })
    const start = nodes[0] ?? 0
    const height = Math.max(0, (nodes.at(-1) ?? start) - start)
    track.style.top = `${start}px`
    track.style.height = `${height}px`
    geo.current = { nodes, start, height }
    return true
  }, () => {
    const list = listRef.current!
    const { nodes, start, height } = geo.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const reach = window.innerHeight * 0.58 - list.getBoundingClientRect().top
    const progress = reduced ? 1 : height ? Math.min(1, Math.max(0, (reach - start) / height)) : 0
    progressRef.current!.style.transform = `scaleY(${progress})`
    const active = nodes.reduce((last, node, index) => node <= reach ? index : last, 0)
    list.querySelectorAll<HTMLElement>('[data-milestone]').forEach((row, index) => {
      row.classList.toggle('is-current', index === active)
      row.classList.toggle('is-reached', reduced || nodes[index] <= reach)
    })
  })

  return <section className="company-history-vertical bg-[#f5f4f1] px-6 pb-16 pt-14 sm:px-10 lg:px-14" aria-label="Historia firmy">
    <div className="mx-auto max-w-[1140px]">
      <div className="relative">
        <div ref={trackRef} className="company-history-track pointer-events-none absolute w-px bg-[#c9c5bd]" aria-hidden="true">
          <div ref={progressRef} className="absolute inset-0 origin-top scale-y-0 bg-[#c79a20]" />
        </div>
        <ol ref={listRef} className="relative">
          {companyHistory.map((step, index) => <li key={step.year} data-milestone data-side={index % 2 === 0 ? 'left' : 'right'} className="company-history-row relative">
            <span className="company-history-node absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9c5bd] bg-[#f5f4f1]" aria-hidden="true" />
            <div data-history-body className="company-history-body relative"><Milestone step={step} /></div>
          </li>)}
        </ol>
      </div>
    </div>
  </section>
}
