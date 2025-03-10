import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Btc scanner",
  description: "Scanner for profitable trades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased bg-[#0a091c]`}>
        {children}
      </body>
    </html>
  );
}
