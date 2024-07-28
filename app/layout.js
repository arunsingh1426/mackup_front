'use client';
// import type { Metadata } from "next";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Inter } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../public/style/globals.scss';

import NextTopLoader from 'nextjs-toploader';


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NextTopLoader
          height={2}
          startPosition={0.3}
          stopDelayMs={200}
          showSpinner={false}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
