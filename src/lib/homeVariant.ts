import { createContext, useContext } from 'react'

export type HomeVariant = 'v1' | 'v2' | 'v3'

// Sekcje strony głównej są wspólne dla wariantów. HomeV3 ustawia 'v2', HomeV4, HomeV5 i HomeV6 ustawiają 'v3'.
export const HomeVariantContext = createContext<HomeVariant>('v1')

export const useHomeVariant = () => useContext(HomeVariantContext)
export const useIsV2 = () => {
  const v = useContext(HomeVariantContext)
  return v === 'v2' || v === 'v3'
}
export const useIsV3 = () => useContext(HomeVariantContext) === 'v3'
