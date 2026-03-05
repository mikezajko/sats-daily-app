import type { Metadata } from "next";
import { Lato, Playfair_Display, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SATS — Win 1 Bitcoin Daily",
  description: "$5 per ticket. Pool fills, we buy BTC on-chain, raffle at 5 PM EST. Fully refundable if the pool doesn't fill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} ${dmSerif.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
