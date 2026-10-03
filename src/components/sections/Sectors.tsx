import { Link } from 'react-router-dom'
import { sectors } from '@/lib/company'
import Reveal from '@/components/Reveal'

const featured = sectors.find((sector) => sector.featured)
const rest = sectors.filter((sector) => !sector.featured)

export default function Sectors() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Reveal className="mb-2 flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Sektory działalności
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#777777]">
            Energetyka jest naszym głównym obszarem. Obok niej prowadzimy prace dla przemysłu,
            ochrony środowiska, serwisu i własnej produkcji.
          </p>
        </Reveal>

        {featured && (
          <Reveal>
            <Link
            to="/firma/obszary-dzialalnosci"
            className="group relative flex min-h-[400px] items-end overflow-hidden sm:min-h-[480px]"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
            <div className="relative flex max-w-2xl flex-col gap-3 p-7 sm:p-10">
              <h3 className="font-heading text-3xl font-bold uppercase text-white sm:text-5xl">
                {featured.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 sm:text-[17px]">{featured.lead}</p>
            </div>
          </Link>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {rest.map((sector, index) => (
            <Reveal key={sector.title} delay={index % 2 === 0 ? 0 : 90} className="h-full">
            <Link
              to="/firma/obszary-dzialalnosci"
              className="group relative flex h-full min-h-[260px] items-end overflow-hidden sm:min-h-[300px]"
            >
              <img
                src={sector.image}
                alt={sector.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
              <div className="relative flex flex-col gap-2 p-6">
                <h3 className="font-heading text-xl font-bold uppercase text-white sm:text-2xl">
                  {sector.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/85">{sector.lead}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
