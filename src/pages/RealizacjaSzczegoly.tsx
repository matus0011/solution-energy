import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { projects } from '@/lib/projects'

// Na razie nie ma prawdziwego API/CMS z treścią per wpis — na test zawsze
// pokazujemy pierwszą pozycję z listy, niezależnie od parametru w adresie.
// Do podmiany, gdy dojdą realne dane dla poszczególnych realizacji.
const project = projects[0]

export default function RealizacjaSzczegoly() {
  // Indeks aktualnie powiększonego zdjęcia w lightboxie (null = zamknięty).
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + project.gallery.length) % project.gallery.length))
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % project.gallery.length))

  // Obsługa klawiatury w lightboxie: Esc zamyka, strzałki przełączają zdjęcie.
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-5xl">
            {project.title}
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            /{' '}
            <Link to="/realizacje" className="transition-colors hover:text-white">
              Realizacje
            </Link>
          </span>
        </div>
      </div>

      <div className="px-6 pb-20 pt-16 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <span className="text-[16px] font-bold uppercase tracking-wide text-[#777777]">
            {project.date} · {project.client}
          </span>

          <p className="text-[18px] font-normal leading-relaxed text-[#777777]">{project.desc}</p>

          {/* Treść realizacji — docelowo surowy HTML z WordPressa (np. przez
              dangerouslySetInnerHTML). Klasa .entry-content (src/index.css) stylizuje
              gołe tagi, więc obsłuży dowolne bloki, jakie przyjdą z edytora: akapity,
              nagłówki, cytaty, listy, obrazy, wideo/embedy, tabele itd. */}
          <div className="entry-content">
            <p>
              Pełna treść realizacji — do uzupełnienia. W tym miejscu pojawi się opis realizacji: zakres prac,
              zastosowane rozwiązania techniczne, harmonogram oraz efekty wdrożenia.
            </p>

            <blockquote>
              Cytat — do uzupełnienia, np. opinia klienta o współpracy przy tej realizacji.
              <cite>— Imię i nazwisko, stanowisko</cite>
            </blockquote>

            <p>Kolejny akapit — do uzupełnienia. Zakres prac obejmował m.in.:</p>

            <ul>
              <li>Punkt pierwszy — do uzupełnienia</li>
              <li>Punkt drugi — do uzupełnienia</li>
              <li>Punkt trzeci — do uzupełnienia</li>
            </ul>

            <h2>Śródtytuł — do uzupełnienia</h2>

            <p>Kolejny akapit pod śródtytułem — do uzupełnienia rzeczywistą treścią po stronie klienta.</p>

            <div className="flex h-[240px] items-center justify-center bg-slate-100 text-sm font-medium uppercase tracking-wide text-slate-400">
              Miejsce na wideo — do uzupełnienia
            </div>

            <p>Ostatni akapit — do uzupełnienia rzeczywistą treścią po stronie klienta.</p>
          </div>

          {/* Galeria zdjęć z realizacji — prawdziwe fotografie z budowy
              (materiał referencyjny klienta), nie placeholdery. Siatka
              elastycznie rośnie, gdyby dana realizacja miała więcej zdjęć.
              Kliknięcie w miniaturę otwiera lightbox do powiększenia. */}
          {project.gallery.length > 0 && (
            <div className="flex flex-col gap-5 border-t border-[#e5e5e5] pt-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {project.gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="group h-[160px] cursor-zoom-in overflow-hidden sm:h-[200px]"
                    aria-label={`Powiększ zdjęcie ${index + 1} z ${project.gallery.length}`}
                  >
                    <img
                      src={src}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <Link to="/realizacje" className="group/cta mt-4 flex w-fit cursor-pointer items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#fbba00] text-lg font-semibold leading-none text-[#fbba00] transition-colors duration-300 group-hover/cta:border-[#26282C] group-hover/cta:text-[#26282C]">
              ‹
            </span>
            <span className="text-[16px] font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 group-hover/cta:text-[#26282C]">
              Wróć do listy
            </span>
          </Link>
        </div>
      </div>

      {/* Lightbox — powiększony podgląd zdjęcia z galerii, z nawigacją. */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 px-4 py-10"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Zamknij podgląd"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-[#fbba00]"
          >
            <X className="h-7 w-7" strokeWidth={2} />
          </button>

          {project.gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-colors hover:text-[#fbba00] sm:left-6"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={1.75} />
            </button>
          )}

          <img
            src={project.gallery[lightboxIndex]}
            alt={project.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-[92vw] cursor-default object-contain sm:max-w-[85vw]"
          />

          {project.gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Następne zdjęcie"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-colors hover:text-[#fbba00] sm:right-6"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={1.75} />
            </button>
          )}

          {project.gallery.length > 1 && (
            <span className="mt-4 text-[14px] font-bold uppercase tracking-wide text-white/60">
              {lightboxIndex + 1} / {project.gallery.length}
            </span>
          )}
        </div>
      )}
    </>
  )
}
