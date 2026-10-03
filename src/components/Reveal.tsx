import type { ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

export default function Reveal({
  active = true,
  axis = 'y',
  delay = 0,
  className = '',
  children,
}: {
  active?: boolean
  axis?: 'x' | 'y'
  delay?: number
  className?: string
  children: ReactNode
}) {
  const { ref, shown } = useInView<HTMLDivElement>()

  if (!active) return <div className={className}>{children}</div>

  return (
    <div
      ref={ref}
      className={`${axis === 'x' ? 'reveal-x' : 'reveal'} ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
