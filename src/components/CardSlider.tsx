import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

// Poziomy slider kart oparty o natywny scroll-snap — bez zewnętrznej
// biblioteki karuzeli. Swipe na dotyku i scroll kółkiem obsługuje przeglądarka,
// my dokładamy tylko strzałki, kropki i śledzenie aktywnego slajdu.
// Liczbę widocznych kart ustawia rodzic przez `slideClassName` (szerokości
// w breakpointach), dzięki czemu komponent nie zna kontekstu, w którym stoi.

type Tone = 'dark' | 'light'

interface CardSliderProps {
  children: ReactNode[]
  /** Etykieta dla czytników ekranu, np. "Certyfikaty i uprawnienia". */
  label: string
  /** Klasy szerokości pojedynczego slajdu (bez `shrink-0` — dokładane tutaj). */
  slideClassName?: string
  /** Zawijanie: ze skrajnej pozycji strzałki przeskakują na drugi koniec. */
  loop?: boolean
  tone?: Tone
  className?: string
}

const toneStyles: Record<Tone, { button: string; dot: string; dotActive: string }> = {
  dark: {
    button:
      'border-white/20 text-white hover:border-[#fbba00] hover:bg-[#fbba00] hover:text-[#26282C] disabled:border-white/10 disabled:text-white/25',
    dot: 'bg-white/25 hover:bg-white/50',
    dotActive: 'bg-[#fbba00]',
  },
  light: {
    button:
      'border-[#26282C]/20 text-[#26282C] hover:border-[#fbba00] hover:bg-[#fbba00] hover:text-[#26282C] disabled:border-[#26282C]/10 disabled:text-[#26282C]/25',
    dot: 'bg-[#26282C]/20 hover:bg-[#26282C]/40',
    dotActive: 'bg-[#fbba00]',
  },
}

export default function CardSlider({
  children,
  label,
  slideClassName = 'w-[85%] sm:w-[48%] lg:w-[32%]',
  loop = false,
  tone = 'dark',
  className,
}: CardSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const restoreSnapRef = useRef<number>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [positionCount, setPositionCount] = useState(1)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const styles = toneStyles[tone]
  const slideCount = children.length

  // Jedno źródło prawdy dla strzałek i kropek — liczone z realnej pozycji
  // scrolla, więc działa tak samo po swipie, kliknięciu i scrollu kółkiem.
  const syncState = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const { scrollLeft, scrollWidth, clientWidth } = track
    setCanScrollPrev(scrollLeft > 1)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1)

    const slides = Array.from(track.children) as HTMLElement[]
    if (slides.length === 0) return

    // Kropka = osiągalna pozycja przewijania, nie slajd. Przy 3 widocznych
    // kartach z 5 ostatnie dwie nigdy nie dojadą do lewej krawędzi, więc
    // kropek jest 3 (5 - 3 + 1) — inaczej dwie ostatnie byłyby martwe.
    const step = slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : clientWidth
    const visible = step > 0 ? Math.max(1, Math.round(clientWidth / step)) : 1
    const positions = Math.max(1, slides.length - visible + 1)
    setPositionCount(positions)

    const nearest = slides.reduce(
      (best, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scrollLeft)
        return distance < best.distance ? { index, distance } : best
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    )
    // Przycięcie do liczby kropek — przy nierównych szerokościach slajdów
    // najbliższy slajd mógłby wypaść poza zakres i żadna kropka nie byłaby
    // aktywna.
    setActiveIndex(Math.min(nearest.index, positions - 1))
  }, [])

  useEffect(() => {
    syncState()
    const track = trackRef.current
    if (!track) return

    // ResizeObserver, bo zmiana breakpointa zmienia liczbę widocznych kart,
    // a więc i to, czy da się jeszcze przewijać.
    const observer = new ResizeObserver(syncState)
    observer.observe(track)
    return () => {
      observer.disconnect()
      window.clearTimeout(restoreSnapRef.current)
    }
  }, [syncState, slideCount])

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.children[Math.max(0, Math.min(index, slideCount - 1))] as
      | HTMLElement
      | undefined
    if (!slide) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // `snap-mandatory` potrafi przerwać długie programowe przewijanie
    // (np. zawijanie z ostatniej pozycji na pierwszą) i przyciągnąć taśmę
    // w pół drogi. Na czas animacji wyłączamy snapping i wracamy do niego po
    // dojeździe — swipe użytkownika dalej działa ze snapowaniem.
    window.clearTimeout(restoreSnapRef.current)
    track.style.scrollSnapType = 'none'
    track.scrollTo({ left: slide.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' })
    restoreSnapRef.current = window.setTimeout(
      () => {
        track.style.scrollSnapType = ''
      },
      reduceMotion ? 0 : 700,
    )
  }

  // Przy `loop` wyjście poza zakres wraca na drugi koniec — bez klonowania
  // slajdów, więc scroll-snap i dostępność zostają natywne. Efektem jest
  // przewinięcie z powrotem, a nie nieskończona taśma.
  const goTo = (index: number) => {
    const last = positionCount - 1
    if (index < 0) return scrollToIndex(loop ? last : 0)
    if (index > last) return scrollToIndex(loop ? 0 : last)
    return scrollToIndex(index)
  }

  if (slideCount === 0) return null

  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        onScroll={syncState}
        className="no-scrollbar relative flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overscroll-x-contain pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fbba00]"
      >
        {children.map((slide, index) => (
          <div
            key={index}
            aria-roledescription="slajd"
            aria-label={`${index + 1} z ${slideCount}`}
            className={clsx('shrink-0 snap-start', slideClassName)}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: positionCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Przejdź do pozycji ${index + 1} z ${positionCount}`}
              aria-current={index === activeIndex}
              className={clsx(
                'h-1.5 rounded-full transition-all duration-300',
                index === activeIndex ? clsx('w-8', styles.dotActive) : clsx('w-4', styles.dot),
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={!loop && !canScrollPrev}
            aria-label="Poprzedni slajd"
            className={clsx(
              'flex h-11 w-11 items-center justify-center border transition-all duration-300 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              styles.button,
            )}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={!loop && !canScrollNext}
            aria-label="Następny slajd"
            className={clsx(
              'flex h-11 w-11 items-center justify-center border transition-all duration-300 disabled:cursor-not-allowed disabled:hover:bg-transparent',
              styles.button,
            )}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
