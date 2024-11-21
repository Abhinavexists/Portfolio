import type { Metadata } from "next";
import {Inter , Poppins} from 'next/font/google';
import "./globals.css";
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'], variable: "--font--sans"});
const poppins = Poppins({
    subsets: ['latin'],
    variable: "--font--serif", // Custom CSS variable
    weight: ["400"], // Corrected weight
});


  

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,
        poppins.variable,
        "bg-indigo-950 text-white antialiased font-serif")}
      >
        {children}
      </body>
    </html>
  );
}
