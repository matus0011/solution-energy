import { Link } from 'react-router-dom'
import ThreeCanvas from '@/components/ThreeCanvas'

export default function Mission() {
  return (
    <section className="relative z-20 flex min-h-[85vh] w-full items-center overflow-x-clip bg-[#f5f4f1] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-48 xl:py-56">
      {/* Subtelny gradient kropek tylko na dole sekcji (góra i obszar tekstu są gładkie) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#e4e2dc_1.4px,transparent_1.5px)] bg-[length:22px_22px] [mask-image:linear-gradient(to_bottom,transparent_45%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_45%,black_100%)]"
        aria-hidden="true"
      />
      {/* MODEL 3D: Przestrzenna scena Three.js z wyższym z-index nachodząca na sąsiednie sekcje */}
      <div className="pointer-events-none absolute -top-12 -bottom-20 sm:-top-16 sm:-bottom-28 lg:-top-20 lg:-bottom-36 xl:-bottom-44 right-0 flex w-full items-center justify-center lg:w-[58%] xl:w-[54%] z-20">
        <div className="pointer-events-auto relative h-full w-full min-h-[640px] sm:min-h-[760px] lg:min-h-[880px] xl:min-h-[960px] flex items-center justify-center">
          <ThreeCanvas modelPath="/models/instalacja.glb" />
        </div>
      </div>

      {/* ZAWARTOŚĆ NA PIERWSZYM PLANIE: Monumentalna, powiększona typografia */}
      <div className="relative z-30 mx-auto w-full max-w-[1380px] 2xl:max-w-screen-2xl">
        <div className="max-w-xl lg:max-w-[620px] xl:max-w-[680px]">
          {/* cta__text-wrapper */}
          <div className="flex flex-col items-start text-left">
            {/* cta__title: Okazały, reprezentacyjny nagłówek o inżynieryjnej wadze font-medium */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-medium leading-[1.08] tracking-[-0.025em] text-[#1e2229] mb-6 sm:mb-7">
              Inżynieria transformacji energetycznej.
            </h2>

            {/* cta__description: Elegancki lead */}
            <div className="text-[17px] sm:text-[18px] lg:text-[19px] font-normal leading-[1.65] text-[#4a5058] mb-8 sm:mb-10">
              <p>
                Realizujemy strategiczne inwestycje pod klucz w formule EPC — od projektowania w standardzie 3D BIM,
                przez ciepłownie geotermalne i układy kogeneracyjne, po prefabrykację i rozruch obiektów.
              </p>
            </div>
          </div>

          {/* cta__button-wrapper: Prostokątny przycisk */}
          <div>
            <Link
              to="/firma/obszary-dzialalnosci"
              className="inline-flex items-center justify-center rounded-none bg-[#fbba00] px-10 py-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#26282C] shadow-md transition-all duration-300 hover:bg-[#e5a800] hover:shadow-lg active:scale-[0.99]"
            >
              Zobacz więcej
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
