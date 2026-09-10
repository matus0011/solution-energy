import { Fragment, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { navLinks } from '@/lib/navigation'

// Real routes use react-router's NavLink (so the currently active tab can be
// highlighted); "#" placeholders (pages not built yet) stay as plain inert
// anchors so they don't resolve to the current route.
function NavItem({
  href,
  className,
  activeClassName,
  style,
  onClick,
  children,
}: {
  href: string
  className: string
  activeClassName: string
  style?: CSSProperties
  onClick?: () => void
  children: ReactNode
}) {
  if (href.startsWith('/')) {
    return (
      <NavLink
        to={href}
        style={style}
        onClick={onClick}
        className={({ isActive }) => clsx(className, isActive && activeClassName)}
      >
        {children}
      </NavLink>
    )
  }
  return (
    <a href={href} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pełnoekranowy overlay menu mobile — blokujemy scroll strony w tle, żeby
  // się nie przewijała "pod spodem" podczas gdy menu jest otwarte.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
      )}
    >
      <div
        className={clsx(
          'mx-auto flex max-w-screen-2xl items-center justify-between px-6 transition-[padding] duration-300',
          scrolled ? 'py-4' : 'py-12',
        )}
      >
        <NavLink to="/" className="shrink-0">
          <img
            src="/logos/logotyp_energysolutions_crv.png"
            alt="Energy Solutions — strona główna"
            className="h-14 w-auto"
          />
        </NavLink>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-4 md:flex">
          {navLinks.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && <span className="h-4 w-px bg-[#e5e5e5]" aria-hidden="true" />}
              <NavItem
                href={link.href}
                className="relative text-xl font-normal tracking-[0.08em] text-[#777777] transition after:absolute after:-bottom-1 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:-skew-x-12 after:bg-[#fbba00] after:transition-all after:duration-300 hover:after:w-[105%]"
                activeClassName="after:w-[105%]"
              >
                {link.label}
              </NavItem>
            </Fragment>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          className={clsx(
            'relative z-50 flex h-12 w-12 items-center justify-center rounded-lg transition-colors md:hidden',
            mobileOpen ? 'text-white' : 'text-[#404040] hover:text-[#fbba00]',
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

      {/* Pełnoekranowe menu mobile — ciemny overlay, wyśrodkowane pozycje
          (aktywna strona / hover na biało, reszta przygaszona) i pasek
          Zadzwoń/Napisz na dole. Logo w tym samym miejscu co przycisk
          zamknięcia w headerze, żeby się wizualnie pokrywały. */}
      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col overflow-hidden bg-[#26282C] transition-opacity duration-300 md:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className={clsx(
            'flex shrink-0 items-center px-6 pt-10 transition-[padding] duration-300',
            scrolled ? 'py-4' : 'py-12',
          )}
        >
          <img
            src="/logos/logotyp_energysolutions_crv_white.png"
            alt="Energy Solutions — strona główna"
            className="h-14 w-auto"
          />
        </div>

        <nav aria-label="Nawigacja mobilna" className="flex flex-1 flex-col overflow-y-auto">
          <div className="flex flex-1 flex-col items-start justify-center gap-1 px-6 text-left">
            {navLinks.map((link, index) => (
              <NavItem
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms' }}
                className={clsx(
                  'py-2.5 text-4xl font-normal text-white/35 transition-all duration-300 ease-out hover:text-white/70',
                  mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                )}
                activeClassName="!text-white"
              >
                {link.label}
              </NavItem>
            ))}
          </div>

          <div className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15">
            <a
              href="tel:+48146571105"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 text-center text-lg font-medium text-white transition-colors hover:text-[#fbba00]"
            >
              Zadzwoń
            </a>
            <a
              href="mailto:biuro@energysolutions.pl"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 text-center text-lg font-medium text-white transition-colors hover:text-[#fbba00]"
            >
              Napisz
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
