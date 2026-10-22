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
      { label: 'Środki UE', href: '/srodki-ue' },
    ],
  },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Kariera', href: '/kariera' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const finalNavLinks: NavLinkItem[] = [
  {
    label: 'O Firmie',
    href: '/firma',
    children: [
      { label: 'Spółki powiązane', href: '/firma/spolki-powiazane' },
      { label: 'Środki UE', href: '/srodki-ue' },
    ],
  },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Aktualności', href: '/aktualnosci' },
  { label: 'Praca', href: '/kariera' },
  { label: 'Kontakt', href: '/kontakt' },
]
