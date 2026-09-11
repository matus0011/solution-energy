import { Link } from 'react-router-dom'
import { Mountain, Flame, Snowflake, Zap, Plug, SlidersHorizontal, Wind, Cog } from 'lucide-react'
import { competencies } from '@/lib/company'
import Partners from '@/components/sections/Partners'

const competencyIcons = [Mountain, Flame, Snowflake, Zap, Plug, SlidersHorizontal, Wind, Cog]

export default function ObszaryDzialalnosci() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg"
          alt="Obszary działalności"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Obszary działalności
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            /{' '}
            <Link to="/firma" className="transition-colors hover:text-white">
              Firma
            </Link>{' '}
            / Obszary działalności
          </span>
        </div>
      </div>

      <div className="px-6 pb-10 pt-8 sm:px-10 sm:pb-20 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Traktujemy zadania kompleksowo — od dokumentacji projektowej, przez wykonawstwo, po serwis
                gwarancyjny i pogwarancyjny. Poniżej znajdziesz pełen zakres naszych kompetencji.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2">
              {competencies.map((item, index) => {
                const Icon = competencyIcons[index]
                return (
                  <div
                    key={item.num}
                    className="group flex min-h-[300px] flex-col gap-3 bg-white px-7 py-8 transition-colors duration-300 hover:bg-[#faf7f0]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-5xl font-bold text-[#e5e5e5] transition-colors duration-300 group-hover:text-[#fbba00] sm:text-6xl">
                        {item.num}
                      </span>
                      <Icon
                        className="h-9 w-9 shrink-0 text-[#fbba00] transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-heading text-xl font-semibold uppercase text-[#26282C] sm:text-2xl">
                      {item.title}
                    </span>
                    <p className="text-[15px] leading-relaxed text-[#777777]">{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <Link
              to="/realizacje"
              className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-all duration-300 hover:tracking-[0.08em] hover:text-[#26282C]"
            >
              Zobacz nasze realizacje →
            </Link>
          </div>

          {/* Partnerzy stoją właśnie tutaj: wymienione wyżej kompetencje to
              dokładnie te technologie (ABB, Siemens, Alfa Laval, KSB, Tedom),
              więc logotypy są konkretnym dopełnieniem listy, a nie ozdobą. */}
          <Partners description="Wymienione wyżej technologie realizujemy w oparciu o rozwiązania sprawdzonych producentów — to ich urządzenia trafiają na nasze budowy." />
        </div>
      </div>
    </>
  )
}
