import { Phone, Mail, Star } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { contact, googleReviews } from '@/lib/company'

// Wąski pasek nad menu: po lewej kontakt, po prawej opinie Google.
// Zwija się przy przewijaniu, żeby przyklejony header nie zabierał miejsca
// na dłuższych stronach — `collapsed` steruje tym z Headera, który i tak
// obserwuje scroll.
export default function TopBar({ collapsed }: { collapsed: boolean }) {
  const { rating, count } = googleReviews
  const hasRating = rating !== null && count !== null

  return (
    <div
      className={clsx(
        'hidden overflow-hidden bg-[#26282C] transition-all duration-300 md:block',
        collapsed ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100',
      )}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-2.5">
        <a
          href={googleReviews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 text-[14px] text-white transition-colors duration-300 hover:text-[#fbba00]"
        >
          <FcGoogle size={18} aria-hidden="true" />

          {hasRating ? (
            <>
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={clsx(
                      'h-3.5 w-3.5',
                      index < Math.round(rating) ? 'fill-[#fbba00] text-[#fbba00]' : 'text-white/30',
                    )}
                    strokeWidth={1.5}
                  />
                ))}
              </span>
              <span className="font-bold">{rating.toFixed(1).replace('.', ',')}</span>
              <span className="text-white/60 transition-colors duration-300 group-hover:text-[#fbba00]">
                ({count} opinii)
              </span>
            </>
          ) : (
            <span className="font-semibold">Opinie Google</span>
          )}
        </a>

        <div className="flex items-center gap-6">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-[14px] font-bold text-white transition-colors duration-300 hover:text-[#fbba00]"
          >
            <Phone className="h-4 w-4 shrink-0 text-[#fbba00]" strokeWidth={2} aria-hidden="true" />
            {contact.phone}
          </a>

          <Link
            to="/kontakt"
            className="flex items-center gap-2 text-[14px] font-semibold text-white/70 transition-colors duration-300 hover:text-[#fbba00]"
          >
            <Mail className="h-4 w-4 shrink-0 text-[#fbba00]" strokeWidth={2} aria-hidden="true" />
            Napisz do nas
          </Link>
        </div>
      </div>
    </div>
  )
}
