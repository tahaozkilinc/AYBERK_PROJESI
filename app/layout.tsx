import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İthal Emtia Gemi ve Kalite Raporu",
  description: "İthal emtia gemi ve kalite raporu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
