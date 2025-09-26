// RootLayout.tsx (Server Component)
import "./globals.css";
import type { Metadata } from "next";
import ClientProvider from "./ClientProvider";
import api from "@/lib/axios"; 

// Type for SEO
interface SeoData {
  title: string;
  keywords: string;
  description: string;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let seo: SeoData | null = null;

  try {
    const res = await api.get("/Seo"); 
    seo = res.data.data; 
  } catch (err) {
    console.error("Failed to fetch SEO", err);
  }

  const metadata: Metadata = {
    title: seo?.title || "Achariya Technologies Private Limited",
    description: seo?.description || "My awesome Next.js site with MUI",
  };

  return (
    <html lang="en">
      <head>
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description ?? ""} />
        {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
