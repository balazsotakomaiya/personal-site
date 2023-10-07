import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry";
import localFont from 'next/font/local'
import clsx from "clsx";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const telesha = localFont({
    src: '../assets/fonts/telesha/serif.otf',
    variable: '--font-telesha',
})

export const metadata: Metadata = {
  title: 'Balázs Otakomaiya',
  description: 'Hey, I’m Balazs. I love building beautiful digital experiences that intersect with real-life. I’ve Co-Founded a successful Men’s Jewellery Brand called Ezzra and built a popular mobile app used by tens of thousands called PartyPass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(telesha.variable, inter.variable)}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
