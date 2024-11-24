import type { Metadata } from "next";
import {Inter , Poppins} from 'next/font/google';
import { Header } from '@/sections/Header'; // Adjust the path as necessary
// import { AnimatedBackground } from '@/components/AnimatedBackground'; // Adjust the path as necessary
import { Footer } from '@/sections/Footer'; // Adjust the path as necessary
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          poppins.variable,
          "bg-indigo-950 text-white antialiased font-serif"
        )}
      >
        {/* <AnimatedBackground /> */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}