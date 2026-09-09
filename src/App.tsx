import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Realizacje from '@/pages/Realizacje'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/realizacje" element={<Realizacje />} />
      </Route>
    </Routes>
  )
}
