import type { Metadata } from "next";
import "@fontsource/geist/latin-400.css";
import "@fontsource/geist/latin-500.css";
import "@fontsource/geist/latin-600.css";
import "@fontsource/geist/latin-700.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Farradyne — Designed for Progress.",
  description:
    "A technology venture studio building AI systems, digital products, games and creative experiences for businesses and founders across the U.S.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
