


import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const kumbsans = Kumbh_Sans({ subsets: ["latin"], weight: "variable" });

export const metadata: Metadata = {
  title: "Ecommerce Product Page",
  description: "Frontend Mentor Challenge solution",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbsans.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
