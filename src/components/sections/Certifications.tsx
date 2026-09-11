import { BadgeCheck, HardHat, Leaf, Gauge, Flame } from 'lucide-react'
import { certifications } from '@/lib/company'
import CardSlider from '@/components/CardSlider'

// Sekcja "Certyfikaty i uprawnienia" — ciemny blok z poziomym sliderem kart.
// Ikony są rezerwą dla pozycji bez oficjalnego znaku normy (np. WPQR), więc
// lista musi odpowiadać kolejnością tablicy `certifications`.
const certIcons = [BadgeCheck, HardHat, Leaf, Gauge, Flame]

interface CertificationsProps {
  title?: string
  description?: string
}

export default function Certifications({
  title = 'Certyfikaty i uprawnienia',
  description = 'Traktujemy zadania kompleksowo — potwierdzają to certyfikaty spółki oraz kwalifikacje naszych specjalistów.',
}: CertificationsProps) {
  return (
    <div className="flex flex-col gap-10 bg-[#26282C] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-[42px]">{title}</h2>
        <p className="max-w-2xl text-[17px] leading-relaxed text-white/70">{description}</p>
      </div>

      <CardSlider label={title} tone="dark" loop>
        {certifications.map((cert, index) => {
          const Icon = certIcons[index]
          return (
            <div
              key={cert.code}
              className="group flex h-full min-h-[280px] flex-col gap-5 border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#fbba00]/60 hover:bg-white/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.code} className="h-full w-full object-contain" />
                ) : (
                  <Icon className="h-11 w-11 text-[#fbba00]" strokeWidth={1.75} aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[22px] font-bold leading-tight text-white">{cert.code}</span>
                <span className="text-[13px] font-semibold uppercase leading-snug tracking-wide text-[#fbba00]">
                  {cert.title}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-white/60">{cert.desc}</p>
            </div>
          )
        })}
      </CardSlider>
    </div>
  )
}
