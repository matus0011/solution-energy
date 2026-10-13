import type { ReactNode } from 'react'
import { useInView } from '@/lib/useInView'
import { useIsV2 } from '@/lib/homeVariant'

// Trzy skośne paski z logo, zapalane po kolei jak wskaźnik naładowania.
export function ChargeBars({ on }: { on: boolean }) {
  return (
    <span className={`es-bars ${on ? 'is-in' : ''}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}

// W v1 renderuje nagłówek z klasami przekazanymi przez sekcję.
// W v2 ma wspólną skalę dla całej strony i paski nad tytułem.
export default function SectionTitle({
  className,
  tone = 'dark',
  children,
}: {
  className?: string
  tone?: 'dark' | 'light'
  children: ReactNode
}) {
  const v2 = useIsV2()
  const { ref, shown } = useInView<HTMLHeadingElement>(0.6)

  if (!v2) return <h2 className={className}>{children}</h2>

  return (
    <h2
      ref={ref}
      className={`m-0 flex flex-col items-start gap-5 font-heading text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[42px] lg:text-[48px] ${
        tone === 'light' ? 'text-white' : 'text-[#26282C]'
      }`}
    >
      <ChargeBars on={shown} />
      <span>{children}</span>
    </h2>
  )
}
