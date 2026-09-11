import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Route } from 'lucide-react'
import { homeHighlights } from '@/lib/company'

// Klasy nagłówka i opisu trzymamy w stałych, bo ten sam zestaw dostają
// niewidoczne kopie rozpychające blok (patrz komentarz przy siatce) — gdyby
// się rozjechały, rezerwacja wysokości przestałaby działać.
// Bez `uppercase` — nagłówek renderuje się dokładnie tak, jak w danych,
// czyli wielka tylko pierwsza litera. Dzięki temu skrót „EPC" w „Formuła EPC"
// zostaje wersalikami, czego `capitalize` by nie zrobiło („Formuła Epc”).
const headingClass =
  'max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-[0.05em] text-white sm:text-6xl lg:text-[72px]'
const leadClass = 'my-6 max-w-2xl text-[17px] leading-relaxed text-white sm:text-[19px]'

// Hero strony głównej: pełnoekranowe zdjęcie z budowy + treść po lewej.
// Na desktopie pod spodem stoi pasek trzech kafelków przełączających zdjęcie
// i tekst; na mobile pasek znika, a hero rotuje samo. Oba bloki dzielą stan,
// więc siedzą w jednym komponencie.
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = homeHighlights[activeIndex]

  // Na mobile pasek kafelków jest ukryty, więc nie ma czym przełączać treści —
  // hero zmienia się wtedy samo co 5 s. Na desktopie rotacja nie działa, bo
  // przełączanie należy do użytkownika. Wyłączona też przy „ogranicz animacje”,
  // gdzie samoczynnie zmieniająca się treść jest niewskazana.
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer: number | undefined

    const sync = () => {
      window.clearInterval(timer)
      if (!mobile.matches || reduceMotion.matches) return
      timer = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % homeHighlights.length)
      }, 5000)
    }

    sync()
    mobile.addEventListener('change', sync)
    reduceMotion.addEventListener('change', sync)

    return () => {
      window.clearInterval(timer)
      mobile.removeEventListener('change', sync)
      reduceMotion.removeEventListener('change', sync)
    }
  }, [])

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="relative flex min-h-[360px] items-center overflow-hidden sm:min-h-[520px] lg:min-h-[600px]">
        {/* Wszystkie zdjęcia są w DOM-ie i przełączane przezroczystością —
            daje to płynne przejście i kolejne tła są już wczytane, więc
            kliknięcie nie pokazuje pustego miejsca. */}
        {homeHighlights.map((item, index) => (
          <img
            key={item.heroImage}
            src={item.heroImage}
            alt={index === activeIndex ? item.heroAlt : ''}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Gradient od lewej, a nie płaskie przyciemnienie — tekst zostaje
            czytelny, a prawa strona zdjęcia pozostaje widoczna. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/10" />

        <div className="relative w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-7">
            {/* Wszystkie warianty tekstu leżą w jednej komórce siatki. Kopie
                niewidoczne (`invisible`) nie są widać, ale nadal zajmują
                miejsce, więc komórka ma zawsze wysokość najdłuższego wariantu
                i przyciski pod spodem nie skaczą przy przełączaniu — bez
                zgadywania wartości `min-height` dla każdego breakpointa. */}
            <div className="grid">
              {homeHighlights.map((item) => (
                <div
                  key={`sizer-${item.kicker}`}
                  aria-hidden="true"
                  className="invisible col-start-1 row-start-1 flex flex-col gap-5"
                >
                  <div className={headingClass}>{item.kicker}</div>
                  <div className={leadClass}>{item.heroLead}</div>
                </div>
              ))}

              {/* `key` wymusza ponowne zamontowanie przy zmianie kafelka, więc
                  animacja pojawienia odpala się od nowa i tekst przenika razem
                  ze zdjęciem, zamiast podmieniać się skokowo. */}
              <div key={activeIndex} className="animate-hero-in col-start-1 row-start-1 flex flex-col gap-5">
                <h1 className={headingClass}>{active.kicker}</h1>
                <p className={leadClass}>{active.heroLead}</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              {/* Ikona ścieżki zamiast strzałki — strzałkę ma już sąsiedni
                  link, a tutaj chodzi o proces prowadzenia inwestycji. */}
              <Link
                to="/firma/jak-pracujemy"
                className="group inline-flex items-center gap-3 bg-[#fbba00] px-8 py-5 text-[15px] font-bold uppercase tracking-[0.08em] text-[#26282C] transition-colors duration-300 hover:bg-white"
              >
                <Route
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Nasze podejście
              </Link>

              <Link to="/realizacje" className="group flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#fbba00] group-hover:bg-[#fbba00] group-hover:text-[#26282C]">
                  <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-[#fbba00]">
                  Zobacz realizacje
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pasek wyróżnień — przełącza zdjęcie w hero. Ukryty poniżej `md`:
          na wąskim ekranie zajmował pół ekranu, a hero i tak rotuje samo. */}
      <div className="hidden bg-[#26282C] px-6 py-10 sm:px-10 sm:py-12 md:block lg:px-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-0 md:grid-cols-3">
          {homeHighlights.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={item.kicker}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`Pokaż zdjęcie: ${item.title}`}
                className={`group flex items-center gap-5 text-left md:px-8 ${
                  index > 0 ? 'md:border-l md:border-white/15' : 'md:pl-0'
                } ${index === homeHighlights.length - 1 ? 'md:pr-0' : ''}`}
              >
                {/* Miniatura bez żadnej obwódki i wyróżnienia — aktywny
                    kafelek poznajemy po żółtym tytule. Na hover zostaje samo
                    przybliżenie zdjęcia. */}
                <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#fbba00]">
                    {item.kicker}
                  </span>
                  <span
                    className={`font-heading text-[19px] font-semibold leading-snug transition-colors duration-300 ${
                      isActive ? 'text-[#fbba00]' : 'text-white group-hover:text-[#fbba00]'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
