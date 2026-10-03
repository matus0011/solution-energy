import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import StatsStrip from '@/components/sections/StatsStrip'
import Sectors from '@/components/sections/Sectors'
import NewsPreview from '@/components/sections/NewsPreview'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ClosingCta from '@/components/sections/ClosingCta'
// import Certifications from '@/components/sections/Certifications'
// import Partners from '@/components/sections/Partners'
// import TrustedClients from '@/components/sections/TrustedClients'

// Kolejność z maila. Z przerywników na razie zostają same liczby.
// Certyfikaty, partnerzy i „Zaufali nam” są zakomentowane niżej.
export default function HomeV2() {
  return (
    <>
      <Hero />
      <Mission />
      {/* <Certifications />

      <div className="overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-24">
          <Partners />
          <TrustedClients variant="marquee" />
        </div>
      </div> */}

      <StatsStrip />
      <Sectors />
      <NewsPreview />
      <FeaturedProjects moreLabel="Pokaż więcej" />
      <ClosingCta />
    </>
  )
}
