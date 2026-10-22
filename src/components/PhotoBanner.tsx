import { Link } from 'react-router-dom'

export default function PhotoBanner({ title, image, detail = false, flushBottom = false }: { title: string; image: string; detail?: boolean; flushBottom?: boolean }) {
  return <section className={`relative mx-auto ${flushBottom ? '' : 'mb-6'} flex min-h-[200px] w-full max-w-screen-2xl items-center overflow-hidden py-8 sm:min-h-[320px]`}>
    <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative mx-auto flex w-full max-w-[1380px] flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
      <h1 className={`max-w-5xl font-heading font-bold uppercase tracking-wide text-white ${detail ? 'text-2xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>{title}</h1>
      <nav aria-label="Ścieżka nawigacji" className="pt-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/80">
        <Link to="/?wersja=final" className="hover:text-white">Strona główna</Link> / {detail ? <><Link to="/oferta?wersja=final" className="hover:text-white">Oferta</Link> / <span>{title}</span></> : <span>{title}</span>}
      </nav>
    </div>
  </section>
}
