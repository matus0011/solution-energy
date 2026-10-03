import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import TrustedClients from '@/components/sections/TrustedClients'
import Partners from '@/components/sections/Partners'
import Certifications from '@/components/sections/Certifications'
import ClosingCta from '@/components/sections/ClosingCta'

// Układ z briefu klienta (PDF „Strona internetowa”).
export default function HomeV2() {
  return (
    <>
      <Hero />
      <Mission />
      <StatsStrip />
      <Sectors />
      <NewsPreview />
      <FeaturedProjects moreLabel="Pokaż więcej" />

      <div className="overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          <TrustedClients variant="marquee" />
          <Partners />
        </div>
      </div>

      <Certifications />
      <ClosingCta />
    </>
  )
}
