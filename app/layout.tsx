import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "gtm-os — open-source operating system for go-to-market",
  description:
    "Thirteen skills, one orchestrator, context that chains automatically. Run against a target, get a populated workspace of artifacts that read like deliverables.",
  openGraph: {
    title: "gtm-os",
    description: "An open-source operating system for go-to-market",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
