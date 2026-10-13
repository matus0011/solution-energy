import { useSearchParams } from 'react-router-dom'
import VersionSwitch, { type HomeVersion } from '@/components/VersionSwitch'
import HomeDefault from '@/pages/HomeV1'
import HomeV1 from '@/pages/HomeV2'
import HomeV2 from '@/pages/HomeV3'

// Wejście na / pokazuje dotychczasowe demo.
// Układ v1 jest pod /?wersja=v1.
// Układ v2 (nowa wersja) jest pod /?wersja=v2.
export default function Home() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('wersja')
  const version: HomeVersion =
    raw === 'v2' ? 'v2' : raw === 'v1' ? 'v1' : 'default'

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
      {version === 'v2' && <HomeV2 />}
      {version === 'v1' && <HomeV1 />}
      {version === 'default' && <HomeDefault />}
      <VersionSwitch version={version} onChange={choose} />
    </>
  )
}
