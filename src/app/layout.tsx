import { Hero } from '@/components/sections/hero'
import '../styles/globals.css'
import { ReactNode } from 'react'
import { Header } from '@/app/(routes)/components/header'
import { Footer } from '@/app/(routes)/components/footer'
import { Inter, Bai_Jamjuree } from '@next/font/google'
import { DrawerContextProvider } from '@/contexts/drawer-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  variable: '--font-baiJamjuree',
  weight: ['700'],
})

export const metadata = {
  title: 'Gustavo Dias - Portfolio',
  description: `Gustavo${"'"}s Developer Portfolio`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-track-dark-lighten scrollbar-thumb-dark-dark"
    >
      <DrawerContextProvider>
      <body
        className={`${inter.variable} ${baiJamjuree.variable} bg-dark-main font-sans text-light-main`}
      >
        {/* Container */}
        <div className="relative">
          {/* Blur */}
          <div className="-left fixed -left-[263px] top-1/2 -z-10 h-[288px] w-[526px] -translate-y-1/2 translate-x-0 rounded-full bg-dark-light opacity-50 blur-full" />

          {/* Content */}
          <div className="w-full">
            <Header />

            {/* Main */}
            <main className="mx-auto flex w-full max-w-screen-xl flex-col justify-between gap-12 px-4 sm:px-8 lg:flex-row">
              {/* Left */}
              <div className="-pt-16 mx-auto flex w-full justify-center lg:h-full lg:max-h-screen lg:w-1/2 lg:pt-0">
                <Hero />
              </div>

              {/* Right */}
              <div className="w-full space-y-12 pb-12 pt-16 lg:w-1/2 lg:pt-24">
                {children}
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </body>
      </DrawerContextProvider>
    </html>
  )
}
