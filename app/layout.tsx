"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { InitialSpinner } from '@/components'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Coded by <a href="https://github.com/92isaac">Isaac</a>',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (<InitialSpinner load={loading} />) : children }
      </body>
    </html>
  )
}
