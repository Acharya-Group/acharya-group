// RootLayout.tsx (Server Component)
import "./globals.css";
import type { Metadata } from "next";
import ClientProvider from "./ClientProvider";

export const metadata: Metadata = {
  title: "Achariya Technologies Private Limited",
  description: "My awesome Next.js site with MUI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
