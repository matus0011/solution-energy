import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { processSteps } from '@/lib/company'
import Certifications from '@/components/sections/Certifications'

export default function JakPracujemy() {
  const [openStep, setOpenStep] = useState<number>(0)

  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg"
          alt="Jak pracujemy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Jak pracujemy
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            /{' '}
            <Link to="/firma" className="transition-colors hover:text-white">
              Firma
            </Link>{' '}
            / Jak pracujemy
          </span>
        </div>
      </div>

      <div className="px-6 pb-10 pt-8 sm:px-10 sm:pb-20 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Bazując na wieloletnim doświadczeniu, specjalizujemy się w realizacji inwestycji w formule EPC —
                od analizy i doradztwa, przez projektowanie i wykonawstwo, po uruchomienie oraz obsługę
                serwisową.
              </p>
            </div>

            <div className="flex flex-col border border-[#e5e5e5]">
              {processSteps.map((step, index) => {
                const isOpen = openStep === index
                return (
                  <div key={step.num} className={index > 0 ? 'border-t border-[#e5e5e5]' : undefined}>
                    <button
                      type="button"
                      onClick={() => setOpenStep(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors duration-300 hover:bg-[#faf7f0] sm:gap-5 sm:px-8 sm:py-5"
                    >
                      <span
                        className={`shrink-0 font-heading text-3xl font-bold sm:text-5xl lg:text-6xl ${
                          isOpen ? 'text-[#fbba00]' : 'text-[#e5e5e5]'
                        }`}
                      >
                        {step.num}
                      </span>
                      <span className="min-w-0 flex-1 font-heading text-base font-semibold uppercase text-[#26282C] sm:text-xl lg:text-2xl">
                        {step.title}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#777777] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 py-6 text-[15px] leading-relaxed text-[#777777] sm:px-8 sm:pl-[4.5rem]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certyfikaty domykają opis procesu — mówią o tym, że powyższe
              etapy są prowadzone w ramach wdrożonych systemów zarządzania,
              a nie tylko deklarowane. */}
          <Certifications description="Opisany wyżej proces prowadzimy w ramach wdrożonych systemów zarządzania — potwierdzają to certyfikaty spółki oraz uprawnienia naszych specjalistów." />
        </div>
      </div>
    </>
  )
}
