import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes4Hope Families",
  description: "Shoes4Hope Families Page",
};

export default function FamiliesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>{children}</main>
  );
}
