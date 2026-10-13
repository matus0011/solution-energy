import { createContext, useContext } from 'react'

// Sekcje strony głównej są wspólne dla v1 i v2. HomeV3 ustawia tu 'v2',
// żeby zmiany typografii i odstępów nie przenosiły się na v1.
export const HomeVariantContext = createContext<'v1' | 'v2'>('v1')

export const useIsV2 = () => useContext(HomeVariantContext) === 'v2'
