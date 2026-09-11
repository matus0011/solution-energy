import { Link } from 'react-router-dom'
import { projects } from '@/lib/projects'

// Trzy wybrane realizacje na stronie głównej. Bierzemy pierwsze pozycje
// z `projects`, bo ta tablica jest już ułożona od najmocniejszych referencji —
// indeks jest zarazem adresem szczegółów (/realizacje/:id), tak jak na
// podstronie Realizacje.
const featured = projects.slice(0, 3)

export default function FeaturedProjects() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Wybrane realizacje
          </h2>
          <p className="max-w-3xl text-[17px] leading-relaxed text-[#777777]">
            Ciepłownie geotermalne, obiekty energetyczne i układy kogeneracyjne — realizowane
            samodzielnie oraz w konsorcjach z czołowymi wykonawcami na rynku.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {featured.map((project, index) => (
            <Link key={project.title} to={`/realizacje/${index}`} className="group flex flex-col">
              <div className="relative h-[240px] overflow-hidden lg:h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-4 left-4 bg-[#fbba00] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#26282C]">
                  {project.cat}
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <span className="font-heading text-[22px] font-bold leading-tight text-[#26282C] transition-colors duration-300 group-hover:text-[#fbba00]">
                  {project.title}
                </span>
                <span className="text-[14px] font-bold uppercase tracking-wide text-[#777777]">
                  {project.date}
                </span>
                <span className="text-[15px] leading-relaxed text-[#777777]">{project.client}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/realizacje"
          className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-all duration-300 hover:tracking-[0.08em] hover:text-[#26282C]"
        >
          Zobacz wszystkie realizacje →
        </Link>
      </div>
    </section>
  )
}
