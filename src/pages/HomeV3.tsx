import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import TrustedClients from '@/components/sections/TrustedClients'
import { certificates, partners } from '@/lib/company'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

// Układ V2 — utworzony jako kopia układu V1 (HomeV2), gotowy do modyfikacji i dalszego rozwoju.
export default function HomeV3() {
  return (
    <>
      <Hero />
      <Mission />
      <StatsStrip />
      <Sectors />
      <NewsPreview />
      <section className="bg-[#f7f7f7] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
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
      <section className="bg-[#f7f7f7] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col">
          <TrustedClients variant="marquee" logos={certificates} title="Certyfikaty" description={false} size="xl" />
        </div>
      </section>
    </>
  )
}
