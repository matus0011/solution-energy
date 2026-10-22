import { Link } from 'react-router-dom'
import PhotoBanner from '@/components/PhotoBanner'
import OfferAreaTiles from '@/components/OfferAreaTiles'

export default function Oferta() {
  return <>
    <PhotoBanner title="Oferta" image="/realizacje/pruszkow-rurociagi.jpg" />
    <section aria-label="Obszary działalności" className="px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#26282c] sm:text-4xl">Obszary działalności</h2>
        <p className="mb-10 mt-4 max-w-3xl text-lg leading-relaxed text-[#55595f]">Od projektu i prefabrykacji po wykonawstwo i serwis. Wybierz obszar, aby poznać nasze możliwości.</p>
        <OfferAreaTiles />
        <div className="mt-12 text-center"><Link to="/realizacje?wersja=final" className="inline-flex min-h-12 items-center bg-[#fbba00] px-8 py-4 font-semibold text-[#26282c] hover:bg-[#e8ac00]">Pokaż wszystkie realizacje</Link></div>
      </div>
    </section>
  </>
}
