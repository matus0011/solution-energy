import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { projects } from '@/lib/projects'

// Wizualny placeholder — bez logiki, tylko do pokazania.
const paginationItems = [1, 2]
const activePaginationItem = 1

export default function Realizacje() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/peterdargatz-windmill-50512_640.jpg"
          alt="Aktualności"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Aktualności
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            / Aktualności
          </span>
        </div>
      </div>

      <div className="px-6 pb-16 pt-20 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 2xl:grid-cols-3">
            {projects.map((project, index) => (
              <Link key={index} to={`/realizacje/${index}`} className="flex cursor-pointer flex-col bg-white">
                <div className="group relative h-[280px] overflow-hidden md:h-[360px] 2xl:h-[280px]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="h-2.5 w-2.5 scale-0 rounded-full bg-[#fbba00] transition-transform duration-300 group-hover:scale-100" />
                    <span className="h-2.5 w-2.5 scale-0 rounded-full bg-[#fbba00] transition-transform delay-75 duration-300 group-hover:scale-100" />
                    <span className="h-2.5 w-2.5 scale-0 rounded-full bg-[#fbba00] transition-transform delay-150 duration-300 group-hover:scale-100" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6 pr-6">
                  <span className="line-clamp-2 h-[65px] w-fit font-heading text-[26px] font-bold leading-tight text-[#26282C] transition duration-500 hover:text-[#fbba00]/80">
                    {project.title}
                  </span>
                  <span className="text-[16px] font-bold uppercase tracking-wide text-[#777777]">
                    {project.date} / Aktualności
                  </span>
                  <span className="line-clamp-3 mb-6 mt-6 h-[81px] text-[18px] font-normal leading-normal text-[#777777]">
                    {project.desc}
                  </span>
                  <div className="group/cta flex w-fit cursor-pointer items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#fbba00] text-lg font-semibold leading-none text-[#fbba00] transition-colors duration-300 group-hover/cta:border-[#26282C] group-hover/cta:text-[#26282C]">
                      +
                    </span>
                    <span className="text-[16px] font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 group-hover/cta:text-[#26282C]">
                      Czytaj więcej
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <nav aria-label="Paginacja" className="mb-6 mt-6 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-slate-200 text-lg font-semibold leading-none text-slate-300 transition-colors duration-300 hover:border-[#26282C] hover:text-[#26282C]">
              ‹
            </span>

            {paginationItems.map((num) => (
              <span
                key={num}
                className={clsx(
                  'flex h-10 w-10 cursor-pointer items-center justify-center text-[16px] font-bold transition-colors duration-300',
                  num === activePaginationItem
                    ? 'bg-[#fbba00] text-[#26282C]'
                    : 'border-2 border-[#fbba00] text-[#fbba00] hover:bg-[#fbba00] hover:text-[#26282C]',
                )}
              >
                {num}
              </span>
            ))}

            <span className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-[#fbba00] text-lg font-semibold leading-none text-[#fbba00] transition-colors duration-300 hover:border-[#26282C] hover:text-[#26282C]">
              ›
            </span>
          </nav>
        </div>
      </div>
    </>
  )
}
