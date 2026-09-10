import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Firma from '@/pages/Firma'
import Realizacje from '@/pages/Realizacje'
import RealizacjaSzczegoly from '@/pages/RealizacjaSzczegoly'
import Kontakt from '@/pages/Kontakt'
import Kariera from '@/pages/Kariera'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/firma" element={<Firma />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/realizacje/:id" element={<RealizacjaSzczegoly />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kariera" element={<Kariera />} />
      </Route>
    </Routes>
  )
}
