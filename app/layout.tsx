import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils"


export const metadata: Metadata = {
  title: "Baatcheet",
  description: "Place to be for all your conversations",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
          {children}
      </body>
    </html>
  );
}
