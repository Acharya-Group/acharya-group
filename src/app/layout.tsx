// RootLayout.tsx (Server Component)
import "./globals.css";
import type { Metadata } from "next";
import ClientProvider from "./ClientProvider";
import api from "@/lib/axios"; 
import Script from "next/script";
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
          <Script id="tawk-to" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5b2b664cd0b5a54796820793/1j4cbl1fi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
      </body>
    </html>
  );
}
