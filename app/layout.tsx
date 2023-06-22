import './globals.css'
import { Inter } from 'next/font/google'

import { Footer, NavBar } from '@/components';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Graphikaz',
  description: 'Graphikaz 2023 | prestation provider app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" />
      </head>
      
      <body className={inter.className}>

        {/* <div className=" absolute w-full rotate-45  blurr blur_2 " />
        <div className=" absolute w-full rotate-45 right-[50rem] blurr blur_1  " /> */}
        <div className=" absolute w-[29vw] right-0 bg-black h-[100vh] mask" />

        <NavBar />
        {children}
        <Footer />
       
       
        </body>
    </html>
  )
}
