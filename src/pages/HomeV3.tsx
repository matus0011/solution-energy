import Hero from '@/components/sections/Hero'
import EnergyTimeline from '@/components/sections/EnergyTimeline'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import TrustedClients from '@/components/sections/TrustedClients'
import { certificates, partners } from '@/lib/company'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { HomeVariantContext } from '@/lib/homeVariant'

// Układ V2. Zamiast sekcji Mission stoi oś czasu: od etapu geotermii
// cała strona przechodzi z żółtego akcentu na zielony.
// Tła idą na przemian: ciepła szarość #f5f4f1 i biel.
export default function HomeV3() {
  return (
    <HomeVariantContext.Provider value="v2">
      <Hero />
      <EnergyTimeline />
      <StatsStrip />
      <Sectors />
      <NewsPreview />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients
            variant="marquee"
            logos={partners}
            title="Partnerzy"
            description="Energy Solutions skupia wokół siebie marki, których potencjał pozwala dostarczyć inwestorom najlepsze dostępne rozwiązania. Wykorzystując specjalistyczne możliwości swoich partnerów, firma jest w stanie sprostać nawet najbardziej wymagającym projektom."
            descriptionClassName="max-w-3xl"
          />
        </div>
      </section>
      <FeaturedProjects moreLabel="Pokaż więcej" motion />
      <section className="bg-[#f5f4f1] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients variant="marquee" logos={certificates} title="Certyfikaty" description={false} size="xl" />
        </div>
      </section>
    </HomeVariantContext.Provider>
  )
}
