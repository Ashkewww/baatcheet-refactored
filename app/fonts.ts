import { Inter } from "next/font/google";
import localFont from "next/font/local"
import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

export const inter = Inter({ 
    subsets: ["latin"],
    variable: "--font-inter" 
});

export const brittany = localFont({
  src: "./fonts/BrittanySignature.ttf",
  variable: "--font-brittany",
  display: "swap"
})


export const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
})

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})