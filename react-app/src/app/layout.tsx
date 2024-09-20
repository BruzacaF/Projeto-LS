import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";
import Header from "@/app/components/header";


const saira = Saira({
  subsets: ["latin"],
  weight: ['300', '500', '600'],
})

export const metadata: Metadata = {
  title: "Letra a Letra",
  description: "A simple game to help you learn the alphabet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
        <body className={`${saira.className} light`}>
          <Header />
          {children}
        </body>
    </html>
  );
}
