import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Wind',
  description: 'New Word In Digital Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <p className='px-2 py-1 text-sm'>© Developed by Mariam Ekizashvili</p>
      </body>
    </html>
  )
}
