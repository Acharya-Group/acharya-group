import Header from "@/components/layout/Header"
import "./globals.css"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "My Website",
  description: "My awesome Next.js site",
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />      
        <main>{children}</main>  
        <Footer />      
      </body>
    </html>
  )
}
