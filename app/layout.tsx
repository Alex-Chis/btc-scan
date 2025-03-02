import type { Metadata } from "next";
import { Montserrat, Exo_2, Karla } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

const exo_2 = Exo_2({
  weight: ["400"],
  subsets: ["latin"],
});

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
      <body
        className={`${montserrat.className} ${karla.className} ${exo_2.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
