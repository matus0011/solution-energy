import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Film w tle układu v1. Plik: public/hero.mp4.
// Odtwarzanie jest wyciszone i zapętlone, bo przeglądarki puszczają autoplay
// tylko bez dźwięku. Przy „ogranicz animacje” film stoi na pierwszej klatce.
export default function Hero() {
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
        poster="/realizacje/torun-geotermia.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Film z realizacji Energy Solutions"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative w-full px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1380px] 2xl:max-w-screen-2xl">
          <div className="animate-hero-in flex max-w-3xl flex-col items-start gap-5 text-left">
          <h1 className="font-heading text-[32px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[60px]">
            Kompleksowe realizacje energetyczne
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-white sm:text-[19px]">
            Od projektu i wykonawstwa po serwis. Prowadzimy inwestycje w energetyce, przemyśle
            i ochronie środowiska.
          </p>
          <div className="mt-4 flex flex-col items-start gap-4 sm:mt-6 sm:flex-row sm:items-center sm:gap-8">
            <Link
              to="/kontakt"
              className="inline-flex bg-[#fbba00] px-8 py-4 text-[15px] font-bold uppercase tracking-[0.08em] text-[#26282C] transition-colors duration-300 hover:bg-white"
            >
              Porozmawiajmy
            </Link>
            <Link
              to="/firma"
              className="text-[15px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:text-[#fbba00]"
            >
              O firmie
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
