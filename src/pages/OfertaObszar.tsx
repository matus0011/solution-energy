import { Link, useParams } from 'react-router-dom'
import PhotoBanner from '@/components/PhotoBanner'
import { offerAreas } from '@/lib/offerAreas'

export default function OfertaObszar() {
  const { slug } = useParams()
  const area = offerAreas.find((item) => item.slug === slug)
  if (!area) return <section className="mx-auto max-w-[1380px] px-6 py-20"><h1 className="font-heading text-3xl font-semibold">Nie znaleziono obszaru</h1><Link to="/oferta?wersja=final" className="mt-6 inline-block underline">Wróć do oferty</Link></section>
  return <>
    <PhotoBanner title={area.title} image={area.image} detail />
    <section className="px-6 py-12 sm:px-10 lg:px-14"><div className="mx-auto max-w-[1380px]">
      <p className="max-w-4xl text-lg leading-[1.8] text-[#55595f]">{area.description}</p>
      <h2 className="mb-6 mt-12 font-heading text-2xl font-semibold text-[#26282c] sm:text-3xl">Zdjęcia z realizacji</h2>
      <div className="grid gap-6 md:grid-cols-3">{area.gallery.map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />)}</div>
      <div className="mt-12"><Link to="/realizacje?wersja=final" className="inline-flex min-h-12 items-center bg-[#fbba00] px-8 py-4 font-semibold text-[#26282c] hover:bg-[#e8ac00]">Pokaż wszystkie realizacje</Link></div>
    </div></section>
  </>
}
