export interface NavChildLink {
  label: string
  href: string
}

export interface NavLinkItem {
  label: string
  href: string
  children?: NavChildLink[]
}

export const navLinks: NavLinkItem[] = [
  {
    label: 'Firma',
    href: '/firma',
    children: [
      { label: 'Obszary działalności', href: '/firma/obszary-dzialalnosci' },
      { label: 'Jak pracujemy', href: '/firma/jak-pracujemy' },
    ],
  },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Kariera', href: '/kariera' },
  { label: 'Kontakt', href: '/kontakt' },
]
