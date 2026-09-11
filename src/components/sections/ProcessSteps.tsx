import { Link } from 'react-router-dom'
import { processSteps } from '@/lib/company'
import CardSlider from '@/components/CardSlider'

// Formuła EPC na stronie głównej — sześć etapów w tym samym CardSlider, co
// Certyfikaty i Opinie niżej na stronie, więc zachowanie (strzałki, kropki,
// swipe) jest spójne w całym serwisie zamiast własnej, niestandardowej
// karuzeli.
export default function ProcessSteps() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Jak prowadzimy inwestycję
          </h2>
          <p className="max-w-3xl text-[17px] leading-relaxed text-[#777777]">
            Od pierwszej analizy po serwis po oddaniu obiektu. Za każdy etap odpowiada ten sam
            wykonawca, więc na styku branż nie ma nikogo, kto mógłby przerzucić odpowiedzialność.
          </p>
        </div>

        <CardSlider
          label="Jak prowadzimy inwestycję"
          tone="light"
          slideClassName="w-[85%] sm:w-[48%] lg:w-[32%]"
        >
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="group flex h-full flex-col gap-3"
            >
              <span className="font-heading text-5xl font-bold leading-none text-[#dcdad5] transition-colors duration-300 group-hover:text-[#fbba00]">
                {step.num}
              </span>
              <span className="font-heading min-h-[3.5rem] text-xl font-semibold uppercase leading-snug text-[#26282C]">
                {step.title}
              </span>
              <p className="text-[15px] leading-relaxed text-[#777777]">{step.desc}</p>
            </div>
          ))}
        </CardSlider>

        <Link
          to="/firma/jak-pracujemy"
          className="w-fit text-[15px] font-bold uppercase tracking-wide text-[#fbba00] transition-all duration-300 hover:tracking-[0.08em] hover:text-[#26282C]"
        >
          Zobacz, jak pracujemy →
        </Link>
      </div>
    </section>
  )
}
