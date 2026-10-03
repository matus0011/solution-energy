import Hero from '@/components/sections/HeroV1'
import GoogleTrustStrip from '@/components/sections/GoogleTrustStrip'
import Competencies from '@/components/sections/Competencies'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TrustedClients from '@/components/sections/TrustedClients'
import Certifications from '@/components/sections/Certifications'
import Faq from '@/components/sections/Faq'
import ClosingCta from '@/components/sections/ClosingCta'

// Dotychczasowe demo, sprzed przebudowy według briefu PDF.
export default function HomeV1() {
  return (
    <>
      <Hero />
      <GoogleTrustStrip />
      <Competencies />
      <FeaturedProjects />
      <ProcessSteps />
      <Certifications />
      <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col">
          <TrustedClients />
        </div>
      </div>
      <Faq />
      <ClosingCta />
    </>
  )
}
