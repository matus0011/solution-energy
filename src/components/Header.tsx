import { useState } from 'react'
import clsx from 'clsx'
import { navLinks } from '@/lib/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-12">
        <a href="/" className="shrink-0">
          <img
            src="/logos/logotyp_energysolutions_crv.png"
            alt="Energy Solutions — strona główna"
            className="h-14 w-auto"
          />
        </a>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-xl font-normal tracking-[0.08em] text-[#777777] transition after:absolute after:-bottom-1 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:-skew-x-12 after:bg-[#fbba00] after:transition-all after:duration-300 hover:after:w-[105%]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          className={clsx(
            'relative flex h-12 w-12 items-center justify-center rounded-lg transition-colors md:hidden',
            mobileOpen ? 'text-[#fbba00]' : 'text-[#404040] hover:text-[#fbba00]',
          )}
        >
          <span
            className={clsx(
              'absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -skew-x-12 rounded-full bg-current transition-all duration-300 ease-in-out',
              mobileOpen ? 'translate-y-0 rotate-45' : '-translate-y-2.5',
            )}
          />
          <span
            className={clsx(
              'absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -skew-x-12 rounded-full bg-current transition-all duration-300 ease-in-out',
              mobileOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
            )}
          />
          <span
            className={clsx(
              'absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -skew-x-12 rounded-full bg-current transition-all duration-300 ease-in-out',
              mobileOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2.5',
            )}
          />
        </button>
      </div>

      <div
        className={clsx(
          'grid transition-all duration-300 ease-in-out md:hidden',
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <nav aria-label="Nawigacja mobilna" className="min-h-0 overflow-hidden bg-white px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms' }}
                className={clsx(
                  'rounded-lg px-3 py-2.5 text-2xl font-normal font-heading tracking-[0.08em] text-[#404040] transition-all duration-300 ease-out hover:text-[#fbba00]',
                  mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
