import Footer from "@/componets/layout/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achariya Technologies Private Limited",
  description: "My awesome Next.js site with MUI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
