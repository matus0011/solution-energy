import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface WordToken {
  type: 'word'
  text: string
  isAccent?: boolean
}

interface WindowToken {
  type: 'window'
  src: string
  alt: string
  title: string
}

type Token = WordToken | WindowToken

interface IndexedTokenBase {
  index: number
}

type IndexedWordToken = WordToken & IndexedTokenBase
type IndexedWindowToken = WindowToken & IndexedTokenBase
type IndexedToken = IndexedWordToken | IndexedWindowToken

const RAW_LINES: Token[][] = [
  // Linia 1: "Doświadczony" + [kapsuła: hala kotłowni] + "partner" (is-accent) + "inwestycji"
  [
    { type: 'word', text: 'Doświadczony' },
    {
      type: 'window',
      src: '/realizacje/pruszkow-hala-kotlowni.jpg',
      alt: 'Hala kotłowni',
      title: 'Pruszków — Hala kotłowni',
    },
    { type: 'word', text: 'partner', isAccent: true },
    { type: 'word', text: 'inwestycji' },
  ],
  // Linia 2: "energetycznych" + [kapsuła: geotermia] + "i" + "przemysłowych —"
  [
    { type: 'word', text: 'energetycznych' },
    {
      type: 'window',
      src: '/realizacje/konin-geotermia.jpg',
      alt: 'Geotermia Konin',
      title: 'Konin — Ciepłownia geotermalna',
    },
    { type: 'word', text: 'i' },
    { type: 'word', text: 'przemysłowych —' },
  ],
  // Linia 3: "od" + "projektu" + [kapsuła: kogeneracja] + "po" + "serwis." (is-accent)
  [
    { type: 'word', text: 'od' },
    { type: 'word', text: 'projektu' },
    {
      type: 'window',
      src: '/realizacje/brzesko-kogeneracja.jpg',
      alt: 'Kogeneracja',
      title: 'Brzesko — Układ kogeneracyjny CHP',
    },
    { type: 'word', text: 'po' },
    { type: 'word', text: 'serwis.', isAccent: true },
  ],
]

let runningIndex = 0
const LINES: IndexedToken[][] = RAW_LINES.map((line) =>
  line.map((token) => ({
    ...token,
    index: runningIndex++,
  })),
)
const TOTAL_ITEMS = runningIndex

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null)
  const [litIndex, setLitIndex] = useState(-1)
  const waveActiveRef = useRef(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Sprawdzenie preferencji ograniczenia animacji (a11y)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setLitIndex(TOTAL_ITEMS)
      return
    }

    const startSequentialWave = (fromIndex = 0) => {
      if (timerRef.current !== null) return
      let current = fromIndex
      timerRef.current = window.setInterval(() => {
        current += 1
        setLitIndex((prev) => Math.max(prev, current))
        if (current >= TOTAL_ITEMS) {
          if (timerRef.current !== null) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }
        }
      }, 75)
    }

    // Obsługa scrolla: dynamiczny scrubbing fali + restart po wyjściu w górę
    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const winH = window.innerHeight

      // Granica wejścia fali: gdy sekcja zajmuje 75% dolnej części ekranu
      const triggerY = winH * 0.78
      const topOffset = triggerY - rect.top

      if (rect.top <= triggerY && rect.bottom >= 0) {
        if (!waveActiveRef.current) {
          waveActiveRef.current = true
          startSequentialWave()
        }

        // Przyspieszenie fali w miarę przewijania
        const scrollDistance = rect.height * 0.65
        const progress = Math.min(1, Math.max(0, topOffset / scrollDistance))
        const scrubIndex = Math.floor(progress * TOTAL_ITEMS)
        if (scrubIndex > 0) {
          setLitIndex((prev) => Math.max(prev, scrubIndex))
        }
      } else if (rect.top > winH) {
        // Użytkownik przewinął całkowicie w górę ponad sekcję — reset
        waveActiveRef.current = false
        if (timerRef.current !== null) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
        setLitIndex(-1)
      }
    }

    // IntersectionObserver jako pewny wyzwalacz wejścia sekcji
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !waveActiveRef.current) {
          waveActiveRef.current = true
          startSequentialWave()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(section)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (timerRef.current !== null) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36"
    >
      {/* Subtelny ambient / poświata technologiczna */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_25%,rgba(251,186,0,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center">
        {/* Główny blok tekstu dkton intro_text z atrybutami fali */}
        <div
          className="intro_text mx-auto max-w-6xl text-center font-heading text-[26px] font-bold uppercase tracking-tight text-[#26282C] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px]"
          data-wave="a"
          data-wave-ready="1"
        >
          {LINES.map((line, lineIdx) => (
            <div key={lineIdx} className="intro_text_line">
              {line.map((token, tokenIdx) => {
                const isLit = litIndex >= token.index
                const needsSpaceBefore = tokenIdx > 0 && token.type === 'word'

                if (token.type === 'window') {
                  return (
                    <span
                      key={tokenIdx}
                      className={`intro_text_window dkw-win ${isLit ? 'lit' : ''}`}
                      data-alt={token.alt}
                      title={token.title}
                      role="img"
                      aria-label={token.alt}
                    >
                      <span className="dkw-frame">
                        <img
                          src={token.src}
                          alt={token.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </span>
                  )
                }

                return (
                  <span key={tokenIdx}>
                    {needsSpaceBefore && ' '}
                    <span
                      className={`intro_text_word dkw-word ${token.isAccent ? 'is-accent' : ''} ${isLit ? 'lit' : ''}`}
                    >
                      {token.text}
                    </span>
                  </span>
                )
              })}
            </div>
          ))}
        </div>

        {/* Przycisk kierujący do podstrony firmy */}
        <div className="mx-auto mt-12 flex items-center justify-center sm:mt-16">
          <Link
            to="/firma"
            className="group inline-flex items-center gap-3 rounded-full bg-[#26282C] px-8 py-4 text-[14px] font-bold uppercase tracking-[0.08em] text-white shadow-md transition-all duration-300 hover:bg-[#fbba00] hover:text-[#26282C] hover:shadow-lg active:scale-[0.98] sm:text-[15px]"
          >
            <span>Poznaj naszą firmę</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
