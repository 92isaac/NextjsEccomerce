import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SliderComponent } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="relative bg-[#F1F2F5] z-0">
     <SliderComponent />
    </main>
  )
}
