import { Link } from 'react-router-dom'
import { news } from '@/lib/news'

export default function Aktualnosci() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[320px]">
        <img
          src="/realizacje/konin-geotermia.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Aktualności
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            / Aktualności
          </span>
        </div>
      </div>

      <div className="px-6 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-12 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <p className="max-w-2xl text-[17px] leading-relaxed text-[#777777]">
            Wersja demo. Poniższe informacje opisują realizacje z portfolio i prowadzą do ich kart.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {news.map((item) => (
              <Link key={item.title} to={item.href} className="group flex flex-col">
                <div className="h-[220px] overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-2 pt-5">
                  <span className="text-[13px] font-bold uppercase tracking-wide text-[#fbba00]">{item.date}</span>
                  <span className="font-heading text-[20px] font-bold leading-tight text-[#26282C] transition-colors duration-300 group-hover:text-[#fbba00]">
                    {item.title}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#777777]">{item.excerpt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
