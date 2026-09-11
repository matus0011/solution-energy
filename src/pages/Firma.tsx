import { Link } from 'react-router-dom'
import { CalendarRange, Layers, ShieldCheck } from 'lucide-react'
import { companyFacts } from '@/lib/company'
import TrustedClients from '@/components/sections/TrustedClients'
import Certifications from '@/components/sections/Certifications'
import Partners from '@/components/sections/Partners'

const factIcons = [CalendarRange, Layers, ShieldCheck]

export default function Firma() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="https://pixabay.com/images/download/mrganso-photovoltaic-system-2742302_640.jpg"
          alt="Firma"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Firma
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            / Firma
          </span>
        </div>
      </div>

      <div className="px-6 pb-10 pt-8 sm:px-10 sm:pb-20 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          {/* O firmie */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[280px] w-full overflow-hidden sm:h-[420px]">
              <img
                src="https://pixabay.com/images/download/peterdargatz-windmill-50512_640.jpg"
                alt="Energy Solutions — siedziba w Tarnowie"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[28px] font-normal uppercase leading-tight text-[#26282C] sm:text-[42px]">
                Doświadczony i odpowiedzialny partner biznesowy
              </h2>
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Powierzane nam zadania traktujemy kompleksowo. Dzięki takiemu podejściu wykonujemy z optymalnym
                efektem nawet najbardziej nietypowe i problematyczne realizacje, których nie potrafią podjąć się
                inni.
              </p>
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Wspieramy klientów na każdym etapie procesu inwestycyjnego — od projektowania i realizacji, po
                serwis gwarancyjny i pogwarancyjny. To procentuje.
              </p>
            </div>
          </div>

          {/* Fakty w liczbach */}
          <div className="grid grid-cols-1 gap-8 bg-[#fbba00] px-6 py-10 sm:grid-cols-3 sm:gap-6 sm:px-10 sm:py-12 lg:px-14">
            {companyFacts.map((fact, index) => {
              const Icon = factIcons[index]
              return (
                <div
                  key={fact.label}
                  className="group flex flex-col items-center gap-1.5 border-l-[3px] border-[#26282C] pl-5 text-center transition-all duration-300 hover:border-white hover:pl-7 sm:items-start sm:text-left"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-8 w-8 text-[#26282C] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="font-heading text-4xl font-bold leading-none text-[#26282C] sm:text-5xl">
                      {fact.value}
                    </span>
                  </div>
                  <span className="text-[15px] font-semibold text-[#5c4a10]">{fact.label}</span>
                </div>
              )
            })}
          </div>

          {/* Zaufanie: najpierw logotypy klientów (czytelne w ułamku sekundy),
              potem formalne potwierdzenie certyfikatami, na końcu partnerzy
              technologiczni — od najmocniejszego sygnału do najsłabszego. */}
          <TrustedClients />

          <Certifications />

          <Partners />

        </div>
      </div>
    </>
  )
}
