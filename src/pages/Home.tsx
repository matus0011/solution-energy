import Hero from '@/components/sections/Hero'
import GoogleTrustStrip from '@/components/sections/GoogleTrustStrip'
import Competencies from '@/components/sections/Competencies'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TrustedClients from '@/components/sections/TrustedClients'
import Certifications from '@/components/sections/Certifications'
import Faq from '@/components/sections/Faq'
import ClosingCta from '@/components/sections/ClosingCta'

// Kolejność sekcji odwzorowuje sprawdzoną strukturę strony konwertującej:
// Hero (oferta+CTA+wizual) → dowód zaufania (opinie) → rozwiązanie/oferta
// (czym się zajmujemy) → dowód w postaci realizacji (case studies) → jak
// wygląda proces → gwarancje/certyfikaty → zaufali nam (loga klientów) →
// FAQ/obiekcje → końcowe CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <GoogleTrustStrip />
      <Competencies />
      <FeaturedProjects />
      <ProcessSteps />

      {/* Certyfikaty jako ciemny blok między dwiema jasnymi sekcjami
          (Jak prowadzimy inwestycję / Zaufali nam) — Certifications niesie
          własne tło i padding, więc stoi tu samodzielnie, bez wspólnego
          kontenera. */}
      <Certifications />

      {/* TrustedClients jest pisany pod kontener strony (jak na podstronie
          Firma), więc dostaje tu obramowanie z paddingiem i szerokością —
          sam go nie niesie. */}
      <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
        <div className="mx-auto flex max-w-6xl flex-col">
          <TrustedClients />
        </div>
      </div>

      <Faq />
      <ClosingCta />
    </>
  )
}
