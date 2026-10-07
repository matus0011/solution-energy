import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import TrustedClients from '@/components/sections/TrustedClients'
import { partners, trustedClients } from '@/lib/company'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ClosingCta from '@/components/sections/ClosingCta'
// import Certifications from '@/components/sections/Certifications'
// import Partners from '@/components/sections/Partners'

// Kolejność z maila. Z przerywników na razie zostają same liczby.
// Certyfikaty są zakomentowane niżej. „Oni nam zaufali” stoi między
// aktualnościami a wybranymi realizacjami, a „Partnerzy” tuż za nimi.
export default function HomeV2() {
  return (
    <>
      <Hero />
      <Mission />
      {/* <Certifications />

      <div className="overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          <Partners />
        </div>
      </div> */}

      <StatsStrip />
      <Sectors />
      <NewsPreview />
      <section className="bg-[#f7f7f7] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col">
          <TrustedClients variant="marquee" logos={[...trustedClients, ...partners]} />
        </div>
      </section>
      <FeaturedProjects moreLabel="Pokaż więcej" motion />
      <section className="bg-[#f7f7f7] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col">
          <TrustedClients
            variant="marquee"
            logos={partners}
            title="Partnerzy"
            description="Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma jest w stanie sprostać nawet najbardziej wymagającym projektom."
          />
        </div>
      </section>
      <ClosingCta motion />
    </>
  )
}
