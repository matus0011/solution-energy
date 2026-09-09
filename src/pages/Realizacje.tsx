import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const categories = [
  'Energetyka i kogeneracja',
  'Geotermia',
  'Instalacje elektryczne i AKPiA',
  'Ochrona środowiska',
]

const projects = [
  { cat: 'Energetyka i kogeneracja', imgLabel: '[ zdjęcie realizacji 1 ]' },
  { cat: 'Geotermia', imgLabel: '[ zdjęcie realizacji 2 ]' },
  { cat: 'Instalacje elektryczne i AKPiA', imgLabel: '[ zdjęcie realizacji 3 ]' },
  { cat: 'Ochrona środowiska', imgLabel: '[ zdjęcie realizacji 4 ]' },
  { cat: 'Energetyka i kogeneracja', imgLabel: '[ zdjęcie realizacji 5 ]' },
  { cat: 'Geotermia', imgLabel: '[ zdjęcie realizacji 6 ]' },
].map((p) => ({
  ...p,
  title: 'Nazwa realizacji — do uzupełnienia',
  desc: 'Krótki opis projektu, zakres prac, lokalizacja.',
}))

export default function Realizacje() {
  const [active, setActive] = useState<string | null>(null)
  const visibleProjects = active ? projects.filter((p) => p.cat === active) : projects

  return (
    <>
      <div className="bg-[#26282C] px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.12em] text-[#fbba00]">
            <Link to="/" className="hover:underline">
              STRONA GŁÓWNA
            </Link>{' '}
            / REALIZACJE
          </span>
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Realizacje
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            Wybrane projekty zrealizowane dla naszych klientów. Poniższe pozycje to placeholdery — do
            uzupełnienia rzeczywistymi realizacjami.
          </p>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActive(null)}
              className={clsx(
                'px-4 py-2 transition',
                active === null ? 'bg-[#26282C] text-white' : 'bg-slate-100 text-[#54575D] hover:bg-slate-200',
              )}
            >
              Wszystkie
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={clsx(
                  'px-4 py-2 transition',
                  active === cat ? 'bg-[#26282C] text-white' : 'bg-slate-100 text-[#54575D] hover:bg-slate-200',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="group flex cursor-pointer flex-col border border-slate-200 bg-white transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className="relative flex h-56 items-center justify-center overflow-hidden"
                  style={{
                    background:
                      'repeating-linear-gradient(45deg, #EDEBE6 0, #EDEBE6 10px, #E4E1DA 10px, #E4E1DA 20px)',
                  }}
                >
                  <span className="font-mono text-xs text-[#8B877E]">{project.imgLabel}</span>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(38,40,44,0.55) 0%, rgba(38,40,44,0) 55%)',
                    }}
                  />
                  <span className="absolute bottom-3.5 left-4 bg-[#fbba00] px-2.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-[#26282C]">
                    {project.cat.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <span className="font-heading text-xl font-semibold text-[#26282C]">{project.title}</span>
                  <span className="text-sm text-[#7B7F86]">{project.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
