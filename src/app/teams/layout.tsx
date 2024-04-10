import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBarBackground from "@/components/NavBarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes4Hope Teams",
  description: "Shoes4Hope Teams Page",
};

export default function TeamsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavBarBackground color="black"/>
        {children}
    </div>
  );
}
