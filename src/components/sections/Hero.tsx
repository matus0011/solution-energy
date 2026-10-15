import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChargeBars } from '@/components/SectionTitle'
import { useIsV2 } from '@/lib/homeVariant'

// Film w tle układu v1. Plik: public/hero.mp4.
// Odtwarzanie jest wyciszone i zapętlone, bo przeglądarki puszczają autoplay
// tylko bez dźwięku. Przy „ogranicz animacje” film stoi na pierwszej klatce.
export default function Hero() {
  const v2 = useIsV2()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      video.pause()
      return
    }
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden sm:min-h-[640px] lg:min-h-[760px]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Film z realizacji Energy Solutions"
      />

      {v2 ? (
        <>
          <div className="absolute inset-0 bg-[rgba(20,21,24,0.42)] lg:hidden" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_62%_80%_at_16%_50%,rgba(20,21,24,0.62)_0%,rgba(20,21,24,0.34)_48%,transparent_80%)] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(20,21,24,0.45)_0%,transparent_100%)]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-black/45" />
      )}

      <div className="relative w-full -translate-y-4 px-6 py-16 sm:-translate-y-8 sm:px-10 lg:-translate-y-12 lg:px-14">
        <div className="mx-auto w-full max-w-[1380px] 2xl:max-w-screen-2xl">
          <div className={`animate-hero-in flex flex-col items-start text-left ${v2 ? 'max-w-3xl gap-6 [text-shadow:0_1px_28px_rgba(20,21,24,0.35)]' : 'max-w-3xl gap-5'}`}>
          {v2 && <ChargeBars on />}
          <h1
            className={`font-heading text-white ${
              v2
                ? 'text-[38px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[54px] lg:text-[64px]'
                : 'text-4xl font-medium leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[64px]'
            }`}
          >
            {v2 ? (
              <>
                Kompleksowe realizacje <span className="font-medium">energetyczne</span>
              </>
            ) : (
              'Kompleksowe realizacje energetyczne'
            )}
          </h1>
          <p className={`text-white/90 leading-relaxed font-normal ${v2 ? 'max-w-lg text-[16px] sm:text-[18px]' : 'max-w-xl text-[17px] sm:text-[18px]'}`}>
            Od projektu i wykonawstwa po serwis. Prowadzimy inwestycje w energetyce, przemyśle
            i ochronie środowiska.
          </p>
          <div className={`flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 ${v2 ? 'mt-3 sm:mt-4' : 'mt-4 sm:mt-6'}`}>
            <Link
              to="/kontakt"
              className={`inline-flex bg-[var(--brand-accent)] font-bold uppercase text-[#26282C] transition-colors duration-300 hover:bg-white ${
                v2 ? 'px-7 py-3.5 text-[12.5px] tracking-[0.16em] [text-shadow:none]' : 'px-8 py-4 text-[13.5px] tracking-[0.12em]'
              }`}
            >
              Porozmawiajmy
            </Link>
            <Link
              to="/firma"
              className={`font-bold uppercase text-white transition-colors duration-300 hover:text-[var(--brand-accent)] ${
                v2
                  ? 'border-b border-white/40 pb-1 text-[12.5px] tracking-[0.16em] hover:border-[var(--brand-accent)]'
                  : 'text-[13.5px] tracking-[0.12em]'
              }`}
            >
              O firmie
            </Link>
          </div>
        </div>
        </div>
      </div>

      {v2 && (
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 sm:flex" aria-hidden="true">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">Przewiń</span>
          <span className="es-drop" />
        </div>
      )}
    </section>
  )
}
