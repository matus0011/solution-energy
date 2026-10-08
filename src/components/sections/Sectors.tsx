import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sectors } from '@/lib/company'

const n = sectors.length
const slides = [...sectors, ...sectors]
const TYTUL_MS = 250

export default function Sectors() {
  const track = useRef<HTMLDivElement>(null)
  const skok = useRef(false)
  const indexRef = useRef(0)
  const stepRef = useRef(421)
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(421)
  const [instant, setInstant] = useState(false)
  const [faza, setFaza] = useState<'dol' | 'gotowe' | 'gora'>('dol')
  indexRef.current = index
  stepRef.current = step

  useEffect(() => {
    const measure = () => {
      const row = track.current
      const card = row?.querySelector<HTMLElement>('[data-karta]')
      if (!row || !card) return
      const gap = Number.parseFloat(getComputedStyle(row).columnGap) || 16
      setStep(card.offsetWidth + gap)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (skok.current && index === n) {
      skok.current = false
      let cancelled = false
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return
          const el = track.current
          if (el) el.style.transition = ''
          setInstant(false)
          setIndex(n - 1)
        })
      })
      return () => {
        cancelled = true
        cancelAnimationFrame(id)
      }
    }

    if (index < n) return
    const el = track.current
    if (!el) return
    let done = false
    const aligned = () => {
      const x = new DOMMatrix(getComputedStyle(el).transform).m41
      return Math.abs(x + indexRef.current * stepRef.current) <= 1
    }
    const finish = () => {
      if (done || indexRef.current < n || !aligned()) return
      done = true
      el.style.transition = 'none'
      void el.offsetWidth
      setInstant(true)
      setIndex(indexRef.current % n)
    }
    const onEnd = (zdarzenie: TransitionEvent) => {
      if (zdarzenie.target === el && zdarzenie.propertyName === 'transform') finish()
    }
    el.addEventListener('transitionend', onEnd)
    const timer = window.setInterval(() => {
      if (aligned()) finish()
    }, 50)
    const giveUp = window.setTimeout(() => window.clearInterval(timer), 1200)
    return () => {
      el.removeEventListener('transitionend', onEnd)
      window.clearInterval(timer)
      window.clearTimeout(giveUp)
    }
  }, [index])

  useEffect(() => {
    if (!instant || index >= n) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = track.current
        if (el) el.style.transition = ''
        setInstant(false)
      })
    })
    return () => cancelAnimationFrame(id)
  }, [instant, index])

  const logical = index % n

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFaza('gora')
      return
    }
    setFaza('dol')
    let drugi = 0
    const pierwszy = requestAnimationFrame(() => {
      setFaza('gotowe')
      drugi = requestAnimationFrame(() => setFaza('gora'))
    })
    return () => {
      cancelAnimationFrame(pierwszy)
      cancelAnimationFrame(drugi)
    }
  }, [logical])

  const pokaz = index % n

  const next = () => {
    skok.current = false
    const el = track.current
    if (el) el.style.transition = ''
    setInstant(false)
    setIndex(indexRef.current + 1)
  }

  const prev = () => {
    const i = indexRef.current
    if (i % n === 0 && i < n) {
      const el = track.current
      if (el) {
        el.style.transition = 'none'
        void el.offsetWidth
      }
      skok.current = true
      setInstant(true)
      setIndex(n)
      return
    }
    skok.current = false
    const el = track.current
    if (el) el.style.transition = ''
    setInstant(false)
    setIndex(i - 1)
  }

  const arrows = (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={prev}
        aria-label="Poprzedni sektor"
        className="inline-flex size-11 items-center justify-center rounded-none bg-[#fbba00] text-[#26282C] transition-transform duration-200 hover:scale-105 motion-reduce:transition-none"
      >
        <ChevronLeft className="size-5" strokeWidth={2.5} />
      </button>
      <p className="m-0 min-w-[4.5rem] text-center text-[15px] font-medium tabular-nums text-[#606264]">
        <span className="text-[#26282C]">{pokaz + 1}</span>
        <span> z </span>
        <span>{n}</span>
      </p>
      <button
        type="button"
        onClick={next}
        aria-label="Następny sektor"
        className="inline-flex size-11 items-center justify-center rounded-none bg-[#fbba00] text-[#26282C] transition-transform duration-200 hover:scale-105 motion-reduce:transition-none"
      >
        <ChevronRight className="size-5" strokeWidth={2.5} />
      </button>
    </div>
  )

  return (
    <section
      data-faza={faza}
      className="overflow-hidden bg-[#f5f4f1] bg-[radial-gradient(circle,#e4e2dc_1.4px,transparent_1.5px)] bg-[length:22px_22px] py-16 sm:py-24"
    >
      <div className="flex flex-col gap-8 pl-6 sm:pl-10 lg:flex-row lg:items-center lg:gap-6 lg:pl-14 xl:pl-[max(3.5rem,calc((100vw-90rem)/2))]">
        <div className="relative z-10 hidden h-auto w-full shrink-0 flex-col justify-between gap-10 border border-[#eeeeef] bg-white p-8 sm:p-12 lg:flex lg:h-[560px] lg:w-[427px] lg:p-14">
          <div>
            <p className="m-0 mb-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#fbba00]">
              Czym się zajmujemy
            </p>
            <h2 className="m-0 font-heading text-[32px] sm:text-[38px] font-semibold leading-[1.12] text-[#26282C] tracking-tight">
              Sektory działalności
            </h2>
          </div>
          <div className="hidden lg:block">{arrows}</div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="overflow-hidden">
          <div
            ref={track}
            className={`flex h-[480px] shrink-0 items-center gap-4 lg:h-[630px] ${instant ? '' : 'transition-transform duration-500 ease-out'} motion-reduce:transition-none`}
            style={{ transform: `translate3d(-${index * step}px,0,0)` }}
          >
            {slides.map((sector, i) => {
              const aktywna = i === index
              return (
                <Link
                  key={`${sector.title}-${i}`}
                  data-karta
                  to="/firma/obszary-dzialalnosci"
                  className={`group relative w-[82vw] shrink-0 overflow-hidden [container-type:size] sm:w-[360px] lg:w-[405px] ${
                    aktywna ? 'h-[480px] lg:h-[630px]' : 'h-[420px] lg:h-[560px]'
                  } ${instant ? '' : 'transition-[height] duration-500 ease-out'} motion-reduce:transition-none`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[480px] -translate-y-1/2 lg:h-[630px]">
                    <img
                      src={sector.image}
                      alt={i < n ? sector.imageAlt : ''}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-[linear-gradient(rgba(38,40,44,0)_42%,rgb(38,40,44)_100%)] ease-out motion-reduce:transition-none ${
                      instant ? 'transition-none' : 'transition-opacity duration-[250ms]'
                    } ${aktywna && faza === 'gora' ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent ease-out motion-reduce:transition-none ${
                      instant ? 'transition-none' : 'transition-opacity duration-[250ms]'
                    } ${aktywna && faza === 'gora' ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <h3
                    className="absolute inset-x-0 top-0 m-0 p-6 font-heading text-[22px] sm:text-[24px] font-semibold leading-snug text-white sm:p-8 motion-reduce:transition-none"
                    style={{
                      transform:
                        aktywna && faza === 'gora'
                          ? 'translateY(0)'
                          : 'translateY(calc(100cqh - 100%))',
                      transition:
                        aktywna && faza !== 'dol' && !instant
                          ? `transform ${TYTUL_MS}ms ease-out`
                          : 'none',
                    }}
                  >
                    {sector.title}
                  </h3>
                </Link>
              )
            })}
          </div>
          </div>
          <div className="mt-8 lg:hidden">{arrows}</div>
        </div>
      </div>
    </section>
  )
}
