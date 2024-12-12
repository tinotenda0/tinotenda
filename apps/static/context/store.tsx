'use client'
import React from 'react'
import { getCookie, setCookie } from 'cookies-next'

type Props = {
   children: React.ReactNode
}

interface contextProps {
   theme: string
   setTheme: (theme: string) => void
   AllTheme: string[]
   handleThemeChange: (theme: string) => void
}

const GlobalContext = React.createContext<contextProps>({
   theme: 'light',
   setTheme: () => {},
   AllTheme: [],
   handleThemeChange: () => {},
})

export const GlobalProvider = ({ children }: Props) => {
   const [theme, setTheme] = React.useState('light')
   const AllTheme = ['light', 'dark']

   /* ---------------------------------------------- */
   /*                Add theme to cookie             */
   /* ---------------------------------------------- */
   React.useEffect(() => {
      const theme = getCookie('theme') || 'light'
      if (theme) {
         setTheme(theme as string)
         // set theme to cookie
         setCookie('theme', theme)
      }
   }, [])

   /* ---------------------------------------------- */
   /*              Theme change handler              */
   /* ---------------------------------------------- */
   const handleThemeChange = (theme: string) => {
      setTheme(theme)
      setCookie('theme', theme)
   }

   return (
      <GlobalContext.Provider
         value={{ theme, setTheme, AllTheme, handleThemeChange }}
      >
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
