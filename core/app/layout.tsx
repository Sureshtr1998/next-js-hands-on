import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}>
          <p>Header</p>
        </header>
        <nav>
          <Link href="/"> Home</Link>
        </nav>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}