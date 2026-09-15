import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

// Sekcja FAQ / "objection killers" przed końcowym CTA — zgodnie ze strukturą
// z rozdziału "Landing Page Sections": zanim odwiedzający zdecyduje się
// zadzwonić/napisać, warto z góry rozwiać najczęstsze wątpliwości.
//
// UWAGA: poniższe pytania i odpowiedzi to SZKIC/placeholder na podstawie
// ogólnej wiedzy o branży EPC — wymagają weryfikacji i podmiany na realne
// treści (np. faktyczny min. próg wielkości inwestycji, realny czas
// realizacji, zasięg geograficzny). Nie prezentować jako gotowych faktów
// bez sprawdzenia z klientem/właścicielem strony.
interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'Czy realizujecie tylko duże inwestycje przemysłowe, czy też mniejsze projekty?',
    answer:
      'Zajmujemy się głównie inwestycjami energetycznymi o różnej skali — od pojedynczych instalacji (np. kotłowni czy układu kogeneracyjnego) po kompleksowe obiekty geotermalne realizowane w konsorcjach. Skontaktuj się z nami, żeby ustalić, czy Twoja inwestycja mieści się w naszym zakresie.',
  },
  {
    question: 'Jak wygląda pierwszy kontakt i wstępna wycena?',
    answer:
      'Zaczynamy od rozmowy o Twoich założeniach — nawet jeśli projekt jest jeszcze na etapie koncepcji. Na tej podstawie przygotowujemy wstępną analizę techniczną i szacunkową wycenę zakresu prac.',
  },
  {
    question: 'Czy zajmujecie się tylko wykonawstwem, czy też projektem i pozwoleniami?',
    answer:
      'Pracujemy w formule EPC — od analizy i doradztwa, przez wsparcie w uzyskaniu decyzji administracyjnych i projekt budowlany, po wykonawstwo pod klucz, rozruch oraz serwis gwarancyjny i pogwarancyjny.',
  },
  {
    question: 'Na jakim terenie realizujecie inwestycje?',
    answer:
      'Realizujemy projekty na terenie całej Polski, samodzielnie oraz w konsorcjach z innymi wykonawcami — zasięg konkretnej inwestycji ustalamy indywidualnie.',
  },
  {
    question: 'Co po zakończeniu inwestycji — zostajemy bez wsparcia?',
    answer:
      'Nie — oferujemy serwis gwarancyjny i pogwarancyjny, więc zostajemy w kontakcie także po oddaniu obiektu do eksploatacji.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#f5f4f1] px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold uppercase text-[#26282C] sm:text-[42px]">
            Najczęstsze pytania
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#777777]">
            Jeśli masz wątpliwości przed pierwszym kontaktem, tu znajdziesz odpowiedzi na te
            najczęściej zadawane.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-heading text-[18px] font-semibold text-[#26282C] sm:text-[20px]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'h-5 w-5 shrink-0 text-[#fbba00] transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={clsx(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-[#777777]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
