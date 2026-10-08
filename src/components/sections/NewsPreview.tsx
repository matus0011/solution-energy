import { Link } from 'react-router-dom'
import { news } from '@/lib/news'
import Reveal from '@/components/Reveal'

interface NewsPreviewProps {
  description?: string | false
}

export default function NewsPreview({ description = false }: NewsPreviewProps = {}) {
  return (
    <section className="bg-white px-6 pt-16 pb-4 sm:px-10 sm:pt-24 sm:pb-6 lg:px-14">
      <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col gap-10 sm:gap-14">
        <Reveal className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">
            Aktualności
          </h2>
          {description && (
            <p className="max-w-xl text-[17px] leading-relaxed text-[#55595f]">{description}</p>
          )}
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
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#fbba00]">{item.date}</span>
                <span className="font-heading text-[19px] sm:text-[20px] font-semibold leading-snug text-[#26282C] transition-colors duration-300 group-hover:text-[#fbba00]">
                  {item.title}
                </span>
                <span className="text-[14.5px] leading-relaxed text-[#55595f]">{item.excerpt}</span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <Link
          to="/aktualnosci"
          className="w-fit text-[14px] font-bold uppercase tracking-[0.1em] text-[#fbba00] transition-colors duration-300 hover:text-[#26282C]"
        >
          Pokaż więcej
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
