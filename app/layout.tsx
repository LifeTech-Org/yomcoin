import type { Metadata } from "next";
import "./output.css";


export const metadata: Metadata = {
  title: "Yomcoin",
  description: "We are coming soon!",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple-100">{children}</body>
    </html>
  );
}
