import { useRef } from 'react'
import TimelineIcon from '@/components/timelineIcons'
import { companyHistory, type CompanyMilestone } from '@/lib/companyHistory'
import { useScrollFrame } from '@/lib/timelineScroll'

function Milestone({ step }: { step: CompanyMilestone }) {
  const firstYear = step.year.match(/\d{4}/)?.[0]

  return <>
    <div className="company-history-heading relative">
      <span className="company-history-watermark font-heading" aria-hidden="true">{firstYear}</span>
      <div className="company-history-icon" aria-hidden="true"><TimelineIcon name={step.icon} /></div>
      <p className="company-history-year font-heading font-semibold leading-tight tracking-tight text-[#26282c]">{step.year}</p>
    </div>
    <div className="company-history-content">
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
  const years = useRef<number[]>([])

  useScrollFrame(() => {
    const list = listRef.current
    if (!list || !list.clientWidth) return false
    const listRect = list.getBoundingClientRect()
    const rows = [...list.querySelectorAll<HTMLElement>('[data-milestone]')]
    years.current = rows.map((row) => {
      const year = row.querySelector<HTMLElement>('.company-history-year')!.getBoundingClientRect()
      return year.bottom - listRect.top
    })
    return true
  }, () => {
    const list = listRef.current!
    const reach = window.innerHeight * 0.58 - list.getBoundingClientRect().top
    const active = years.current.reduce((last, year, index) => year <= reach ? index : last, 0)
    list.querySelectorAll<HTMLElement>('[data-milestone]').forEach((row, index) => {
      row.classList.toggle('is-current', index === active)
    })
  })

  return <section className="company-history-vertical bg-[#f5f4f1] px-6 pb-20 pt-16 sm:px-10 sm:pt-20 lg:px-14" aria-label="Historia firmy">
    <div className="mx-auto max-w-[1140px]">
      <ol ref={listRef} className="company-history-list relative">
        {companyHistory.map((step, index) => <li key={step.year} data-milestone data-side={index % 2 === 0 ? 'left' : 'right'} className="company-history-row relative">
          <div data-history-body className="company-history-body relative"><Milestone step={step} /></div>
        </li>)}
      </ol>
    </div>
  </section>
}
