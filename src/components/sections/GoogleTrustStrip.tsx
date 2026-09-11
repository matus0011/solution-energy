import { Star, ExternalLink, Quote } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { googleReviews } from '@/lib/company'
import CardSlider from '@/components/CardSlider'

interface ReviewItem {
  author: string
  role: string
  text: string
  rating: number
}

const sampleReviews: ReviewItem[] = [
  {
    author: 'Inwestor Przemysłowy',
    role: 'Układ kogeneracyjny CHP',
    text: 'Wzorowa współpraca przy generalnym wykonawstwie. Pełen profesjonalizm inżynieryjny, terminowość i sprawny rozruch technologiczny.',
    rating: 5,
  },
  {
    author: 'Dyrektor ds. Technicznych',
    role: 'Ciepłownictwo & Geotermia',
    text: 'Kompleksowe podejście w formule EPC — od projektu po serwis. Rzetelny partner w wymagających projektach energetycznych.',
    rating: 5,
  },
  {
    author: 'Kierownik Inwestycji',
    role: 'Kotłownia wysokoparametrowa',
    text: 'Sprawny montaż technologiczny, fachowy nadzór i precyzyjne wykonanie AKPiA oraz automatyki budynkowej.',
    rating: 5,
  },
  {
    author: 'Główny Inżynier',
    role: 'Obiekt energetyki przemysłowej',
    text: 'Dopięty harmonogram, jasna komunikacja i solidne wykonawstwo instalacji od podstaw. Polecamy jako partnera EPC.',
    rating: 5,
  },
  {
    author: 'Prezes Zarządu',
    role: 'Inwestycja geotermalna',
    text: 'Zespół inżynierów, na którym można polegać — od dokumentacji, przez montaż, po rozruch technologiczny obiektu.',
    rating: 5,
  },
  {
    author: 'Kierownik Budowy',
    role: 'Modernizacja ciepłowni',
    text: 'Bardzo dobra koordynacja prac wielobranżowych i terminowe oddanie inwestycji do eksploatacji.',
    rating: 5,
  },
]

export default function GoogleTrustStrip() {
  return (
    <aside
      aria-label="Opinie Google i zaufanie klientów"
      className="relative z-10 my-10 bg-[#f5f4f1] py-16 text-[#26282C] sm:my-14 sm:py-24 lg:my-16 lg:py-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-10 lg:px-14">
        {/* Nagłówek: badge Google + link do wszystkich opinii */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <FcGoogle className="h-9 w-9" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold tracking-tight text-[#26282C] sm:text-4xl">5.0</span>
                <div className="flex items-center gap-1" aria-label="Ocena 5 na 5 gwiazdek">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-[#fbba00] text-[#fbba00]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <span className="text-[14px] uppercase tracking-wider text-[#777777]">
                Opinie w Google • Zweryfikowani klienci
              </span>
            </div>
          </div>

          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[15px] font-semibold text-[#26282C] transition-colors hover:text-[#fbba00]"
          >
            Wszystkie opinie
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Karuzela opinii — CardSlider, ten sam komponent co reszta strony */}
        <CardSlider label="Opinie klientów w Google" tone="light" slideClassName="w-[88%] sm:w-[62%] lg:w-[38%]">
          {sampleReviews.map((review) => (
            <div
              key={review.author}
              className="flex h-full flex-col gap-5 bg-white p-8 shadow-md shadow-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1" aria-label={`Ocena ${review.rating} na 5 gwiazdek`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#fbba00] text-[#fbba00]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <Quote className="h-7 w-7 shrink-0 text-[#fbba00]/50" aria-hidden="true" />
              </div>

              <p className="text-[17px] leading-relaxed text-[#4a4a4a]">„{review.text}”</p>

              <div className="mt-auto flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fbba00]/15 text-[15px] font-bold text-[#a97300]"
                  aria-hidden="true"
                >
                  {review.author
                    .split(' ')
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div className="text-[14px]">
                  <div className="font-semibold text-[#26282C]">{review.author}</div>
                  <div className="text-[#777777]">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </CardSlider>
      </div>
    </aside>
  )
}
