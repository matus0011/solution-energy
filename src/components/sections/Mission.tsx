import { Link } from 'react-router-dom'

export default function Mission() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-[280px] overflow-hidden sm:h-[420px]">
          <img
            src="/realizacje/pruszkow-hala-kotlowni.jpg"
            alt="Hala kotłowni zrealizowana przez Energy Solutions"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-[28px] font-bold uppercase leading-tight text-[#26282C] sm:text-[42px]">
            Doświadczony partner inwestycji
          </h2>
          <p className="text-[17px] leading-relaxed text-[#777777]">
            Powierzane nam zadania traktujemy kompleksowo. Dzięki temu prowadzimy również realizacje,
            których nie podejmują się inni wykonawcy — od dokumentacji i budowy po uruchomienie.
          </p>
          <p className="text-[17px] leading-relaxed text-[#777777]">
            Zostajemy z instalacją po oddaniu obiektu: serwis gwarancyjny i pogwarancyjny jest częścią
            zakresu, nie dodatkiem.
          </p>
          <Link
            to="/firma"
            className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 hover:text-[#26282C]"
          >
            Pokaż więcej
          </Link>
        </div>
      </div>
    </section>
  )
}
