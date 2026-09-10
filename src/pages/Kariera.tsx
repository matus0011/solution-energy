import { useState } from 'react'
import { Link } from 'react-router-dom'
import { jobs } from '@/lib/jobs'

export default function Kariera() {
  // Akordeon: który wiersz jest rozwinięty (jeden na raz, jak w referencji).
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg"
          alt="Kariera"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Kariera
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            / Kariera
          </span>
        </div>
      </div>

      <div className="px-6 pb-10 pt-8 sm:px-10 sm:pb-20 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-16">
          {/* Lista ofert — wiersze z rozwijanym opisem, jak w referencji. */}
          <div className="flex flex-col border-t border-[#e5e5e5]">
            {jobs.map((job, index) => {
              const isOpen = openIndex === index
              return (
                <div key={job.title} className="border-b border-[#e5e5e5] py-6 sm:py-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#fbba00]">
                        Oferta pracy
                      </span>
                      <span className="my-3 font-heading text-2xl font-bold text-[#26282C] sm:text-[28px]">
                        {job.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-bold uppercase tracking-wide text-[#777777]">
                        <span>{job.type}</span>
                        <span aria-hidden="true">•</span>
                        <span>{job.salary}</span>
                        <span aria-hidden="true">•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? 'Zwiń szczegóły oferty' : 'Rozwiń szczegóły oferty'}
                        className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#fbba00] text-[#fbba00] transition-colors duration-300 hover:border-[#26282C] hover:text-[#26282C]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <a
                        href="mailto:biuro@energysolutions.pl"
                        className="w-fit bg-[#fbba00] px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-[#26282C] transition-colors duration-300 hover:bg-[#26282C] hover:text-white"
                      >
                        Aplikuj teraz
                      </a>
                    </div>
                  </div>

                  <div
                    className={
                      isOpen
                        ? 'grid grid-rows-[1fr] pt-6 opacity-100 transition-all duration-300'
                        : 'grid grid-rows-[0fr] opacity-0 transition-all duration-300'
                    }
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-[17px] leading-relaxed text-[#777777]">{job.desc}</p>
                      <div className="pt-4 text-[15px] font-bold uppercase tracking-wide text-[#777777]">
                        Dział: <span className="text-[#26282C]">{job.department}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
