import { Link } from 'react-router-dom'
import { offerAreas, offerAreaUrl } from '@/lib/offerAreas'

export default function OfferAreaTiles() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {offerAreas.map((area) => (
        <Link
          key={area.slug}
          to={offerAreaUrl(area.slug)}
          aria-label={area.title}
          className="group relative flex min-h-[360px] items-end overflow-hidden p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b58200] sm:min-h-[440px] xl:min-h-[500px]"
        >
          <img
            src={area.image}
            alt={area.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <h3 className="relative font-heading text-[24px] font-semibold leading-[1.25] text-white underline-offset-4 group-hover:underline xl:text-[22px]">
            {area.title}
          </h3>
        </Link>
      ))}
    </div>
  )
}
