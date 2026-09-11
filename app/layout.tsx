import type { Metadata } from "next";
import "@fontsource/geist/latin-400.css";
import "@fontsource/geist/latin-500.css";
import "@fontsource/geist/latin-600.css";
import "@fontsource/geist/latin-700.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Farradyne — Designed for Progress.",
  description:
    "A Los Angeles–based technology venture studio building AI systems, digital products, games and creative experiences for businesses and founders across the U.S.",
  metadataBase: new URL("https://farradyne.com"),
  alternates: { canonical: "https://farradyne.com" },
  robots: { index: true, follow: true },
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
