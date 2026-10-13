import { useEffect, useRef } from 'react'

export function setDecarb(on: boolean) {
  const root = document.documentElement
  if (on && root.dataset.theme !== 'decarb') root.dataset.theme = 'decarb'
  if (!on && root.dataset.theme === 'decarb') delete root.dataset.theme
}

// Jedna pętla na rAF dla przewijania i zmiany rozmiaru. `measure` zwraca false,
// gdy dany wariant jest ukryty (np. poziomy na telefonie) — wtedy nic nie liczy.
export function useScrollFrame(measure: () => boolean, update: () => void) {
  const measureRef = useRef(measure)
  const updateRef = useRef(update)
  measureRef.current = measure
  updateRef.current = update

  useEffect(() => {
    let frame = 0
    let active = false

    const tick = () => {
      frame = 0
      if (active) updateRef.current()
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onResize = () => {
      active = measureRef.current()
      onScroll()
    }

    let alive = true
    onResize()
    document.fonts?.ready.then(() => alive && onResize())
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      alive = false
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])
}
