import React from 'react';
import { Toaster } from 'react-hot-toast';

import "./globals.css";
import  Header  from "../components/Header";
import  Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import ClientWrapper  from "../components/ClientWrapper";

export const metadata = {
  title: 'Nike - Sports Joggers Store',
description: 'Explore the latest Nike joggers, trousers, and athletic wear for ultimate comfort and style.',
keywords: ['Nike joggers', 'sportswear', 'athletic trousers', 'Nike clothing', 'fitness apparel'],
authors: [{ name: 'Nike Store' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  console.log('Publishable Key:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <ClientWrapper>
      <html lang="en" className="scroll-smooth">
        <body className="min-h-screen flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-grow">
              {children}
            <Toaster />
          </main>
          <Footer />
        </body>
      </html>
    </ClientWrapper>
  );
}