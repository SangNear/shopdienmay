import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import Header from "@/components/custom ui/Header";
import Menu from "@/components/custom ui/Menu";
import MenuMobile from "@/components/custom ui/MenuMobile";
import Footer from "@/components/custom ui/Footer";

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
      
      <body className={inter.className}>
        <div className="flex flex-col">
          <Header />
          <Menu />
          <MenuMobile  />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
