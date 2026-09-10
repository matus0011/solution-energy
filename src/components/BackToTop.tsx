import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import clsx from 'clsx'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Mobile — zwykły kwadratowy przycisk, sam nagłówek "Do góry" jako tab się
          nie mieści wygodnie na wąskim ekranie. */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Wróć do góry strony"
        className={clsx(
          'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center bg-[#fbba00] text-[#26282C] shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-opacity duration-300 hover:bg-[#26282C] hover:text-white sm:hidden',
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
          'fixed bottom-[100px] right-[80px] z-40 hidden origin-bottom-right rotate-90 items-center gap-2 bg-[#fbba00] px-5 py-3 text-[14px] font-bold uppercase tracking-wide text-[#26282C] shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-opacity duration-300 hover:bg-[#26282C] hover:text-white sm:flex',
          visible ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <FaArrowUp className="h-3.5 w-3.5 -rotate-90" />
        Do góry
      </button>
    </>
  )
}
