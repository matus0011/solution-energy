import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { contact } from '@/lib/company'

// Ostatnia sekcja strony głównej — zgodnie ze sprawdzoną strukturą landing
// page każda strona powinna kończyć się jednym, wyraźnym wezwaniem do
// działania. Dwie ścieżki kontaktu (telefon = szybko i bezpośrednio, przycisk
// = formularz), żeby nie zmuszać wszystkich do tej samej formy kontaktu.
export default function ClosingCta() {
  return (
    <section className="bg-[#fbba00] px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-[#26282C] sm:text-[42px]">
            Planujesz inwestycję?
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#5c4a10]">
            Porozmawiajmy na etapie, na którym jesteś — nawet jeśli to dopiero wstępna koncepcja.
            Doradztwo przed decyzją inwestycyjną jest częścią naszego zakresu.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-4 sm:gap-5">
          <a
            href={contact.phoneHref}
            className="group flex items-center gap-2 text-[18px] font-bold text-[#26282C] transition-opacity duration-300 hover:opacity-70 sm:gap-3 sm:text-[22px] lg:text-[26px]"
          >
            <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
            {contact.phone}
          </a>

          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2 bg-[#26282C] px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-300 hover:bg-white hover:text-[#26282C] sm:gap-3 sm:px-8 sm:py-5 sm:text-[15px] sm:tracking-[0.08em]"
          >
            Napisz do nas
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
