import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Contact from "@/components/Contact/page";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Scroll to know about me better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      </head>
      <body id="myself" className={inter.className}>
        <Navbar />
        {children}
      <Contact />
      <Analytics/>

      </body> 
    </html>
  );
}
