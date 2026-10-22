import Hero from '@/components/sections/Hero'
import EnergyTimeline from '@/components/sections/EnergyTimeline'
import EnergyTimelineVertical from '@/components/sections/EnergyTimelineVertical'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import TrustedClients from '@/components/sections/TrustedClients'
import { certificates, partners, finalPartners, finalCertificates } from '@/lib/company'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { HomeVariantContext } from '@/lib/homeVariant'

// Układ V4: to samo co V3, ale karty osi czasu mają rysunki etapów zamiast zdjęć.
// HomeV6 (układ V5) renderuje go z `decarb={false}`.
export default function HomeV5({ decarb = true, final = false }: { decarb?: boolean; final?: boolean }) {
  return (
    <HomeVariantContext.Provider value="v3">
      <Hero />
      {final ? <EnergyTimeline final /> : <EnergyTimelineVertical media="icons" decarb={decarb} />}
      <StatsStrip final={final} />
      <Sectors final={final} />
      <NewsPreview final={final} />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients
            variant="marquee"
            logos={final ? finalPartners : partners}
            marqueeDuration={final ? finalPartners.length * 7.5 : undefined}
            title="Partnerzy"
            description="Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma jest w stanie sprostać nawet najbardziej wymagającym projektom."
            descriptionClassName="max-w-3xl"
          />
        </div>
      </section>
      <FeaturedProjects final={final} moreLabel="Pokaż więcej" motion />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients variant="marquee" logos={final ? finalCertificates : certificates} title="Certyfikaty" description={final ? 'Systemy zarządzania jakością, BHP i środowiskiem, zgodność z dyrektywą PED 2014/68/UE w module A2 oraz zatwierdzone technologie spawania WPQR.' : false} size="xl" />
        </div>
      </section>
    </HomeVariantContext.Provider>
  )
}
