import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import NavBarBackground from "@/components/NavBarBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes4Hope",
  description: "Shoes4Hope Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none">
          <NavBar/> 
          {children}
          <Footer/>
      </body>
    </html>

  );
}
