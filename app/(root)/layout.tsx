import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop điện máy - trung tâm mua sắm",
  description: "Shop điện máy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
