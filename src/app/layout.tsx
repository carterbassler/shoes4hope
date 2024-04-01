import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

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
      <body>
        <div className="h-32 bg-gradient-to-b from-black from-25%">
          <NavBar/> 
          {children}
        </div>
      </body>
    </html>

  );
}
