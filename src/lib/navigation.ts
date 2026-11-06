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
