import { Link } from 'react-router-dom'
import { projects, finalFeaturedProjects } from '@/lib/projects'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { useIsV2 } from '@/lib/homeVariant'

// Trzy wybrane realizacje na stronie głównej. Bierzemy pierwsze pozycje
// z `projects`, bo ta tablica jest już ułożona od najmocniejszych referencji —
// indeks jest zarazem adresem szczegółów (/realizacje/:id), tak jak na
// podstronie Realizacje.
const featured = projects.slice(0, 3)

interface FeaturedProjectsProps {
  final?: boolean
  moreLabel?: string
  motion?: boolean
  className?: string
  description?: string | false
}

export default function FeaturedProjects({
  final = false,
  moreLabel = 'Zobacz wszystkie realizacje →',
  motion = false,
  className = '',
  description = false,
}: FeaturedProjectsProps) {
  const v2 = useIsV2()

  return (
    <section className={`bg-white px-6 sm:px-10 lg:px-14 ${v2 ? 'py-20 lg:py-28' : 'py-16 sm:py-24'} ${className}`}>
      <div
        className={`mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col ${
          v2 ? 'gap-12 lg:gap-16' : 'gap-10 sm:gap-14'
        }`}
      >
        <Reveal active={motion} className="flex flex-col gap-3">
          <SectionTitle className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">
            Wybrane realizacje
          </SectionTitle>
          {description && (
            <p className="max-w-xl text-[17px] leading-relaxed text-[#55595f]">{description}</p>
          )}
        </Reveal>

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-3 ${v2 ? 'md:gap-8' : 'md:gap-6'}`}>
          {(final ? finalFeaturedProjects : featured).map((project, index) => (
            <Reveal key={project.title} active={motion} delay={index * 90}>
            <Link
              to={`/realizacje/${projects.indexOf(project)}`}
              className="group flex h-full flex-col"
            >
              <div className={`relative overflow-hidden ${v2 ? 'h-[260px] lg:h-[340px]' : 'h-[240px] lg:h-[280px]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-transform ${
                    v2 ? 'duration-700 ease-out group-hover:scale-[1.06]' : 'duration-500 group-hover:scale-110'
                  }`}
                />
                {v2 && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                )}
                <span className="absolute bottom-4 left-4 bg-[var(--brand-accent)] px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#26282C]">
                  {project.cat}
                </span>
              </div>

              <div className={`flex flex-col gap-2 ${v2 ? 'pt-6' : 'pt-5'}`}>
                <span
                  className={`font-heading font-semibold leading-snug text-[#26282C] transition-colors duration-300 ${
                    v2 ? 'text-[20px] sm:text-[22px]' : 'text-[19px] sm:text-[20px] group-hover:text-[var(--brand-accent)]'
                  }`}
                >
                  <span className={v2 ? 'es-card-title pb-0.5' : ''}>{project.title}</span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#808388]">
                  {project.date}
                </span>
                <span className={`leading-relaxed text-[#606264] ${v2 ? 'text-[15px]' : 'text-[14px]'}`}>{project.client}</span>
                {final && <p className="text-[15px] leading-relaxed text-[#606264]">{project.desc}</p>}
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal active={motion}>
        <Link
          to="/realizacje"
          className="w-fit text-[14px] font-bold uppercase tracking-[0.1em] text-[var(--brand-accent)] transition-colors duration-300 hover:text-[#26282C]"
        >
          {moreLabel}
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
