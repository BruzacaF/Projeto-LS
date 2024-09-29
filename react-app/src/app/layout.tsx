
import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ['300', '500', '600'],
})

export const metadata: Metadata = {
  title: "Letra a Letra",
  description: "Um site para você se divertir com jogos de palavras",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <html lang="en">
      <body className={`${saira.className} light`}>
        {children}
      </body>
    </html>
  );
}
