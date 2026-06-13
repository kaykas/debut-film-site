import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debút — A Short Film by Sofia Harper",
  description: "A short film by Sofia Harper. Shot at Pulsraum Berlin.",
  openGraph: {
    title: "Debút",
    description: "A short film by Sofia Harper.",
    images: ["/stills/still-01.jpg"],
  },
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
