import { Link } from 'react-router-dom'
import { Mountain, Flame, Snowflake, Zap, Plug, SlidersHorizontal, Wind, Cog } from 'lucide-react'
import { competencies } from '@/lib/company'

// Skrót obszarów działalności na stronie głównej. W przeciwieństwie do
// podstrony pokazujemy tu sam numer, ikonę i nazwę — opisy zostają tam, gdzie
// czytelnik przyszedł po szczegóły. Kolejność ikon musi odpowiadać tablicy
// `competencies`.
const icons = [Mountain, Flame, Snowflake, Zap, Plug, SlidersHorizontal, Wind, Cog]

export default function Competencies() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Obszary działalności
          </h2>
          <p className="max-w-3xl text-[17px] leading-relaxed text-[#777777]">
            Osiem kompetencji, które łączymy w ramach jednej inwestycji — od obiektów geotermalnych,
            przez kotłownie i układy kogeneracyjne, po elektroenergetykę, sterowanie i HVAC.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={item.num}
                className="group flex min-h-[180px] flex-col justify-between gap-6 bg-white p-6 transition-colors duration-300 hover:bg-[#faf7f0]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-4xl font-bold text-[#e5e5e5] transition-colors duration-300 group-hover:text-[#fbba00]">
                    {item.num}
                  </span>
                  <Icon
                    className="h-8 w-8 shrink-0 text-[#fbba00] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <span className="font-heading text-[17px] font-semibold uppercase leading-snug text-[#26282C]">
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>

        <Link
          to="/firma/obszary-dzialalnosci"
          className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-all duration-300 hover:tracking-[0.08em] hover:text-[#26282C]"
        >
          Poznaj pełen zakres kompetencji →
        </Link>
      </div>
    </section>
  )
}
