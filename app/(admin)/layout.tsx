import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MenuLeftAdmin from "@/components/custom ui/MenuLeftAdmin";
import MenuTopAdmin from "@/components/custom ui/MenuTopAdmin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Shop Điện Máy - Đăng nhập",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex max-lg:flex-col text-grey-1">
                    <MenuLeftAdmin />
                    <MenuTopAdmin />
                    <div className="flex-1">{children}</div>
                </div>
            </body>
        </html>
    );
}
