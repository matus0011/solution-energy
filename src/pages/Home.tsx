import Hero from '@/components/sections/Hero'
import EnergyTimeline from '@/components/sections/EnergyTimeline'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import TrustedClients from '@/components/sections/TrustedClients'
import { finalPartners, finalCertificates } from '@/lib/company'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { HomeVariantContext } from '@/lib/homeVariant'

export default function Home() {
  return (
    <HomeVariantContext.Provider value="v3">
      <Hero />
      <EnergyTimeline final />
      <StatsStrip final />
      <Sectors final />
      <NewsPreview final />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients
            variant="marquee"
            logos={finalPartners}
            marqueeDuration={finalPartners.length * 7.5}
            title="Partnerzy"
            description="Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma jest w stanie sprostać nawet najbardziej wymagającym projektom."
            descriptionClassName="max-w-3xl"
          />
        </div>
      </section>
      <FeaturedProjects final moreLabel="Pokaż więcej" motion />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients variant="marquee" logos={finalCertificates} title="Certyfikaty" description="Systemy zarządzania jakością, BHP i środowiskiem, zgodność z dyrektywą PED 2014/68/UE w module A2 oraz zatwierdzone technologie spawania WPQR." size="xl" />
        </div>
      </section>
    </HomeVariantContext.Provider>
  )
}
