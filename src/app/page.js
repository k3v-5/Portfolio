import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div class="container mt-24 mx-auto pxp-12 py-4">
        <Herosection />
        <AboutSection />
      </div>
    </main>
  )
}
