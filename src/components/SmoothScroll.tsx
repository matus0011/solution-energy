import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  const location = useLocation()

  useEffect(() => {
    // Sprawdzenie czy użytkownik włączył w systemie ograniczenie ruchu (a11y)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 0.85, // Szybsze zatrzymanie, brak uczucia "pływania"
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.72, // Mniejszy dystans / skok kółka myszy
      touchMultiplier: 1.2,
    })

    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    let animationFrameId: number
    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])

  // Przewijanie na samą górę strony przy zmianie podstrony
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return null
}
