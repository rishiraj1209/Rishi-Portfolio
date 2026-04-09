import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { ThemeProvider } from "next-themes";
import Motivation from "../components/Motivation";

const outfit = Outfit({
  subsets:['latin'],
  weight:['400','500','600','700','800','900']
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A perfect portfolio template that showcases your skills, minimal and smooth microinteractions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="w-full min-h-full flex flex-col bg-neutral-100 dark:bg-neutral-950 ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
          <Motivation/>
        </ThemeProvider>
      </body>
    </html>
  );
}
