import { useSearchParams } from 'react-router-dom'
import VersionSwitch, { type HomeVersion } from '@/components/VersionSwitch'
import HomeDefault from '@/pages/HomeV1'
import HomeV1 from '@/pages/HomeV2'
import HomeV2 from '@/pages/HomeV3'
import HomeV3 from '@/pages/HomeV4'
import HomeV4 from '@/pages/HomeV5'
import HomeV5 from '@/pages/HomeV6'
import HomeFinal from '@/pages/HomeFinal'

// Wejście na / pokazuje dotychczasowe demo.
// Układ v1 jest pod /?wersja=v1.
// Układ v2 jest pod /?wersja=v2.
// Układ v3 (oś czasu ze zdjęciami) jest pod /?wersja=v3.
// Układ v4 (oś czasu z rysunkami) jest pod /?wersja=v4.
// Układ v5 (v4 bez przejścia na zielony) jest pod /?wersja=v5.
const versions: HomeVersion[] = ['v1', 'v2', 'v3', 'v4', 'v5', 'final']

export default function Home() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('wersja')
  const version: HomeVersion = versions.find((v) => v === raw) ?? 'default'

  const choose = (next: HomeVersion) => {
    const updated = new URLSearchParams(params)
    if (next === 'default') {
      updated.delete('wersja')
    } else {
      updated.set('wersja', next)
    }
    setParams(updated, { replace: true })
  }

  return (
    <>
      {version === 'final' && <HomeFinal />}
      {version === 'v5' && <HomeV5 />}
      {version === 'v4' && <HomeV4 />}
      {version === 'v3' && <HomeV3 />}
      {version === 'v2' && <HomeV2 />}
      {version === 'v1' && <HomeV1 />}
      {version === 'default' && <HomeDefault />}
      <VersionSwitch version={version} onChange={choose} />
    </>
  )
}
