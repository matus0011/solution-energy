import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { YoutubeIcon } from '@/components/icons/SocialIcons'

const socialLinks = [
  { label: 'LinkedIn', href: '#', Icon: FaLinkedin },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#26282C] px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1380px] 2xl:max-w-screen-2xl flex-col gap-8">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-[1.2fr_1.2fr_1fr] lg:gap-8 lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Link to="/" className="inline-block w-fit">
              <img
                src="/logos/logotyp_energysolutions_crv_white.png"
                alt="Energy Solutions — strona główna"
                className="h-14 w-auto transition-[filter] duration-700 ease-out [filter:var(--logo-filter-light,none)]"
              />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white">
              Zawsze celujemy w dobrą energię do współpracy.
            </p>
            <div className="mt-1 flex flex-col items-center gap-2 lg:mt-auto lg:items-start">
              <p className="text-sm text-white/70">Nasze media społecznościowe</p>
              <div className="flex items-end gap-6">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white transition-all duration-300 hover:scale-110 hover:text-[var(--brand-accent)]"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 text-white">
            <h2 className="mb-5 font-heading text-2xl font-semibold tracking-wide text-[var(--brand-accent)]">Kontakt</h2>
            <div className="flex flex-col gap-5 text-[15px] leading-[1.45]">
              <div className="flex min-w-0 flex-col items-center gap-0.5 lg:items-start">
                <h3 className="mb-0.5 font-semibold">Główna Siedziba</h3>
                <p>ul. Wiesława Wody 27, 33-100 Tarnów</p>
                <a href="tel:+48146571105" className="hover:text-[var(--brand-accent)]">tel. +48 (14) 657 11 05</a>
                <p>fax +48 (14) 657 11 06</p>
                <a href="mailto:biuro@energysolutions.pl" className="break-all hover:text-[var(--brand-accent)]">biuro@energysolutions.pl</a>
              </div>
              <div className="flex min-w-0 flex-col items-center gap-0.5 lg:items-start">
                <h3 className="mb-0.5 font-semibold">Oddział w Warszawie</h3>
                <a href="tel:+48795535771" className="hover:text-[var(--brand-accent)]">tel. 795 535 771</a>
                <a href="mailto:jciombor@energysolutions.pl" className="break-all hover:text-[var(--brand-accent)]">jciombor@energysolutions.pl</a>
              </div>
            </div>
          </div>
          <div className="min-w-0 text-white">
            <h2 className="mb-5 font-heading text-2xl font-semibold tracking-wide text-[var(--brand-accent)]">Dane rejestrowe</h2>
            <div className="flex flex-col gap-1.5 text-[15px] leading-relaxed">
              <p><span className="font-semibold">NIP:</span> 873-308-78-05</p>
              <p><span className="font-semibold">KRS:</span> 0000245582</p>
              <p><span className="font-semibold">BDO:</span> 000566462</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-white sm:flex-row sm:justify-between sm:text-left">
            <span>© {year} Energy Solutions Sp. z o.o. Wszelkie prawa zastrzeżone.</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/polityka-prywatnosci" className="transition hover:text-[var(--brand-accent)]">
                Polityka prywatności
              </Link>
              <a
                href="https://mateuszklich.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--brand-accent)]"
              >
                Projekt i wykonanie MK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
