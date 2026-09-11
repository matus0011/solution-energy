import Hero from '@/components/sections/Hero'
import GoogleTrustStrip from '@/components/sections/GoogleTrustStrip'
import Competencies from '@/components/sections/Competencies'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TrustedClients from '@/components/sections/TrustedClients'
import Certifications from '@/components/sections/Certifications'

export default function Home() {
  return (
    <>
      <Hero />
      <GoogleTrustStrip />
      <FeaturedProjects />

      {/* Certyfikaty jako ciemny blok między dwiema białymi sekcjami
          (Realizacje / Obszary działalności) — Certifications niesie własne
          tło i padding, więc stoi tu samodzielnie, bez wspólnego kontenera. */}
      <Certifications />

      <Competencies />
      <ProcessSteps />

      {/* TrustedClients jest pisany pod kontener strony (jak na podstronie
          Firma), więc dostaje tu obramowanie z paddingiem i szerokością —
          sam go nie niesie. */}
      <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col">
          <TrustedClients />
        </div>
      </div>
    </>
  )
}
