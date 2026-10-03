import { Link } from 'react-router-dom'
import { news } from '@/lib/news'
import Reveal from '@/components/Reveal'

export default function NewsPreview() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <Reveal className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Aktualności
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#777777]">
            Najnowsze informacje o realizacjach. W wersji demo wpisy pochodzą z portfolio spółki.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
            <Link
              to={item.href}
              className="group flex h-full flex-col"
            >
              <div className="h-[220px] overflow-hidden lg:h-[240px]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#fbba00]">{item.date}</span>
                <span className="font-heading text-[20px] font-bold leading-tight text-[#26282C] transition-colors duration-300 group-hover:text-[#fbba00]">
                  {item.title}
                </span>
                <span className="text-[15px] leading-relaxed text-[#777777]">{item.excerpt}</span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <Link
          to="/aktualnosci"
          className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 hover:text-[#26282C]"
        >
          Pokaż więcej
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
