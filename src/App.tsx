import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  )
}
