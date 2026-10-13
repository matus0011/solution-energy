import { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useLocation, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'

const scrollTop = () => {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Wersja dla strony głównej v2: mały grafitowy kwadrat ze strzałką.
// Obwód zapełnia się w kolorze akcentu w miarę przewijania strony.
function QuietBackToTop() {
  const [visible, setVisible] = useState(false)
  const ring = useRef<SVGRectElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      ring.current?.setAttribute('stroke-dashoffset', String(100 - progress * 100))
    }
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
      if (!frame) frame = requestAnimationFrame(update)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Wróć do góry strony"
      className={clsx(
        'group fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center bg-[#26282C]/90 text-white backdrop-blur-sm transition-[opacity,transform,background-color,color] duration-300 ease-out hover:bg-[var(--brand-accent)] hover:text-[#26282C] motion-reduce:transition-none sm:bottom-8 sm:right-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 44 44" aria-hidden="true">
        <rect x="1" y="1" width="42" height="42" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <rect
          ref={ring}
          x="1"
          y="1"
          width="42"
          height="42"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="2"
          pathLength={100}
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>
      <FaArrowUp className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()
  const [params] = useSearchParams()
  const quiet = pathname === '/' && params.get('wersja') === 'v2'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (quiet) return <QuietBackToTop />

  return (
    <>
      {/* Mobile — zwykły kwadratowy przycisk, sam nagłówek "Do góry" jako tab się
          nie mieści wygodnie na wąskim ekranie. */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Wróć do góry strony"
        className={clsx(
          'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center bg-[var(--brand-accent)] text-[#26282C] shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-opacity duration-300 hover:bg-[#26282C] hover:text-white sm:hidden',
          visible ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <FaArrowUp className="h-4 w-4" />
      </button>

      {/* Desktop/tablet — pionowa zakładka przy prawej krawędzi. */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Wróć do góry strony"
        className={clsx(
          'fixed bottom-[100px] right-[80px] z-40 hidden origin-bottom-right rotate-90 items-center gap-2 bg-[var(--brand-accent)] px-5 py-3 text-[14px] font-bold uppercase tracking-wide text-[#26282C] shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-opacity duration-300 hover:bg-[#26282C] hover:text-white sm:flex',
          visible ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <FaArrowUp className="h-3.5 w-3.5 -rotate-90" />
        Do góry
      </button>
    </>
  )
}
