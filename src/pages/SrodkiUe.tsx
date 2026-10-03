import { Link } from 'react-router-dom'

export default function SrodkiUe() {
  return (
    <>
      <div className="relative mx-auto mb-6 flex h-[200px] w-full max-w-screen-2xl items-center overflow-hidden sm:h-[380px]">
        <img
          src="/realizacje/torun-geotermia.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-2 px-6 text-center sm:px-10 lg:px-14">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Środki UE
          </h1>
          <span className="pt-4 text-base font-semibold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              Strona główna
            </Link>{' '}
            /{' '}
            <Link to="/firma" className="transition-colors hover:text-white">
              Firma
            </Link>{' '}
            / Środki UE
          </span>
        </div>
      </div>

      <div className="px-6 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <img
            src="/srodki-ue/banner-eu.svg"
            alt="Fundusze Europejskie, flaga Rzeczypospolitej Polskiej, Unia Europejska"
            className="h-auto w-full"
          />
          <p className="text-[17px] leading-relaxed text-[#777777]">
            Projekt współfinansowany ze środków [nazwa programu] w ramach [nazwa funduszu].
          </p>
        </div>
      </div>
    </>
  )
}
