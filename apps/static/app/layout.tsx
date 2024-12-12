'use client'
import './globals.css' // CSS for all pages
import 'swiper/css' // CSS for PostCarousel
import React from 'react'
import {Plus_Jakarta_Sans, Source_Serif_Pro, Work_Sans,} from 'next/font/google'
import {GlobalProvider} from '@/context/store'
import {Footer, HeaderPro} from '@metablog/ui'
import useMode, {Providers} from '@/utils/themeMode'
import {categorypagedata, headerData} from '@/data/headerData'
import {FooterDataOne, FooterDataTwo} from '@/data/footerData'

// Plus Jakarta Sans font family with 4 weights and 2 styles
const Jakarta_Sans = Plus_Jakarta_Sans({
   weight: ['400', '500', '600', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-plus-jakarta-sans',
})

// Work Sans font family with 4 weights and 2 styles
const work_Sans = Work_Sans({
   weight: ['400', '500', '600', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-work-sans',
})

// Source Serif Pro font family with 4 weights and 2 styles
const source_Serif_Pro = Source_Serif_Pro({
   weight: ['200', '300', '400', '600', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-source-serif-pro',
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html
         lang="en"
         suppressHydrationWarning
         className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
      >
         <body>
            <Providers>
               <GlobalProvider>
                  <HeaderPro
                     headerData={headerData}
                     useMode={useMode}
                  />
                  {children}
                  <Footer
                     FooterDataOne={FooterDataOne}
                     FooterDataTwo={FooterDataTwo}
                  />
               </GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}

// 'use client'
// import { GlobalProvider, useGlobalContext } from '@/context/store'
// import './globals.css'
// import React from 'react'

// export default function RootLayout({
//    children,
// }: {
//    children: React.ReactNode
// }) {
//    return (
//       <GlobalProvider>
//          <Body>{children}</Body>
//       </GlobalProvider>
//    )
// }

// const Body = ({ children }: { children: React.ReactNode }) => {
//    const { theme } = useGlobalContext()
//    return (
//       <html lang="en" data-theme={theme}>
//          <body>{children}</body>
//       </html>
//    )
// }
