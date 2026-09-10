import { Link } from 'react-router-dom'
import { CalendarRange, Layers, ShieldCheck, BadgeCheck, HardHat, Leaf, Gauge, Flame } from 'lucide-react'
import { companyFacts, certifications, partners, trustedClients } from '@/lib/company'
import LogoWall from '@/components/LogoWall'

const factIcons = [CalendarRange, Layers, ShieldCheck]
const certIcons = [BadgeCheck, HardHat, Leaf, Gauge, Flame]

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

          {/* Certyfikaty i uprawnienia */}
          <div className="flex flex-col gap-10 bg-[#26282C] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-[42px]">
                Certyfikaty i uprawnienia
              </h2>
              <p className="max-w-2xl text-[17px] leading-relaxed text-white/70">
                Traktujemy zadania kompleksowo — potwierdzają to certyfikaty spółki oraz kwalifikacje naszych
                specjalistów.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => {
                const Icon = certIcons[index]
                return (
                  <div
                    key={cert.code}
                    className="group flex min-h-[230px] gap-5 border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#fbba00]/60 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.code} className="h-full w-full object-contain" />
                      ) : (
                        <Icon className="h-9 w-9 text-[#fbba00]" strokeWidth={1.75} aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <span className="font-heading text-xl font-bold text-white">{cert.code}</span>
                        <span className="text-[13px] font-semibold uppercase tracking-wide text-[#fbba00]">
                          {cert.title}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-white/60">{cert.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Oni nam zaufali */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
                Oni nam zaufali
              </h2>
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Wysoką wiarygodność spółki oraz profesjonalizm wykonywanych usług potwierdza liczne grono
                zadowolonych klientów.
              </p>
            </div>
            <LogoWall logos={trustedClients} />
          </div>

          {/* Partnerzy */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
                Partnerzy
              </h2>
              <p className="text-[17px] leading-relaxed text-[#777777]">
                Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom
                najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma
                jest w stanie sprostać nawet najbardziej wymagającym projektom.
              </p>
            </div>
            <LogoWall logos={partners} />
          </div>
        </div>
      </div>
    </>
  )
}
