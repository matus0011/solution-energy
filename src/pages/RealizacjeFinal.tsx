import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categorizedProjects, projectSectors, type ProjectSector } from '@/lib/projectSectors'
import TrustedClients from '@/components/sections/TrustedClients'

export default function RealizacjeFinal() {
  const [sector, setSector] = useState<ProjectSector | 'Wszystkie'>('Wszystkie')
  const [expanded, setExpanded] = useState(false)
  const filtered = categorizedProjects.filter((project) => sector === 'Wszystkie' || project.sectors.includes(sector))
  const visible = expanded ? filtered : filtered.slice(0, 6)

  return <>
    <section className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[320px]">
      <img src="/realizacje/pruszkow-hala-kotlowni.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Realizacje</h1>
        <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
          <Link to="/?wersja=final" className="transition-colors hover:text-white">Strona główna</Link> / Realizacje
        </span>
      </div>
    </section>
    <section className="px-6 py-12 sm:px-10 lg:px-14" aria-label="Katalog realizacji">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-8" role="group" aria-label="Filtruj według obszaru działalności">
          {(['Wszystkie', ...projectSectors] as const).map((name) => <button key={name} type="button" aria-pressed={sector === name} aria-controls="project-results" onClick={() => { setSector(name); setExpanded(false) }} className={`min-h-11 max-w-full border-b-2 bg-transparent py-2 text-left text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#26282c] ${sector === name ? 'border-[#fbba00] text-[#26282c]' : 'border-transparent text-[#676b72] hover:border-[#fbba00] hover:text-[#26282c]'}`}>{name}</button>)}
        </div>
        <p role="status" className="mb-6 text-sm text-[#55595f]">{sector} — wyświetlono {visible.length} z {filtered.length} realizacji</p>
        <div id="project-results" className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => <Link key={project.id} to={`/realizacje/${project.id}?wersja=final`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b58200]">
            <div className="aspect-[4/3] overflow-hidden bg-[#f0f0ef]"><img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" /></div>
            <p className="mb-2 mt-5 text-sm text-[#676b72]">{project.sectors.join(' / ')}</p>
            <h2 className="font-heading text-[23px] font-semibold leading-snug text-[#26282c]">{project.title}</h2>
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#55595f]">{project.desc}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#26282c]">Zobacz realizację <ArrowUpRight size={18} aria-hidden="true" /></span>
          </Link>)}
        </div>
        {(sector !== 'Wszystkie' || !expanded) && <div className="mt-12 text-center"><button type="button" onClick={() => { setSector('Wszystkie'); setExpanded(true) }} className="min-h-12 bg-[#fbba00] px-8 py-4 font-semibold text-[#26282c] hover:bg-[#e8ac00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Pokaż wszystkie realizacje</button></div>}
      </div>
    </section>
    <section className="bg-[#f5f4f1] px-6 py-16 sm:px-10 lg:px-14"><div className="mx-auto max-w-[1380px]"><TrustedClients variant="marquee" description={false} /></div></section>
  </>
}
