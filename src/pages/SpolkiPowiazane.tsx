import { ArrowUpRight, MapPin } from 'lucide-react'
import PhotoBanner from '@/components/PhotoBanner'
import { ChargeBars } from '@/components/SectionTitle'
import { useInView } from '@/lib/useInView'

type Company = {
  id: string
  name: string
  city: string
  logo: string
  url: string
  description: string
}

// Logo i opis: strona CERTUS Sp. z o.o. (http://www.certus-industry.pl/).
// Powiązanie z Energy Solutions: KRS 0000516192, udział 75%.
const companies: Company[] = [
  {
    id: 'certus',
    name: 'CERTUS Sp. z o.o.',
    city: 'Tarnów',
    logo: '/logos/certus.png',
    url: 'http://www.certus-industry.pl/',
    description:
      'Spółka handlowa powiązana z Energy Solutions. Dostarcza rozwiązania dla przemysłu oraz materiały elektryczne i aparaturę przemysłową.',
  },
]

function CompanyCard({ company }: { company: Company }) {
  const { ref, shown } = useInView<HTMLDivElement>(0.4)
  const headingId = `spolka-${company.id}`

  return (
    <article aria-labelledby={headingId} className="grid bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <div className="flex items-center px-6 pt-8 sm:px-10 sm:pt-10 lg:justify-center lg:px-12 lg:py-14">
        <img src={company.logo} alt="" className="h-auto w-[180px] sm:w-[220px]" />
      </div>

      <div ref={ref} className="flex flex-col gap-7 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <div className="flex flex-col gap-5">
          <ChargeBars on={shown} />
          <div>
            <h2 id={headingId} className="font-heading text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#26282C] sm:text-[34px]">
              {company.name}
            </h2>
            <p className="mt-2 flex items-center gap-1.5 text-[15px] text-[#55595f]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {company.city}
            </p>
          </div>
        </div>

        <p className="max-w-[60ch] text-[17px] leading-relaxed text-[#55595f]">{company.description}</p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-[var(--brand-accent)] px-10 py-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#26282C] transition-colors duration-300 hover:bg-[var(--brand-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#26282C] sm:w-auto"
          >
            Odwiedź stronę
            <span className="sr-only"> {company.name} (otwiera się w nowej karcie)</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          <span className="text-[15px] font-medium text-[#55595f]">{new URL(company.url).hostname}</span>
        </div>
      </div>
    </article>
  )
}

export default function SpolkiPowiazane() {
  return (
    <>
      <PhotoBanner
        title="Spółki powiązane"
        image="/realizacje/wieliczka-instalacja.jpg"
        parent={{ label: 'O firmie', to: '/firma?wersja=final' }}
        flushBottom
      />
      <section aria-label="Spółki powiązane z Energy Solutions" className="bg-[#f5f4f1] px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-8">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>
    </>
  )
}
