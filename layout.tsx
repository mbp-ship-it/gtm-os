import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gtm-os — Your GTM workspace. Your models. Your data. Your keys.",
  description:
    "Open-source, AI-native GTM workspace. Thirteen specialist modules plus an orchestrator, coordinating through a persistent target-centric workspace. Bring your own key.",
  keywords: [
    "GTM",
    "product marketing",
    "AI workspace",
    "competitive intelligence",
    "sales enablement",
    "open source",
    "BYOK",
  ],
  authors: [{ name: "gtm-os contributors" }],
  openGraph: {
    title: "gtm-os",
    description: "Your GTM workspace. Your models. Your data. Your keys.",
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "gtm-os",
    description: "Your GTM workspace. Your models. Your data. Your keys.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="grain">
      <body>{children}</body>
    </html>
  );
}
