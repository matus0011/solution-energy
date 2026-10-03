import { useSearchParams } from 'react-router-dom'
import VersionSwitch, { type HomeVersion } from '@/components/VersionSwitch'
import HomeCurrent from '@/pages/HomeV1'
import HomeToday from '@/pages/HomeV2'

// Wejście na / pokazuje dotychczasowe demo.
// Dzisiejszy układ z briefu jest pod /?wersja=v1.
export default function Home() {
  const [params, setParams] = useSearchParams()
  const version: HomeVersion = params.get('wersja') === 'v1' ? 'v1' : 'default'

  const choose = (next: HomeVersion) => {
    const updated = new URLSearchParams(params)
    if (next === 'v1') updated.set('wersja', 'v1')
    else updated.delete('wersja')
    setParams(updated, { replace: true })
  }

  return (
    <>
      {version === 'v1' ? <HomeToday /> : <HomeCurrent />}
      <VersionSwitch version={version} onChange={choose} />
    </>
  )
}
