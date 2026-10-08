import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import SmoothScroll from '@/components/SmoothScroll'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
