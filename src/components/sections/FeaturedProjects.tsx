import { Link } from 'react-router-dom'
import { projects } from '@/lib/projects'
import Reveal from '@/components/Reveal'

// Trzy wybrane realizacje na stronie głównej. Bierzemy pierwsze pozycje
// z `projects`, bo ta tablica jest już ułożona od najmocniejszych referencji —
// indeks jest zarazem adresem szczegółów (/realizacje/:id), tak jak na
// podstronie Realizacje.
const featured = projects.slice(0, 3)

interface FeaturedProjectsProps {
  moreLabel?: string
  motion?: boolean
  className?: string
  description?: string | false
}

export default function FeaturedProjects({
  moreLabel = 'Zobacz wszystkie realizacje →',
  motion = false,
  className = '',
  description = false,
}: FeaturedProjectsProps) {
  return (
    <section className={`bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14 ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <Reveal active={motion} className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">
            Wybrane realizacje
          </h2>
          {description && (
            <p className="max-w-xl text-[17px] leading-relaxed text-[#55595f]">{description}</p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {featured.map((project, index) => (
            <Reveal key={project.title} active={motion} delay={index * 90}>
            <Link
              to={`/realizacje/${index}`}
              className="group flex h-full flex-col"
            >
              <div className="relative h-[240px] overflow-hidden lg:h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-4 left-4 bg-[#fbba00] px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#26282C]">
                  {project.cat}
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <span className="font-heading text-[19px] sm:text-[20px] font-semibold leading-snug text-[#26282C] transition-colors duration-300 group-hover:text-[#fbba00]">
                  {project.title}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#808388]">
                  {project.date}
                </span>
                <span className="text-[14px] leading-relaxed text-[#606264]">{project.client}</span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal active={motion}>
        <Link
          to="/realizacje"
          className="w-fit text-[14px] font-bold uppercase tracking-[0.1em] text-[#fbba00] transition-colors duration-300 hover:text-[#26282C]"
        >
          {moreLabel}
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
