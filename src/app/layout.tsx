import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assam Association | Mizoram University",
  description:
    "Assam Association of Mizoram University, Aizawl — home away from home for Assamese students at MZU. Bihu, freshers, help-desk, culture & community.",
  icons: { icon: "/insta/logo.jpg" },
  openGraph: {
    title: "Assam Association | Mizoram University",
    description:
      "Joi Ai Axom from Aizawl! Community, culture & support for Assamese students at MZU.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
