import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

/* Outfit — heading font (mayali-main-3'ten alındı) */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

/* Inter — body font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Playfair Display — editorial / serif sections */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/* Cormorant Garamond — tagline + editorial italic (mayali-main-3'ten alındı) */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayalı Fırın & Pasta | Yenimahalle, Ankara",
  description:
    "Barıştepe Mah., Yenimahalle/ANKARA — Doğal mayalı ekmekler, butik pastalar, baklava ve özel sipariş pastalar. 06:00–22:00 açık.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
