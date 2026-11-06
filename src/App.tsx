import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Firma from '@/pages/Firma'
import SpolkiPowiazane from '@/pages/SpolkiPowiazane'
import ObszaryDzialalnosci from '@/pages/ObszaryDzialalnosci'
import JakPracujemy from '@/pages/JakPracujemy'
import Realizacje from '@/pages/Realizacje'
import RealizacjaSzczegoly from '@/pages/RealizacjaSzczegoly'
import Kontakt from '@/pages/Kontakt'
import Kariera from '@/pages/Kariera'
import SrodkiUe from '@/pages/SrodkiUe'
import PolitykaPrywatnosci from '@/pages/PolitykaPrywatnosci'
import Aktualnosci from '@/pages/Aktualnosci'
import Oferta from '@/pages/Oferta'
import OfertaObszar from '@/pages/OfertaObszar'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const search = new URLSearchParams(location.search)
    if (!search.has('wersja')) return
    search.delete('wersja')
    navigate({ pathname: location.pathname, search: search.toString(), hash: location.hash }, { replace: true })
  }, [location.pathname, location.search, location.hash, navigate])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/firma" element={<Firma />} />
        <Route path="/firma/spolki-powiazane" element={<SpolkiPowiazane />} />
        <Route path="/firma/obszary-dzialalnosci" element={<ObszaryDzialalnosci />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/oferta/:slug" element={<OfertaObszar />} />
        <Route path="/firma/jak-pracujemy" element={<JakPracujemy />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/realizacje/:id" element={<RealizacjaSzczegoly />} />
        <Route path="/aktualnosci" element={<Aktualnosci />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kariera" element={<Kariera />} />
        <Route path="/srodki-ue" element={<SrodkiUe />} />
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
      </Route>
    </Routes>
  )
}
