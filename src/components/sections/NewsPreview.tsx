import { Link } from 'react-router-dom'
import { news } from '@/lib/news'
import Reveal from '@/components/Reveal'
import SectionTitle from '@/components/SectionTitle'
import { useIsV2 } from '@/lib/homeVariant'

interface NewsPreviewProps {
  description?: string | false
}

export default function NewsPreview({ description = false }: NewsPreviewProps = {}) {
  const v2 = useIsV2()

  return (
    <section
      className={`bg-white px-6 sm:px-10 lg:px-14 ${
        v2 ? 'py-20 lg:py-28' : 'pt-16 pb-4 sm:pt-24 sm:pb-6'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col ${
          v2 ? 'gap-12 lg:gap-16' : 'gap-10 sm:gap-14'
        }`}
      >
        <Reveal className="flex flex-col gap-3">
          <SectionTitle className="font-heading text-3xl font-semibold text-[#26282C] sm:text-[38px] tracking-tight">
            Aktualności
          </SectionTitle>
          {description && (
            <p className="max-w-xl text-[17px] leading-relaxed text-[#55595f]">{description}</p>
          )}
        </Reveal>

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-3 ${v2 ? 'md:gap-8' : 'md:gap-6'}`}>
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
            <Link
              to={item.href}
              className="group flex h-full flex-col"
            >
              <div className={`overflow-hidden ${v2 ? 'h-[240px] lg:h-[280px]' : 'h-[220px] lg:h-[240px]'}`}>
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className={`flex flex-col gap-2 ${v2 ? 'pt-6' : 'pt-5'}`}>
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--brand-accent)]">{item.date}</span>
                <span
                  className={`font-heading font-semibold leading-snug text-[#26282C] transition-colors duration-300 ${
                    v2 ? 'text-[20px] sm:text-[22px]' : 'text-[19px] sm:text-[20px] group-hover:text-[var(--brand-accent)]'
                  }`}
                >
                  <span className={v2 ? 'es-card-title pb-0.5' : ''}>{item.title}</span>
                </span>
                <span className={`leading-relaxed text-[#55595f] ${v2 ? 'text-[15px]' : 'text-[14.5px]'}`}>{item.excerpt}</span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <Link
          to="/aktualnosci"
          className="w-fit text-[14px] font-bold uppercase tracking-[0.1em] text-[var(--brand-accent)] transition-colors duration-300 hover:text-[#26282C]"
        >
          Pokaż więcej
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
