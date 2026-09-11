import { Fragment, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
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
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

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

  // Zwiń rozwinięte podmenu mobile, kiedy całe menu się zamyka, żeby przy
  // kolejnym otwarciu zawsze startowało od stanu zwiniętego.
  useEffect(() => {
    if (!mobileOpen) setExpandedMobile(null)
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
          'mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300',
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
              {link.children && link.children.length > 0 ? (
                <div className="group relative">
                  <NavItem
                    href={link.href}
                    className="relative flex items-center gap-1.5 text-lg font-normal tracking-[0.08em] text-[#26282C] transition after:absolute after:-bottom-1 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:-skew-x-12 after:bg-[#fbba00] after:transition-all after:duration-300 hover:after:w-[105%] group-hover:after:w-[105%] group-focus-within:after:w-[105%]"
                    activeClassName="after:w-[105%]"
                  >
                    {link.label}
                    <ChevronDown
                      className="h-4 w-4 text-[#26282C] transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </NavItem>

                  <div className="invisible absolute left-0 top-full z-50 w-[190px] translate-y-1 pt-[30px] opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="flex flex-col bg-[#26282C] py-2 shadow-[0_16px_32px_rgba(0,0,0,0.25)]">
                      {/* Sam link do /firma powtórzony jako pierwsza pozycja — bez
                          tego użytkownik widzi tylko dwie podstrony i może nie
                          zauważyć, że nagłówek "Firma" też prowadzi na własną,
                          osobną stronę. */}
                      <NavLink
                        to={link.href}
                        end
                        className={({ isActive }) =>
                          clsx(
                            'border-b border-white/10 px-5 py-3 text-[17px] font-bold uppercase leading-snug tracking-wide text-[#fbba00] transition-colors duration-200 hover:text-white',
                            isActive && 'text-white',
                          )
                        }
                      >
                        O firmie
                      </NavLink>
                      {link.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            clsx(
                              'px-5 py-3 text-[17px] font-bold leading-snug tracking-wide transition-colors duration-200 hover:text-[#fbba00]',
                              isActive ? 'text-[#fbba00]' : 'text-white/90',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavItem
                  href={link.href}
                  className="relative text-lg font-normal tracking-[0.08em] text-[#26282C] transition after:absolute after:-bottom-1 after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:-skew-x-12 after:bg-[#fbba00] after:transition-all after:duration-300 hover:after:w-[105%]"
                  activeClassName="after:w-[105%]"
                >
                  {link.label}
                </NavItem>
              )}
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
            {navLinks.map((link, index) => {
              const hasChildren = !!link.children?.length
              const isExpanded = expandedMobile === link.label
              return (
                <div key={link.label} className="flex w-full flex-col items-start">
                  <div className="flex w-full items-center gap-2">
                    <NavItem
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

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setExpandedMobile(isExpanded ? null : link.label)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? `Zwiń podmenu ${link.label}` : `Rozwiń podmenu ${link.label}`}
                        style={{ transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms' }}
                        className={clsx(
                          'flex h-10 w-10 shrink-0 items-center justify-center text-white/35 transition-all duration-300 ease-out hover:text-white/70',
                          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                        )}
                      >
                        <ChevronDown
                          className={clsx('h-6 w-6 transition-transform duration-300', isExpanded && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={clsx(
                        'grid w-full transition-all duration-300 ease-out',
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <div className="flex flex-col gap-1 overflow-hidden pb-1">
                        {/* Sam link do /firma powtórzony jako pierwsza pozycja — ta sama
                            logika co w rozwijanym menu desktop (patrz wyżej), żeby po
                            rozwinięciu podmenu było jasne, że "Firma" to też osobna strona,
                            a nie tylko nagłówek grupujący dwie podstrony. */}
                        <NavItem
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-xl font-bold uppercase tracking-wide text-[#fbba00] transition-colors duration-300 hover:text-white"
                          activeClassName="!text-white"
                        >
                          O firmie
                        </NavItem>
                        {link.children!.map((child) => (
                          <NavItem
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-xl font-normal text-white/35 transition-colors duration-300 hover:text-white/70"
                            activeClassName="!text-white"
                          >
                            {child.label}
                          </NavItem>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15">
            <a
              href="tel:+48146571105"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-6 text-center text-lg font-medium text-white transition-colors hover:text-[#fbba00]"
            >
              Zadzwoń
            </a>
            <a
              href="mailto:biuro@energysolutions.pl"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-6 text-center text-lg font-medium text-white transition-colors hover:text-[#fbba00]"
            >
              Napisz
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
