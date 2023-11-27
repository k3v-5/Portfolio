import Image from 'next/image'
import Herosection from './components/Herosection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto pxp-12 py-4">
        <Herosection />
      </div>
    </main>
  )
}
