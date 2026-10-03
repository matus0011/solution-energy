import { useEffect, useRef, useState } from 'react'

// Jednorazowe wejście sekcji w kadr. Przy „ogranicz animacje” treść jest od razu
// widoczna, bez czekania na obserwatora.
export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const node = ref.current
    if (!node || shown) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shown, threshold])

  return { ref, shown }
}
